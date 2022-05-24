function agregar(){
    //console.log("Agregar")
    function Pasaje(origen,destino,salida){
        this.origen = origen;
        this.destino = destino;
        this.salida = salida;
    }
    var origenAgregar = document.getElementById("origen").value;
    var destinoAgregar = document.getElementById("destino").value;
    var salidaAgregar = document.getElementById("salida").value;
    //console.log(origenAgregar);
    //console.log(destinoAgregar);
    //console.log(salidaAgregar);

    nuevoDestino = new Pasaje(origenAgregar,destinoAgregar,salidaAgregar);
    //console.log(nuevoDestino);
    create();
}

var datosDestino = [];
function create(){
    //console.log("capturado")
    datosDestino.push(nuevoDestino);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoDestino.origen+'</td><td>'+nuevoDestino.destino+'</td><td>'+nuevoDestino.salida+'</td></tbody>';
}