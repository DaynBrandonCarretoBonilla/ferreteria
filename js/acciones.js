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
			success: function(respuesta){
				
			var datosProducto = JSON.parse(respuesta);
			alert(datosProducto.productos[0].nombreProducto);
			$(':mobile-pagecontainer').pagecontainer('change', '#PaginaMI',{
				transition: 'pop'
			});
			for (var x= 0; x<datosProductos.productos.length; x++)
			{
				$('#contenido').append('<div><div><div style="display:inline-block"><img src="#"></div><div style="display:inline-block"><h1>'+ datosProducto.productos[x].nombreProducto +' </h1><h2> '+datosProducto.productos[x].marcaProducto+' </h2></div></div><div><h2> '+datosProducto.productos[x].precioUnitario+' </h2><h2> '+datosProducto.productos[x].precioMayoreo+' </h2></div></div>');
			}
			
			}
		});
			
		});// tap btn1
}); 
});

