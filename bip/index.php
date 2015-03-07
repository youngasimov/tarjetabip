<?php

require_once 'HTTP/Request2.php';
require 'vendor/autoload.php';
ini_set('display_errors',1);
ini_set('display_startup_errors',1);
error_reporting(-1);

$app = new \Slim\Slim();
$app->get('/saldo', function () use ($app){
    $bip = $app->request->get('bip');
    $rut = $app->request->get('rut');
    $bloqueable = "0";
    if($bip == null){
        $app->response->setStatus(400);
        echo "{error:'ingrese el código de la tarjeta'}";
        return;
    }
    if($rut == null){
        $rut = '0';
        $bloqueable = "";
    }
    $fields = array(
        'accion' => '6',
        'NumDistribuidor' => '99',
        'NomUsuario' => 'usuInternet',
        'NomHost' => 'AFT',
        'NomDominio' => 'aft.cl',
        'RutUsuario' => $rut,
        'NumTarjeta' => $bip,
        'bloqueable' => $bloqueable);
    $r = new HTTP_Request2('http://pocae.tstgo.cl/PortalCAE-WAR-MODULE/SesionPortalServlet', HTTP_Request2::METHOD_POST);
    $r->addPostParameter($fields);
    $html = $r->send()->getBody();
    //echo $html;
    $coincidencias = null;
    $encontrado = preg_match_all("/\\$([0-9]|\.)+/", $html, $coincidencias);
    $app->response->headers->set('Content-Type', 'application/json');
    try {
        if ($encontrado) {
            $saldo = substr($coincidencias[0][0], 1);
            $app->response->setStatus(200);
            echo "{saldo:".$saldo."}";
        } else {
            $app->response->setStatus(404);
            echo "{error:'no se registra saldo en esta tarjeta'}";
        }
    } catch (HttpException $hex) {
        $app->response->setStatus(500);
        echo "{error:'ocurrio un error ineseperado en el servidor'}";
    }
});
$app->run();
?>