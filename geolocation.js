function getLocation() {
    // Comprobar si el navegador soporta la API Geolocation
    if (!navigator.geolocation) {
      alert("Tu navegador no soporta la API Geolocation.");
      return;
    }
  
    // Obtener la ubicación actual
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
  
        // Mostrar la ubicación en la página
        document.getElementById("latitude").textContent = `Latitud: ${latitude}`;
        document.getElementById("longitude").textContent = `Longitud: ${longitude}`;
      },
      function (error) {
        alert(`Error: ${error.message}`);
      }
    );
  }
  /*permite a las aplicaciones web obtener la ubicación geográfica del dispositivo del usuario, 
  ya sea a través de GPS (sistema de posicionamiento global), triangulación de torres de telefonía móvil o WiFi.
  Servicios de localización: La API Geolocation permite a las aplicaciones web proporcionar servicios de localización 
  basados en la ubicación del usuario, como la búsqueda de negocios cercanos, la navegación y la planificación de viajes.
  Aplicaciones de mapas: La API Geolocation es esencial para la creación de aplicaciones de mapas web que permiten a los usuarios 
  obtener direcciones y rutas personalizadas según su ubicación actual. Servicios de geotagging: La API Geolocation se puede utilizar 
  para etiquetar información, como fotos y publicaciones de redes sociales, con la ubicación del usuario para proporcionar contexto y 
  permitir búsquedas basadas en la ubicación.
  Personalización de la experiencia del usuario: La API Geolocation permite a las aplicaciones web personalizar la experiencia del 
  usuario basándose en su ubicación, como mostrar información localizada o recomendaciones personalizadas.
  
  Esta tiene la utilidad de saber la ubicacion actual del usuario, lo que ayuda a ubicarse dentro del mapa
  */