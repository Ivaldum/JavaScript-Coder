class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = Date.now() - Math.random();
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion (descripcion){
        this._descripcion = descripcion;
    }

    get valor(){
        return this._valor
    }

    set valor (valor){
        this._valor = valor;
    }

    get id(){
        return this._id
    }

    set id (valor){
        this._valor = id;
    }
}