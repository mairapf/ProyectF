
$(document).ready(function(){
 art();

});



function art(){
  var misVariablesGet = getVarsUrl();
  var ur = "https://appproyect.herokuapp.com/images/";
  //$("#nombrepanel").text(misVariablesGet.dato);
  //alert(misVariablesGet.dato);
  $.post("https://appproyect.herokuapp.com/art", {
    dato: misVariablesGet.codigo
  }).done(function(resultado){
    var datosJSON = resultado;
    for(var item in datosJSON){
      /* document.getElementById("foto-usuario").innerHTML ="<img class='circle' src='"+ur+ datosJSON[item].dni +".jpg'>";*/
        document.getElementById("s1").innerHTML = "<img id='imga' height='350px' width='auto' src='"+ur+ datosJSON[item].codigo_articulo +"/1.jpg'>" 
         document.getElementById("s2").innerHTML ="<img id='img2' height='350px' width='auto' src='"+ur+datosJSON[item].codigo_articulo +"/2.jpg'>";

         document.getElementById("s3").innerHTML ="<img id='img2' height='350px' width='auto' src='"+ur+datosJSON[item].codigo_articulo +"/3.jpg'>";

        $("#nombre").text(datosJSON[item].nombre);
        $("#detalle").text(datosJSON[item].detalle);
    }        
  });
}

 $('.carousel.carousel-slider').carousel({full_width: true});

function getVarsUrl(){
    var url= location.search.replace("?", "");
    var arrUrl = url.split("&");
    var urlObj={};
    for(var i=0; i<arrUrl.length; i++){
        var x= arrUrl[i].split("=");
        urlObj[x[0]]=x[1]
    }
    return urlObj;
}