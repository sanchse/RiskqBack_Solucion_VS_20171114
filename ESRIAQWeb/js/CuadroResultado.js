// JavaScript source code
//Colores de las cajas

var Color_peligro = 'limegreen';
var Color_cantidad = 'limegreen';
var Color_frecuencia = 'limegreen';
var Color_exposicion = 'khaki';
var Color_riesgo = 'darkorange';
var Color_volatilidad = 'pink';
var Color_procedimiento = 'lightgreen';
var Color_proteccion = 'limegreen';
var Color_VLA = 'darkorange';
var Color_Resultados = 'white';


var Color_bordes_caja = 'darkblue';
var Anchura_bordes_caja = 0.5;

// Títulos de la caja
var Color_titulo_caja = 'black';
var Tamano_font_titulo_caja = 20;
var negrita = "bold";
var Pxl_font_titulo_caja = Tamano_font_titulo_caja.toString();
var Fuente_titulo_caja = "arial"
var ancho_titulo_caja;
var Color_numero_caja = 'black';
var Color_texto_caja = 'black';



//caja resultados intermedios

var cj1x = 176;
var cj1y = 92;
var an1 = 324;      // Caja externa 
var al1 = 168;
var an11 = 60;      // Clase
var al11 = 33;
var an12 = 80;      // Puntuación
var al12 = 33;
var an13 = 72;      // VLA
var al13 = 33;
var seph11 = 78;    // Separación desde el borde superior
var seph12 = 120;
var seph13 = 90;
var sep11 = 80;    // Separación desde el borde derecho
var sep12 = 80;
var sep13 = 128;
var sept11 = 40;    // Separación vertical del título desde borde superior
var sept12 = 50;
var sept13 = 66;

//////////////////////////////////////////resultados Volatilidad Pulverulencia//////////////////////////////////


function dibujar_resul_volatilidad() {
//    var canvas = document.getElementById('cuadrovolatilidad');
//    var cuadrovolatilidad = canvas.getContext('2d');
//    var texto = canvas.getContext('2d');
//    ///////////////////////////////////////////variables configurables//////////////////////////////////
//    //var autoAsignarFuente = true;	//AC*/TIVAR SI LA DIMENSION ES MENOR A 1200*800
//    var titulo_caja;
//    var font;

    
//    //Titulo
//    titulo_caja = "VOLATILIDAD O PULVERULENCIA ";
//    //texto.fillStyle = Color_titulo_caja;
//    //Pxl_titulo_caja = Tamano_font_titulo_caja.toString();
//    //font = Pxl_font_titulo_caja + " " + negrita + " " + Fuente_titulo_caja;
//    //texto.font = "18px bold arial";
//    texto.font = "18px verdana";
//    ancho_titulo_caja = cuadrovolatilidad.measureText(titulo_caja).width;
//    texto.fillStyle = Color_titulo_caja;
//    //texto.fillText(titulo_caja, cj1x + (an1 / 2) - ancho_titulo_caja / 2, cj1y + sept11);
//    texto.strokeText(titulo_caja, cj1x + (an1 / 2) - ancho_titulo_caja / 2, cj1y + sept11);

    //caja clase  
    //cuadrovolatilidad.beginPath();
    //cuadrovolatilidad.rect(cj1x + an1 - sep11 - an11, cj1y + seph11, an11, al11);
    //cuadrovolatilidad.fillStyle = "white";
    //cuadrovolatilidad.fill();
    //cuadrovolatilidad.lineWidth = 1;
    //cuadrovolatilidad.strokeStyle = Color_bordes_caja;
    //cuadrovolatilidad.stroke();

    ////Texto literal  clase
    //texto.fillStyle = Color_texto_caja;
    //texto.fillText("Clase:", cj1x + 60, cj1y + seph11 + al11 - 5);

    ////Texto Caja
    //texto.fillStyle = Color_numero_caja;
    //texto.font = "18px bold arial";
    //Tamano_texto = texto.measureText(j_clase_volatilidad_pulverulencia).width;
    //texto.fillText(j_clase_volatilidad_pulverulencia, cj1x + an1 - sep11 - Tamano_texto - 3, cj1y + seph11 + al11 - 5);



    //// caja puntuación  
    //cuadrovolatilidad.beginPath();
    //cuadrovolatilidad.rect(cj1x + an1 - sep12 - an12, cj1y + seph12, an12, al12);
    //cuadrovolatilidad.fillStyle = "white";
    //cuadrovolatilidad.fill();
    //cuadrovolatilidad.lineWidth = 1;
    //cuadrovolatilidad.strokeStyle = Color_bordes_caja;
    //cuadrovolatilidad.stroke();

    ////Texto literal puntuación
    //texto.fillStyle = Color_texto_caja;
    //texto.font = "18px bold arial";
    //texto.fillText("Puntuaci\xf3n:", cj1x + 60, cj1y + seph12 + al12 - 5);


    ////Texto puntuación
    //texto.fillStyle = Color_numero_caja;
    //Tamano_texto = texto.measureText(j_puntuacion_volatilidad_pulverulencia).width;
    //texto.fillText(j_puntuacion_volatilidad_pulverulencia, cj1x + an1 - sep12 - Tamano_texto - 3, cj1y + seph12 + al12 - 5);

    //configuracion de la caja
    //cuadrovolatilidad.globalCompositeOperation = "destination-over";
    //cuadrovolatilidad.beginPath();
    //cuadrovolatilidad.rect(cj1x, cj1y, an1, al1);
    //cuadrovolatilidad.fillStyle = Color_volatilidad;
    //cuadrovolatilidad.fill();
    //cuadrovolatilidad.lineWidth = Anchura_bordes_caja;
    //cuadrovolatilidad.strokeStyle = Color_bordes_caja;
    //cuadrovolatilidad.stroke();


}




///////////////////////////////////////////resultados Procedimiento de trabajo//////////////////////////////////


function dibujar_resul_procedimiento() {
    //var canvas = document.getElementById('cuadroprocedimiento');
    //var cuadroprocedimiento = canvas.getContext('2d');
    //var texto = canvas.getContext('2d');
    /////////////////////////////////////////////variables configurables//////////////////////////////////
    ////var autoAsignarFuente = true;	//AC*/TIVAR SI LA DIMENSION ES MENOR A 1200*800
    //var titulo_caja;
    //var font;

    ////configuracion de la caja
    //cuadroprocedimiento.beginPath();
    //cuadroprocedimiento.rect(cj1x, cj1y, an1, al1);
    //cuadroprocedimiento.fillStyle = Color_procedimiento;
    //cuadroprocedimiento.fill();
    //cuadroprocedimiento.lineWidth = Anchura_bordes_caja;
    //cuadroprocedimiento.strokeStyle = Color_bordes_caja;
    //cuadroprocedimiento.stroke();

    ////Titulo
    //titulo_caja = "PROCEDIMIENTO DE TRABAJO ";
    //texto.fillStyle = Color_titulo_caja;
    //Pxl_titulo_caja = Tamano_font_titulo_caja.toString();
    //font = Pxl_font_titulo_caja + " " + negrita + " " + Fuente_titulo_caja;
    //texto.font = "18px bold arial";
    //ancho_titulo_caja = cuadroprocedimiento.measureText(titulo_caja).width;
    //texto.fillStyle = Color_titulo_caja;
    //texto.fillText(titulo_caja, cj1x + (an1 / 2) - ancho_titulo_caja / 2, cj1y + sept11);

    ////caja clase  
    //cuadroprocedimiento.beginPath();
    //cuadroprocedimiento.rect(cj1x + an1 - sep11 - an11, cj1y + seph11, an11, al11);
    //cuadroprocedimiento.fillStyle = "white";
    //cuadroprocedimiento.fill();
    //cuadroprocedimiento.lineWidth = 1;
    //cuadroprocedimiento.strokeStyle = Color_bordes_caja;
    //cuadroprocedimiento.stroke();

    ////Texto literal  clase
    //texto.fillStyle = Color_texto_caja;
    //texto.fillText("Clase:", cj1x + 60, cj1y + seph11 + al11 - 5);

    ////Texto Caja
    //texto.fillStyle = Color_numero_caja;
    //texto.font = "18px bold arial";
    //Tamano_texto = texto.measureText(j_clase_procedimiento_trabajo).width;
    //texto.fillText(j_clase_procedimiento_trabajo, cj1x + an1 - sep11 - Tamano_texto - 3, cj1y + seph11 + al11 - 5);



    //// caja puntuación  
    //cuadroprocedimiento.beginPath();
    //cuadroprocedimiento.rect(cj1x + an1 - sep12 - an12, cj1y + seph12, an12, al12);
    //cuadroprocedimiento.fillStyle = "white";
    //cuadroprocedimiento.fill();
    //cuadroprocedimiento.lineWidth = 1;
    //cuadroprocedimiento.strokeStyle = Color_bordes_caja;
    //cuadroprocedimiento.stroke();

    ////Texto literal puntuación
    //texto.fillStyle = Color_texto_caja;
    //texto.font = "18px bold arial";
    //texto.fillText("Puntuaci\xf3n:", cj1x + 60, cj1y + seph12 + al12 - 5);


    ////Texto puntuación
    //texto.fillStyle = Color_numero_caja;
    //Tamano_texto = texto.measureText(j_puntuacion_procedimiento_trabajo_editada).width;
    //texto.fillText(j_puntuacion_procedimiento_trabajo_editada, cj1x + an1 - sep12 - Tamano_texto - 3, cj1y + seph12 + al12 - 5);


}



///////////////////////////////////////////resultados Protecciones Colectivas//////////////////////////////////


function dibujar_resul_proteccion() {
    //var canvas = document.getElementById('cuadroproteccion');
    //var cuadroproteccion = canvas.getContext('2d');
    //var texto = canvas.getContext('2d');
    /////////////////////////////////////////////variables configurables//////////////////////////////////
    ////var autoAsignarFuente = true;	//AC*/TIVAR SI LA DIMENSION ES MENOR A 1200*800
    //var titulo_caja;
    //var font;

    ////configuracion de la caja
    //cuadroproteccion.beginPath();
    //cuadroproteccion.rect(cj1x, cj1y, an1, al1);
    //cuadroproteccion.fillStyle = Color_proteccion;
    //cuadroproteccion.fill();
    //cuadroproteccion.lineWidth = Anchura_bordes_caja;
    //cuadroproteccion.strokeStyle = Color_bordes_caja;
    //cuadroproteccion.stroke();

    ////Titulo
    //titulo_caja = "PROTECCIONES COLECTIVAS ";
    //texto.fillStyle = Color_titulo_caja;
    //Pxl_titulo_caja = Tamano_font_titulo_caja.toString();
    //font = Pxl_font_titulo_caja + " " + negrita + " " + Fuente_titulo_caja;
    //texto.font = "18px bold arial";
    //ancho_titulo_caja = cuadroproteccion.measureText(titulo_caja).width;
    //texto.fillStyle = Color_titulo_caja;
    //texto.fillText(titulo_caja, cj1x + (an1 / 2) - ancho_titulo_caja / 2, cj1y + sept11);

    ////caja clase  
    //cuadroproteccion.beginPath();
    //cuadroproteccion.rect(cj1x + an1 - sep11 - an11, cj1y + seph11, an11, al11);
    //cuadroproteccion.fillStyle = "white";
    //cuadroproteccion.fill();
    //cuadroproteccion.lineWidth = 1;
    //cuadroproteccion.strokeStyle = Color_bordes_caja;
    //cuadroproteccion.stroke();

    ////Texto literal  clase
    //texto.fillStyle = Color_texto_caja;
    //texto.fillText("Clase:", cj1x + 60, cj1y + seph11 + al11 - 5);

    ////Texto Caja
    //texto.fillStyle = Color_numero_caja;
    //texto.font = "18px bold arial";
    //Tamano_texto = texto.measureText(j_clase_protecciones_colectivas).width;
    //texto.fillText(j_clase_protecciones_colectivas, cj1x + an1 - sep11 - Tamano_texto - 3, cj1y + seph11 + al11 - 5);



    //// caja puntuación  
    //cuadroproteccion.beginPath();
    //cuadroproteccion.rect(cj1x + an1 - sep12 - an12, cj1y + seph12, an12, al12);
    //cuadroproteccion.fillStyle = "white";
    //cuadroproteccion.fill();
    //cuadroproteccion.lineWidth = 1;
    //cuadroproteccion.strokeStyle = Color_bordes_caja;
    //cuadroproteccion.stroke();

    ////Texto literal puntuación
    //texto.fillStyle = Color_texto_caja;
    //texto.font = "18px bold arial";
    //texto.fillText("Puntuaci\xf3n:", cj1x + 60, cj1y + seph12 + al12 - 5);


    ////Texto puntuación
    //texto.fillStyle = Color_numero_caja;
    //Tamano_texto = texto.measureText(j_puntuacion_protecciones_colectivas_editada).width;
    //texto.fillText(j_puntuacion_protecciones_colectivas_editada, cj1x + an1 - sep12 - Tamano_texto - 3, cj1y + seph12 + al12 - 5);


}


///////////////////////////////////////////resultados VLA//////////////////////////////////

function dibujar_resul_VLA() {
    //var canvas = document.getElementById('cuadroVLA');
    //var cuadroVLA = canvas.getContext('2d');
    //var texto = canvas.getContext('2d');
    /////////////////////////////////////////////variables configurables//////////////////////////////////
    //var autoAsignarFuente = true;	//ACTIVAR SI LA DIMENSION ES MENOR A 1200*800
    //var titulo_caja;
    //var font;

    ////configuracion de la caja
    //cuadroVLA.beginPath();
    //cuadroVLA.rect(cj1x, cj1y, an1, al1);
    //cuadroVLA.fillStyle = Color_VLA;
    //cuadroVLA.fill();
    //cuadroVLA.lineWidth = Anchura_bordes_caja;
    //cuadroVLA.strokeStyle = Color_bordes_caja;
    //cuadroVLA.stroke();

    ////Titulo
    //titulo_caja = "FACTOR DE CORRECCI\xd3N VLA ";
    //texto.fillStyle = Color_titulo_caja;
    //Pxl_titulo_caja = Tamano_font_titulo_caja.toString();
    //font = Pxl_font_titulo_caja + " " + negrita + " " + Fuente_titulo_caja;
    //texto.font = "18px bold arial";
    //ancho_titulo_caja = cuadroVLA.measureText(titulo_caja).width;
    //texto.fillStyle = Color_titulo_caja;
    //texto.fillText(titulo_caja, cj1x + (an1 / 2) - ancho_titulo_caja / 2, cj1y + sept13);

    ////caja puntuación  
    //cuadroVLA.beginPath();
    //cuadroVLA.rect(cj1x + an1 - sep13 - an13, cj1y + seph13, an13, al13);
    //cuadroVLA.fillStyle = "white";
    //cuadroVLA.fill();
    //cuadroVLA.lineWidth = 1;
    //cuadroVLA.strokeStyle = Color_bordes_caja;
    //cuadroVLA.stroke();

    ////Texto Caja
    //texto.fillStyle = Color_numero_caja;
    //texto.font = "18px bold arial";
    //Tamano_texto = texto.measureText(j_puntuacion_vla).width;
    //texto.fillText(j_puntuacion_vla, cj1x + an1 - sep13 - an13 + an13 - Tamano_texto - 3, cj1y + seph13 + al13 - 5);

}

function dibujar_lineas_riesgo_potencial() {
    var canvas = document.getElementById('lineasfranja03');
    var lineasriesgo = canvas.getContext('2d');
    var Ancho_lineas = 2;
    var Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(100, 0);
    lineasriesgo.lineTo(100, 62);

    lineasriesgo.moveTo(355, 0);
    lineasriesgo.lineTo(355, 30);

    lineasriesgo.moveTo(590, 0);
    lineasriesgo.lineTo(590, 30);

    lineasriesgo.moveTo(480, 30);
    lineasriesgo.lineTo(480, 60);

    // Horizontal
    lineasriesgo.moveTo(355, 30);
    lineasriesgo.lineTo(590, 30);

    lineasriesgo.closePath();
    lineasriesgo.stroke();


    canvas = document.getElementById('lineasfranja04');
    lineasriesgo = canvas.getContext('2d');

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(100, 0);
    lineasriesgo.lineTo(100, 35);

    //horizontal 
    lineasriesgo.moveTo(100, 35);
    lineasriesgo.lineTo(345, 35);

    // Vertical
    lineasriesgo.moveTo(240, 35);
    lineasriesgo.lineTo(240, 74);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasfranja05');
    lineasriesgo = canvas.getContext('2d');
    
    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;


    // Vertical
    lineasriesgo.moveTo(240, -15);
    lineasriesgo.lineTo(240, 25);

    lineasriesgo.closePath();
    lineasriesgo.stroke();
        
}

function dibujar_lineas_resultados() {
    var canvas = document.getElementById('lineasrfranja03');
    var lineasriesgo = canvas.getContext('2d');
    var Ancho_lineas = 2;
    var Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 48);

    lineasriesgo.moveTo(203, 0);
    lineasriesgo.lineTo(203, 24);

    lineasriesgo.moveTo(332, 0);
    lineasriesgo.lineTo(332, 24);

    lineasriesgo.moveTo(259, 24);
    lineasriesgo.lineTo(259, 46);

    // Horizontal
    lineasriesgo.moveTo(203, 24);
    lineasriesgo.lineTo(332, 24);


    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasrfranja04');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 64);
    
    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasrfranja05');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 24);

    lineasriesgo.moveTo(139, 24);
    lineasriesgo.lineTo(139, 46);

    lineasriesgo.moveTo(259, 0);
    lineasriesgo.lineTo(259, 24);

    // Horizontal
    lineasriesgo.moveTo(74, 24);
    lineasriesgo.lineTo(259, 24);

    lineasriesgo.closePath();
    lineasriesgo.stroke();


    canvas = document.getElementById('lineasrfranja07');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(139, 0);
    lineasriesgo.lineTo(139, 24);

    lineasriesgo.moveTo(268, 0);
    lineasriesgo.lineTo(268, 24);

    lineasriesgo.moveTo(397, 0);
    lineasriesgo.lineTo(397, 46);

    lineasriesgo.moveTo(544, 0);
    lineasriesgo.lineTo(544, 24);

    lineasriesgo.moveTo(681, 0);
    lineasriesgo.lineTo(681, 24);

    // Horizontal
    lineasriesgo.moveTo(139, 24);
    lineasriesgo.lineTo(681, 24);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

}

function dibujar_resul_riesgo_potencial() {
    dibujar_lineas_riesgo_potencial();
    dibujar_lineas_resultados();
    var canvas = document.getElementById('cuadroriesgo');
    var cuadroriesgo = canvas.getContext('2d');
    var texto = canvas.getContext('2d');
    ///////////////////////////////////////////variables configurables//////////////////////////////////

    var margenCajaTexto = 0;
    var margenTexto = 0;
    var autoAsignarFuente = true;	//ACTIVAR SI LA DIMENSION ES MENOR A 1200*800
    var tamanoTexto = 15;
    var pxlTexto = tamanoTexto.toString();
    var Tamano_texto;


    var Anchura_normal = 130;
    var Anchura_larga = 240;
    var Anchura_potencial = 210;
    var Altura_normal = 72;
    var Altura_alta = 90;
    var Separacion_cantidad = 250;
    var Separacion_frecuencia = 430;
    var Altura_separacion = 48;
    var Anchura_bordes = 1;

    var Y_linea_superior_cajas_superiores = 12;
    var X_linea_izquierda_cajas_superiores = 40;
    var Y_linea_superior_caja_media = 156;
    var X_linea_izquierda_caja_media = 350;
    var Y_linea_superior_cajas_inferiores = 240;
    var X_linea_izquierda_cajas_inferiores = 140;

    var Color_bordes = 'black';

    //////////////////////////////////////////////cajas clase/////////////////////////////////////////////
    var Anchura_caja_clase = 42;
    var Altura_caja_clase = 24;
    var Separacion_caja_clase = 3;
    var Anchura_bordes_caja_clase = 1;
    var Color_caja_clase = 'white';
    var Color_bordes_caja_clase = 'black';

    //////////////////////////////////////////////cajas puntuación/////////////////////////////////////////////
    var Anchura_caja_puntuacion = 70;
    var Altura_caja_puntuacion = 24;
    var Separacion_caja_puntuacion = 3;
    var Anchura_bordes_caja_puntuacion = 1;
    var Color_caja_puntuacion = 'white';
    var Color_bordes_caja_puntuacion = 'black';

    //////////////////////////////////////////////Títulos y textos /////////////////////////////////////////////
    var Margen_titulo = 3;
    //  var tamanoTitulo = 14.5;
    var Tamano_titulo = 15;
    var Pxl_titulo = Tamano_titulo.toString();
    var Tamano_titulo_total = 18;
    var Pxl_titulo_total = Tamano_titulo_total.toString();
    var Fuente_titulo = "px Arial"
    var Color_titulo = 'white';
   


    var Margen_texto = 0;
    var Tamano_texto = 15;
    // var tamano_Texto = 12.5;
    var Pxl_texto = tamanoTexto.toString();

    var Fuente_texto = "px Arial"
    var Color_texto = 'white';

    var Color_numero = 'black';

    var Tamano_resultados = 15;
    var Pxl_resultados = Tamano_resultados.toString();
    var Color_resultados = 'darkblue';

    //////////////////////////////////////////////lineas  /////////////////////////////////////////////

    var Ancho_lineas = 2;
    var Color_lineas = 'blue';


    ///////////////////////////////////////////////caja peligro//////////////////////////////////////////////
    //Posicion de la caja
    var posPeligroX = X_linea_izquierda_cajas_superiores; //izq-der
    var posPeligroY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoPeligro = Anchura_normal;
    var altoPeligro = Altura_normal;

    //configuracion de la caja
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posPeligroX, posPeligroY, anchoPeligro, altoPeligro);
    cuadroriesgo.fillStyle = Color_peligro;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes;
    cuadroriesgo.strokeStyle = Color_bordes;
    cuadroriesgo.stroke();


    //configuracion de la caja  clase
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase, posPeligroY + altoPeligro - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroriesgo.fillStyle = Color_caja_clase;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_clase;
    cuadroriesgo.strokeStyle = Color_bordes_caja_clase;
    cuadroriesgo.stroke();

    //contenido caja
    //Titulo
    titulo = "PELIGRO";
    Ancho_titulo = cuadroriesgo.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posPeligroX + anchoPeligro / 2) - (Tamano_texto / 2) - 3, posPeligroY + Margen_titulo + Tamano_titulo);

    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posPeligroX + 5, posPeligroY + altoPeligro - 5);
    // texto.fillText("Clase:", posPeligroX + 5, posPeligroY + altoPeligro - Altura_caja_clase / 2);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_peligro).width;
    //  texto.fillText("3", posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase + Margen_texto + Tamano_texto, posPeligroY + altoPeligro - Separacion_caja_clase - 5);
    //texto.fillText(j_clase_peligro, posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase + Margen_texto + Tamano_texto, posPeligroY + altoPeligro - Separacion_caja_clase - 5);
    texto.fillText(j_clase_peligro, posPeligroX + anchoPeligro - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posPeligroY + altoPeligro - Separacion_caja_clase - 5);

    ///////////////////////////////////////////////caja cantidad//////////////////////////////////////////////
    //Posicion de la caja
    var posCantidadX = posPeligroX + Separacion_cantidad; //izq-der
    var posCantidadY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoCantidad = Anchura_normal;
    var altoCantidad = Altura_normal;

    //configuracion de la caja
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posCantidadX, posCantidadY, anchoCantidad, altoCantidad);
    cuadroriesgo.fillStyle = Color_cantidad;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes;
    cuadroriesgo.strokeStyle = Color_bordes;
    cuadroriesgo.stroke();

    //configuracion de la caja  clase
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posCantidadX + anchoCantidad - Anchura_caja_clase - Separacion_caja_clase, posCantidadY + altoCantidad - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroriesgo.fillStyle = Color_caja_clase;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_clase;
    cuadroriesgo.strokeStyle = Color_bordes_caja_clase;
    cuadroriesgo.stroke();

    //contenido caja
    //Titulo
    titulo = "CANTIDAD";
    Ancho_titulo = cuadroriesgo.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posCantidadX + anchoCantidad / 2) - (Tamano_texto / 2) - 3, posCantidadY + Margen_titulo + Tamano_titulo);

    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posCantidadX + 5, posCantidadY + altoCantidad - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_cantidad_dia).width;
    texto.fillText(j_clase_cantidad_dia, posCantidadX + anchoCantidad - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posCantidadY + altoCantidad - Separacion_caja_clase - 5);

    ///////////////////////////////////////////////caja frecuencia//////////////////////////////////////////////
    //Posicion de la caja
    var posFrecuenciaX = posPeligroX + Separacion_frecuencia; //izq-der
    var posFrecuenciaY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoFrecuencia = Anchura_larga;
    var altoFrecuencia = Altura_normal;

    //configuracion de la caja
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posFrecuenciaX, posFrecuenciaY, anchoFrecuencia, altoFrecuencia);
    cuadroriesgo.fillStyle = Color_frecuencia;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes;
    cuadroriesgo.strokeStyle = Color_bordes;
    cuadroriesgo.stroke();

    //configuracion de la caja  clase
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posFrecuenciaX + anchoFrecuencia - Anchura_caja_clase - Separacion_caja_clase, posFrecuenciaY + altoFrecuencia - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroriesgo.fillStyle = Color_caja_clase;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_clase;
    cuadroriesgo.strokeStyle = Color_bordes_caja_clase;
    cuadroriesgo.stroke();


    //contenido caja
    //Titulo
    titulo = "FRECUENCIA DE UTILIZACI\xd3N";
    Ancho_titulo = cuadroriesgo.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posFrecuenciaX + anchoFrecuencia / 2) - (Tamano_texto / 2) - 1, posFrecuenciaY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posFrecuenciaX + 5, posFrecuenciaY + altoFrecuencia - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_frecuencia_utilizacion).width;
    texto.fillText(j_clase_frecuencia_utilizacion, posFrecuenciaX + anchoFrecuencia - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posFrecuenciaY + altoFrecuencia - Separacion_caja_clase - 5);

    ///////////////////////////////////////////////caja exposición//////////////////////////////////////////////
    //Posicion de la caja
    var posExposicionX = X_linea_izquierda_caja_media; //izq-der
    var posExposicionY = Y_linea_superior_caja_media; //arriba-abajo (eje de ordenadas clasico)
    var anchoExposicion = Anchura_potencial;
    var altoExposicion = Altura_normal;

    //configuracion de la caja
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posExposicionX, posExposicionY, anchoExposicion, altoExposicion);
    cuadroriesgo.fillStyle = Color_exposicion;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes;
    cuadroriesgo.strokeStyle = Color_bordes;
    cuadroriesgo.stroke();

    //configuracion de la caja  clase
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posExposicionX + anchoExposicion - Anchura_caja_clase - Separacion_caja_clase, posExposicionY + altoExposicion - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroriesgo.fillStyle = Color_caja_clase;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_clase;
    cuadroriesgo.strokeStyle = Color_bordes_caja_clase;
    cuadroriesgo.stroke();


    //contenido caja
    //Titulo
    titulo = "EXPOSICI\xd3N POTENCIAL";
    Ancho_titulo = cuadroriesgo.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posExposicionX + anchoExposicion / 2) - (Tamano_texto / 2) - 3, posExposicionY + Margen_titulo + Tamano_titulo);

    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posExposicionX + 5, posExposicionY + altoExposicion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_exposicion_potencial).width;
    texto.fillText(j_clase_exposicion_potencial, posExposicionX + anchoExposicion - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posExposicionY + altoExposicion - Separacion_caja_clase - 5);

    ///////////////////////////////////////////////caja Riesgo//////////////////////////////////////////////
    //Posicion de la caja
    var posRiesgoX = X_linea_izquierda_cajas_inferiores; //izq-der
    var posRiesgoY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoRiesgo = Anchura_potencial;
    var altoRiesgo = Altura_alta;

    //configuracion de la caja
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posRiesgoX, posRiesgoY, anchoRiesgo, altoRiesgo);
    cuadroriesgo.fillStyle = Color_riesgo;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes;
    cuadroriesgo.strokeStyle = Color_bordes;
    cuadroriesgo.stroke();

    //configuracion de la caja  clase
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posRiesgoX + anchoRiesgo - Anchura_caja_clase - Separacion_caja_clase, posRiesgoY + altoRiesgo - Altura_caja_clase - Separacion_caja_clase - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_clase, Altura_caja_clase);
    cuadroriesgo.fillStyle = Color_caja_clase;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_clase;
    cuadroriesgo.strokeStyle = Color_bordes_caja_clase;
    cuadroriesgo.stroke();

    //configuracion de la caja  puntuación
    cuadroriesgo.beginPath();
    cuadroriesgo.rect(posRiesgoX + anchoRiesgo - Anchura_caja_puntuacion - Separacion_caja_puntuacion, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion, Altura_caja_puntuacion);
    cuadroriesgo.fillStyle = Color_caja_puntuacion;
    cuadroriesgo.fill();
    cuadroriesgo.lineWidth = Anchura_bordes_caja_puntuacion;
    cuadroriesgo.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroriesgo.stroke();


    //contenido caja
    //Titulo
    titulo = "RIESGO POTENCIAL";
    Ancho_titulo = cuadroriesgo.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posRiesgoX + anchoRiesgo / 2) - (Tamano_texto / 2) - 1, posRiesgoY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posRiesgoX + 5, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_riesgo_potencial).width;
    texto.fillText(j_clase_riesgo_potencial, posRiesgoX + anchoRiesgo - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion - 8);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Puntuaci\xf3n:", posRiesgoX + 5, posRiesgoY + altoRiesgo - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_riesgo_potencial_editada).width;
    texto.fillText(j_puntuacion_riesgo_potencial_editada, posRiesgoX + anchoRiesgo - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posRiesgoY + altoRiesgo - Separacion_caja_clase - 5);

    cuadroriesgo.beginPath();
    cuadroriesgo.lineWidth = Ancho_lineas;
    cuadroriesgo.strokeStyle = Color_lineas;

    //horizontal superior
    cuadroriesgo.moveTo(posCantidadX + anchoCantidad / 2, posCantidadY + altoCantidad + (posExposicionY - posCantidadY - altoCantidad) / 2);
    cuadroriesgo.lineTo(posFrecuenciaX + anchoFrecuencia / 2, posCantidadY + altoCantidad + (posExposicionY - posCantidadY - altoCantidad) / 2);

    //verticales hasta/desde la horizontal superior

    cuadroriesgo.moveTo(posCantidadX + anchoCantidad / 2, posCantidadY + altoCantidad);
    cuadroriesgo.lineTo(posCantidadX + anchoCantidad / 2, posCantidadY + altoCantidad + (posExposicionY - posCantidadY - altoCantidad) / 2);

    cuadroriesgo.moveTo(posFrecuenciaX + anchoFrecuencia / 2, posFrecuenciaY + altoFrecuencia);
    cuadroriesgo.lineTo(posFrecuenciaX + anchoFrecuencia / 2, posCantidadY + altoCantidad + (posExposicionY - posCantidadY - altoCantidad) / 2);

    cuadroriesgo.moveTo(posExposicionX + anchoExposicion / 2, posCantidadY + altoCantidad + (posExposicionY - posCantidadY - altoCantidad) / 2);
    cuadroriesgo.lineTo(posExposicionX + anchoExposicion / 2, posExposicionY);

    //horizontal inferior
    cuadroriesgo.moveTo(posPeligroX + anchoPeligro / 2, posExposicionY + altoExposicion / 2);
    cuadroriesgo.lineTo(posExposicionX, posExposicionY + altoExposicion / 2);

    //verticales hasta/desde la horizontal superior

    cuadroriesgo.moveTo(posPeligroX + anchoPeligro / 2, posPeligroY + altoPeligro);
    cuadroriesgo.lineTo(posPeligroX + anchoPeligro / 2, posExposicionY + altoExposicion / 2);

    cuadroriesgo.moveTo(posRiesgoX + anchoRiesgo / 2, posExposicionY + altoExposicion / 2);
    cuadroriesgo.lineTo(posRiesgoX + anchoRiesgo / 2, posRiesgoY);

    cuadroriesgo.closePath();
    cuadroriesgo.stroke();




}




function dibujar_resultados() {
    var canvas = document.getElementById('cuadroResultado');
    var cuadroResultado = canvas.getContext('2d');
    var texto = canvas.getContext('2d');
    ///////////////////////////////////////////variables configurables//////////////////////////////////
    var anchoTotalLienzo = 700;
    var alturaTotalLienzo = 350;
    var margenCajaTexto = 0;
    var margenTexto = 0;
    var autoAsignarFuente = true;	//ACTIVAR SI LA DIMENSION ES MENOR A 1200*800
    var tamanoTexto = 12.5;
    var pxlTexto = tamanoTexto.toString();
    var Tamano_texto;

    var textoCaja = "P";
    var espacioEntreCajas = 40;
    var espacioEntreCajasY = 0.8 * alturaTotalLienzo / (6);

    var Anchura_normal = 115;
    var Anchura_vla = 105;
    var Anchura_proteccion = 140;
    var Anchura_larga = 130;
    var Anchura_resultados = 450;
    var Altura_normal = 60;
    var Altura_alta = 72;
    var Altura_resultados = 40;
    var Separacion_normal = 10;
    var Altura_separacion = 48;
    var Anchura_bordes = 1;



    var Y_linea_superior_cajas_superiores = 6;
    var X_linea_izquierda_cajas_superiores = 15;
    var Y_linea_superior_caja_media = Y_linea_superior_cajas_superiores + Altura_normal + Altura_separacion;
    var X_linea_izquierda_caja_media = X_linea_izquierda_cajas_superiores + Anchura_normal + Separacion_normal + Anchura_normal / 2;
    var Y_linea_superior_cajas_inferiores = Y_linea_superior_caja_media + Altura_normal + Altura_separacion;
    var X_linea_izquierda_cajas_inferiores = X_linea_izquierda_cajas_superiores + Anchura_normal / 2;
    var Y_linea_superior_resultados = Y_linea_superior_cajas_inferiores + Altura_normal + Altura_separacion;
    var X_linea_izquierda_resultados = X_linea_izquierda_caja_media;


    var Color_bordes = 'black';


    var Color_Exposicion = 'darkorange';

    var Color_Resultados = 'white';


    //////////////////////////////////////////////cajas clase/////////////////////////////////////////////
    var Anchura_caja_clase = 30;
    var Altura_caja_clase = 20;
    var Separacion_caja_clase = 3;
    var Anchura_bordes = 0.5;
    var Color_caja_clase = 'lemonchiffon';
    var Color_bordes_caja_clase = 'red';

    //////////////////////////////////////////////cajas puntuación/////////////////////////////////////////////
    var Anchura_caja_puntuacion = 37;
    var Anchura_caja_puntuacion_vla = 30;
    var Altura_caja_puntuacion = 20;
    var Separacion_caja_puntuacion = 2;
    var Anchura_bordes = 0.5;
    var Color_caja_puntuacion = 'lemonchiffon';
    var Color_bordes_caja_puntuacion = 'red';

    //////////////////////////////////////////////caja resultados/////////////////////////////////////////////
    var Anchura_caja_resultados = 100;
    var Altura_caja_resultados = 30;
    var Separacion_caja_resultados = 3;
    var Separacion_hor_caja_resultados = 30;
    var Color_bordes_resultados = 'blue';
    var Anchura_bordes_resultados = 2;
    var Color_caja_resultados = 'lemonchiffon';
    var Color_bordes_caja_resultados = 'red';


    //////////////////////////////////////////////Títulos y textos /////////////////////////////////////////////
    var Margen_titulo = 3;
    //  var tamanoTitulo = 14.5;
    var Tamano_titulo = 10;
    var Pxl_titulo = Tamano_titulo.toString();
    var Tamano_titulo_total = 13;
    var Pxl_titulo_total = Tamano_titulo_total.toString();
    var Fuente_titulo = "px Arial"
    var Color_titulo = 'darkgreen';
    var Color_bordes_caja_clase = 'red';


    var Margen_texto = 0;
    var Tamano_texto = 10;
    // var tamano_Texto = 12.5;
    var Pxl_texto = tamanoTexto.toString();

    var Fuente_texto = "px Arial"
    var Color_texto = 'darkgreen';

    var Color_numero = 'black';

    var Tamano_resultados = 15;
    var Pxl_resultados = Tamano_resultados.toString();
    var Color_resultados = 'darkblue';

    //////////////////////////////////////////////lineas  /////////////////////////////////////////////

    var Ancho_lineas = 2;
    var Color_lineas = 'blue';


    ///////////////////////////////////////////////caja peligro//////////////////////////////////////////////
    //Posicion de la caja
    var posPeligroX = X_linea_izquierda_cajas_superiores; //izq-der
    var posPeligroY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoPeligro = Anchura_normal;
    var altoPeligro = Altura_normal;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posPeligroX, posPeligroY, anchoPeligro, altoPeligro);
    cuadroResultado.fillStyle = Color_peligro;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();


    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase, posPeligroY + altoPeligro - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //contenido caja
    //Titulo
    titulo = "PELIGRO";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posPeligroX + anchoPeligro / 2) - (Tamano_texto / 2) - 3, posPeligroY + Margen_titulo + Tamano_titulo);

    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posPeligroX + 5, posPeligroY + altoPeligro - 5);
    // texto.fillText("Clase:", posPeligroX + 5, posPeligroY + altoPeligro - Altura_caja_clase / 2);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_peligro).width;
    //  texto.fillText("3", posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase + Margen_texto + Tamano_texto, posPeligroY + altoPeligro - Separacion_caja_clase - 5);
    //texto.fillText(j_clase_peligro, posPeligroX + anchoPeligro - Anchura_caja_clase - Separacion_caja_clase + Margen_texto + Tamano_texto, posPeligroY + altoPeligro - Separacion_caja_clase - 5);
    texto.fillText(j_clase_peligro, posPeligroX + anchoPeligro - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posPeligroY + altoPeligro - Separacion_caja_clase - 5);
    /*
   

    */
    ///////////////////////////////////////////////caja cantidad//////////////////////////////////////////////
    //Posicion de la caja
    var posCantidadX = posPeligroX + anchoPeligro + Separacion_normal; //izq-der
    var posCantidadY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoCantidad = Anchura_normal;
    var altoCantidad = Altura_normal;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posCantidadX, posCantidadY, anchoCantidad, altoCantidad);
    cuadroResultado.fillStyle = Color_peligro;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posCantidadX + anchoCantidad - Anchura_caja_clase - Separacion_caja_clase, posCantidadY + altoCantidad - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //contenido caja
    //Titulo
    titulo = "CANTIDAD";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posCantidadX + anchoCantidad / 2) - (Tamano_texto / 2) - 3, posCantidadY + Margen_titulo + Tamano_titulo);

    titulo = "UTILIZADA";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posCantidadX + anchoCantidad / 2) - (Tamano_texto / 2) - 3, posCantidadY + Margen_titulo * 2 + Tamano_titulo * 2);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posCantidadX + 5, posCantidadY + altoCantidad - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_cantidad_dia).width;
    texto.fillText(j_clase_cantidad_dia, posCantidadX + anchoCantidad - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posCantidadY + altoCantidad - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja frecuencia//////////////////////////////////////////////
    //Posicion de la caja
    var posFrecuenciaX = posCantidadX + anchoCantidad + Separacion_normal; //izq-der
    var posFrecuenciaY = Y_linea_superior_cajas_superiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoFrecuencia = Anchura_normal;
    var altoFrecuencia = Altura_normal;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posFrecuenciaX, posFrecuenciaY, anchoFrecuencia, altoFrecuencia);
    cuadroResultado.fillStyle = Color_peligro;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posFrecuenciaX + anchoFrecuencia - Anchura_caja_clase - Separacion_caja_clase, posFrecuenciaY + altoFrecuencia - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "FRECUENCIA DE";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posFrecuenciaX + anchoFrecuencia / 2) - (Tamano_texto / 2) - 1, posFrecuenciaY + Margen_titulo + Tamano_titulo);

    titulo = "UTILIZACI\xd3N";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posFrecuenciaX + anchoFrecuencia / 2) - (Tamano_texto / 2) - 1, posFrecuenciaY + Margen_titulo * 2 + Tamano_titulo * 2);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posFrecuenciaX + 5, posFrecuenciaY + altoFrecuencia - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_frecuencia_utilizacion).width;
    texto.fillText(j_clase_frecuencia_utilizacion, posFrecuenciaX + anchoFrecuencia - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posFrecuenciaY + altoFrecuencia - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja exposición//////////////////////////////////////////////
    //Posicion de la caja
    var posExposicionX = X_linea_izquierda_caja_media; //izq-der
    var posExposicionY = Y_linea_superior_caja_media; //arriba-abajo (eje de ordenadas clasico)
    var anchoExposicion = Anchura_normal;
    var altoExposicion = Altura_normal;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posExposicionX, posExposicionY, anchoExposicion, altoExposicion);
    cuadroResultado.fillStyle = Color_exposicion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posExposicionX + anchoExposicion - Anchura_caja_clase - Separacion_caja_clase, posExposicionY + altoExposicion - Altura_caja_clase - Separacion_caja_clase, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "EXPOSICI\xd3N";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posExposicionX + anchoExposicion / 2) - (Tamano_texto / 2) - 3, posExposicionY + Margen_titulo + Tamano_titulo);

    titulo = "POTENCIAL";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posExposicionX + anchoExposicion / 2) - (Tamano_texto / 2) - 3, posExposicionY + Margen_titulo * 2 + Tamano_titulo * 2);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posExposicionX + 5, posExposicionY + altoExposicion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_exposicion_potencial).width;
    texto.fillText(j_clase_exposicion_potencial, posExposicionX + anchoExposicion - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posExposicionY + altoExposicion - Separacion_caja_clase - 5);

    ///////////////////////////////////////////////caja Riesgo//////////////////////////////////////////////
    //Posicion de la caja
    var posRiesgoX = X_linea_izquierda_cajas_inferiores; //izq-der
    var posRiesgoY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoRiesgo = Anchura_larga;
    var altoRiesgo = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posRiesgoX, posRiesgoY, anchoRiesgo, altoRiesgo);
    cuadroResultado.fillStyle = Color_riesgo;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posRiesgoX + anchoRiesgo - Anchura_caja_clase - Separacion_caja_clase, posRiesgoY + altoRiesgo - Altura_caja_clase - Separacion_caja_clase - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //configuracion de la caja  puntuación
    cuadroResultado.beginPath();
    cuadroResultado.rect(posRiesgoX + anchoRiesgo - Anchura_caja_puntuacion - 5 - Separacion_caja_puntuacion, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion + 5, Altura_caja_puntuacion);
    cuadroResultado.fillStyle = Color_caja_puntuacion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "RIESGO POTENCIAL";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posRiesgoX + anchoRiesgo / 2) - (Tamano_texto / 2) - 1, posRiesgoY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posRiesgoX + 5, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_riesgo_potencial).width;
    texto.fillText(j_clase_riesgo_potencial, posRiesgoX + anchoRiesgo - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion - 8);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Puntuaci\xf3n:", posRiesgoX + 5, posRiesgoY + altoRiesgo - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_riesgo_potencial_editada).width;
    texto.fillText(j_puntuacion_riesgo_potencial_editada, posRiesgoX + anchoRiesgo - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posRiesgoY + altoRiesgo - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja Volatilidad//////////////////////////////////////////////
    //Posicion de la caja
    var posVolatilidadX = posRiesgoX + anchoRiesgo + Separacion_normal; //izq-der
    var posVolatilidadY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoVolatilidad = Anchura_normal;
    var altoVolatilidad = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posVolatilidadX, posVolatilidadY, anchoVolatilidad, altoVolatilidad);
    cuadroResultado.fillStyle = Color_volatilidad;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posVolatilidadX + anchoVolatilidad - Anchura_caja_clase - Separacion_caja_clase, posVolatilidadY + altoVolatilidad - Altura_caja_clase - Separacion_caja_clase - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //configuracion de la caja  puntuación
    cuadroResultado.beginPath();
    cuadroResultado.rect(posVolatilidadX + anchoVolatilidad - Anchura_caja_puntuacion - Separacion_caja_puntuacion, posVolatilidadY + altoVolatilidad - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion, Altura_caja_puntuacion);
    cuadroResultado.fillStyle = Color_caja_puntuacion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    texto.globalCompositeOperation = "source-over";
    titulo = "VOLATILIDAD";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posVolatilidadX + anchoVolatilidad / 2) - (Tamano_texto / 2) - 1, posVolatilidadY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posVolatilidadX + 5, posVolatilidadY + altoVolatilidad - Altura_caja_puntuacion - Separacion_caja_puntuacion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_volatilidad_pulverulencia).width;
    texto.fillText(j_clase_volatilidad_pulverulencia, posVolatilidadX + anchoVolatilidad - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posVolatilidadY + altoVolatilidad - Altura_caja_puntuacion - Separacion_caja_puntuacion - 8);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Puntuaci\xf3n:", posVolatilidadX + 5, posVolatilidadY + altoVolatilidad - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_volatilidad_pulverulencia).width;
    texto.fillText(j_puntuacion_volatilidad_pulverulencia, posVolatilidadX + anchoVolatilidad - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posVolatilidadY + altoVolatilidad - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja Procedimiento//////////////////////////////////////////////
    //Posicion de la caja
    var posProcedimientoX = posVolatilidadX + anchoVolatilidad + Separacion_normal; //izq-der
    var posProcedimientoY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoProcedimiento = Anchura_normal;
    var altoProcedimiento = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProcedimientoX, posProcedimientoY, anchoProcedimiento, altoProcedimiento);
    cuadroResultado.fillStyle = Color_procedimiento;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProcedimientoX + anchoProcedimiento - Anchura_caja_clase - Separacion_caja_clase, posProcedimientoY + altoProcedimiento - Altura_caja_clase - Separacion_caja_clase - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //configuracion de la caja  puntuación
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProcedimientoX + anchoProcedimiento - Anchura_caja_puntuacion - Separacion_caja_puntuacion, posProcedimientoY + altoProcedimiento - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion, Altura_caja_puntuacion);
    cuadroResultado.fillStyle = Color_caja_puntuacion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "PROCEDIMIENTO";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posProcedimientoX + anchoProcedimiento / 2) - (Tamano_texto / 2) - 1, posProcedimientoY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posProcedimientoX + 5, posProcedimientoY + altoProcedimiento - Altura_caja_puntuacion - Separacion_caja_puntuacion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_procedimiento_trabajo).width;
    texto.fillText(j_clase_procedimiento_trabajo, posProcedimientoX + anchoProcedimiento - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProcedimientoY + altoProcedimiento - Altura_caja_puntuacion - Separacion_caja_puntuacion - 8);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Puntuaci\xf3n:", posProcedimientoX + 5, posProcedimientoY + altoProcedimiento - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_procedimiento_trabajo_editada).width;
    texto.fillText(j_puntuacion_procedimiento_trabajo_editada, posProcedimientoX + anchoProcedimiento - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProcedimientoY + altoProcedimiento - Separacion_caja_clase - 5);





    ///////////////////////////////////////////////caja Proteccion//////////////////////////////////////////////
    //Posicion de la caja
    var posProteccionX = posProcedimientoX + anchoProcedimiento + Separacion_normal; //izq-der
    var posProteccionY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoProteccion = Anchura_proteccion;
    var altoProteccion = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProteccionX, posProteccionY, anchoProteccion, altoProteccion);
    cuadroResultado.fillStyle = Color_proteccion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();

    //configuracion de la caja  clase
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProteccionX + anchoProteccion - Anchura_caja_clase - Separacion_caja_clase, posProteccionY + altoProteccion - Altura_caja_clase - Separacion_caja_clase - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_clase, Altura_caja_clase);
    cuadroResultado.fillStyle = Color_caja_clase;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_clase;
    cuadroResultado.stroke();

    //configuracion de la caja  puntuación
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProteccionX + anchoProteccion - Anchura_caja_puntuacion - Separacion_caja_puntuacion, posProteccionY + altoProteccion - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion, Altura_caja_puntuacion);
    cuadroResultado.fillStyle = Color_caja_puntuacion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "PROTECCI\xd3N COLECTIVA";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posProteccionX + anchoProteccion / 2) - (Tamano_texto / 2), posProteccionY + Margen_titulo + Tamano_titulo);


    //Texto clase
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Clase:", posProteccionX + 5, posProteccionY + altoProteccion - Altura_caja_puntuacion - Separacion_caja_puntuacion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_clase_protecciones_colectivas).width;
    texto.fillText(j_clase_protecciones_colectivas, posProteccionX + anchoProteccion - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProteccionY + altoProteccion - Altura_caja_puntuacion - Separacion_caja_puntuacion - 8);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Puntuaci\xf3n:", posProteccionX + 5, posProteccionY + altoProteccion - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_protecciones_colectivas_editada).width;
    texto.fillText(j_puntuacion_protecciones_colectivas_editada, posProteccionX + anchoProteccion - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProteccionY + altoProteccion - Separacion_caja_clase - 5);





    ///////////////////////////////////////////////caja FCVLA//////////////////////////////////////////////
    //Posicion de la caja
    var posFCVLAX = posProteccionX + anchoProteccion + Separacion_normal; //izq-der
    var posFCVLAY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoFCVLA = Anchura_vla;
    var altoFCVLA = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posFCVLAX, posFCVLAY, anchoFCVLA, altoFCVLA);
    cuadroResultado.fillStyle = Color_Exposicion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes;
    cuadroResultado.stroke();


    //configuracion de la caja  puntuación
    cuadroResultado.beginPath();
    cuadroResultado.rect(posFCVLAX + anchoFCVLA - Anchura_caja_puntuacion_vla - Separacion_caja_puntuacion, posFCVLAY + altoFCVLA - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion_vla, Altura_caja_puntuacion);
    cuadroResultado.fillStyle = Color_caja_puntuacion;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_puntuacion;
    cuadroResultado.stroke();


    //contenido caja
    //Titulo
    titulo = "FC(VLA)";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_titulo;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posFCVLAX + anchoFCVLA / 2) - (Tamano_texto / 2) - 1, posFCVLAY + Margen_titulo + Tamano_titulo);

    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Factor de", posFCVLAX + 5, posFCVLAY + altoFCVLA - 20);


    //Texto puntuación
    texto.fillStyle = Color_texto;
    texto.font = Pxl_texto + Fuente_texto;
    texto.fillText("Correcci\xf3n:", posFCVLAX + 5, posFCVLAY + altoFCVLA - 5);

    //Texto Caja
    texto.fillStyle = Color_numero;
    texto.font = Pxl_texto + Fuente_texto;
    Tamano_texto = texto.measureText(j_puntuacion_vla).width;
    texto.fillText(j_puntuacion_vla, posFCVLAX + anchoFCVLA - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posFCVLAY + altoFCVLA - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja Resultados//////////////////////////////////////////////
    //Posicion de la caja
    var posResultadosX = X_linea_izquierda_resultados; //izq-der
    var posResultadosY = Y_linea_superior_resultados; //arriba-abajo (eje de ordenadas clasico)
    var anchoResultados = Anchura_resultados;
    var altoResultados = Altura_resultados;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posResultadosX, posResultadosY, anchoResultados, altoResultados);
    cuadroResultado.fillStyle = Color_Resultados;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes_resultados;
    cuadroResultado.strokeStyle = Color_bordes_resultados;
    cuadroResultado.stroke();


    //configuracion de la caja  resultados
    cuadroResultado.beginPath();
    cuadroResultado.rect(posResultadosX + anchoResultados - Anchura_caja_resultados - Separacion_hor_caja_resultados, posResultadosY + altoResultados - Altura_caja_resultados - Separacion_caja_resultados - 2, Anchura_caja_resultados, Altura_caja_resultados);
    cuadroResultado.fillStyle = Color_caja_resultados;
    cuadroResultado.fill();
    cuadroResultado.lineWidth = Anchura_bordes;
    cuadroResultado.strokeStyle = Color_bordes_caja_resultados;
    cuadroResultado.stroke();

    //contenido caja
    //Titulo
    titulo = "Puntuaci\xf3n del riesgo por inhalaci\xf3n = ";
    Ancho_titulo = cuadroResultado.measureText(titulo).width;
    texto.fillStyle = Color_resultados;
    texto.font = Pxl_resultados + Fuente_titulo;
    texto.fillText(titulo, posResultadosX + 40, posResultadosY + Margen_titulo + Tamano_resultados + 8);

    //Texto Caja
    texto.fillStyle = Color_resultados;
    texto.font = Pxl_resultados + Fuente_titulo;
    Tamano_texto = texto.measureText(j_puntuacion_riesgo_por_inhalacion_editada).width;
    texto.fillText(j_puntuacion_riesgo_por_inhalacion_editada, posResultadosX + anchoResultados - Separacion_hor_caja_resultados - Margen_texto - Tamano_texto - 3, posResultadosY + altoResultados - Separacion_caja_clase - 10);




    ///////////////////////////////////////////////lineas//////////////////////////////////////////////

    cuadroResultado.beginPath();
    cuadroResultado.lineWidth = Ancho_lineas;
    cuadroResultado.strokeStyle = Color_lineas;

    //horizontal superior
    cuadroResultado.moveTo(posCantidadX + Anchura_normal / 2, posCantidadY + Altura_normal + Altura_separacion / 2);
    cuadroResultado.lineTo(posFrecuenciaX + Anchura_normal / 2, posCantidadY + Altura_normal + Altura_separacion / 2);

    //verticales hasta/desde la horizontal superior

    cuadroResultado.moveTo(posCantidadX + Anchura_normal / 2, posCantidadY + Altura_normal);
    cuadroResultado.lineTo(posCantidadX + Anchura_normal / 2, posCantidadY + Altura_normal + Altura_separacion / 2);

    cuadroResultado.moveTo(posFrecuenciaX + Anchura_normal / 2, posFrecuenciaY + Altura_normal);
    cuadroResultado.lineTo(posFrecuenciaX + Anchura_normal / 2, posFrecuenciaY + Altura_normal + Altura_separacion / 2);

    cuadroResultado.moveTo(posExposicionX + Anchura_normal / 2, posCantidadY + Altura_normal + Altura_separacion / 2);
    cuadroResultado.lineTo(posExposicionX + Anchura_normal / 2, posExposicionY);

    //Horizontal intermedia
    cuadroResultado.moveTo(posPeligroX + (Anchura_normal) / 2, posExposicionY + Altura_normal + Altura_separacion / 2);
    cuadroResultado.lineTo(posExposicionX + (Anchura_normal) / 2, posExposicionY + Altura_normal + Altura_separacion / 2);

    //verticales hasta/desde la horizontal intermedia

    cuadroResultado.moveTo(posPeligroX + Anchura_normal / 2, posPeligroY + Altura_normal);
    cuadroResultado.lineTo(posPeligroX + Anchura_normal / 2, posExposicionY + Altura_normal + Altura_separacion / 2);

    cuadroResultado.moveTo(posExposicionX + Anchura_normal / 2, posExposicionY + Altura_normal);
    cuadroResultado.lineTo(posExposicionX + Anchura_normal / 2, posExposicionY + Altura_normal + Altura_separacion / 2);

    cuadroResultado.moveTo(posRiesgoX + Anchura_larga / 2, posExposicionY + Altura_normal + Altura_separacion / 2);
    cuadroResultado.lineTo(posRiesgoX + Anchura_larga / 2, posRiesgoY);


    // Horizontal inferior
    cuadroResultado.moveTo(posRiesgoX + Anchura_larga / 2, posFCVLAY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));
    cuadroResultado.lineTo(posFCVLAX + Anchura_normal / 2, posFCVLAY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));

    // Verticales hast/desde horizontal inferior

    cuadroResultado.moveTo(posRiesgoX + Anchura_larga / 2, posRiesgoY + Altura_alta);
    cuadroResultado.lineTo(posRiesgoX + Anchura_larga / 2, posRiesgoY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));

    cuadroResultado.moveTo(posVolatilidadX + Anchura_normal / 2, posVolatilidadY + Altura_alta);
    cuadroResultado.lineTo(posVolatilidadX + Anchura_normal / 2, posRiesgoY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));

    cuadroResultado.moveTo(posProcedimientoX + Anchura_normal / 2, posProcedimientoY + Altura_alta);
    cuadroResultado.lineTo(posProcedimientoX + Anchura_normal / 2, posResultadosY);

    cuadroResultado.moveTo(posProteccionX + Anchura_larga / 2, posProteccionY + Altura_alta);
    cuadroResultado.lineTo(posProteccionX + Anchura_larga / 2, posRiesgoY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));

    cuadroResultado.moveTo(posFCVLAX + Anchura_normal / 2, posFCVLAY + Altura_alta);
    cuadroResultado.lineTo(posFCVLAX + Anchura_normal / 2, posRiesgoY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta) / 2));

    cuadroResultado.closePath();
    cuadroResultado.stroke();

}