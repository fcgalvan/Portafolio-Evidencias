function generarRFC() {
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;
    var fechaSinGuiones = fecha.replace(/-/g, "");
    var apellidoPaterno = nombre.split(" ")[0];
    var apellidoMaterno = nombre.split(" ")[1];
    var primerLetraNombre = nombre.split(" ")[2].charAt(0);
    var rfc = apellidoPaterno.slice(0, 2) + apellidoMaterno.charAt(0) + primerLetraNombre + fechaSinGuiones.slice(2, 8);
    document.getElementById("rfc").value = rfc.toUpperCase();