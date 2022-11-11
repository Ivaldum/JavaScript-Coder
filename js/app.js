const ingresos = [

];

const egresos = [
    
];


let loadApp = async () => {
    ingresoStorage = localStorage.getItem("ingresos")
    if (ingresoStorage){
        const ingresosJson = JSON.parse(ingresoStorage);
        ingresosJson.forEach(ingreso => {
            ingresos.push(new Ingreso(ingreso._descripcion, ingreso._valor));
        });
    }
    egresoStorage = localStorage.getItem("egresos")
    if (egresoStorage){
        const egresosJson = JSON.parse(egresoStorage);
        egresosJson.forEach(egreso => {
            egresos.push(new Egreso(egreso._descripcion, egreso._valor));
        });
    }
    if(!(ingresoStorage || egresoStorage)){
        const res = await fetch("api/default.json")
            .then(res => res.json());
        res.ingresos.forEach(ingreso =>{
            ingresos.push(new Ingreso(ingreso.descripcion, ingreso.valor))
        })
        res.egresos.forEach(egreso =>{
            egresos.push(new Egreso(egreso.descripcion, egreso.valor))
        })
        localStorage.setItem("ingresos", JSON.stringify(ingresos));
        localStorage.setItem("egresos", JSON.stringify(egresos));
    }
    loadHeader();
    loadIngresos();
    loadEgresos();
}

let loadHeader = () => {
    let presupuestoTotal = calcularIngresos() - calcularEgresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuestoTotal);
    document.getElementById("ingresos").innerHTML = formatoMoneda(calcularIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(calcularEgresos());
}


let calcularIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let calcularEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2
    })
}

const loadIngresos = () => {
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML += createIngreso(ingreso);
    }
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const loadEgresos = () => {
    let egresosHTML = "";
    for (let egreso of egresos) {
        egresosHTML += createEgreso(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const createIngreso = (ingreso) => {
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="deleteIngreso(${ingreso.id})" ></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return ingresoHTML;
}

const createEgreso = (egreso)=> {
    let egresoHTML = `
    <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
            <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
            <div class="elemento_eliminar">
                <button class="elemento_eliminar--btn">
                    <ion-icon name="close-circle-outline"
                    onclick="deleteEgreso(${egreso.id})"></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return egresoHTML;
}

const deleteIngreso = (id)=>{
    let indiceEliminar =  ingresos.findIndex( ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    localStorage.setItem("ingresos", JSON.stringify(ingresos));
    loadHeader();
    loadIngresos();
}

const deleteEgreso = (id)=>{
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    localStorage.setItem("egresos", JSON.stringify(egresos));
    loadHeader();
    loadEgresos();
}

const addDato = ()=>{
    let form = document.forms["form"];
    let tipo = form["tipo"];
    let descripcion = form["descripcion"];
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, +valor.value));
            localStorage.setItem("ingresos", JSON.stringify(ingresos));
            loadHeader();
            loadIngresos();
        }
        else if(tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value, +valor.value))
            localStorage.setItem("egresos", JSON.stringify(egresos));
            loadHeader();
            loadEgresos();
        }
    }
}