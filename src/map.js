const mostrarMap=()=>{
document.getElementById("wallHead").style.display ='none';
document.getElementById("botones").style.display = 'block';
document.querySelector(".inSession").style.display = 'block';
document.getElementById("botonesFinales").style.display = "none";
document.getElementById("pensando").style.display= "none";
document.getElementById("correo").style.display= "none";
document.getElementById("mapa").style.display= "block";
};

document.getElementById("maps").addEventListener("click", mostrarMap);


function geoFindMe() {
    var output = document.getElementById("out");    if (!navigator.geolocation){
      output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
      return;
    }    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;      output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';      output.appendChild(mapa);
      var marker = new google.maps.Marker({
        latitude  : position.coords.latitude,
        longitude : position.coords.longitude,
          title:"Hello World!"
      });
      marker.setMap(mapa);
    };    function error() {
      output.innerHTML = "Unable to retrieve your location";
    };    output.innerHTML = "<p>Locating…</p>";    navigator.geolocation.getCurrentPosition(success, error);  };

    