const net = require('net');

const server = net.createServer((socket) => {
  console.log(`Usuario conectado: ${socket.remoteAddress}:${socket.remotePort}`);

  // Mensaje de bienvenida
  socket.write('Bienvenido al servidor TCP de Node.js!\r\n');

  // Aqui estan las instrucciones que el usuario le manda
  socket.on('data', (data) => {
    const command = data.toString().trim().toLowerCase();
    console.log(`Comando recibido de ${socket.remoteAddress}:${socket.remotePort}: ${command}`);

    switch (command) {
      case 'hora':
        const date = new Date();
        socket.write(`La hora es: ${date.toLocaleTimeString()}\r\n`);
        break;
      case 'fecha':
        const today = new Date();
        socket.write(`La fecha es: ${today.toLocaleDateString()}\r\n`);
        break;
      case 'cerrar':
        socket.write('Adios!\r\n');
        socket.end();
        break;
      default:
        socket.write(`Instruccion invalida: ${command}\r\n`);
        break;
    }
  });

  // Aqui se muestra el mensaje cuando se desconecta el usuario
  socket.on('end', () => {
    console.log(`Usuario desconectado: ${socket.remoteAddress}:${socket.remotePort}`);
  });
});


server.listen(8080, () => {
});