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
			//alert(datosProducto.productos[0].nombreProducto);
		
			for (var x= 0; x<datosProducto.productos.length; x++)
			{
				$('#contenido').append('<div><div><div style="display:inline-block"><img src="http://192.168.1.192/ferreteria/recursos/imagenes/fotos/'+datosProducto.productos[x].claveProducto+'.jpg"></div><div style="display:inline-block"><h1>'+ datosProducto.productos[x].nombreProducto +' </h1><h2> '+datosProducto.productos[x].marcaProducto+' </h2></div></div><div><h2> '+datosProducto.productos[x].precioUnitario+' </h2><h2> '+datosProducto.productos[x].precioMayoreo+' </h2></div></div>');
			}
				$(':mobile-pagecontainer').pagecontainer('change', '#PaginaMI',{
				transition: 'pop'
			});
			}
		});
			
		});// tap btn1
}); 
});

