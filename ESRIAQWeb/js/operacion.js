
// Variables datos de la operación  ***************************************************
// alert("Entra en each " + $(this).val() + " está seleccionado")

var urlbase;
var destinobase;
 
var Debug;
var operacion_bd = {};                  // alamcenar fila leida en BD
var regoperacion = {};                  // fila a insertar/actualizar BD  




var j_idOperacion;
var j_idUsuario;

var j_nombre;
var j_agente_quimico_operacion;
var j_descripcion;
var j_fecha_evaluacion = new Date();
var j_fecha_evaluacion_texto = j_fecha_evaluacion.getDate() + "/" + (j_fecha_evaluacion.getMonth() + 1) + "/" +j_fecha_evaluacion.getFullYear();


// Variables selección clase de peligro  ***************************************************

var j_seleccion_frases_H_si_no;
var j_no_aplica_frases_H_check = "0";
var j_seleccion_VLA_ED_si_no;
var j_seleccion_VLA_ED_mat_par_si_no;
var j_seleccion_VLA_ED_particulada = 0;
var j_seleccion_VLA_ED_no_particulada;
var j_seleccion_sustancia_comercial_si_no;
var j_seleccion_materiales_no_sujetos_a_normativa = 0;

var ArrayfrasesH = ['H304', 'H330', 'H331', 'H332', 'H334', 'H335', 'H336', 'H340', 'H341', 'H350', 'H351', 'H350i', 'H360', 'H360F', 'H360D', 'H360Fd', 'H360Df', 'H360FD', 'H361', 'H361f', 'H361d', 'H361fd', 'H362', 'H370', 'H371', 'H372', 'H373', 'EUH029', 'EUH031', 'EUH032', 'EUH070', 'EUH071'];
var ArrayclaspeligrofrasesHstring = ['3', '5', '4', '3', '4', '2', '2', '5', '4', '5', '4', '5', '4', '4', '4', '4', '4', '4', '3', '3', '3', '3', '3', '4', '3', '4', '3', '4', '4', '5', '5', '3'];
var ArrayclaspeligrofrasesH = [3, 5, 4, 3, 4, 2, 2, 5, 4, 5, 4, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 5, 5, 3];
var ArrayfrasesHestadocheck = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',];

var ArrayfrasesHseleccionadas = [];
var ArrayindicesfrasesHseleccionadas = [];
var Arrayclasepeligrofrasesseleccionadas = [];
var ArrayfrasesHtexto = [
    "Puede ser mortal en caso de ingestión y penetración en las vías respiratorias.",
    "Mortal en caso de inhalación.",
    "Tóxico en caso de inhalación.",
    "Nocivo en caso de inhalación",
    "Puede provocar síntomas de alergia o asma o dificultades respiratorias en caso de inhalación.",
    "Puede irritar las vías respiratorias.",
    "Puede provocar somnolencia o vértigo.",
    "Puede provocar defectos genéticos. ",
    "Se sospecha que provoca defectos genéticos.  ",
    "Puede provocar cáncer.  ",
    "Se sospecha que provoca cáncer. ",
    "Puede provocar cáncer por inhalación.",
    "Puede perjudicar la fertilidad o dañar al feto.  ",
    "Puede perjudicar a la fertilidad.",
    "Puede dañar al feto.",
    "Puede perjudicar a la fertilidad. Se sospecha que daña al feto.",
    "Puede dañar al feto. Se sospecha que perjudica a la fertilidad.",
    "Puede perjudicar a la fertilidad. Puede dañar al feto.",
    "Se sospecha que perjudica la fertilidad o daña al feto. ",
    "Se sospecha que perjudica a la fertilidad.",
    "Se sospecha que daña al feto.",
    "Se sospecha que perjudica a la fertilidad. Se sospecha que daña al feto.",
    "Puede perjudicar a los niños alimentados con leche materna.",
    "Provoca daños en los órganos.  ",
    "Puede provocar daños en los órganos.",
    "Provoca daños en los órganos tras exposiciones prolongadas o repetidas. ",
    "Puede provocar daños en los órganos tras exposiciones prolongadas o repetidas.  ",
    "En contacto con agua libera gases tóxicos.",
    "En contacto con ácidos libera gases tóxicos.",
    "En contacto con ácidos libera gases muy tóxicos.",
    "Tóxico en contacto con los ojos.",
    "Corrosivo para las vías respiratorias.",
];
var ArrayfrasesHHTML = [0,9,18,27,1,10,19,28,2,11,20,29,3,12,21,30,4,13,22,31,5,14,23,6,15,24,7,16,25,8,17,26];
var j_num_frases_seleccionadas = 0;

var Arrayseleccionpeligro = ['Frases', 'VLA no partivulada', 'VLA particulada', 'Materias y procesos'];

var ArrayVLAparticulada = ['VLA-ED  > 10', '1 < VLA-ED <= 10', '0,1 < VLA-ED <= 1', '0,01 < VLA-ED  <= 0,1', 'VLA-ED <=0,01'];
var ArrayclaseVLAparticulada = ['1', '2', '3', '4', '5'];
var ArrayVLAnoparticulada = ['VLA-ED  > 100', '10 < VLA-ED <= 100', '1 < VLA-ED <= 10', '0,1 < VLA-ED  <= 1', 'VLA-ED <=0,1'];
var ArrayclaseVLAnoparticulada = ['1', '2', '3', '4', '5'];

var Arraymaterialesnosujetosanormativa = ['hierro', 'soldadura', 'maderas', 'amianto'];
var Arrayclasematerialesnosujetosanormativa = ['2', '3', '4', '5'];

var j_clase_peligro = "1";

var Arrayvcantidaddia = ['< 100 g o ml', '>=100 g o ml y < 10 kg o l', '>=10 y < 100kg o l', '<= 100 y < 1000 kg o l', '>= 1000 kg o l'];
var Arrayclasecantidaddia = ['1', '2', '3', '4', '5'];
var j_seleccion_cantidad_dia = 0;
var j_clase_cantidad_dia;

var Arraytipofrecuenciautilizacion = ['No', 'día', 'semana', 'mes', 'año'];
var Arrayfrecuenciautilizacion = ['Ocasional', 'Intermitente', 'Frecuente', 'Permannente'];
var Arrayclasefrecuenciautilizacion = ['0', '1', '2', '3', '4'];
var j_seleccion_tipo_frecuencia_utilizacion = 0;
var j_seleccion_frecuencia_utilizacion = 0;
var j_clase_frecuencia_utilizacion;

var j_clase_exposicion_potencial;
var ArrayClaseFrecuenciaClaseCantidad = [['0', '0', '0', '0', '0'], ['1', '2', '3', '3', '4'], ['1', '2', '3', '4', '5'], ['1', '2', '3', '4', '5'], ['1', '2', '4', '5', '5']];
var i = 0;
var j = 0;

var j_clase_riesgo_potencial = "1";
var ArrayClasePeligroClaseExposicionPotencial = [['0', '1', '1', '1', '1', '2'], ['0', '1', '1', '2', '2', '3'], ['0', '2', '2', '3', '3', '4'], ['0', '3', '3', '4', '4', '5'], ['0', '4', '4', '5', '5', '5']];
var ArrayClasePeligro1ClaseExposicionPotencial = ['0', '1', '1', '1', '1', '2'];
var ArrayClasePeligro2ClaseExposicionPotencial = ['0', '1', '1', '2', '2', '3'];
var ArrayClasePeligro3ClaseExposicionPotencial = ['0', '2', '2', '3', '3', '4'];
var ArrayClasePeligro4ClaseExposicionPotencial = ['0', '3', '3', '4', '4', '5'];
var ArrayClasePeligro5ClaseExposicionPotencial = ['0', '4', '4', '5', '5', '5'];

var j_puntuacion_riesgo_potencial = 0;
var j_puntuacion_riesgo_potencial_editada = 0;
var ArrayPuntuacionRiesgoPotencial = ['0', '1', '10', '100', '1000', '10000'];


// Variables gestión volatilidad o pulverulencia  ***************************************************

var Arrayvolatilidadpulverulenciaestado = ['Sólido', 'Líquido', 'Spraying', 'Partículas y vapor'];
var j_seleccion_estado_vol_pul = 0;

var Arrayvolatilidadpulverulenciasolido = ['Polvo fino', 'Polvo en grano', 'Pastillas, granulado, escamas'];
var Arrayclasevolatilidadpulverulenciasolido = ['3', '2', '1'];
var j_seleccion_volatilidad_pulverulencia_solido = 0;
var j_clase_volatilidad_pulverulencia_solido;

var j_temp_uso_volatilidad_pulverulencia_liquido = 0;
var j_temp_ebullicion_volatilidad_pulverulencia_liquido = 0;
var j_clase_volatilidad_pulverulencia_liquido;
var referencia1;
var referencia2;

var j_seleccion_volatilidad_pulverulencia_solvap_solido;
var j_clase_volatilidad_pulverulencia_solvap_solido;

var Arrayvolatilidadpulverulenciasolvap_liquido = ['Pv < 0,5 KPa', '0,5 KPa <= Pv < 25 KPa', 'Pv <= 25 KPa'];
var Arrayclasevolatilidadpulverulenciasolvapliquido = ['3', '2', '1'];
var j_seleccion_volatilidad_pulverulencia_solvap_liquido;
var j_clase_volatilidad_pulverulencia_solvap_liquido;

var Arraypuntuacionvolatilidadpulverulencia = ['1', '10', '100'];
var j_clase_volatilidad_pulverulencia = "0";
var j_puntuacion_volatilidad_pulverulencia = "0";

// Variables gestión procedimiento trabajo  ***************************************************

var Arrayclaseprocedimientotrabajo = ['4', '3', '2', '1'];
var Arraypuntuacionprocedimientotrabajo = ['1', '0.5', '0.05', '0.001'];
var j_seleccion_procedimiento_trabajo = 0;
var j_clase_procedimiento_trabajo = "4";
var j_puntuacion_procedimiento_trabajo = 1;
var j_puntuacion_procedimiento_trabajo_editada = 1;

// Variables gestión corrección por protecciones colectivas***************************************************
var Arrayclaseproteccionescolectivas = ['5', '4', '3', '3', '3', '2', '2', '2', '2', '2', '2', '2', '1'];
var Arraypuntuacionproteccionescolectivas = ['10', '1', '0.7', '0.7', '0.7', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.1', '0.001'];
var j_seleccion_protecciones_colectivas = 0;
var j_clase_protecciones_colectivas = "5";
var j_puntuacion_protecciones_colectivas = 10;
var j_puntuacion_protecciones_colectivas_editada = 10;

// Variables gestión corrección por VLA ***************************************************

var tablaVLA = ['VLA-ED  > 1,1',
    '0,01 < VLA-ED <= 0,1 ,10',
    '0,1 < VLA-ED <= 0,01,30',
    'VLA-ED  <= 0,001, 100'];
var ArraypuntuacioncorreccionVLA = ['1', '10', '30', '100'];
var j_seleccion_vla = 0;
var j_puntuacion_vla = 1;

// Variables gestión resultados ***************************************************

var j_puntuacion_riesgo_por_inhalacion = 0;
var j_puntuacion_riesgo_por_inhalacion_editada = 0;

var j_prioridad_accion = "3";

var operacion_bd;          // definición de variable para datos como Json


$(document).ready(function () {

    $("#ml02").addClass("selected");
    $("#ml01").removeClass("selected");
    $("#ml03").removeClass("selected");
    $("#ml04").removeClass("selected");

    generar_frases_H();
    generar_lista_frases_H();
    setup_ajax();
    
    $('.titulolistaindpeligro').click(function (e) {
         //Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            $('.listaindpeligro .titulolistaindpeligro').removeClass('active');
            $('.listaindpeligro .contenidolistaindpeligro').slideUp(300).removeClass('open');
            $("#titulolistaindpeligro").html("Ver la lista de indicaciones de peligro H y sus descripciones");
        } else {
        //    close_listaindpeligro_seccion();
            $('.listaindpeligro .titulolistaindpeligro').removeClass('active');
            $('.listaindpeligro .contenidolistaindpeligro').slideUp(300).removeClass('open');
        //    // Add active class to section title
            $(this).addClass('active');
        //    // Open up the hidden content panel
            $('.listaindpeligro ' + currentAttrValue).slideDown(300).addClass('open');
            $("#titulolistaindpeligro").html("Ocultar la lista de indicaciones de peligro H y sus descripciones");
        }

        
        e.preventDefault();

    });

    
    $(".tooltip").mouseover(function () {
        $(".tooltip_txt").hide();
        eleOffset = $(this).offset();

        $(this).next().fadeIn("fast").css({
            left: 242,
            top: eleOffset.top + 24
        });
    }).mouseout(function () {
        $(this).next().hide();
    });

    // Obtener variables de sesion 

    j_idUsuario = document.getElementById("ID_Usuario").value;
    urlbase = document.getElementById("RQBack_URL").value;
    destinobase = urlbase + "/api/rq_operaciones/";



    
    if ((obtenerParamURL()["idOperacion"]) == null) {
        inicializa_variables_j();
        inicializa_variables_visuales();
        
    }
    else {
        j_idOperacion = obtenerParamURL()["idOperacion"];
        leer_operacion();
        
      
    }
        
    dibujar_lineas_resultados();
    
    $(".numero_decimal").keypress(function (e) { /* para los campos de valores numéricos */
        var key = e.charCode || e.keyCode || 0;
        var keychar = String.fromCharCode(key);
        if (((key == 8 || key == 9 || key == 46 || key == 35 || key == 36 || (key >= 37 && key <= 40)) && e.charCode == 0) /* backspace, end, begin, top, bottom, right, left, del, tab */
            || (key >= 48 && key <= 57) || key == 46) { /* 0-9 y . */
            return;
        } else {
            e.preventDefault();
        }
    });

     // Gestión pantalla inicial operaciones ***************************************************

    $("#substep11Next").click(function () {
        j_nombre = $("#nombre").val();
        j_descripcion = $("#descripcion").val();
        j_agente_quimico_operacion = $("#agentequimico").val();
        $("#stepDesc1").removeClass("current");
        $("#stepDesc1 span").removeClass("current");
        $("#stepDesc1 a").removeClass("current");
        $("#substep11").hide();
        $("#stepDesc2").addClass("current");
        $("#stepDesc2 span").addClass("current");
        $("#stepDesc2 a").addClass("current");
        $("#substep21").show();
    });

    // Gestión Riesgo Potencial ***************************************************

    $("#substep21Prev").click(function () {
        $("#stepDesc2").removeClass("current");
        $("#stepDesc2 span").removeClass("current");
        $("#stepDesc2 a").removeClass("current");
        $("#substep21").hide();
        $("#stepDesc1").addClass("current");
        $("#stepDesc1 span").addClass("current");
        $("#stepDesc1 a").addClass("current");
        mostrar_datos_operacion();
        $("#substep11").show();
    });

    $("#substep21Next").click(function () {
        $("#substep21").hide();
        ini_visual_riesgo_potencial();
        $('.listaindpeligro .contenidolistaindpeligro').slideUp(300).removeClass('open');
        $("#substep22").show();


    });

    $("#substep22Prev").click(function () {
        if (j_seleccion_materiales_no_sujetos_a_normativa == "0") {

            $("#substep22").hide();
            $("#substep21").show();
        }
        else {
            ini_visual_riesgo_potencial();
            j_seleccion_materiales_no_sujetos_a_normativa = "0";
        }
    });

    $("#substep22Next").click(function () {
        if (j_seleccion_frases_H_si_no == "1" || j_seleccion_VLA_ED_si_no == "1" || j_seleccion_sustancia_comercial_si_no == "1" || j_seleccion_materiales_no_sujetos_a_normativa == "1") {

            $("#substep22").hide();
            $("#substep23").show();

        }
        else {
            $("#seleccion_por_frases_H").hide();
            $("#seleccion_peligrosidad_frasesH").hide();
            $("#seleccion_por_VLA_ED").hide();
            $("#seleccion_VLA_ED").hide();
            $("#seleccion_por_sustancia_comercial").hide();
            $("#seleccion_sustancia_comercial").show();
            j_seleccion_materiales_no_sujetos_a_normativa = "1";
        }


    });

    $("#substep23Prev").click(function () {
        $("#substep23").hide();
        $('.listaindpeligro .contenidolistaindpeligro').slideUp(300).removeClass('open');
        $("#substep22").show();
    });

    $("#substep23Next").click(function () {
        $("#substep23").hide();
        $("#substep24").show();
    });

    $("#substep24Prev").click(function () {
        $("#substep24").hide();
        $("#substep23").show();
    });

    $("#substep24Next").click(function () {
        $("#substep24").hide();
        calcular_riesgo_potencial();
        mostrar_riesgo_potencial();
        dibujar_lineas_riesgo_potencial();
        $("#substep25").show();
    });

    $("#substep25Prev").click(function () {
        $("#substep25").hide();
        $("#substep24").show();
    });

    $("#substep25Next").click(function () {
        $("#stepDesc2").removeClass("current");
        $("#stepDesc2 span").removeClass("current");
        $("#stepDesc2 a").removeClass("current");
        $("#substep25").hide();
        $("#stepDesc3").addClass("current");
        $("#stepDesc3 span").addClass("current");
        $("#stepDesc3 a").addClass("current");
        $("#substep31").show();
    });

    // Gestión Volatilidad Pulverulencia ***************************************************

    $("#substep31Prev").click(function () {
        $("#stepDesc3").removeClass("current");
        $("#stepDesc3 span").removeClass("current");
        $("#stepDesc3 a").removeClass("current");
        $("#substep31").hide();
        $("#stepDesc2").addClass("current");
        $("#stepDesc2 span").addClass("current");
        $("#stepDesc2 a").addClass("current");
        calcular_riesgo_potencial();
        mostrar_riesgo_potencial();
        dibujar_lineas_riesgo_potencial();
        $("#substep25").show();
    });

    $("#substep31Next").click(function () {
        $("#substep31").hide();
        ini_visual_volatilidad_pulverulencia()
        $("#substep32").show();
    });
    $("#substep32Prev").click(function () {
        $("#substep32").hide();
        $("#substep31").show();
    });

    $("#substep32Next").click(function () {
        $("#substep32").hide();
        j_seleccion_estado_vol_pul = $("input[name='volatilidad_pulverulencia_estado']:checked").val();
        switch (j_seleccion_estado_vol_pul) {
            case '0':
                $("#substep331").show();
                $("#substep332").hide();
                $("#substep334").hide();
                break

            case '1':
                $("#substep331").hide();
                $("#substep332").show();
                $("#substep334").hide();
                break

            case '2':
                calcular_volatilidad_pulverulencia();
                mostrar_volatilidad_pulverulencia();
                $("#substep34").show();
                $("#substep331").hide();
                $("#substep332").hide();
                $("#substep334").hide();
                break

            case '3':
                $("#substep331").hide();
                $("#substep332").hide();
                $("#substep334").show();
                break
        }

    });

    $("#substep331Prev").click(function () {
        $("#substep331").hide();
        $("#substep32").show();
    });

    $("#substep331Next").click(function () {
        $("#substep331").hide();
        calcular_volatilidad_pulverulencia();
        mostrar_volatilidad_pulverulencia();
        $("#substep34").show();
    });

    $("#substep332Prev").click(function () {
        $("#substep332").hide();
        $("#substep32").show();
    });

    $("#substep332Next").click(function () {
        $("#substep332").hide();
        calcular_volatilidad_pulverulencia();
        mostrar_volatilidad_pulverulencia();
        $("#substep34").show();
    });

    $("#substep334Prev").click(function () {
        $("#substep334").hide();
        $("#substep32").show();
    });

    $("#substep334Next").click(function () {
        $("#substep334").hide();
        calcular_volatilidad_pulverulencia();
        mostrar_volatilidad_pulverulencia();
        $("#substep34").show();
    });

    $("#substep34Prev").click(function () {
        $("#substep34").hide();
        $("#substep32").show();
    });

    $("#substep34Next").click(function () {
        $("#stepDesc3").removeClass("current");
        $("#stepDesc3 span").removeClass("current");
        $("#stepDesc3 a").removeClass("current");
        $("#substep34").hide();
        $("#stepDesc4").addClass("current");
        $("#stepDesc4 span").addClass("current");
        $("#stepDesc4 a").addClass("current");
        ini_visual_procedimiento_trabajo();
        $("#substep41").show();
    });

    // Gestión Procedimiento de trabajo ***************************************************

    $("#substep41Prev").click(function () {
        $("#stepDesc4").removeClass("current");
        $("#stepDesc4 span").removeClass("current");
        $("#stepDesc4 a").removeClass("current");
        $("#substep41").hide();
        $("#stepDesc3").addClass("current");
        $("#stepDesc3 span").addClass("current");
        $("#stepDesc3 a").addClass("current");
        ini_visual_volatilidad_pulverulencia()
        calcular_volatilidad_pulverulencia();
        mostrar_volatilidad_pulverulencia();
        $("#substep34").show();
    });

    $("#substep41Next").click(function () {
        $("#substep41").hide();
        calcular_procedimiento_trabajo()
        mostrar_procedimiento_trabajo();
        $("#substep42").show();
    });

    $("#substep42Prev").click(function () {
        $("#substep42").hide();
        ini_visual_procedimiento_trabajo();
        $("#substep41").show();
    });

    $("#substep42Next").click(function () {
        $("#stepDesc4").removeClass("current");
        $("#stepDesc4 span").removeClass("current");
        $("#stepDesc4 a").removeClass("current");
        $("#substep42").hide();
        $("#stepDesc5").addClass("current");
        $("#stepDesc5 span").addClass("current");
        $("#stepDesc5 a").addClass("current");
        ini_visual_protecciones_colectivas();
        $("#substep51").show();
    });


    // Gestión Protecciones Colectivas ***************************************************

    $("#substep51Prev").click(function () {
        $("#stepDesc5").removeClass("current");
        $("#stepDesc5 span").removeClass("current");
        $("#stepDesc5 a").removeClass("current");
        $("#substep51").hide();
        $("#stepDesc4").addClass("current");
        $("#stepDesc4 span").addClass("current");
        $("#stepDesc4 a").addClass("current");
        calcular_procedimiento_trabajo();
        mostrar_procedimiento_trabajo();
        $("#substep42").show();
    });

    $("#substep51Next").click(function () {
        $("#substep51").hide();
        $("#caja_protecciones_colectivas").css({ "background-color": "green" });
        calcular_protecciones_colectivas();
        mostrar_protecciones_colectivas();
        $("#substep52").show();
    });

    $("#substep52Prev").click(function () {
        $("#substep52").hide();
        ini_visual_protecciones_colectivas();
        $("#substep51").show();
    });

    $("#substep52Next").click(function () {
        $("#stepDesc5").removeClass("current");
        $("#stepDesc5 span").removeClass("current");
        $("#stepDesc5 a").removeClass("current");
        $("#substep52").hide();
        $("#stepDesc6").addClass("current");
        $("#stepDesc6 span").addClass("current");
        $("#stepDesc6 a").addClass("current");
        ini_visual_correccion_VLA();
        $("#substep61").show();
    });
    // Gestión corrección por VLA ***************************************************

    $("#substep61Prev").click(function () {
        $("#stepDesc6").removeClass("current");
        $("#stepDesc6 span").removeClass("current");
        $("#stepDesc6 a").removeClass("current");
        $("#substep61").hide();
        $("#stepDesc5").addClass("current");
        $("#stepDesc5 span").addClass("current");
        $("#stepDesc5 a").addClass("current");
        calcular_protecciones_colectivas();
        mostrar_protecciones_colectivas();
        $("#substep52").show();
    });

    $("#substep61Next").click(function () {
        $("#substep61").hide();
        $("#caja_vla").css({ "background-color": "yellow" });
        calcular_correccion_VLA()
        mostrar_correccion_VLA();
        $("#substep62").show();
    });

    $("#substep62Prev").click(function () {
        $("#substep62").hide();
        ini_visual_correccion_VLA();
        $("#substep61").show();
    });

    $("#substep62Next").click(function () {
        $("#stepDesc6").removeClass("current");
        $("#stepDesc6 span").removeClass("current");
        $("#stepDesc6 a").removeClass("current");
        $("#substep62").hide();
        $("#stepDesc7").addClass("current");
        $("#stepDesc7 span").addClass("current");
        $("#stepDesc7 a").addClass("current");
        calcular_mostrar_resultados();
        dibujar_lineas_resultados();
        $("#substep71").show();
    });

    // Resultados ***************************************************

    $("#substep71Prev").click(function () {
        $("#stepDesc7").removeClass("current");
        $("#stepDesc7 span").removeClass("current");
        $("#stepDesc7 a").removeClass("current");
        $("#substep71").hide();
        $("#stepDesc6").addClass("current");
        $("#stepDesc6 span").addClass("current");
        $("#stepDesc6 a").addClass("current");
        calcular_correccion_VLA()
        mostrar_correccion_VLA();
        $("#substep62").show();
    });

    $("#substep71Next").click(function () {
        $("#substep71").hide();
        $("#substep72").show();
        mostrar_prioridad_accion();
    });

    $("#substep72Prev").click(function () {
        $("#substep72").hide();
        $("#substep71").show();
    });

    $("#substep72Next").click(function () {
        $("#substep72").hide();
    });

    $("#GrabaOperacion").click(function () {
        if (j_idOperacion == "" || 0 ) {
            insertar_operacion();
            //$("#enlaceaMisOperaciones").attr('href', 'PaginaMisOperaciones.aspx?idUsuario=' + j_idUsuario);
            
        } 
        else {
            //$("#titulorespuesta").html("Operación actualizada correctamente");
            actualizar_operacion();
            //$("#enlaceaMisOperaciones").attr('href', 'PaginaMisOperaciones.aspx?idUsuario=' + j_idUsuario);
            
        }
      
    });

    $("input[name=frases_H]").change(function () {
        j_seleccion_frases_H_si_no = $("input[name='frases_H']:checked").val();
        if (j_seleccion_frases_H_si_no == 0) {
            ArrayfrasesHseleccionadas.length = 0;
            j_num_frases_seleccionadas = 0
            j_no_aplica_frases_H_check = "0";
        } 
        else {
            ArrayfrasesHseleccionadas.length = 0;
            j_num_frases_seleccionadas = 0;
            j_no_aplica_frases_H_check = "1";
        }
        ini_visual_riesgo_potencial();
    });

    $("input[name=NoaplicaFrasesH]").change(function () {
        if ($(this).is(':checked')) {
            j_no_aplica_frases_H_check = "1";
            FrasesH = '#tabla_frasesH'
            $(FrasesH + " input:checked").each(function (i) { // para los marcados, desmarca
                $(this).prop("checked", false);
            });
            ArrayfrasesHseleccionadas.length = 0;
            j_num_frases_seleccionadas = 0;
        }
        else {
            if (j_num_frases_seleccionadas == 0) {
                j_no_aplica_frases_H_check = "1"
            }
            else {
                j_no_aplica_frases_H_check = "0";
            } 
            
        }
        ini_visual_riesgo_potencial();
    });

    $("input[name=FraseH304]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH330]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH331]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH332]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH334]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH335]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH336]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH340]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH341]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH350]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH351]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH350i]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360F]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360D]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360Fd]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360Df]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH360FD]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH361]").change(function () { if ($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else { j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH361f]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH361d]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH361fd]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH362]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH370]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH371]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH372]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseH373]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseEUH029]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseEUH031]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseEUH032]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseEUH070]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });
    $("input[name=FraseEUH071]").change(function() {if($(this).is(':checked')) { j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1; $("input[name=NoaplicaFrasesH]").prop("checked", false) } else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if(j_num_frases_seleccionadas == 0) { j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true); } } });


    $("input[name=VLA_ED]").change(function () {
        j_seleccion_VLA_ED_si_no = $("input[name='VLA_ED']:checked").val();
        ini_visual_riesgo_potencial();
    });

    $("input[name=VLA_ED_mat_par]").change(function () {
        j_seleccion_VLA_ED_mat_par_si_no = $("input[name='VLA_ED_mat_par']:checked").val();
        ini_visual_riesgo_potencial();
    });

    $("input[name=VLA_ED_par]").change(function () {
        j_seleccion_VLA_ED_particulada = $("input[name='VLA_ED_par']:checked").val();
        ini_visual_riesgo_potencial();
    });

    $("input[name=VLA_ED_no_par]").change(function () {
        j_seleccion_VLA_ED_no_particulada = $("input[name='VLA_ED_no_par']:checked").val();
        ini_visual_riesgo_potencial();
     });

    $("input[name=sustancia_comercial]").change(function () {
        j_seleccion_sustancia_comercial_si_no = $("input[name='sustancia_comercial']:checked").val();
        ini_visual_riesgo_potencial();
    });

    

    $("input[name=clase_exposicion_potencial_frecuencia]").change(function () {
        j_seleccion_tipo_frecuencia_utilizacion = $("input[name='clase_exposicion_potencial_frecuencia']:checked").val();
        switch (j_seleccion_tipo_frecuencia_utilizacion) {
            case '0':
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                break

            case '1':
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").show();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                break

            case '2':
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").show();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                break

            case '3':
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").show();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                break

            case '4':
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").show();
                break

        }

    });

    $("input[name=seleccion_clase_exposicion_potencial_frecuencia_diaria]").change(function () {
        j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_diaria']:checked").val();
    });

    $("input[name=seleccion_clase_exposicion_potencial_frecuencia_semanal]").change(function () {
        j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_semanal']:checked").val();
    });

    $("input[name=seleccion_clase_exposicion_potencial_frecuencia_mensual]").change(function () {
        j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_mensual']:checked").val();
    });

    $("input[name=seleccion_clase_exposicion_potencial_frecuencia_anual]").change(function () {
        j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_anual']:checked").val();
    });

    
})

// Fin de funciones para ejecutar al cargar la página ***************************************************

// Operaciones con ajax - BD ***************************************************

// Set up **************************************************

function setup_ajax() {
   
    $.ajaxSetup({
        contentType: "application/json",
        error: function (jqXHR, textStatus, errorThrown) {
            if (jqXHR.status === 0) {
                alert('Not connect: Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (textStatus === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (textStatus === 'timeout') {
                alert('Time out error.');
            } else if (textStatus === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Failed to process, please try again: ' + jqXHR.responseText);
            }
        }
    });
}

// Leer una operación a partir de la clave **************************************************


function leer_operacion() {
  
   operacion_bd = {};
   //var dataform = { ID_usuario: 2 };
    //console.log("registerObj :", registerObj);

   //url: "http://sanchse-001-site1.etempurl.com/api/rq_operaciones/" + j_idOperacion,   
   //url: "http://localhost:8081/api/rq_operaciones/" + j_idOperacion,   

    $.ajax({
        url: destinobase + j_idOperacion,   
        type: "GET",
        contentType: "application/json",
        //data: JSON.stringify(dataform),
        success: function (data) {
            //alert("Successfully Registered..");
            operacion_bd = data
            inicializa_variables_j_desde_Json();
            inicializa_variables_visuales();
           
            //alert("longitud leido data " + data)
            //console.log("operacion_bd :", operacion_bd);
            
        }
        //error: function (xhRequest, ErrorText, thrownError) {
        //    alert("Failed to process correctly, please try again");
        //}
    });
}



// Insertar operación a partir a partir de un registro **************************************************

function insertar_operacion() {

    
    j_idOperacion = 0;
    prepararfila();
    
    //console.log("regoperacion :", regoperacion);

    //url: "http://sanchse-001-site1.etempurl.com/api/rq_operaciones/",
    //url: "http://localhost:8081/api/rq_operaciones/",

    $.ajax({
        url: destinobase,
        type: "POST",
        data: JSON.stringify(regoperacion),
        contentType: "application/json",
        success: function (data) {
            
            $("#titulorespuesta").html("Operación añadida correctamente");
            $("#substep71").hide();
            $("#steps").hide();
            $("#substep73").show();
            //alert("Successfully Registered..");

          
        },
        error: function (xhRequest, ErrorText, thrownError) {
            alert("POST Failed to process correctly, please try again");
        }

    });

}


// Actualizar una operación a partir a partir de un registro **************************************************



function actualizar_operacion() {

    prepararfila();

    // url: "http://sanchse-001-site1.etempurl.com/api/rq_operaciones/" + j_idOperacion,
    // url: "http://localhost:8081/api/rq_operaciones/" + j_idOperacion,

    $.ajax({
        
        url: destinobase + j_idOperacion, 
        type: "PUT",
        data: JSON.stringify(regoperacion),
        contentType: "application/json",
        success: function (data) {
            $("#titulorespuesta").html("Operación actualizada correctamente");
            $("#substep71").hide();
            $("#steps").hide();
            $("#substep73").show();
            //alert("PUT Successfully Registered..");
        },
        error: function (xhRequest, ErrorText, thrownError) {
            alert("PUT Failed to process correctly, please try again");
        }

    });

}


function prepararfila() {
    var frasesH_bd = "";
    for (i in ArrayfrasesHseleccionadas) {

        frasesH_bd += ArrayfrasesHseleccionadas[i];
        frasesH_bd += "#";
    }

    regoperacion = {
        "ID_Operacion": j_idOperacion,
        "ID_Usuario": j_idUsuario,
        "nombre": j_nombre,
        "agentequimicooperacion": j_agente_quimico_operacion,
        "descripcion": j_descripcion,
        "seleccionfrasesH": j_seleccion_frases_H_si_no,
        "noaplicafrasesHcheck": j_no_aplica_frases_H_check,
        "seleccionVLAED": j_seleccion_VLA_ED_si_no,
        "seleccionVLAEDmatpar": j_seleccion_VLA_ED_mat_par_si_no,
        "seleccionVLAEDparticulada": j_seleccion_VLA_ED_particulada,
        "seleccionVLAEDnoparticulada": j_seleccion_VLA_ED_no_particulada,
        "seleccionsustanciacomercialsino": j_seleccion_sustancia_comercial_si_no,
        "seleccionmaterialesnosujetosanormativa": j_seleccion_materiales_no_sujetos_a_normativa,
        "frasesHseleccionadas": frasesH_bd,
        "clasepeligro": j_clase_peligro,
        "seleccioncantidaddia": j_seleccion_cantidad_dia,
        "clasecantidaddia": j_clase_cantidad_dia,
        "selecciontipofrecuenciautilizacion": j_seleccion_tipo_frecuencia_utilizacion,
        "seleccionfrecuenciautilizacion": j_seleccion_frecuencia_utilizacion,
        "clasefrecuenciautilizacion": j_clase_frecuencia_utilizacion,
        "claseexposicionpotencial": j_clase_exposicion_potencial,
        "claseriesgopotencial": j_clase_riesgo_potencial,
        "puntuacionriesgopotencial": j_puntuacion_riesgo_potencial,
        "seleccionestadovolpul": j_seleccion_estado_vol_pul,
        "seleccionvolatilidadpulverulenciasolido": j_seleccion_volatilidad_pulverulencia_solido,
        "clasevolatilidadpulverulenciasolido": j_clase_volatilidad_pulverulencia_solido,
        "tempusovolatilidadpulverulencialiquido": j_temp_uso_volatilidad_pulverulencia_liquido,
        "tempebullicionvolatilidadpulverulencialiquido": j_temp_ebullicion_volatilidad_pulverulencia_liquido,
        "clasevolatilidadpulverulenciaLiquido": j_clase_volatilidad_pulverulencia_liquido,
        "seleccionvolatilidadpulverulenciasolvapsolido": j_seleccion_volatilidad_pulverulencia_solvap_solido,
        "clasevolatilidadpulverulenciasolvapsolido": j_clase_volatilidad_pulverulencia_solvap_solido,
        "seleccionvolatilidadpulverulenciasolvapliquido": j_seleccion_volatilidad_pulverulencia_solvap_liquido,
        "clasevolatilidadpulverulenciasolvapliquido": j_clase_volatilidad_pulverulencia_solvap_liquido,
        "clasevolatilidadvulverulencia": j_clase_volatilidad_pulverulencia,
        "puntuacionvolatilidadvulverulencia": j_puntuacion_volatilidad_pulverulencia,
        "seleccionprocedimientotrabajo": j_seleccion_procedimiento_trabajo,
        "claseprocedimientotrabajo": j_clase_procedimiento_trabajo,
        "puntuacionprocedimientotrabajo": j_puntuacion_procedimiento_trabajo * 1000,
        "seleccionproteccionescolectivas": j_seleccion_protecciones_colectivas,
        "claseproteccionescolectivas": j_clase_protecciones_colectivas,
        "puntuacionproteccionescolectivas": j_puntuacion_protecciones_colectivas * 1000,
        "seleccionvla": j_seleccion_vla,
        "puntuacionvla": j_puntuacion_vla,
        "puntuacionriesgoporinhalacion": j_puntuacion_riesgo_por_inhalacion * 1000000,
        "prioridadaccion": j_prioridad_accion,
    };

    //console.log("regoperacion :", regoperacion);
}



function obtenerParamURL() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

function generar_frases_H() {
    var j_tabla_frasesH_HTML = "";
    var tb_id_Frase = "";
    var tb_name_Frase = "";
    var tb_value_Frase = "";
    var tb_texto_Frase = "";

    
    j_tabla_frasesH_HTML += "<tr>";

    for (j in ArrayfrasesHHTML) {

        i = ArrayfrasesHHTML[j];

        if (j == 4 || j == 8 || j == 12 || j == 16 || j == 20 || j == 23 || j == 26 || j == 29) {

            j_tabla_frasesH_HTML += "</tr>";
            j_tabla_frasesH_HTML += "<tr>";
        }

        else {
        }

        tb_id_Frase = "'id_Frase" + ArrayfrasesH[i] + "'";
        tb_name_Frase = "'Frase" + ArrayfrasesH[i] + "'";
        tb_value_Frase = ArrayfrasesH[i];
        tb_texto_Frase = ArrayfrasesHtexto[i];
        j_tabla_frasesH_HTML += "<td> <div class='checkboxlabel'> <input id=" + tb_id_Frase + " name=" + tb_name_Frase + " type='checkbox' value=" + tb_value_Frase + " /><label class='tooltip' for=" + tb_id_Frase + "><b>" + tb_value_Frase + "</b></label> <div class='tooltip_txt'><p><b><i>" + tb_texto_Frase + "</i></b></p></div></div></td>";
    }
    j_tabla_frasesH_HTML += "</tr>";

    $("#tabla_frasesH").html(j_tabla_frasesH_HTML);

}

function generar_lista_frases_H() {
    var j_lista_frasesH_HTML = "";

    for (j in ArrayfrasesHHTML) {                    

        j_lista_frasesH_HTML += "<tr>";
        j_lista_frasesH_HTML += "<td>" + ArrayfrasesH[j] + " </td> <td>" + ArrayfrasesHtexto[j] + "</td>";
        j_lista_frasesH_HTML += "</tr>";

     }
           
    $("#tabla_lista_frasesH").html(j_lista_frasesH_HTML);
    
}

function accionstep1() {
    ocultarsubsteps();
    $("#substep11").show();
    $("#stepDesc1").addClass("current");
    $("#stepDesc1 span").addClass("current");
    $("#stepDesc1 a").addClass("current");
}

function accionstep2() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        $("#substep21").show();
        $("#stepDesc2").addClass("current");
        $("#stepDesc2 span").addClass("current");
        $("#stepDesc2 a").addClass("current");
    }
}


function accionstep3() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        $("#substep31").show();
        $("#stepDesc3").addClass("current");
        $("#stepDesc3 span").addClass("current");
        $("#stepDesc3 a").addClass("current");
    }
}

function accionstep4() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        ini_visual_procedimiento_trabajo();
        $("#substep41").show();
        $("#stepDesc4").addClass("current");
        $("#stepDesc4 span").addClass("current");
        $("#stepDesc4 a").addClass("current");
    }
}

function accionstep5() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        ini_visual_protecciones_colectivas();
        $("#substep51").show();
        $("#stepDesc5").addClass("current");
        $("#stepDesc5 span").addClass("current");
        $("#stepDesc5 a").addClass("current");
    }
}

function accionstep6() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        ini_visual_correccion_VLA();
        $("#substep61").show();
        $("#stepDesc6").addClass("current");
        $("#stepDesc6 span").addClass("current");
        $("#stepDesc6 a").addClass("current");
    }

}

function accionstep7() {
    if ($("#nombre").val() == "") { }
    else {
        ocultarsubsteps();
        calcular_mostrar_resultados();
        dibujar_lineas_resultados();
        $("#substep71").show();
        $("#stepDesc7").addClass("current");
        $("#stepDesc7 span").addClass("current");
        $("#stepDesc7 a").addClass("current");
    }
}

function ocultarsubsteps() {
    $("#substep11").hide();
    $("#substep21").hide();
    $("#substep22").hide();
    $("#substep23").hide();
    $("#substep24").hide();
    $("#substep25").hide();
    $("#substep31").hide();
    $("#substep32").hide();
    $("#substep331").hide();
    $("#substep332").hide();
    $("#substep334").hide();
    $("#substep34").hide();
    $("#substep41").hide();
    $("#substep42").hide();
    $("#substep51").hide();
    $("#substep52").hide();
    $("#substep61").hide();
    $("#substep62").hide();
    $("#substep71").hide();
    $("#substep72").hide();
    $("#substep73").hide();
    $("#stepDesc1").removeClass("current");
    $("#stepDesc1 span").removeClass("current");
    $("#stepDesc1 a").removeClass("current");
    $("#stepDesc2").removeClass("current");
    $("#stepDesc2 span").removeClass("current");
    $("#stepDesc2 a").removeClass("current");
    $("#stepDesc3").removeClass("current");
    $("#stepDesc3 span").removeClass("current");
    $("#stepDesc3 a").removeClass("current");
    $("#stepDesc4").removeClass("current");
    $("#stepDesc4 span").removeClass("current");
    $("#stepDesc4 a").removeClass("current");
    $("#stepDesc5").removeClass("current");
    $("#stepDesc5 span").removeClass("current");
    $("#stepDesc5 a").removeClass("current");
    $("#stepDesc6").removeClass("current");
    $("#stepDesc6 span").removeClass("current");
    $("#stepDesc6 a").removeClass("current");
    $("#stepDesc7").removeClass("current");
    $("#stepDesc7 span").removeClass("current");
    $("#stepDesc7 a").removeClass("current");
}

function inicializa_variables_j() {
   
    j_idOperacion = "";
    
    
    j_nombre="";
    j_agente_quimico_operacion ="";
    j_descripcion="";

    j_seleccion_frases_H_si_no = "1";
    j_no_aplica_frases_H_check = "1";
    j_seleccion_VLA_ED_si_no = "0";
    j_seleccion_VLA_ED_mat_par_si_no ="1";
    j_seleccion_VLA_ED_particulada = 0;
    j_seleccion_VLA_ED_no_particulada = 0;
    j_seleccion_sustancia_comercial_si_no = "0";
    j_seleccion_materiales_no_sujetos_a_normativa = 0;

    ArrayfrasesHseleccionadas.length = 0;

    j_clase_peligro = "1";

    j_seleccion_cantidad_dia = 0;
    j_clase_cantidad_dia = "1";

    j_seleccion_tipo_frecuencia_utilizacion = 0;
    j_seleccion_frecuencia_utilizacion = 0;
    j_clase_frecuencia_utilizacion = "0";

    j_clase_exposicion_potencial = "0";
    j_clase_riesgo_potencial = "1";
    j_puntuacion_riesgo_potencial = 0;

    j_seleccion_estado_vol_pul = 0;

    j_seleccion_volatilidad_pulverulencia_solido = 0;
    j_clase_volatilidad_pulverulencia_solido = "3";

    j_temp_uso_volatilidad_pulverulencia_liquido = 0;
    j_temp_ebullicion_volatilidad_pulverulencia_liquido = 0;
    j_clase_volatilidad_pulverulencia_liquido = "1";

    j_seleccion_volatilidad_pulverulencia_solvap_solido = 0;
    j_clase_volatilidad_pulverulencia_solvap_solido = "3";
    j_seleccion_volatilidad_pulverulencia_solvap_liquido = 0;
    j_clase_volatilidad_pulverulencia_solvap_liquido = "3";

    j_clase_volatilidad_pulverulencia = "0";
    j_puntuacion_volatilidad_pulverulencia = 1;

    j_seleccion_procedimiento_trabajo = 0;
    j_clase_procedimiento_trabajo = "4";
    j_puntuacion_procedimiento_trabajo = 1;

    j_seleccion_protecciones_colectivas = 0;
    j_clase_protecciones_colectivas = "5";
    j_puntuacion_protecciones_colectivas = 10;

    j_seleccion_vla = 0;
    j_puntuacion_vla = 1;

    j_puntuacion_riesgo_por_inhalacion = 0;
    j_prioridad_accion = "3";

}


function inicializa_variables_j_desde_Json(){

    var frasesH_bd = " ";

    j_idOperacion = operacion_bd.ID_Operacion;
    j_idUsuario = operacion_bd.ID_Usuario;
    j_nombre = operacion_bd.nombre;
    j_agente_quimico_operacion = operacion_bd.agentequimicooperacion;
    j_descripcion = operacion_bd.descripcion;
    j_seleccion_frases_H_si_no = operacion_bd.seleccionfrasesH;
    j_no_aplica_frases_H_check = operacion_bd.noaplicafrasesHcheck;
    j_seleccion_VLA_ED_si_no = operacion_bd.seleccionVLAED;
    j_seleccion_VLA_ED_mat_par_si_no = operacion_bd.seleccionVLAEDmatpar;
    j_seleccion_VLA_ED_particulada = operacion_bd.seleccionVLAEDparticulada;
    j_seleccion_VLA_ED_no_particulada = operacion_bd.seleccionVLAEDnoparticulada;
    j_seleccion_sustancia_comercial_si_no = operacion_bd.seleccionsustanciacomercialsino;
    j_seleccion_materiales_no_sujetos_a_normativa = operacion_bd.seleccionmaterialesnosujetosanormativa;
    frasesH_bd = operacion_bd.frasesHseleccionadas;
    j_clase_peligro = operacion_bd.clasepeligro;
    j_seleccion_cantidad_dia = operacion_bd.seleccioncantidaddia;
    j_clase_cantidad_dia = operacion_bd.clasecantidaddia;
    j_seleccion_tipo_frecuencia_utilizacion = operacion_bd.selecciontipofrecuenciautilizacion;
    j_seleccion_frecuencia_utilizacion = operacion_bd.seleccionfrecuenciautilizacion;
    j_clase_frecuencia_utilizacion = operacion_bd.clasefrecuenciautilizacion;
    j_clase_exposicion_potencial = operacion_bd.claseexposicionpotencial;
    j_clase_riesgo_potencial = operacion_bd.claseriesgopotencial;
    j_puntuacion_riesgo_potencial = operacion_bd.puntuacionriesgopotencial;
    j_seleccion_estado_vol_pul = operacion_bd.seleccionestadovolpul;
    j_seleccion_volatilidad_pulverulencia_solido = operacion_bd.seleccionvolatilidadpulverulenciasolido;
    j_clase_volatilidad_pulverulencia_solido = operacion_bd.clasevolatilidadpulverulenciasolido;
    j_temp_uso_volatilidad_pulverulencia_liquido = operacion_bd.tempusovolatilidadpulverulencialiquido;
    j_temp_ebullicion_volatilidad_pulverulencia_liquido = operacion_bd.tempebullicionvolatilidadpulverulencialiquido;
    j_clase_volatilidad_pulverulencia_liquido = operacion_bd.clasevolatilidadpulverulenciaLiquido;
    j_seleccion_volatilidad_pulverulencia_solvap_solido = operacion_bd.seleccionvolatilidadpulverulenciasolvapsolido;
    j_clase_volatilidad_pulverulencia_solvap_solido = operacion_bd.clasevolatilidadpulverulenciasolvapsolido;
    j_seleccion_volatilidad_pulverulencia_solvap_liquido = operacion_bd.seleccionvolatilidadpulverulenciasolvapliquido;
    j_clase_volatilidad_pulverulencia_solvap_liquido = operacion_bd.clasevolatilidadpulverulenciasolvapliquido;
    j_clase_volatilidad_pulverulencia = operacion_bd.clasevolatilidadvulverulencia;
    j_puntuacion_volatilidad_pulverulencia = operacion_bd.puntuacionvolatilidadvulverulencia;
    j_seleccion_procedimiento_trabajo = operacion_bd.seleccionprocedimientotrabajo;
    j_clase_procedimiento_trabajo = operacion_bd.claseprocedimientotrabajo;
    j_puntuacion_procedimiento_trabajo = operacion_bd.puntuacionprocedimientotrabajo / 1000;
    j_seleccion_protecciones_colectivas = operacion_bd.seleccionproteccionescolectivas;
    j_clase_protecciones_colectivas = operacion_bd.claseproteccionescolectivas;
    j_puntuacion_protecciones_colectivas = operacion_bd.puntuacionproteccionescolectivas / 1000;
    j_seleccion_vla = operacion_bd.seleccionvla;
    j_puntuacion_vla = operacion_bd.puntuacionvla;
    j_puntuacion_riesgo_por_inhalacion = operacion_bd.puntuacionriesgoporinhalacion / 1000000;
    j_prioridad_accion = operacion_bd.prioridadaccion;

    
    j_posicion_cadena_anterior = 0
    j_posicion_cadena = 0;
    ArrayfrasesHseleccionadas.length = 0;
    var almoadilla = "#";
        
    if (frasesH_bd == "") { }
    else {
        i = 0;
        j_posicion_cadena = frasesH_bd.indexOf(almoadilla,0);
        while (j_posicion_cadena != -1) {
            ArrayfrasesHseleccionadas.push(frasesH_bd.substr(j_posicion_cadena_anterior, (j_posicion_cadena - j_posicion_cadena_anterior)));
            ++i;
            j_posicion_cadena_anterior = j_posicion_cadena + 1;
            j_posicion_cadena = frasesH_bd.indexOf(almoadilla, j_posicion_cadena + 1);
        }
            }

    j_num_frases_seleccionadas = ArrayfrasesHseleccionadas.length;
        
}

function inicializa_variables_visuales() {

    mostrar_datos_operacion();
    
    ini_visual_riesgo_potencial();
            
    ini_visual_volatilidad_pulverulencia();
    
    ini_visual_procedimiento_trabajo();
   
    ini_visual_protecciones_colectivas();
   
    ini_visual_correccion_VLA();
    
    validar_substep11()
    ocultarsubsteps()
    $("#stepDesc1").addClass("current");
    $("#stepDesc1 span").addClass("current");
    $("#stepDesc1 a").addClass("current");
    $("#substep11").show();
}


function validar_substep11() {
   
    j_descripcion = $("#descripcion").val();
    j_agente_quimico_operacion = $("#agentequimico").val();
    $("#Agente").val(j_agente_quimico_operacion);
    if ($("#nombre").val() == "") {
        $("#error_substep11").show();
        $("#substep11Next").hide();
    }
    else {
        $("#error_substep11").hide();
        $("#substep11Next").show();
    }
}

function cargar_agente() {
    j_agente_quimico_operacion = $("#Agente").val();
    $("#agentequimico").val(j_agente_quimico_operacion);
}

function mostrar_datos_operacion() {
    $("#nombre").val(j_nombre);
    $("#agentequimico").val(j_agente_quimico_operacion);
    $("#Agente").val(j_agente_quimico_operacion);
    $("#descripcion").val(j_descripcion);
}

function mostrar_res_datos_operacion() {
    j_nombre = $("#nombre").val();
    j_descripcion = $("#descripcion").val();
    j_agente_quimico_operacion = $("#agentequimico").val();
    $("#resnombre").text(j_nombre);
    $("#resagentequimico").text(j_agente_quimico_operacion);
    $("#resdescripcion").text(j_descripcion);
    $("#fechaevaluacion").text(j_fecha_evaluacion_texto);
}

function ini_visual_clase_peligro() {

    if (j_seleccion_frases_H_si_no == "1") {
        $("#seleccion_frases_H_si").attr("checked", true);
        $("#seleccion_frases_H_no").attr("checked", false);
    }
    else {
        ArrayfrasesHseleccionadas.length = 0;
        $("#seleccion_frases_H_si").attr("checked", false);
        $("#seleccion_frases_H_no").attr("checked", true);
    }

    ini_visual_clase_peligro_frasesH();

    if (j_seleccion_VLA_ED_si_no == "1") {
        $("#seleccion_VLA_ED_si").attr("checked", true);
        $("#seleccion_VLA_ED_no").attr("checked", false);
    }
    else {
        $("#seleccion_VLA_ED_si").attr("checked", false);
        $("#seleccion_VLA_ED_no").attr("checked", true);
    }

    if(j_seleccion_VLA_ED_mat_par_si_no == "1") {
        $("#seleccion_mat_par_si").attr("checked", true);
        $("#seleccion_mat_par_no").attr("checked", false);
    }
    else{
        $("#seleccion_mat_par_si").attr("checked", false);
        $("#seleccion_mat_par_no").attr("checked", true);
    }

    $("#opcion_VLA_ED_par :input").each(function (i) {
        if (($(this).val()) == j_seleccion_VLA_ED_particulada) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    $("#opcion_VLA_ED_no_par :input").each(function (i) {
        if (($(this).val()) == j_seleccion_VLA_ED_no_particulada) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });




    if (j_seleccion_sustancia_comercial_si_no == "1") {
        document.getElementById("seleccion_sustancia_comercial_si").checked = true;
        document.getElementById("seleccion_sustancia_comercial_no").checked = false;
    }
    else {
        document.getElementById("seleccion_sustancia_comercial_si").checked = false;
        document.getElementById("seleccion_sustancia_comercial_no").checked = true;
    }

    $("#opcion_clase_peligro_otros :input").each(function (i) {
        if (($(this).val()) == j_seleccion_materiales_no_sujetos_a_normativa) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

if (j_seleccion_frases_H_si_no == "1") {   
   
        $("#agente_quimico_01").show();
        $("#seleccion_por_frases_H").show();
        $("#seleccion_peligrosidad_frasesH").show();
        $("#agente_quimico_01").show();
        $("#seleccion_por_VLA_ED").hide();
        $("#seleccion_VLA_ED_par_titulo").hide();
        $("#seleccion_VLA_ED_par").hide();
        $("#opcion_VLA_ED_par").hide();
        $("#opcion_VLA_ED_no_par").hide();
        $("#seleccion_por_sustancia_comercial").hide();
        $("#seleccion_sustancia_comercial").hide();
    }
    else {
        $("#agente_quimico_01").hide();
    if (j_seleccion_VLA_ED_si_no == "1") {
            $("#seleccion_por_frases_H").show();
            $("#seleccion_peligrosidad_frasesH").hide();
            $("#seleccion_por_VLA_ED").show();
            $("#seleccion_VLA_ED_par_titulo").show();
            $("#seleccion_VLA_ED_par").show();
            if (j_seleccion_VLA_ED_mat_par_si_no == "1") {
                $("#opcion_VLA_ED_par").show();
                $("#opcion_VLA_ED_no_par").hide();
            }
            else {
                $("#opcion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_no_par").show();
            };
            $("#seleccion_por_sustancia_comercial").hide();
            $("#seleccion_sustancia_comercial").hide();

        }
        else {
        if (j_seleccion_sustancia_comercial_si_no == "1") {
                $("#seleccion_por_frases_H").show();
                $("#seleccion_peligrosidad_frasesH").hide();
                $("#seleccion_por_VLA_ED").show();
                $("#seleccion_VLA_ED_par_titulo").hide();
                $("#seleccion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_no_par").hide();

                var $label = $('input[id=seleccion_sustancia_comercial_si').next();
                $label.text('S\xed  : CLASE DE PELIGRO 1');
                $label = $('input[id=seleccion_sustancia_comercial_no').next();
                $label.text('No');

                $("#seleccion_por_sustancia_comercial").show();
                //$("#materiales_no_sujetos_a_normativa").hide();
                $("#seleccion_sustancia_comercial").hide();
            }
            else {
                
                $("#seleccion_por_frases_H").show();
                $("#seleccion_peligrosidad_frasesH").hide();
                $("#seleccion_por_VLA_ED").show();
                $("#seleccion_VLA_ED_par_titulo").hide();
                $("#seleccion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_no_par").hide();

                var $label = $('input[id=seleccion_sustancia_comercial_si').next();
                $label.text('S\xed');
                $label = $('input[id=seleccion_sustancia_comercial_no').next();
                $label.text('No : Vuelva a las pantallas anteriores y seleccione las indicaciones de peligro de los componentes si las conoce. En caso contrario contin\xfae a la pantalla siguiente. ');

                $("#seleccion_por_sustancia_comercial").show();
                $("#seleccion_sustancia_comercial").hide();
            }
        }

    }
}


function ini_visual_clase_peligro_frasesH() {
    var Valuefraseh = "";
    var j = 0;
    if (j_no_aplica_frases_H_check == 1) { $("input[name=NoaplicaFrasesH]").prop("checked", true); } else { $("input[name=NoaplicaFrasesH]").prop("checked", false); }

    $("#tabla_frasesH :input").each(function (i) {

        Valuefraseh = ($(this).val());

        j = ArrayfrasesHseleccionadas.indexOf(Valuefraseh);
        if (j == -1) {

            $(this).prop("checked", false);
        }
        else {
            $(this).prop("checked", true);
            $("input[name=NoaplicaFrasesH]").prop("checked", false);
            j_no_aplica_frases_H_check = "0";
        }
    });

}

function changefraseH() {if ($(this).is(':checked')) {j_num_frases_seleccionadas = j_num_frases_seleccionadas + 1;$("input[name=NoaplicaFrasesH]").prop("checked", false)} else {j_num_frases_seleccionadas = j_num_frases_seleccionadas - 1; if (j_num_frases_seleccionadas == 0) {j_no_aplica_frases_H_check = "1"; $("input[name=NoaplicaFrasesH]").prop("checked", true);}}}

function calcular_clase_peligro() {
 
    j_seleccion_frases_H_si_no = $("input[name='frases_H']:checked").val();

    if (j_seleccion_frases_H_si_no == "1") {
        if ($('#NoaplicaFrasesH').is(":checked")) {
            j_no_aplica_frases_H_check = "1";
        }
        else {
            j_no_aplica_frases_H_check = "0";
        }

        if (j_no_aplica_frases_H_check == "0") {
            calcular_clase_peligro_frasesH();
        }
        else {
            ArrayfrasesHseleccionadas.length = 0;
            j_clase_peligro = "1";
        }

    }
    else {
        j_seleccion_VLA_ED_particulada = $("input[name='VLA_ED_par']:checked").val();
        if (j_seleccion_VLA_ED_si_no == "1") {

            if (j_seleccion_VLA_ED_mat_par_si_no == "1") {
                j_seleccion_VLA_ED_particulada = $("input[name='VLA_ED_par']:checked").val();
                j_clase_peligro = ArrayclaseVLAparticulada[j_seleccion_VLA_ED_particulada];
            }
            else {
                j_seleccion_VLA_ED_particulada = $("input[name='VLA_ED_par']:checked").val();
                j_clase_peligro = ArrayclaseVLAnoparticulada[j_seleccion_VLA_ED_no_particulada];
            }

        }
        else {
            j_seleccion_sustancia_comercial_si_no = $("input[name='sustancia_comercial']:checked").val();
            if (j_seleccion_sustancia_comercial_si_no == "1") {
                j_clase_peligro = "1";
            }
            else {
                j_seleccion_materiales_no_sujetos_a_normativa = $("input[name='clase_peligro_otros']:checked").val();
                j_clase_peligro = Arrayclasematerialesnosujetosanormativa[j_seleccion_materiales_no_sujetos_a_normativa];
            }
        }

    }

}

function calcular_clase_peligro_frasesH() {

    var FrasesH = ('#tabla_frasesH');
    var i = 0;

    j_clase_peligro = 0;

    ArrayfrasesHseleccionadas.length = 0;


    $(FrasesH + " input:checked").each(function (i) { // para los marcados, construye el array de frases
        ArrayfrasesHseleccionadas.push($(this).val());
    });
    if (ArrayfrasesHseleccionadas.length == 0) { }

    obtener_array_clase_peligro_frases_seleccionadas();
    obtener_array_frases_marcadas();

    j_clase_peligro = Math.max.apply(null, Arrayclasepeligrofrasesseleccionadas);

}

function obtener_array_clase_peligro_frases_seleccionadas() {
    var j = 0;
    Arrayclasepeligrofrasesseleccionadas.length = 0;
    ArrayindicesfrasesHseleccionadas.length = 0;

    for (i in ArrayfrasesHseleccionadas) {                         // Busco las frases y obtengo la matriz de clases de peligo de las frase seleccionadas
        j = ArrayfrasesH.indexOf(ArrayfrasesHseleccionadas[i])

        if (j == -1) { }
        else {
            ArrayindicesfrasesHseleccionadas.push(j);
            Arrayclasepeligrofrasesseleccionadas.push(ArrayclaspeligrofrasesH[j]);
        }
    }
}

function obtener_array_frases_marcadas() {
    var i = 0;

    for (i in ArrayfrasesHestadocheck) {   // inicializo la matriz de check de frases
        ArrayfrasesHestadocheck[i] = '0'
    }
    for (i in ArrayindicesfrasesHseleccionadas) {   // marco con 1 las frases seleccionadas
        ArrayfrasesHestadocheck[ArrayindicesfrasesHseleccionadas[i]] = '1';
    }
}


function ini_visual_riesgo_potencial() {
    
    ini_visual_clase_peligro();

    $("#seleccion_clase_exposicion_potencial_cantidad :input").each(function (i) {
        if (($(this).val()) == j_seleccion_cantidad_dia) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    if (j_seleccion_tipo_frecuencia_utilizacion == 0) {
        $("#check_no_se_usa").prop("checked", true);
        $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
        $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
        $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
        $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
    }
    else { }
  
    $("#seleccion_clase_exposicion_potencial_frecuencia :input").each(function (i) {
        if (($(this).val()) == j_seleccion_tipo_frecuencia_utilizacion) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    if (j_seleccion_tipo_frecuencia_utilizacion == 1) {
        $("#seleccion_clase_exposicion_potencial_frecuencia_diaria :input").each(function (i) {
            if (($(this).val()) == j_seleccion_frecuencia_utilizacion) {
                $(this).prop("checked", true);
            }
            else {
                $(this).prop("checked", false);
            }
            $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").show();
            $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
            $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
            $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
        });
    }
    else {
        if (j_seleccion_tipo_frecuencia_utilizacion == 2) {
            $("#seleccion_clase_exposicion_potencial_frecuencia_semanal :input").each(function (i) {
                if (($(this).val()) == j_seleccion_frecuencia_utilizacion) {
                    $(this).prop("checked", true);
                }
                else {
                    $(this).prop("checked", false);
                }
                $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").show();
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
            });
        } 
        else {
            if (j_seleccion_tipo_frecuencia_utilizacion == 3) {
                $("#seleccion_clase_exposicion_potencial_frecuencia_mensual :input").each(function (i) {
                    if (($(this).val()) == j_seleccion_frecuencia_utilizacion) {
                        $(this).prop("checked", true);
                    }
                    else {
                        $(this).prop("checked", false);
                    }
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").show();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                });
            }
            else {
                if (j_seleccion_tipo_frecuencia_utilizacion == 4) {
                   $("#seleccion_clase_exposicion_potencial_frecuencia_anual :input").each(function (i) {
                        if (($(this).val()) == j_seleccion_frecuencia_utilizacion) {
                            $(this).prop("checked", true);
                        }
                        else {
                            $(this).prop("checked", false);
                        }
                        $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                        $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                        $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                        $("#seleccion_clase_exposicion_potencial_frecuencia_anual").show();
                    });
                }
                else{}
                
            }
        }
            
    }

    

    }



function calcular_riesgo_potencial() {
    var i = 0;
    var j = 0;
    var Arraytrabajo = [];
    var Arraytrabajo2 = [];

    Arraytrabajo.length = 0;
    Arraytrabajo2.length = 0;
    calcular_clase_peligro();

    j_seleccion_cantidad_dia = $("input[name='clase_exposicion_potencial_cantidad']:checked").val();
    j_clase_cantidad_dia = Arrayclasecantidaddia[j_seleccion_cantidad_dia];

    var indice_frecuencia = 0;
    switch (j_seleccion_tipo_frecuencia_utilizacion) {
        case '0':
            j_seleccion_frecuencia_utilizacion = 0;
            break

        case '1':
            j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_diaria']:checked").val();
            break

        case '2':
            j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_semanal']:checked").val();
            break

        case '3':
            j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_mensual']:checked").val();
            break
        case '4':
            j_seleccion_frecuencia_utilizacion = $("input[name='seleccion_clase_exposicion_potencial_frecuencia_anual']:checked").val();
            break
    }

    if (j_seleccion_tipo_frecuencia_utilizacion == 0) {
        j_clase_frecuencia_utilizacion = Arrayclasefrecuenciautilizacion[j_seleccion_frecuencia_utilizacion];
    }
    else {
        indice_frecuencia = parseInt(j_seleccion_frecuencia_utilizacion) + 1;
        j_clase_frecuencia_utilizacion = Arrayclasefrecuenciautilizacion[indice_frecuencia];
    }
    i = parseInt(j_clase_cantidad_dia - 1);
    j = parseInt(j_clase_frecuencia_utilizacion);
    Arraytrabajo = ArrayClaseFrecuenciaClaseCantidad[j];
    j_clase_exposicion_potencial = Arraytrabajo[i];
    i = parseInt(j_clase_peligro) - 1;
    j = parseInt(j_clase_exposicion_potencial);
    if (j_clase_peligro == "1") {
        j_clase_riesgo_potencial = ArrayClasePeligro1ClaseExposicionPotencial[j];
    }
    else {
        if (j_clase_peligro == "2") {
            j_clase_riesgo_potencial = ArrayClasePeligro2ClaseExposicionPotencial[j]
        }
        else {
            if (j_clase_peligro == "3") {
                j_clase_riesgo_potencial = ArrayClasePeligro3ClaseExposicionPotencial[j]
            }
            else {
                if (j_clase_peligro == "4") {
                    j_clase_riesgo_potencial = ArrayClasePeligro4ClaseExposicionPotencial[j]
                }
                else { j_clase_riesgo_potencial = ArrayClasePeligro5ClaseExposicionPotencial[j] }
            }
        }
    }

    i = parseInt(j_clase_riesgo_potencial);
    j_puntuacion_riesgo_potencial = ArrayPuntuacionRiesgoPotencial[i];
  
    if (j_puntuacion_riesgo_potencial > 1) {
        j_puntuacion_riesgo_potencial_editada = j_puntuacion_riesgo_potencial.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        j_puntuacion_riesgo_potencial_editada = j_puntuacion_riesgo_potencial_editada.split('').reverse().join('').replace(/^[\.]/, '');
    }
    else {
        j_puntuacion_riesgo_potencial_editada = j_puntuacion_riesgo_potencial.toString().replace(".", ",");
    }
}

function mostrar_riesgo_potencial() {
    $("#r_clase_peligro").text(j_clase_peligro);
    $("#r_clase_cantidad_dia").text(j_clase_cantidad_dia);
    $("#r_clase_frecuencia_utilizacion").text(j_clase_frecuencia_utilizacion);
    $("#r_clase_exposicion_potencial").text(j_clase_exposicion_potencial);

    $("#r_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#r_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial_editada);

    $("#rf_clase_peligro").text(j_clase_peligro);
    $("#rf_clase_cantidad_dia").text(j_clase_cantidad_dia);
    $("#rf_clase_frecuencia_utilizacion").text(j_clase_frecuencia_utilizacion);
    $("#rf_clase_exposicion_potencial").text(j_clase_exposicion_potencial);

    $("#rf_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#rf_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial_editada);
}


function mostrar_clase_puntuacion_riesgo_potencial() {
    $("#r_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#r_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial_editada);

    $("#rf_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#rf_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial_editada);
}

function ini_visual_volatilidad_pulverulencia() {
    $("#seleccion_volatilidad_pulverulencia :input").each(function (i) {
        if (($(this).val()) == j_seleccion_estado_vol_pul) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    $("#seleccion_volatilidad_pulverulencia_solido :input").each(function (i) {
        if (($(this).val()) == j_seleccion_volatilidad_pulverulencia_solido) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    $("#volatilidad_pulverulencia_part_vapor_solido :input").each(function (i) {
        if (($(this).val()) == j_seleccion_volatilidad_pulverulencia_solvap_solido) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });
   
        $("#volatilidad_pulverulencia_part_vapor_vapor :input").each(function (i) {
        if (($(this).val()) == j_seleccion_volatilidad_pulverulencia_solvap_liquido) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

    $("#TemUti").val(j_temp_uso_volatilidad_pulverulencia_liquido);

    $("#TemEbu").val(j_temp_ebullicion_volatilidad_pulverulencia_liquido);
        
    

}


function calcular_volatilidad_pulverulencia() {
    j_seleccion_estado_vol_pul = $("input[name='volatilidad_pulverulencia_estado']:checked").val();

    switch (j_seleccion_estado_vol_pul) {
        case '0':
            j_seleccion_volatilidad_pulverulencia_solido = $("input[name='volatilidad_pulverulencia_solido']:checked").val();
            j_clase_volatilidad_pulverulencia_solido = Arrayclasevolatilidadpulverulenciasolido[j_seleccion_volatilidad_pulverulencia_solido];
            j_clase_volatilidad_pulverulencia = j_clase_volatilidad_pulverulencia_solido;
            break

        case '1':
            j_temp_uso_volatilidad_pulverulencia_liquido = parseFloat($("#TemUti").val());
            j_temp_ebullicion_volatilidad_pulverulencia_liquido = parseFloat($("#TemEbu").val());

            if (!isNaN(j_temp_ebullicion_volatilidad_pulverulencia_liquido) && !isNaN(j_temp_uso_volatilidad_pulverulencia_liquido)) {
                referencia1 = (1.4783 * j_temp_uso_volatilidad_pulverulencia_liquido) + 115.22;
                referencia2 = (1.2143 * j_temp_uso_volatilidad_pulverulencia_liquido) + 57.857;
                if (j_temp_ebullicion_volatilidad_pulverulencia_liquido > referencia1) {
                    j_clase_volatilidad_pulverulencia_liquido = 1;
                    j_clase_volatilidad_pulverulencia = 1;
                }
                else {
                    if (j_temp_ebullicion_volatilidad_pulverulencia_liquido < referencia2) {
                        j_clase_volatilidad_pulverulencia_liquido = 3;
                        j_clase_volatilidad_pulverulencia = 3
                    }
                    else {
                        j_clase_volatilidad_pulverulencia_liquido = 2;
                        j_clase_volatilidad_pulverulencia = 2;
                    }
                }
            }
            break

        case '2':
            j_clase_volatilidad_pulverulencia = 3;
            break

        case '3':
            j_seleccion_volatilidad_pulverulencia_solvap_solido = $("input[name='volatilidad_pulverulencia_part_vapor']:checked").val();
            j_clase_volatilidad_pulverulencia_solvap_solido = Arrayclasevolatilidadpulverulenciasolido[j_seleccion_volatilidad_pulverulencia_solvap_solido];

            j_seleccion_volatilidad_pulverulencia_solvap_liquido = $("input[name='volatilidad_pulverulencia_part_vapor_pv']:checked").val();
            j_clase_volatilidad_pulverulencia_solvap_liquido = Arrayclasevolatilidadpulverulenciasolvapliquido[j_seleccion_volatilidad_pulverulencia_solvap_liquido];

            if (j_clase_volatilidad_pulverulencia_solvap_solido > j_clase_volatilidad_pulverulencia_solvap_liquido) {
                j_clase_volatilidad_pulverulencia = j_clase_volatilidad_pulverulencia_solvap_solido;
            }
            else {
                j_clase_volatilidad_pulverulencia = j_clase_volatilidad_pulverulencia_solvap_liquido;
            }
            break

    }

    j_puntuacion_volatilidad_pulverulencia = Arraypuntuacionvolatilidadpulverulencia[j_clase_volatilidad_pulverulencia - 1];

}


function mostrar_volatilidad_pulverulencia() {

    $("#r_clase_volatilidad_pulverulencia").text(j_clase_volatilidad_pulverulencia);
    $("#r_puntuacion_volatilidad_pulverulencia").text(j_puntuacion_volatilidad_pulverulencia);

    $("#rf_clase_volatilidad_pulverulencia").text(j_clase_volatilidad_pulverulencia);
    $("#rf_puntuacion_volatilidad_pulverulencia").text(j_puntuacion_volatilidad_pulverulencia);
}

function ini_visual_procedimiento_trabajo() {
    $("#seleccion_procedimiento_trabajo :input").each(function (i) {
        if (($(this).val()) == j_seleccion_procedimiento_trabajo) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });
}

function calcular_procedimiento_trabajo() {
    j_seleccion_procedimiento_trabajo = $("input[name='procedimiento_trabajo']:checked").val();
    j_clase_procedimiento_trabajo = Arrayclaseprocedimientotrabajo[j_seleccion_procedimiento_trabajo];
    j_puntuacion_procedimiento_trabajo = Arraypuntuacionprocedimientotrabajo[j_seleccion_procedimiento_trabajo];

    if (j_puntuacion_procedimiento_trabajo > 1) {
        j_puntuacion_procedimiento_trabajo_editada = j_puntuacion_procedimiento_trabajo.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        j_puntuacion_procedimiento_trabajo_editada = j_puntuacion_procedimiento_trabajo_editada.split('').reverse().join('').replace(/^[\.]/, '');
    }
    else {
        j_puntuacion_procedimiento_trabajo_editada = j_puntuacion_procedimiento_trabajo.toString().replace(".", ",");
    }
}

function mostrar_procedimiento_trabajo() {
    $("#r_clase_procedimiento_trabajo").text(j_clase_procedimiento_trabajo);
    $("#r_puntuacion_procedimiento_trabajo").text(j_puntuacion_procedimiento_trabajo_editada);

    $("#rf_clase_procedimiento_trabajo").text(j_clase_procedimiento_trabajo);
    $("#rf_puntuacion_procedimiento_trabajo").text(j_puntuacion_procedimiento_trabajo_editada);
}

function ini_visual_protecciones_colectivas() {
    
    $("#seleccion_proteccion-colectiva :input").each(function (i) {
        if (($(this).val()) == j_seleccion_protecciones_colectivas) {
           $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });
}

function calcular_protecciones_colectivas() {
    j_seleccion_protecciones_colectivas = $("input[name='protecciones_colectivas']:checked").val();
    j_clase_protecciones_colectivas = Arrayclaseproteccionescolectivas[j_seleccion_protecciones_colectivas];
    j_puntuacion_protecciones_colectivas = Arraypuntuacionproteccionescolectivas[j_seleccion_protecciones_colectivas];

    if (j_puntuacion_protecciones_colectivas > 1) {
        j_puntuacion_protecciones_colectivas_editada = j_puntuacion_protecciones_colectivas.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        j_puntuacion_protecciones_colectivas_editada = j_puntuacion_protecciones_colectivas_editada.split('').reverse().join('').replace(/^[\.]/, '');
    }
    else {
        j_puntuacion_protecciones_colectivas_editada = j_puntuacion_protecciones_colectivas.toString().replace(".", ",");
    }
}

function mostrar_protecciones_colectivas() {
    $("#r_clase_protecciones_colectivas").text(j_clase_protecciones_colectivas);
    $("#r_puntuacion_protecciones_colectivas").text(j_puntuacion_protecciones_colectivas_editada); 

    $("#rf_clase_protecciones_colectivas").text(j_clase_protecciones_colectivas);
    $("#rf_puntuacion_protecciones_colectivas").text(j_puntuacion_protecciones_colectivas_editada);
}

function ini_visual_correccion_VLA() {
    $("#seleccion_VLA :input").each(function (i) {
        if (($(this).val()) == j_seleccion_vla) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });
}

function calcular_correccion_VLA() {
    j_seleccion_vla = $("input[name='VLA']:checked").val();
    j_puntuacion_vla = ArraypuntuacioncorreccionVLA[j_seleccion_vla];
}

function mostrar_correccion_VLA() {
    $("#r_puntuacion_vla").text(j_puntuacion_vla);

    $("#rf_puntuacion_vla").text(j_puntuacion_vla);
}
function calcular_resultados() {
    j_puntuacion_riesgo_por_inhalacion = parseFloat(j_puntuacion_riesgo_potencial) * parseFloat(j_puntuacion_volatilidad_pulverulencia) * parseFloat(j_puntuacion_procedimiento_trabajo) * parseFloat(j_puntuacion_protecciones_colectivas) * parseFloat(j_puntuacion_vla);

    if (j_puntuacion_riesgo_por_inhalacion > 1) {
        j_puntuacion_riesgo_por_inhalacion_editada = j_puntuacion_riesgo_por_inhalacion.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g, '$1.');
        j_puntuacion_riesgo_por_inhalacion_editada = j_puntuacion_riesgo_por_inhalacion_editada.split('').reverse().join('').replace(/^[\.]/, '');
    } 
    else {
        j_puntuacion_riesgo_por_inhalacion_editada = j_puntuacion_riesgo_por_inhalacion.toString().replace("."  , ",");
    }

    $("#rf_puntuacion_riesgo_por_inhalacion").text(j_puntuacion_riesgo_por_inhalacion_editada);


    if (j_puntuacion_riesgo_por_inhalacion > 1000) {
        j_prioridad_accion = "1";
    }
    else {
        if (j_puntuacion_riesgo_por_inhalacion <= 100) {
            j_prioridad_accion = "3";
        }
        else {
            j_prioridad_accion = "2";
        }

    }

}



function calcular_mostrar_resultados() {
    calcular_riesgo_potencial();
    mostrar_riesgo_potencial();

    calcular_volatilidad_pulverulencia();
    mostrar_volatilidad_pulverulencia();

    calcular_procedimiento_trabajo();
    mostrar_procedimiento_trabajo();

    calcular_protecciones_colectivas();
    mostrar_protecciones_colectivas();

    calcular_correccion_VLA();
    mostrar_correccion_VLA();
        
    calcular_resultados();
    mostrar_res_datos_operacion();

    mostrar_prioridad_accion();

   
}


function mostrar_prioridad_accion() {

    $("#prioridadaccion").text(j_prioridad_accion);

    if (j_prioridad_accion == "1") {
        $("#prioridad_Accion_1").show();
        $("#prioridad_Accion_2").hide();
        $("#prioridad_Accion_3").hide();
        $("#res_prioridad_Accion_1").show();
        $("#res_prioridad_Accion_2").hide();
        $("#res_prioridad_Accion_3").hide();
    }
    else {
        if (j_prioridad_accion == "2") {
            $("#prioridad_Accion_1").hide();
            $("#prioridad_Accion_2").show();
            $("#prioridad_Accion_3").hide();
            $("#res_prioridad_Accion_1").hide();
            $("#res_prioridad_Accion_2").show();
            $("#res_prioridad_Accion_3").hide();
        }
        else {
            $("#prioridad_Accion_1").hide();
            $("#prioridad_Accion_2").hide();
            $("#prioridad_Accion_3").show();
            $("#res_prioridad_Accion_1").hide();
            $("#res_prioridad_Accion_2").hide();
            $("#res_prioridad_Accion_3").show();

        }
    }
}


