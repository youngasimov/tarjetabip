<?php

require_once 'HTTP/Request2.php';
require 'vendor/autoload.php';

$app = new \Slim\Slim();
$app->get('/saldo/:bip', function ($bip) use ($app) {
    $output = array();
    if ($bip == null) {
        $app->response->setStatus(400);
        $output['error'] = 'ingrese el código de la tarjeta';
        echo json_encode($output);
        return;
    }
    $fields = array(
        'accion' => '6',
        'NumDistribuidor' => '99',
        'NomUsuario' => 'usuInternet',
        'NomHost' => 'AFT',
        'NomDominio' => 'aft.cl',
        'RutUsuario' => '0',
        'NumTarjeta' => $bip,
        'bloqueable' => '');
    $r = new HTTP_Request2('http://pocae.tstgo.cl/PortalCAE-WAR-MODULE/SesionPortalServlet', HTTP_Request2::METHOD_POST);
    $r->addPostParameter($fields);
    $html = $r->send()->getBody();
    $coincidencias = null;
    $encontrado = preg_match_all("/\\$([0-9]|\.)+/", $html, $coincidencias);
    $app->response->headers->set('Content-Type', 'application/json');
    $app->response->headers->set('Access-Control-Allow-Origin', $app->request->headers->get('Origin'));

    try {
        if ($encontrado) {
            $saldo = substr($coincidencias[0][0], 1);
            $app->response->setStatus(200);
            $output['saldo'] = $saldo;
            echo json_encode($output);
        } else {
            $app->response->setStatus(404);
            $output['error'] = 'no se registra saldo en esta tarjeta';
            echo json_encode($output);
        }
    } catch (HttpException $hex) {
        $app->response->setStatus(500);
        $output['error'] = 'ocurrio un error ineseperado en el servidor';
        echo json_encode($output);
    }
});
$app->run();