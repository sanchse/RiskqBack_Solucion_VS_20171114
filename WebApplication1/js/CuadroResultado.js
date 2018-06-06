// JavaScript source code

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
    var X_linea_izquierda_caja_media = X_linea_izquierda_cajas_superiores + Anchura_normal + Separacion_normal +  Anchura_normal / 2;
    var Y_linea_superior_cajas_inferiores = Y_linea_superior_caja_media + Altura_normal + Altura_separacion;
    var X_linea_izquierda_cajas_inferiores = X_linea_izquierda_cajas_superiores + Anchura_normal / 2;
    var Y_linea_superior_resultados = Y_linea_superior_cajas_inferiores + Altura_normal + Altura_separacion;
    var X_linea_izquierda_resultados = X_linea_izquierda_caja_media;
  
 
    var Color_bordes = 'black';
    
    var Color_peligro = 'lightgreen';
    var Color_Exposicion = 'darkorange';
    var Color_Volatilidad = 'pink';
    var Color_Resultados = 'white';


       //////////////////////////////////////////////cajas clase/////////////////////////////////////////////
    var Anchura_caja_clase = 30;
    var Altura_caja_clase = 20;
    var Separacion_caja_clase = 3;
    var Anchura_bordes = 0.5;
    var Color_caja_clase = 'lemonchiffon';
    var Color_bordes_caja_clase = 'red';

    //////////////////////////////////////////////cajas puntuación/////////////////////////////////////////////
    var Anchura_caja_puntuacion = 40;
    var Anchura_caja_puntuacion_vla = 35;
    var Altura_caja_puntuacion = 20;
    var Separacion_caja_puntuacion = 3;
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
    texto.fillStyle = Color_titulo ;
    texto.font = Pxl_titulo + Fuente_titulo;
    Tamano_texto = texto.measureText(titulo).width;
    texto.fillText(titulo, (posPeligroX + anchoPeligro / 2) - (Tamano_texto / 2) - 3, posPeligroY + Margen_titulo + Tamano_titulo);

    //Texto clase
    texto.fillStyle = Color_texto ;
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
    cuadroResultado.fillStyle = Color_Exposicion;
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
    cuadroResultado.fillStyle = Color_Exposicion;
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
    cuadroResultado.rect(posRiesgoX + anchoRiesgo - Anchura_caja_puntuacion - Separacion_caja_puntuacion, posRiesgoY + altoRiesgo - Altura_caja_puntuacion - Separacion_caja_puntuacion, Anchura_caja_puntuacion, Altura_caja_puntuacion);
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
    Tamano_texto = texto.measureText(j_puntuacion_riesgo_potencial).width;
    texto.fillText(j_puntuacion_riesgo_potencial, posRiesgoX + anchoRiesgo - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posRiesgoY + altoRiesgo - Separacion_caja_clase - 5);



    ///////////////////////////////////////////////caja Volatilidad//////////////////////////////////////////////
    //Posicion de la caja
    var posVolatilidadX = posRiesgoX + anchoRiesgo + Separacion_normal; //izq-der
    var posVolatilidadY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoVolatilidad = Anchura_normal;
    var altoVolatilidad = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posVolatilidadX, posVolatilidadY, anchoVolatilidad, altoVolatilidad);
    cuadroResultado.fillStyle = Color_Volatilidad;
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
    cuadroResultado.fillStyle = Color_peligro;
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
    Tamano_texto = texto.measureText(j_puntuacion_procedimiento_trabajo).width;
    texto.fillText(j_puntuacion_procedimiento_trabajo, posProcedimientoX + anchoProcedimiento - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProcedimientoY + altoProcedimiento - Separacion_caja_clase - 5);





    ///////////////////////////////////////////////caja Proteccion//////////////////////////////////////////////
    //Posicion de la caja
    var posProteccionX = posProcedimientoX + anchoProcedimiento + Separacion_normal; //izq-der
    var posProteccionY = Y_linea_superior_cajas_inferiores; //arriba-abajo (eje de ordenadas clasico)
    var anchoProteccion = Anchura_proteccion;
    var altoProteccion = Altura_alta;

    //configuracion de la caja
    cuadroResultado.beginPath();
    cuadroResultado.rect(posProteccionX, posProteccionY, anchoProteccion, altoProteccion);
    cuadroResultado.fillStyle = Color_peligro;
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
    texto.fillText(titulo, (posProteccionX + anchoProteccion / 2) - (Tamano_texto / 2) , posProteccionY + Margen_titulo + Tamano_titulo);


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
    Tamano_texto = texto.measureText(j_puntuacion_protecciones_colectivas).width;
    texto.fillText(j_puntuacion_protecciones_colectivas, posProteccionX + anchoProteccion - Separacion_caja_clase - Margen_texto - Tamano_texto - 3, posProteccionY + altoProteccion - Separacion_caja_clase - 5);





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
    Tamano_texto = texto.measureText(j_puntuacion_riesgo_por_inhalacion).width;
    texto.fillText(j_puntuacion_riesgo_por_inhalacion, posResultadosX + anchoResultados - Separacion_hor_caja_resultados - Margen_texto - Tamano_texto - 3, posResultadosY + altoResultados - Separacion_caja_clase - 10);




    ///////////////////////////////////////////////lineas//////////////////////////////////////////////
  
    cuadroResultado.beginPath();
    cuadroResultado.lineWidth = Ancho_lineas; 
    cuadroResultado.strokeStyle = Color_lineas;
    
    //horizontal superior
    cuadroResultado.moveTo(posCantidadX + Anchura_normal / 2, posCantidadY + Altura_normal + Altura_separacion / 2);
    cuadroResultado.lineTo(posFrecuenciaX + Anchura_normal / 2, posCantidadY +Altura_normal + Altura_separacion / 2);

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
    cuadroResultado.moveTo(posRiesgoX + Anchura_larga / 2, posFCVLAY + Altura_alta + ((posResultadosY - posFCVLAY - Altura_alta)/2));
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

        //context.moveTo(posFUX + anchoFU / 2, posFUY + altoFU);
    //context.lineTo(posFUX + anchoFU / 2, posFUY + altoFU + espacioEntreCajasY / 2);

    //context.moveTo(posCUX - 2 + anchoCU / 2, posCUY + altoCU + espacioEntreCajasY / 2);
    //context.lineTo(posFUX + 2 + anchoFU / 2, posFUY + altoFU + espacioEntreCajasY / 2);

    //context.moveTo(posEPX + anchoEP / 2, posEPY);
    //context.lineTo(posEPX + anchoEP / 2, posCUY + altoCU + espacioEntreCajasY / 2);

    cuadroResultado.closePath();
    cuadroResultado.stroke();



}