# tarjetabip
Consulta de saldo de tu tarjeta bip


Instalación:

La carpeta "bip" contiene el servidor web de la aplicación, deve ser copiada dentro de la
carpeta de códigos php del servidor php. El servidor PHP debe tener instalada la librería
HttpRequest2 para funcionar correctamente.

Dentro del servidor php, el archivo más relevante es index.php, pues es allí donde se
encuentra la API Rest

La carpeta "bipsite" contiene la aplicación Web cliente, debe ubicarse en un servidor web
bajo el mismo dominio que el servidor "bip".

un versión minificada del código html, css y javascript se encuentra en la carpeta
"bin", una versión de desarrollo se encuentra en la carpeta "build" y por último, el
código fuente en la carpeta "src".

dentro del código del cliente Web, los archivos relevantes son la carpeta "src/app", 
"src/index.html" y "src/common/bipApiService.js"

Por último, se debe copiar la carpeta "htdocs/bip" a la raiz del servidor php

