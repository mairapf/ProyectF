$(document).ready(function(){
	
});

function listar2(){
$.post("https://appproyect.herokuapp.com/inicio",{
		email: $("#email").val(),
		clave: $("#clave").val()
	}).done(function (resultado) {
		var datoJSON = resultado;
  	for(var i=0; i< datoJSON.length; i++){
			if(datoJSON[i].estado === 200){
				document.location= "menu.html?dato=" + datoJSON[i].dato;
			}else{
				alert(datoJSON[i].dato);
			}
		}
}).fail(function(error){
		var datoJSON = $.parseJSON(error.responseText);
		alert(datoJSON.mensaje);
	});
}
