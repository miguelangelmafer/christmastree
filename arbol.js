var bolasCreadas;
var bolasEliminadas;
var generadorID;
var generadorClase;
var numeroclase;

function randomRange(min, max) {
    
    var resultado = (Math.random() * (max - min)) + min;
	
    return resultado;
    
}

$(document).ready(function(){

	bolasCreadas = 0;
	bolasEliminadas = 0;
	generadorID =0;


$("#adornar").click(function(){

		generadorID++;
		generadorClases = randomRange(1,8);
		var posicionTop = randomRange(90, 380);
		var posicionLeft=0;

 if (posicionTop >= 100 && posicionTop <= 130) {
        
        var posicionLeft = randomRange(-10, 20);

    } else if (posicionTop > 130 && posicionTop <= 170) {
        
        var posicionLeft = randomRange(-50, 70);
        
    } else if (posicionTop > 170 && posicionTop <= 240) {
        
        var posicionLeft = randomRange(-80, 90);
        
    } else if (posicionTop > 240 && posicionTop <= 280) {
        
        var posicionLeft = randomRange(-140, 150);
        
    } else if (posicionTop > 280 && posicionTop <= 340) {
        
        var posicionLeft = randomRange(-180, 190);
        
    } else if (posicionTop > 340 && posicionTop <= 380) {
        
        var posicionLeft = randomRange(-200, 250);
        
    }

		numeroclase = Math.round(generadorClases);

		var salchicha ="<div class='bola" + numeroclase + "' id='bola" + generadorID + "'> </div>";

		$("#arbol").append(salchicha);
		$("#bola" + generadorID).animate({ top: posicionTop, left:posicionLeft});

		bolasCreadas++;
		$("#creadas").html(bolasCreadas);

	});

	$("#eliminar").click(function(){
		$(".bola1,.bola2,.bola3,.bola4,.bola5,.bola6,.bola7,.bola8").animate({"top": "420px"},800);
		$(".bola1,.bola2,.bola3,.bola4,.bola5,.bola6,.bola7,.bola8").hide(0);

		bolasEliminadas++;
		$("#eliminadas").html(bolasCreadas);

	});

});