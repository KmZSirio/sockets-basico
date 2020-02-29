var socket = io();

// On para escuchar
socket.on("connect", function() {
    console.log("Conectado al servidor!");
});

socket.on("disconnect", function() {
    console.log("Perdimos conexion con el servidor");
});

// Emits para enviar informacion
socket.emit("enviarMensaje", {
    usuario: "Sirio",
    mensaje: "Hola Mundo!"
}, function(resp) {
    console.log("Respuesta sv: ", resp);
});

// Recibir informacion
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor:", mensaje);
});