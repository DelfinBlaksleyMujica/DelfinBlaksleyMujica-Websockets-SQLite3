class ContenedorProductos {
    constructor( configuracion , tabla ){
        this.configuracion = configuracion,
        this.tabla = tabla
    }

    async save(obj) {
        try{
            await this.configuracion(this.tabla).insert(obj);
            console.log("producto insertado");
        } catch(e) {
            console.log(e);
        }finally{
            console.log("Conexion cerrada")
            this.configuracion.destroy();
        }
    }



}

module.exports = ContenedorProductos;
