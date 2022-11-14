 const fs = require("fs");
const encoding = "utf-8"
class Contenedor {

    constructor(path) {
        this.filePath = path;
        const data = fs.readFileSync(this.filePath, encoding);
        this.contenedor = data
        this.timeStamp=Date.now()

    }
    createFileIfNotExists() {
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, "[]");
        }
    } 
    _saveAll (data) {
        const stringData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.filePath, stringData ,encoding)
    }
    
    save(object) {
        this.contenedor.push(object);
        this._saveAll(this.contenedor)
        return object;
    }

    getById (id) {
        return this.contenedor.filter(c => c.id === id);
    }

    getAll() {
        return this.contenedor;
    }

    deleteById(id) {
        const filtered = this.contenedor.filter(el => el.id !== id);
        this.contenedor = filtered;
        this._saveAll(filtered);
    }

    deleteAll() {
        this.contenedor = [];
        this._saveAll([]);
    }

    updateById(id, object) {
        const index = this.contenedor.findIndex(el => el.id === id);
        this.contenedor[index] = object;
        this._saveAll(this.contenedor);
    }

    agregarProducto(id,object){
        const index = this.contenedor.findIndex(el => el.id === id);
        if(!this.contenedor[index].productos) this.contenedor[index].productos = []
        this.contenedor[index].productos.push(object)
        this._saveAll(this.contenedor)
    }
    
    deleteProductByCartId(id,id_productos){
        const index = this.contenedor.findIndex(el => el.id === id);
        const carrito=this.contenedor[index].productos.filter(productos=>productos.id_productos!==id_productos)
        this.contenedor[index].productos=this.contenedor[index].productos.filter(productos=>productos.id_productos!==id_productos)
        this._saveAll(this.contenedor)

    }

}
module.exports= Contenedor 