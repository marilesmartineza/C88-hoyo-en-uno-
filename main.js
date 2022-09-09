// Crea la variable de canvas 
var canvas = new fabric.Canvas ("myCanvas");
ctx = canvas.getContext("2d");

//Establece las posiciónes para la pelota y el agujero.
ball_y=0;
ball_x=0; 
hole_x=400;
hole_y=800;

ball_image="ball.png";
hole_image = "golf-h.png";

block_image_width = 5;
block_image_height = 5;

function add() {
	ball_imgTag = new Image(); //define una variable para la imagen nueva
    ball_imgTag.onload = uploadball; // establece la función para cargar esta variable
    ball_imgTag.src = ball_image;   // carga la imagen

	hole_imgTag = new Image(); //define una variable para la imagen nueva
    hole_imgTag.onload = uploadhole; // establece la función para cargar esta variable
    hole_imgTag.src = hole_image;   // carga la imagen
}

function uploadball() {
    ctx.drawImage(ball_imgTag, ball_x, ball_y, ball_width, ball_height);
}

function uploadhole() {
    ctx.drawImage(hole_imgTag, hole_x, hole_y, hole_width, hole_height);
}

function load_img(){
	// escribe el código para subir la imagen de golf al canvas
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	// escribe el código para subir la imagen de la pelota al canvas
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="¡Lo lograste!";
		document.getElementById("myCanvas").style.borderColor="red";
	}	
	/* Revisa las coordenadas de las imágenes de la pelota y del agujero para terminar el juego. 
	Si las coordenadas coinciden con las de la imagen de la pelota, elimina la imagen de la pelota, 
	mostrar "¡TERMINÓ EL JUEGO!" 
	y haz que el borde del canvas sea 'rojo'.*/
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escribe el código para mover la pelota hacia arriba.
		if(ball_y <=450)
		{
		   ball_y = ball_y + block_image_height;
		   console.log("altura de la imagen = " + block_image_height);
		   console.log_("Cuando se presiona la flecha hacia arriba, X = " + ball_x + " , Y = "+ball_y)
		   canvas.remove(ball_obj);
		   new_image();			
		}
	}
	function down()
	{
		 // Escribe el código para mover la pelota hacia abajo.
		 if(ball_y <=450)
		 {
			ball_y = ball_y + block_image_height;
			console.log("altura de la imagen = " + block_image_height);
			console.log_("Cuando se presiona la flecha hacia abajo, X = " + ball_x + " , Y = "+ball_y)
			canvas.remove(ball_obj);
			new_image();			
		 }
	}
	function left()
	{
		if(ball_x >5)
		{
			// Escribe el código para mover la pelota hacia la izquierda.
			   ball_y = ball_y + block_image_height;
			   console.log("altura de la imagen = " + block_image_height);
			   console.log_("Cuando se presiona la flecha hacia la izquierda, X = " + ball_x + " , Y = "+ball_y)
			   canvas.remove(ball_obj);
			   new_image();			
		}
	}
	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe el código para mover la pelota hacia la derecha.
			   ball_y = ball_y + block_image_height;
			   console.log("altura de la imagen = " + block_image_height);
			   console.log_("Cuando se presiona la flecha hacia la derecha, X = " + ball_x + " , Y = "+ball_y)
			   canvas.remove(ball_obj);
			   new_image();			
		}
	}
}

