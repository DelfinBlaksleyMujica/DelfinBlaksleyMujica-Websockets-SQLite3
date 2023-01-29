const { options } = require("./options/SQLite3.js")
const knex = require("knex")(options);

const createMessagesTable = async () => {
    try{
        await knex.schema.createTable("messages" , table => {
            table.increments("id")
            table.string("username" , 30 )
            table.string("date")
            table.string("text" , 350)
        })
        console.log("Tabla creada");
    } catch ( error ) { 
        console.log("Error" , error.message);
    } finally { 
        knex.destroy();
    }
}

createMessagesTable();