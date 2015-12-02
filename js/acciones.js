// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$("#boton1").on("tap", function (){
		$.ajax({
			type:"POST", 
			url:"http://192.168.1.192/ferreteria/buscarTodos.php",
			error: function(){
			 alert ('No se Puedo Conectar  a la Base de Datos');
			}, 
			success:function(respuesta){
			alert (respuesta);
			}
		});
			
		});// tap btn1
}); 
});

