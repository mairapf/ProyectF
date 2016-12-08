$(document).ready(function(){
	//var marker;
	//listar();
	//toggleBounce();
	alert("holi");
});

function listar(){
  var $ul = $("#list_view");
  $.getJSON("https://appproyect.herokuapp.com/cliente",function(result){
  var data = result;
  for(var item in data){
  var datos = data[item];
  	//alert(datos.latitud, datos.longitud);
  	initMap(datos.latitud, datos.longitud);
  }
  });
}

function initMap(latitud, longitud) {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: latitud, lng: longitud}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: latitud, lng: longitud}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}