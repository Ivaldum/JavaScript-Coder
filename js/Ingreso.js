class Ingreso extends Dato{
    static contadorIngresos = 0;

    constructor(descripcion, valor){
        super(descripcion,valor);
        this._idIngresos = ++Ingreso.contadorIngresos;
    }

    get idIngresos(){
        return this._idIngresos;
    }
}