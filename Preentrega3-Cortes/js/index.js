document.addEventListener("DOMContentLoaded", function () {
    const rutinaContainer = document.getElementById("rutinaContainer");
    const opcionSelect = document.getElementById("opcion");
    const crearRutinaBtn = document.getElementById("crearRutina");
  
    crearRutinaBtn.addEventListener("click", function () {
      const opcionSeleccionada = opcionSelect.value;

      const rutinas = {
        "1": ["sentadilla con salto 3 x 45 seg","montain climb 3 x 45 seg","burpee 4 x 10", "Soga 4 vueltas x 30 segundos"],
        "2": [ "dominadas 4x5", "jalón al pecho 2 series de aproximación y 4x 6-12 efectivas","remo en barra 4x 6-12 repeticiones", "curl de bíceps parados 4x20", "curl de bíceps en polea 4 series al fallo"],
        "3": [ "hip truths 4x15-12-10-8", "búlgaras 3 series de 10 repeticiones con peso y 10 sin peso" , "sentadilla con barra  4x6-12 repeticiones" , "prensa 4x8-12 repeticiones" , "sillón de cuádriceps  2 series de 10 repeticiones con las dos piernas (descanso 30 segundos) y 10 repeticiones con cada pierna"],
      };
  
      const rutinaElegida = rutinas[opcionSeleccionada];
  
      if (rutinaElegida) {
        rutinaContainer.innerHTML = "<h2>Rutina:</h2><ul>";
  
        rutinaElegida.forEach(function (ejercicio) {
          rutinaContainer.innerHTML += "<li>" + ejercicio + "</li>";
        });
  
        rutinaContainer.innerHTML += "</ul>";
  
        // Guardar la rutina en el almacenamiento local (localStorage)
        localStorage.setItem("rutinaGuardada", JSON.stringify(rutinaElegida));
      } else {
        rutinaContainer.innerHTML = "<p>Selecciona una opción válida.</p>";
      }
    });
  
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
  
  