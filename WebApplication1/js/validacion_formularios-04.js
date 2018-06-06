
// Variables datos de la operación  ***************************************************
// alert("Entra en each " + $(this).val() + " está seleccionado")

var Debug;

var j_nombre;
var j_agente_quimico_operacion;
var j_descripcion;

// Variables selección clase de peligro  ***************************************************

var j_seleccion_frases_H_si_no;
var j_no_aplica_frases_H_check = "0";
var j_seleccion_VLA_ED_si_no;
var j_seleccion_VLA_ED_mat_par_si_no;
var j_seleccion_VLA_ED_particulada = 0;
var j_seleccion_VLA_ED_no_particulada;
var j_seleccion_sustancia_comercial_si_no;
var j_seleccion_materiales_no_sujetos_a_normativa=0;

var j_seleccion_peligro = "1";

var ArrayfrasesH = ['H304', 'H330', 'H331', 'H332', 'H334', 'H335', 'H336', 'H340', 'H341', 'H350', 'H351', 'H350i', 'H360', 'H360F', 'H360D', 'H360Fd', 'H360Df', 'H360FD', 'H361  ', 'H361f', 'H361d', 'H361fd', 'H362', 'H370', 'H371', 'H372', 'H373', 'EUH029', 'EUH031', 'EUH032', 'EUH070', 'EUH071'];
var ArrayclaspeligrofrasesHstring = ['3', '5', '4', '3', '4', '2', '2', '5', '4', '5', '4', '5', '4', '4', '4', '4', '4', '4', '3', '3', '3', '3', '3', '4', '3', '4', '3', '4', '4', '5', '5', '3'];
var ArrayclaspeligrofrasesH = [3, 5, 4, 3, 4, 2, 2, 5, 4, 5, 4, 5, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 4, 3, 4, 3, 4, 4, 5, 5, 3 ];
var ArrayfrasesHestadocheck = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0',];
var ArrayfrasesHseleccionadas = [];
var ArrayindicesfrasesHseleccionadas = [];
var Arrayclasepeligrofrasesseleccionadas = [];


var Arrayseleccionpeligro = ['Frases', 'VLA no partivulada', 'VLA particulada', 'Materias y procesos'];

var ArrayVLAparticulada = ['VLA-ED  > 10', '1 < VLA-ED <= 10', '0,1 < VLA-ED <= 1', '0,01 < VLA-ED  <= 0,1', 'VLA-ED <=0,01'];
var ArrayclaseVLAparticulada = ['1', '2', '3', '4', '5'];
var ArrayVLAnoparticulada = ['VLA-ED  > 100', '10 < VLA-ED <= 100', '1 < VLA-ED <= 10', '0,1 < VLA-ED  <= 1', 'VLA-ED <=0,1'];
var ArrayclaseVLAnoparticulada = ['1', '2', '3', '4', '5'];

var Arraymaterialesnosujetosanormativa = ['hierro', 'soldadura', 'maderas', 'amianto'];
var Arrayclasematerialesnosujetosanormativa = ['2', '3', '4', '5'];

var j_clase_peligro = "1";

var Arrayvcantidaddia = ['< 100 g o ml','>=100 g o ml y < 10 kg o l','>=10 y < 100kg o l', '<= 100 y < 1000 kg o l', '>= 1000 kg o l'];
var Arrayclasecantidaddia = ['1', '2', '3','4','5'];
var j_seleccion_cantidad_dia = 0;
var j_clase_cantidad_dia;

var Arraytipofrecuenciautilizacion = ['No', 'día', 'semana', 'mes', 'año'];
var Arrayfrecuenciautilizacion = ['Ocasional', 'Intermitente', 'Frecuente', 'Permannente'];
var Arrayclasefrecuenciautilizacion = ['0', '1', '2', '3','4'];
var j_seleccion_tipo_frecuencia_utilizacion = 0;
var j_seleccion_frecuencia_utilizacion = 0;
var j_clase_frecuencia_utilizacion;

var j_clase_exposicion_potencial;
var ArrayClaseFrecuenciaClaseCantidad = [['0', '0', '0', '0', '0'],['1', '2', '3', '3', '4'],['1', '2', '3', '4', '5'],['1', '2', '3', '4', '5'],['1', '2', '4', '5', '5']];
var i = 0;
var j = 0;

var j_clase_riesgo_potencial = "1";
var ArrayClasePeligroClaseExposicionPotencial = [['0','1', '1', '1', '1', '2'], ['0','1', '1', '2', '2', '3'], ['0','2', '2', '3', '3', '4'], ['0','3', '3', '4', '4', '5'], ['0','4', '4', '5', '5', '5']];
var ArrayClasePeligro1ClaseExposicionPotencial = ['0', '1', '1', '1', '1', '2'];
var ArrayClasePeligro2ClaseExposicionPotencial = ['0', '1', '1', '2', '2', '3'];
var ArrayClasePeligro3ClaseExposicionPotencial = ['0', '2', '2', '3', '3', '4'];
var ArrayClasePeligro4ClaseExposicionPotencial = ['0', '3', '3', '4', '4', '5'];
var ArrayClasePeligro5ClaseExposicionPotencial = ['0', '4', '4', '5', '5', '5'];

var j_puntuacion_riesgo_potencial = 0;
var ArrayPuntuacionRiesgoPotencial = ['0','1', '10', '100', '1000', '10000'];


// Variables gestión volatilidad o pulverulencia  ***************************************************

var Arrayvolatilidadpulverulenciaestado = ['Sólido', 'Líquido', 'Spraying', 'Partículas y vapor'];
var j_seleccion_estado_vol_pul = 0;

var Arrayvolatilidadpulverulenciasolido = ['Polvo fino', 'Polvo en grano','Pastillas, granulado, escamas'];
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
var j_seleccion_volatilidad_pulverulencia_solvap_liquido = 0;
var j_clase_volatilidad_pulverulencia_solvap_liquido;

var Arraypuntuacionvolatilidadpulverulencia = ['1', '10', '100'];
var j_clase_volatilidad_pulverulencia ="0";
var j_puntuacion_volatilidad_pulverulencia = "0";

// Variables gestión procedimiento trabajo  ***************************************************

var Arrayclaseprocedimientotrabajo = ['4', '3', '2', '1'];
var Arraypuntuacionprocedimientotrabajo = [ '1', '0,5',  '0,05', '0,001'];
var j_seleccion_procedimiento_trabajo = 0;
var j_clase_procedimiento_trabajo = "1";
var j_puntuacion_procedimiento_trabajo = "1";

// Variables gestión corrección por protecciones colectivas***************************************************
var Arrayclaseproteccionescolectivas = ['5', '4', '3', '3', '3', '2', '2', '2', '2', '2','2', '2', '1'];
var Arraypuntuacionproteccionescolectivas = ['10', '1', '0,7', '0,7', '0,7', '0,1', '0,1', '0,1', '0,1', '0,1', '0,1', '0,1', '0,001'];
var j_seleccion_protecciones_colectivas = 0;
var j_clase_protecciones_colectivas = "1";
var j_puntuacion_protecciones_colectivas ="1";

 // Variables gestión corrección por VLA ***************************************************

var tablaVLA = ['VLA-ED  > 1,1',
    '0,01 < VLA-ED <= 0,1 ,10',
    '0,1 < VLA-ED <= 0,01,30',
    'VLA-ED  <= 0,001, 100']; 
var ArraypuntuacioncorreccionVLA = ['1', '10', '30', '100'];
var j_seleccion_vla = 0;
var j_puntuacion_vla;

 // Variables gestión resultados ***************************************************

var j_puntuacion_riesgo_por_inhalacion = 0;

var j_prioridad_accion = "3";





    $(document).ready(function(){
        
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

        //  $("#form_container").formToWizard({ submitButton: 'GrabarOperacion' })

        inicializa_variables();

        // Gestión pantalla inicial operaciones ***************************************************
      
        dibujar_resultados();

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

        $("#substep11Next").click(function () {
            j_nombre = $("#nombre").val();
            j_descripcion = $("#descripcion").val();
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
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            $("#substep22").show();
           
                     
        });

        $("#substep22Prev").click(function () {
            if (j_seleccion_materiales_no_sujetos_a_normativa == "0") {

                $("#substep22").hide();
                $("#substep21").show();
            }
            else {
                calcular_riesgo_potencial();
                ini_visual_riesgo_potencial();
                //ini_visual_clase_peligro();
                /* $("#seleccion_por_frases_H").show();
                $("#seleccion_peligrosidad_frasesH").hide();
                $("#seleccion_por_VLA_ED").show();
                $("#seleccion_VLA_ED").hide();
                $("#seleccion_por_sustancia_comercial").show();
                $("#materiales_no_sujetos_a_normativa").show();
                $("#seleccion_sustancia_comercial").hide();*/
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
                $("#materiales_no_sujetos_a_normativa").hide();
                $("#seleccion_sustancia_comercial").show();
                j_seleccion_materiales_no_sujetos_a_normativa = "1";
            }

            
        });

        $("#substep23Prev").click(function () {
            $("#substep23").hide();
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
            ini_visual_riesgo_potencial()
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
            $("#caja_procedimiento_trabajo").css({ "background-color": "blue" });
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
            dibujar_resultados();
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

        $("input[name=frases_H]").change(function () {
            j_seleccion_frases_H_si_no = $("input[name='frases_H']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	
        
        $("input[name=NoaplicaFrasesH]").change(function () {
            if ($(this).is(':checked')) {
                j_no_aplica_frases_H_check = "1"
                FrasesH = '#tabla_frasesH'
                $(FrasesH + " input:checked").each(function (i) { // para los marcados, desmarca
                    $(this).prop("checked", false);
                });

            }
            else {
                j_no_aplica_frases_H_check = "0"
            }
            
        });

        $("input[name=FraseH304]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH330]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH331]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH332]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH334]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH335]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH336]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH340]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH341]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH350]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH351]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH350i]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360F]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360D]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360Fd]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360Df]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH360FD]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH361]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH361f]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH361d]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH361fd]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH362]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH370]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH371]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH372]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseH373]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseEUH029]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseEUH031]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseEUH032]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseEUH070]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });
        $("input[name=FraseEUH071]").change(function () { if ($(this).is(':checked')) { $("input[name=NoaplicaFrasesH]").prop("checked", false); } else { } });


        $("input[name=VLA_ED]").change(function () {
            j_seleccion_VLA_ED_si_no = $("input[name='VLA_ED']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	

        $("input[name=VLA_ED_mat_par]").change(function () {
            j_seleccion_VLA_ED_mat_par_si_no = $("input[name='VLA_ED_mat_par']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	

        $("input[name=VLA_ED_par]").change(function () {
            j_seleccion_VLA_ED_particulada = $("input[name='VLA_ED_par']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	

        $("input[name=VLA_ED_no_par]").change(function () {
            j_seleccion_VLA_ED_no_particulada = $("input[name='VLA_ED_no_par']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	

        $("input[name=sustancia_comercial]").change(function () {
            j_seleccion_sustancia_comercial_si_no = $("input[name='sustancia_comercial']:checked").val();
            calcular_riesgo_potencial();
            ini_visual_riesgo_potencial();
            //ini_visual_clase_peligro();
        });	

        
        $("input[name=clase_exposicion_potencial_frecuencia]").change(function () {
            j_seleccion_tipo_frecuencia_utilizacion = $("input[name='clase_exposicion_potencial_frecuencia']:checked").val();
            switch (j_seleccion_tipo_frecuencia_utilizacion) {
                case '0':
                    j_seleccion_frecuencia_utilizacion = 0;
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                    break

                case '1':
                    j_seleccion_frecuencia_utilizacion = 0;
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").show();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                    break

                case '2':
                    j_seleccion_frecuencia_utilizacion = 0;
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").show();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                    break

                case '3':
                    j_seleccion_frecuencia_utilizacion = 0;
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").show();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();
                    break

                case '4':
                    j_seleccion_frecuencia_utilizacion = 0;
                    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
                    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").show();
                    break

            }
                        
        });	

        mostrar_datos_operacion();                     
               
        calcular_riesgo_potencial();
        mostrar_riesgo_potencial();

        
        calcular_volatilidad_pulverulencia();
        mostrar_volatilidad_pulverulencia();
        calcular_procedimiento_trabajo();
        mostrar_procedimiento_trabajo();
        calcular_protecciones_colectivas();
        mostrar_protecciones_colectivas();
        mostrar_correccion_VLA();                
        mostrar_prioridad_accion(); 
             
    })

    // Fin de funciones para ejecutar al cargar la página ***************************************************
function accionstep1() {
    ocultarsubsteps();
    $("#substep11").show();
    $("#stepDesc1").addClass("current");
    $("#stepDesc1 span").addClass("current");
    $("#stepDesc1 a").addClass("current");
 }

function accionstep2() {
    ocultarsubsteps();
    $("#substep21").show();
    $("#stepDesc2").addClass("current");
    $("#stepDesc2 span").addClass("current");
    $("#stepDesc2 a").addClass("current");
}


function accionstep3() {
    ocultarsubsteps();
    $("#substep31").show();
    $("#stepDesc3").addClass("current");
    $("#stepDesc3 span").addClass("current");
    $("#stepDesc3 a").addClass("current");
}

function accionstep4() {
    ocultarsubsteps();
    ini_visual_procedimiento_trabajo();
    $("#substep41").show();
    $("#stepDesc4").addClass("current");
    $("#stepDesc4 span").addClass("current");
    $("#stepDesc4 a").addClass("current");
}

function accionstep5() {
    ocultarsubsteps();
    ini_visual_protecciones_colectivas();
    $("#substep51").show();
    $("#stepDesc5").addClass("current");
    $("#stepDesc5 span").addClass("current");
    $("#stepDesc5 a").addClass("current");
}

function accionstep6() {
    ocultarsubsteps();
    ini_visual_correccion_VLA();
    $("#substep61").show();
    $("#stepDesc6").addClass("current");
    $("#stepDesc6 span").addClass("current");
    $("#stepDesc6 a").addClass("current");
}

function accionstep7() {
    ocultarsubsteps();
    calcular_mostrar_resultados();
    dibujar_resultados();
    $("#substep71").show();
    $("#stepDesc7").addClass("current");
    $("#stepDesc7 span").addClass("current");
    $("#stepDesc7 a").addClass("current");
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
function inicializa_variables() {
  //  j_nombre = 'nombre_inicial'
  //  j_descripcion = 'descripcion inicial'
    inicializa_variables_clase_peligro();

    $("#caja_riesgo_potencial").css({ "background-color": "orange" });

    j_seleccion_estado_vol_pul = 0;
    $("#substep331").show();
    $("#substep332").hide();
    $("#substep334").hide();

    j_seleccion_volatilidad_pulverulencia_solido = 0;
    
    j_temp_uso_volatilidad_pulverulencia_liquido = 0;
    j_temp_ebullicion_volatilidad_pulverulencia_liquido = 0;
    j_seleccion_volatilidad_pulverulencia_solvap_solido = 0;
    j_seleccion_volatilidad_pulverulencia_solvap_liquido = 0;
   
    j_clase_volatilidad_pulverulencia = 0;
    j_puntuacion_volatilidad_pulverulencia = 0;

    ini_visual_volatilidad_pulverulencia();
    $("#caja_volatilidad_pulverulencia").css({ "background-color": "pink" });

    j_seleccion_procedimiento_trabajo = 0;
    ini_visual_procedimiento_trabajo();
    $("#caja_procedimiento_trabajo").css({ "background-color": "blue" });

    j_seleccion_protecciones_colectivas = 0;
    ini_visual_protecciones_colectivas();
    $("#caja_protecciones_colectivas").css({ "background-color": "green" });
   
    j_seleccion_vla = 0;
    ini_visual_correccion_VLA();
    $("#caja_vla").css({ "background-color": "yellow" });

    validar_substep11()
    ocultarsubsteps()
    $("#stepDesc1").addClass("current");
    $("#stepDesc1 span").addClass("current");
    $("#stepDesc1 a").addClass("current");
    $("#substep11").show();
 }

function inicializa_variables_clase_peligro() {

    j_clase_peligro = "1";
    

    j_seleccion_frases_H_si_no = "1";
    document.getElementById("seleccion_frases_H_si").checked = true;
    document.getElementById("seleccion_frases_H_no").checked = false;
    j_seleccion_VLA_ED_si_no = "1";
    document.getElementById("seleccion_VLA_ED_si").checked = true;
    document.getElementById("seleccion_VLA_ED_no").checked = false;
    j_seleccion_VLA_ED_mat_par_si_no = "1";
    document.getElementById("seleccion_mat_par_si").checked = true;
    document.getElementById("seleccion_mat_par_no").checked = false;
    j_seleccion_sustancia_comercial_si_no = "1";
    document.getElementById("seleccion_sustancia_comercial_si").checked = true;
    document.getElementById("seleccion_sustancia_comercial_no").checked = false;
    j_seleccion_materiales_no_sujetos_a_normativa = "0";
    calcular_riesgo_potencial();
    ini_visual_riesgo_potencial();
    //ini_visual_clase_peligro();

    j_seleccion_cantidad_dia = 0;
   
    j_seleccion_tipo_frecuencia_utilizacion = 0;
    j_seleccion_frecuencia_utilizacion = 0;
    $("#seleccion_clase_exposicion_potencial_frecuencia_diaria").hide();
    $("#seleccion_clase_exposicion_potencial_frecuencia_semanal").hide();
    $("#seleccion_clase_exposicion_potencial_frecuencia_mensual").hide();
    $("#seleccion_clase_exposicion_potencial_frecuencia_anual").hide();

    
    //calcular_riesgo_potencial();
    //mostrar_riesgo_potencial();

 }



function validar_substep11() {
    if ($("#nombre").val() == "" ){
        $("#error_substep11").show();
        $("#substep11Next").hide();
    }
    else {
        $("#error_substep11").hide();
        $("#substep11Next").show();
    }
}

function mostrar_datos_operacion() {
    $("#nombre").val(j_nombre);
    $("#descripcion").val(j_descripcion);
    }


function ini_visual_clase_peligro() {
    //alert("entrada inicialización clase de peligo radio buto frase h: " + j_seleccion_frases_H_si_no);
    if (j_seleccion_frases_H_si_no == "1") {
        ini_visual_clase_peligro_frasesH();
        $("#seleccion_por_frases_H").show();
        $("#seleccion_peligrosidad_frasesH").show();
        j_seleccion_VLA_ED_si_no = "1";
        document.getElementById("seleccion_VLA_ED_si").checked = true;
        document.getElementById("seleccion_VLA_ED_no").checked = false;
        $("#seleccion_VLA_ED_si").checked = true;
        $("#seleccion_VLA_ED_no").attr("checked", false);
        $("#seleccion_por_VLA_ED").hide();
        document.getElementById("seleccion_mat_par_si").checked = true;
        document.getElementById("seleccion_mat_par_no").checked = false;
        $("#seleccion_mat_par_si").checked = true;
        $("#seleccion_mat_par_no").attr("checked", false);
        $("#seleccion_VLA_ED_par_titulo").hide();
        $("#seleccion_VLA_ED_par").hide();
        $("#opcion_VLA_ED_par").hide();
        $("#opcion_VLA_ED_no_par").hide();
        $("#seleccion_por_sustancia_comercial").hide();
        $("#materiales_no_sujetos_a_normativa").hide();
        $("#seleccion_sustancia_comercial").hide();
        
    }
    else {
        if (j_seleccion_VLA_ED_si_no == "1") {
            $("#seleccion_por_frases_H").show();
            $("#seleccion_peligrosidad_frasesH").hide();
            $("#seleccion_por_VLA_ED").show();
            $("#seleccion_VLA_ED_par_titulo").show();
            $("#seleccion_VLA_ED_par").show();
            if(j_seleccion_VLA_ED_mat_par_si_no == "1") {
                $("#opcion_VLA_ED_par").show();
                $("#opcion_VLA_ED_no_par").hide();
            }
            else{
                $("#opcion_VLA_ED_par").hide();
                $("#opcion_VLA_ED_no_par").show();
            };
            j_seleccion_sustancia_comercial_si_no = "1";
            document.getElementById("seleccion_sustancia_comercial_si").checked = true;
            document.getElementById("seleccion_sustancia_comercial_no").checked = false;
            $("#seleccion_por_sustancia_comercial").hide();
            $("#materiales_no_sujetos_a_normativa").hide();
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
                $("#materiales_no_sujetos_a_normativa").hide();
                $("#seleccion_sustancia_comercial").hide();
             }
            else {
                $("#seleccion_por_frases_H").show();
                $("#seleccion_peligrosidad_frasesH").hide();
                $("#seleccion_por_VLA_ED").show();
                $("#seleccion_VLA_ED").hide();

                var $label = $('input[id=seleccion_sustancia_comercial_si').next();
                $label.text('S\xed');
                $label = $('input[id=seleccion_sustancia_comercial_no').next();
                $label.text('No : Vuelva a las pantallas anteriores y seleccione las indicaciones de peligro de los componentes si las conoce. En caso contrario contin\xfa a la pantalla siguiente. ');
                
                $("#seleccion_por_sustancia_comercial").show();
                $("#materiales_no_sujetos_a_normativa").show();
                $("#seleccion_sustancia_comercial").hide();
            }
        }
                   
    }
    
}

function ini_visual_clase_peligro_frasesH() {
    var Valuefraseh = "";
    var j = 0;
    $("input[name=NoaplicaFrasesH]").prop("checked", true);
    if ($("input[name=NoaplicaFrasesH]").is(":checked")) {
        //alert("Check activo a la entrada inic visual");
    }
    else {
        //alert("Check NO activo a la entrada inic visual");
    }


    //$("#NoaplicaFrasesH").prop("checked", true);
    j_no_aplica_frases_H_check = "1";
    //var temporal = $("#NoaplicaFrasesH").val();
    //alert(" a la entrada de ini_visual check de no aplica" + temporal);
    //temporal = ("frases seleccionadas a la entrada de inicializ visual clase peligro" + ArrayfrasesHseleccionadas[0]);
    $("#tabla_frasesH :input").each(function (i) {
        //alert("entra en bucle");
        Valuefraseh = ($(this).val());

        j = ArrayfrasesHseleccionadas.indexOf(Valuefraseh);
        if (j == -1) {

            $(this).prop("checked", false);
        }
        else {
            $(this).prop("checked", true);
            //alert("desactiva check en bloque irterativo");
            $("input[name=NoaplicaFrasesH]").prop("checked", false);
            //$("#NoaplicaFrasesH").prop("checked", false);
            j_no_aplica_frases_H_check = "0";
        }
        //var temporal = $("#NoaplicaFrasesH").val();
        

    });
    if ($("input[name=NoaplicaFrasesH]").is(":checked")) {
        //alert("Check activo a la salida inic visual");
    }
    else {
        //alert("Check NO activo a la salida inic visual");
    }


    //temporal = $("#NoaplicaFrasesH").val();
    //alert(" a la salida de ini_visual check de no aplica" + temporal);
}


function calcular_clase_peligro() {
    j_seleccion_frases_H_si_no = $("input[name='frases_H']:checked").val();
    //alert("inicio calcular clase peligro   seleccion frase H  " + j_seleccion_frases_H_si_no);

    if (j_seleccion_frases_H_si_no == "1") {
        if ($('#NoaplicaFrasesH').is(":checked")) {
            j_no_aplica_frases_H_check = "1";
        }
        else {
            j_no_aplica_frases_H_check = "0";
        }

        //alert("inicio calcular clase peligro   check si/no  " + j_no_aplica_frases_H_check);
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
    if(ArrayfrasesHseleccionadas.length == 0){}
    //else{ alert("array en calcular clase de peligro" + ArrayfrasesHseleccionadas[0]);    }
     
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
    else {
        $("#seleccion_clase_exposicion_potencial_frecuencia :input").each(function (i) {
            if (($(this).val()) == j_seleccion_tipo_frecuencia_utilizacion) {
                $(this).prop("checked", true);
            }
            else {
                $(this).prop("checked", false);
            }
        });
        switch (j_seleccion_frecuencia_utilizacion) {
            case '0':
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
                break

            case '1':
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
                break

            case '2':
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
                break

            case '3':
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
                break
           
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
        if (j_clase_peligro == "2"){
            j_clase_riesgo_potencial = ArrayClasePeligro2ClaseExposicionPotencial[j]
        }
        else {
            if (j_clase_peligro == "3"){
                j_clase_riesgo_potencial = ArrayClasePeligro3ClaseExposicionPotencial[j]
            }
            else {
            if (j_clase_peligro == "4"){
                       j_clase_riesgo_potencial = ArrayClasePeligro4ClaseExposicionPotencial[j]
                }
                else { j_clase_riesgo_potencial = ArrayClasePeligro5ClaseExposicionPotencial[j]}
            }
        }
        }
       
    
    //switch (j_clase_peligro) {
    ////    case '1':
    //        j_clase_riesgo_potencial = ArrayClasePeligro1ClaseExposicionPotencial[j];
    //        break
    //    case '2':
    //        j_clase_riesgo_potencial = ArrayClasePeligro2ClaseExposicionPotencial[j];
    //        break
    //    case '3':
    //        j_clase_riesgo_potencial = ArrayClasePeligro3ClaseExposicionPotencial[j];
    //        break
    //    case '4':
    //        j_clase_riesgo_potencial = ArrayClasePeligro4ClaseExposicionPotencial[j];
    //        break
    //    case '5':
    //        alert("pasa case 5");
    //        j_clase_riesgo_potencial = ArrayClasePeligro5ClaseExposicionPotencial[j];
    //        break

    //}
    //alert("antes asignacion 2)  " + Arraytrabajo2[0]);
    //Arraytrabajo2 = ArrayClasePeligroClaseExposicionPotencial[i];
    //alert("despues de la asignacion)  " + Arraytrabajo2[0]);
    //j_clase_riesgo_potencial = Arraytrabajo2[j];
    //j_clase_riesgo_potencial = 1;
    //alert("clase peligro" + j_clase_peligro);
    //alert("clase exposicion" + j_clase_exposicion_potencial);
    //alert("clase riesgo" + j_clase_riesgo_potencial);
    i = parseInt(j_clase_riesgo_potencial);
    j_puntuacion_riesgo_potencial = ArrayPuntuacionRiesgoPotencial[i];
}

function mostrar_riesgo_potencial() {
    $("#r_clase_peligro").text(j_clase_peligro);
    $("#r_clase_cantidad_dia").text(j_clase_cantidad_dia);
    $("#r_clase_frecuencia_utilizacion").text(j_clase_frecuencia_utilizacion);
    $("#r_clase_exposicion_potencial").text(j_clase_exposicion_potencial);

    $("#r_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#r_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial);
}


function mostrar_clase_puntuacion_riesgo_potencial() {
    $("#r_clase_riesgo_potencial").text(j_clase_riesgo_potencial);
    $("#r_puntuacion_riesgo_potencial").text(j_puntuacion_riesgo_potencial);
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

    $("#volatilidad_pulverulencia_part_vapor_vp :input").each(function (i) {
        if (($(this).val()) == j_seleccion_volatilidad_pulverulencia_solvap_liquido) {
            $(this).prop("checked", true);
        }
        else {
            $(this).prop("checked", false);
        }
    });

}


function calcular_volatilidad_pulverulencia() {
    j_seleccion_estado_vol_pul = $("input[name='volatilidad_pulverulencia_estado']:checked").val();
    
    switch (j_seleccion_estado_vol_pul) {
        case '0' :
            j_seleccion_volatilidad_pulverulencia_solido = $("input[name='volatilidad_pulverulencia_solido']:checked").val();
            j_clase_volatilidad_pulverulencia_solido = Arrayclasevolatilidadpulverulenciasolido[j_seleccion_volatilidad_pulverulencia_solido];
            j_clase_volatilidad_pulverulencia = j_clase_volatilidad_pulverulencia_solido;
            break

        case '1' :
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

        case '2' :
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
}

function mostrar_procedimiento_trabajo() {
    $("#r_clase_procedimiento_trabajo").text(j_clase_procedimiento_trabajo);
    $("#r_puntuacion_procedimiento_trabajo").text(j_puntuacion_procedimiento_trabajo);
}

function ini_visual_protecciones_colectivas() {
    $("#seleccion_protecciones_colectivas_trabajo :input").each(function (i) {
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
}

function mostrar_protecciones_colectivas() {
    $("#r_clase_protecciones_colectivas").text(j_clase_protecciones_colectivas);
    $("#r_puntuacion_protecciones_colectivas").text(j_puntuacion_protecciones_colectivas);
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
}
function calcular_resultados() {
    j_puntuacion_riesgo_por_inhalacion = parseFloat(j_puntuacion_riesgo_potencial) * parseFloat(j_puntuacion_volatilidad_pulverulencia) * parseFloat(j_puntuacion_procedimiento_trabajo) * parseFloat(j_puntuacion_protecciones_colectivas) * parseFloat(j_puntuacion_vla);


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
    
    //alert(j_puntuacion_riesgo_potencial);
    //alert(j_puntuacion_volatilidad_pulverulencia);
    //alert(j_puntuacion_procedimiento_trabajo);
    //alert(j_puntuacion_protecciones_colectivas);
    //alert(j_puntuacion_vla);
    //alert(j_puntuacion_riesgo_por_inhalacion);
    
}



function calcular_mostrar_resultados() {
    calcular_riesgo_potencial();
    calcular_riesgo_potencial();

    calcular_volatilidad_pulverulencia();
    mostrar_volatilidad_pulverulencia();

    calcular_procedimiento_trabajo();
    mostrar_procedimiento_trabajo();
    
    calcular_protecciones_colectivas();
    mostrar_protecciones_colectivas();

    calcular_correccion_VLA();
    mostrar_correccion_VLA();

    calcular_resultados();
}


function mostrar_prioridad_accion() {

    if (j_prioridad_accion == "1") {
        $("#prioridad_Accion_1").show();
        $("#prioridad_Accion_2").hide();
        $("#prioridad_Accion_3").hide();
    }
    else {
        if (j_prioridad_accion == "2") {
            $("#prioridad_Accion_1").hide();
            $("#prioridad_Accion_2").show();
            $("#prioridad_Accion_3").hide();
        }
        else {
            $("#prioridad_Accion_1").hide();
            $("#prioridad_Accion_2").hide();
            $("#prioridad_Accion_3").show();

        }
    }
}

     
