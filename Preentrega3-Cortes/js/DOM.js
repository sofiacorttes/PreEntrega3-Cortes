document.addEventListener("DOMContentLoaded", function () {
    const rutinaContainer = document.getElementById("rutinaContainer");
  
    // Cargar rutina guardada al cargar la página
    const rutinaGuardada = localStorage.getItem("rutinaGuardada");
    if (rutinaGuardada) {
      const rutinaParseada = JSON.parse(rutinaGuardada);
      rutinaContainer.innerHTML = "<h2>Rutina Guardada:</h2><ul>";
  
      rutinaParseada.forEach(function (ejercicio) {
        rutinaContainer.innerHTML += "<li>" + ejercicio + "</li>";
      });
  
      rutinaContainer.innerHTML += "</ul>";
    }
  });
  