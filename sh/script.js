var counterVal = 0;

function descargar_button() {
  updateDisplay(++counterVal);
  window.location.href="https://static-4e34f.web.app/downloads/Security_Helpy.zip";
}

function updateDisplay(val) {
  document.getElementById('counter-label').innerHTML = val;
}