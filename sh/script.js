var texto_ins = document.getElementById("texto_arriba");
var texto_so_pr = document.getElementById("texto_so");

texto_ins.innerHTML = "Haz click en el botón de abajo para saber tu sistema operativo";

var so_usuario = "Desconocido";
if (navigator.appVersion.indexOf("Win") !=-1) so_usuario = "Windows";
if (navigator.appVersion.indexOf("Mac") !=-1) so_usuario = "MacOS";
if (navigator.appVersion.indexOf("X11") !=-1) so_usuario = "UNIX";
if (navigator.appVersion.indexOf("Linux") !=-1) so_usuario = "Linux";

function obtener_so_func() {
  texto_so_pr.innerHTML = so_usuario
}