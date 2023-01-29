const express =require("express");
const app = express();

const products = require("./routes/productsRouter.js");
app.use("/" , products );


app.use(
    express.urlencoded({
        extended: false,
    })
);

//Defino el motor de plantilla 

app.set("views" , "./views");// especifica el directorio de vistas
app.set("view engine" , "hbs");// especifica el motor de plantillas
app.use( express.static("public"));// registra el motor de plantillas





module.exports = app;