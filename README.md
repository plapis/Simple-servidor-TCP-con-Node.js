# Servidor TCP con Node.js
Este es un proyecto de ejemplo que muestra cómo crear un servidor TCP con Node.js. El objetivo de este proyecto es reafirmar los conceptos vistos hasta ahora sobre el uso de Node.js para crear aplicaciones de red.

## Cómo funciona
El servidor TCP creado en este proyecto es muy sencillo. Al conectarse un cliente, se muestra un mensaje de bienvenida y se espera a que el cliente envíe una instrucción. Actualmente, el servidor acepta tres instrucciones diferentes:

hora: muestra la hora actual
fecha: muestra la fecha actual
cerrar: cierra la conexión con el cliente
Si el cliente envía una instrucción diferente, el servidor muestra un mensaje de error.

## Cómo usar
Tan solo baja el archivo js, abres una terminal y ejecutas el siguiente comando:

- **node server.js**

Despues de eso te mostrara un mensaje en donde la conexion se hizo correctamente.


## Author

* **Hector Aguilar** - *Initial work* - [Plapis](https://github.com/Plapis)