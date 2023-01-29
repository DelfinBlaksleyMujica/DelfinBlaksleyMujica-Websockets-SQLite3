const app = require("./server.js");
const http = require("http").Server(app);
const io =  require("socket.io")(http);

const { options } = require("./options/SQLite3.js");
const knex = require("knex")(options);

const PORT = process.env.PORT || 3000;


const messages = [
    
];


io.on( "connection" , ( socket ) => {
    console.log("Usuario conectado " + socket.id );
    socket.emit( "messages" , messages );
    /*messages es lo que le manda al front y "messages" es el evento*/
    socket.on("new-message" , (data) => {
        messages.push( data );
        knex("messages").insert(data)
            .then( () => console.log("data inserted"))
            .catch( (err) => { console.log(err); throw err })
            .finally( () => {
                console.log("Conexión cerrada");
                knex.destroy()
            })
        io.sockets.emit("messages" , messages);
    })
});

const server = http.listen( PORT , ()=> {
    console.log(`Escuchando app en el puerto ${server.address().port}`);
});

server.on("error" , error => console.log(`Error en el servidor ${error}`));