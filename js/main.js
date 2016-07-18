var play1 = true;

$(document).ready(function(){
	$("button").click(function inicioJuego(){
		if (play1) {
			$(this).empty().append("X").off().val(1);
			play1 = false;
		} else {
			$(this).empty().append("O").off().val(10);
			play2 = false;
			play1 = true;
		}
	});
});

/*
ID de cada btn
  a  |  b  |  c
-----------------
  d  |  e  |  f
-----------------
  g  |  h  |  i
*/

/*
intento de reinicio de juego
		$("a").click(function(){
			$("button").empty().append("+");
			$("button").on();
			play1 = true;
			inicioJuego();
		});
*/