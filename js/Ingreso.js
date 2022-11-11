class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor, id){
        super(descripcion,valor, id);
        this._idIngresos = ++Ingreso.contadorIngresos;
    }

    get idIngresos(){
        return this._idIngresos;
    }
}