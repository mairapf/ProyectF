$(document).ready(function(){
 listar();

});

function listar(){
  var $ul = $("#list_view");
  $.getJSON("https://appproyect.herokuapp.com/articulo",function(result){
  var data = result;
  for(var item in data){
  var datos = data[item];
  var ur = "https://appproyect.herokuapp.com/images/";
  var content = '<div class="col s12 m7">' +
                  '<div class="card horizontal">' +
                  '<div class="card-image">' +
                  '<img src="'+ ur + datos.codigo_articulo +'.jpg" onerror="imgError(this)">' +
                  '</div>' +
                  '<div class="card-stacked">' +
                  '<div class="card-content">' +
                  '<p>'+ datos.nombre +'</p>' +
                  '<p>Precio: '+ datos.precio_venta +'</p>' +
                  '</div>' +
                  '<div class="card-action"> '+
                  '<p><a href="detalle.html?codigo='+ datos.codigo_articulo +'">Detalle</a></p>'+
                  '</div>'+
                  

    
                  '</div></div></div>';
  
  
  $ul.append(content);
  }
  //$ul( "refresh" );
  });
}

 function imgError(image) {
    image.onerror = "";
    image.src = "https://appproyect.herokuapp.com/images/none1.jpg";
    return true;
}

function imgError2(image) {
    image.onerror = "";
    image.src = "https://appproyect.herokuapp.com/images/none.jpg";
    return true;
}

function listar2(){
  var $ul = $("#list_view");
  $.getJSON("https://appproyect.herokuapp.com/cliente",function(result){
  var data = result;
  for(var item in data){
  var datos = data[item];
  var ur = "https://appproyect.herokuapp.com/images/";
  var content = '<div class="col s12 m7">' +
                  '<div class="card horizontal">' +
                  '<div class="card-image">' +
                  '<img src="'+ ur + datos.docide +'.jpg" onerror="imgError2(this)">' +
                  '</div>' +
                  '<div class="card-stacked">' +
                  '<div class="card-content">' +
                  '<p>'+ datos.nombre +'</p>' +
                  '<p>'+ datos.direccion +'</p>' +
                  '</div>' +

                  '<div class="card-action">' +
                  '<a href="maps.html?latitud=' + datos.latitud + '">Ubicacion</a>' +             
                   '</div></div></div></div>';
  
  $ul.append(content);
  }
  //$ul.listview( "refresh" );
  });
}

$("#art").click(function(){
  
  $("#list_view").empty();
  listar();
});

$("#cli").click(function(){
  $("#list_view").empty();

  listar2();
});



$("#boton").click(function(){
  var misVariablesGet = getVarsUrl();
  var ur = "https://appproyect.herokuapp.com/images/";
  //$("#nombrepanel").text(misVariablesGet.dato);
  //alert(misVariablesGet.dato);
  $.post("https://appproyect.herokuapp.com/panel", {
    dato: misVariablesGet.dato
  }).done(function(resultado){
    var datosJSON = resultado;
    for(var item in datosJSON){
        document.getElementById("foto-usuario").innerHTML ="<img class='circle' src='"+ur+ datosJSON[item].dni +".jpg'>";
        $("#nombrepanel").text(datosJSON[item].nombre);
        $("#correopanel").text(datosJSON[item].email);
    }
  });
});

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