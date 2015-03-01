$(function(){
	new WOW().init();
})

$(document).ready(function() {
$(":image#boton").click(function(){
document.getElementById('#caja').innerHTML = "ADIOS";
});
});

$(document).ready(function() {
$(":image#boton1").click(function(){
	$("#caja").append("<span style='font-size: 20px;'></span>");
$("#caja").append("<span style='font-size: 20px;'>Descripción del Tema 2</span>");
});
});

$(document).ready(function() {
$(":image#boton2").click(function(){
	$("#caja").append("<span style='font-size: 20px;'></span>");
$("#caja").append("<span style='font-size: 20px;'>Descripción del Tema 3</span>");
});
});

function cambiar()
{
  document.getElementById('caja').innerHTML = "::Descripción del Tema 1::";
}

function cambiar1()
{
  document.getElementById('caja').innerHTML = "::Descripción del Tema 2::";
}

function cambiar2()
{
  document.getElementById('caja').innerHTML = "::Descripción del Tema 3::";
}


