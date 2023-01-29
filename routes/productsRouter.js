const express = require("express");
const { Router } = express;
const router = new Router();

router.get("/", function ( req , res ) {
    res.sendFile("C:/Users/delfb/OneDrive/Escritorio/PracticaDeWebSocketsParaTrabajoClase16/views/main.html");
})


module.exports = router;