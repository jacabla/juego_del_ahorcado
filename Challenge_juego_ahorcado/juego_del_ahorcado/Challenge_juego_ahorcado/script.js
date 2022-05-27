
var pantalla = document.getElementById("myCanvas");
var pincel = pantalla.getContext("2d");

//funcion linea 1 (vertical) //carateristica
pincel.fillRect(0,0,1200,800); //funcion

function uno(){
pincel.moveTo(200,100);
pincel.lineTo(200,700);
pincel.strokeStyle = "white";
pincel.stroke()
}

//funcion linea 2 (horizontal)
function dos(){
pincel.moveTo(200,100);
pincel.lineTo(700,100);
pincel.strokeStyle = "white";
pincel.stroke();
}

//funcion linea 3
function tres(){
pincel.moveTo(700,100);
pincel.lineTo(700,200);
pincel.strokeStyle = "white";
pincel.stroke();
}

//funcion linea 4 (cabeza)
function cuatro(){
pincel.beginPath();
pincel.arc(700, 240, 40, 0, 2 * Math.PI);
pincel.stroke();
}

//funcion 5 (tronco)
function cinco(){
pincel.moveTo(700,280);
pincel.lineTo(700,550);
pincel.strokeStyle = "white";
pincel.stroke();
}

//funcion 6 (brazo izquierdo)

pincel.moveTo(700,350);
pincel.lineTo(600,400);
pincel.strokeStyle = "white";
pincel.stroke();

//funcion 7 (brazo derecho)
pincel.moveTo(700,350);
pincel.lineTo(800,400);
pincel.strokeStyle = "white";
pincel.stroke();

//funcion 8 (pierna derecha)
pincel.moveTo(700,550);
pincel.lineTo(800,600);
pincel.strokeStyle = "white";
pincel.stroke();

//funcion 9 (pierna izquierda)
pincel.moveTo(700,550);
pincel.lineTo(600,600);
pincel.strokeStyle = "white";
pincel.stroke();

//mensaje ganador
/*pincel.font = "60px Arial";
pincel.strokeText("Felicidades, no moriste ahorcado!", 210, 700);*/

//mensaje perdedor
pincel.font = "60px Arial";
pincel.strokeText("Oh no!, moriste ahorcado!", 300, 700);
