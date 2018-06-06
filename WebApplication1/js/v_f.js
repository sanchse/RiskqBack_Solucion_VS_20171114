var link_nota1 = "<a href='#Nota1' title='Se ha rebajado el nivel de riesgo potencial en un punto por bajo tiempo de exposición diaria'>Nota 1</a>";
var link_nota2 = "<a href='#Nota2' title='Se ha reducido el nivel de peligrosidad del agente'>Nota 2</a>";
var link_nota3 = "<a href='#Nota3' title='No es posible modificar el nivel de peligrosidad del agente'>Nota 3</a>";
var link_nota4 = "<a href='#Nota4' title='Se ha tenido en cuenta la peligrosidad de los componentes de la mezcla y su porcentaje en la misma para determinar su clasificación de peligrosidad'>Nota 4</a>";
var link_nota5 = "<a href='#Nota3' title='Se ha modificado el nivel de riesgo potencial final de acuerdo con la cantidad y volatilidad o pulverulencia de mezclas en el caso de un componente sensibilizante dérmico'>Nota 5</a>";

var grupo_msg1 = "Para este agente no existe posibilidad de ajustar la clasificación de peligrosidad."
var grupo_msg2 = "Introduzca los datos de que disponga:"

var unidades_vla_solido = "mg/m3";
var unidades_vla_liquido = "ppm";
var unidades_vla_gas = "ppm";

var ArrayPeligrosidad_B = ['H302', 'H312', 'H332', 'H371', '20', '20/21', '20/21/22', '20/22', '21', '21/22', '22'];
var ArrayPeligrosidad_C = ['H301', 'H311', 'H314', 'H317', 'H318', 'H331', 'H335', 'H370', 'H373', '23', '23/24', '23/24/25',
    '23/25', '24', '24/25', '25', '34', '35', '36/37', '36/37/38', '37', '37/38', '41', '43', '48/20',
    '48/20/21', '48/20/21/22', '48/20/22', '48/21', '48/21/22', '48/22'];
var ArrayPeligrosidad_D = ['H300', 'H310', 'H330', 'H351', 'H360', 'H360F', 'H360D', 'H361', 'H361F', 'H361f', 'H361d',
    'H361D', 'H362', 'H372', '26', '26/27', '26/27/28', '26/28',
    '27', '27/28', '28', '48/23', '48/23/24', '48/23/24/25', '48/24', '48/24/25', '48/25', '60', '61',
    '62', '63', '64'];
var ArrayPeligrosidad_E = ['H334', 'H340', 'H341', 'H350', '40', '42', '42/43', '45', '46', '49', '68'];

var ArrayPeligrosidad_Nota2_Grupo1 = ['H314', 'H335', '34', '35', '37'];

var ArrayPeligrosidad_Nota2_Grupo2 = ['H361f', 'H361d', 'H361fd', '62', '63'];

var tablaCombinaciones = ['A,Pequeña,SOL,Baja', 'A,Mediana,SOL,Baja', 'A,Grande,SOL,Baja', 'A,Pequeña,SOL,Media',
    'A,Mediana,SOL,Media', 'A,Grande,SOL,Media', 'A,Pequeña,SOL,Alta', 'A,Mediana,SOL,Alta',
    'A,Grande,SOL,Alta', 'A,Pequeña,LIQ,Baja', 'A,Mediana,LIQ,Baja', 'A,Grande,LIQ,Baja',
    'A,Pequeña,LIQ,Media', 'A,Mediana,LIQ,Media', 'A,Grande,LIQ,Media', 'A,Pequeña,LIQ,Alta',
    'A,Mediana,LIQ,Alta', 'A,Grande,LIQ,Alta', 'B,Pequeña,SOL,Baja', 'B,Mediana,SOL,Baja',
    'B,Grande,SOL,Baja', 'B,Pequeña,SOL,Media', 'B,Mediana,SOL,Media', 'B,Grande,SOL,Media',
    'B,Pequeña,SOL,Alta', 'B,Mediana,SOL,Alta', 'B,Grande,SOL,Alta', 'B,Pequeña,LIQ,Baja',
    'B,Mediana,LIQ,Baja', 'B,Grande,LIQ,Baja', 'B,Pequeña,LIQ,Media', 'B,Mediana,LIQ,Media',
    'B,Grande,LIQ,Media', 'B,Pequeña,LIQ,Alta', 'B,Mediana,LIQ,Alta', 'B,Grande,LIQ,Alta',
    'C,Pequeña,SOL,Baja', 'C,Mediana,SOL,Baja', 'C,Grande,SOL,Baja', 'C,Pequeña,SOL,Media',
    'C,Mediana,SOL,Media', 'C,Grande,SOL,Media', 'C,Pequeña,SOL,Alta', 'C,Mediana,SOL,Alta',
    'C,Grande,SOL,Alta', 'C,Pequeña,LIQ,Baja', 'C,Mediana,LIQ,Baja', 'C,Grande,LIQ,Baja',
    'C,Pequeña,LIQ,Media', 'C,Mediana,LIQ,Media', 'C,Grande,LIQ,Media', 'C,Pequeña,LIQ,Alta',
    'C,Mediana,LIQ,Alta', 'C,Grande,LIQ,Alta', 'D,Pequeña,SOL,Baja', 'D,Mediana,SOL,Baja',
    'D,Grande,SOL,Baja', 'D,Pequeña,SOL,Media', 'D,Mediana,SOL,Media', 'D,Grande,SOL,Media',
    'D,Pequeña,SOL,Alta', 'D,Mediana,SOL,Alta', 'D,Grande,SOL,Alta', 'D,Pequeña,LIQ,Baja',
    'D,Mediana,LIQ,Baja', 'D,Grande,LIQ,Baja', 'D,Pequeña,LIQ,Media', 'D,Mediana,LIQ,Media',
    'D,Grande,LIQ,Media', 'D,Pequeña,LIQ,Alta', 'D,Mediana,LIQ,Alta', 'D,Grande,LIQ,Alta',
    'A,Pequeña,GAS,Alta', 'A,Mediana,GAS,Alta', 'A,Grande,GAS,Alta', 'B,Pequeña,GAS,Alta',
    'B,Mediana,GAS,Alta', 'B,Grande,GAS,Alta', 'C,Pequeña,GAS,Alta', 'C,Mediana,GAS,Alta',
    'C,Grande,GAS,Alta', 'D,Pequeña,GAS,Alta', 'D,Mediana,GAS,Alta', 'D,Grande,GAS,Alta'];

var tablaRiesgos = [1, 1, 1, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 2, 1, 2, 3, 1, 2, 2, 1, 3, 4, 2, 3, 4, 1, 2, 2, 2, 3, 4, 2, 3, 4, 2, 3, 3, 2, 4, 4, 3, 4, 4, 2, 3, 3, 3, 4, 4, 3, 4, 4, 1, 2, 2, 1, 2, 3, 2, 3, 4, 3, 4, 4];

var ArrayAgentes = [];

var RiesgoMaximo = 0;
var IdRiesgoMaximo = 0;
var cuentaAgentes = 0;
var reduccion_riesgo_repeticiones = false;


// Funciones para ejecutar al cargar la página ***************************************************
$(document).ready(function () {
    $("#formulario_datos_operaciones").formToWizard({ submitButton: 'GrabarOperacion' });

    var options, a; // parametros para el autocompletar del nombre del Agente
    jQuery(function () {
        options = {
            serviceUrl: '/riskquim/CB/moduls_asp/liveSearch.asp',
            width: 828,
            minChars: 2,
            onSelect: function (value, data) {
                inicializa_frases();
                inicializa_cantidad();
                $("#ModoFrasesR").attr("checked", "");
                $("#ModoFrasesH").attr("checked", "checked");
                $("input[name='ModoCalculoPeligrosidad']").attr("disabled", true);
                $("#seleccion_peligrosidad_frasesR").hide();
                $("#seleccion_peligrosidad_frasesH").show();
                categorias_string2checkbox(data.categorias);
                $("#Id_Sustancia").val(data.idsustancia);
                cambia_estado(data.estado);
            }
        };
        a = $('#Agente').autocomplete(options);
    });

    $("#step2Next").show();

    validar_step0();

    $("#addAgente").click(function () {
        $("#stepDesc4").attr('class', '');
        $("#stepDesc0").attr('class', 'current');
        $('#step0').show();
        $('#step4').hide();
        inicializa_variables();
    });

    $("#selector_frasesR input:checkbox").click(function () {
        $(this).parent().toggleClass("selected");
        frases_checkbox2string('#selector_frasesR');
    });

    $("#selector_frasesH input:checkbox").click(function () {
        $(this).parent().toggleClass("selected");
        frases_checkbox2string('#selector_frasesH');
    });

    $("#capacidad_liquidos").hide();
    $("#capacidad_gases").hide();
    $("input[name='EstadoFisico']").change(function () {
        cambia_estado($("input[name='EstadoFisico']:checked").val());
    });

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


    $("#seleccion_peligrosidad_frasesR").hide();

    $("input[name='ModoCalculoPeligrosidad']").change(function () {
        if ($(this).val() == '1') {
            $("#seleccion_peligrosidad_frasesR").hide();
            $("#seleccion_peligrosidad_frasesH").show();
        }
        else {
            $("#seleccion_peligrosidad_frasesR").show();
            $("#seleccion_peligrosidad_frasesH").hide();
        }
    });

    $("#temperatura_ebullicion").change(function () {
        calcula_volatilidad();
    });

    $("#temperatura_proceso").change(function () {
        calcula_volatilidad();
    });

    $('#step3Next').click(function () {
        calcular_reducciones($('#ArrayFrases').val());
        calcular_riesgo();
        $('#step4Prev').hide();
    });

    var accion = $("#accion").val();
    if (accion == 'modifica') {
        //		var array_agentes=$("#ArrayAgentes").val().split(',');

        if ($("#ArrayAgentes").val().indexOf('¶') == -1) {
            ArrayAgentes = $("#ArrayAgentes").val().split(',');
        }
        else {
            ArrayAgentes = $("#ArrayAgentes").val().split('¶');
        }
        //		calcular_reducciones( $('#ArrayFrases').val() );
        calcula_riesgo_maximo();
        comprueba_notas();
        repintar_tabla_resultados();

        $('#step4').show();
        $('#step0').hide();
        $('#step4Prev').hide();
        $("#stepDesc0").attr('class', '');
        $("#stepDesc4").attr('class', 'current');
        $('#GrabarOperacion').show();
        $("#et_riesgo").text(RiesgoMaximo);
        $("#et_riesgo_total").text(RiesgoMaximo);
        $("#et_nombre").text($("#Nombre").val());
        $("#et_duracion").text($("#Duracion").val() + ' minutos');
        $("#et_repeticiones").text($("#Repeticiones").val());

    }
    else {
        $('#Nombre').focus();
    }

    $("#step0Next").click(function () {
        $('#Agente').focus();
    });

    $("#step2Next").click(function () {
        comprueba_nota2($('#ArrayFrases').val());
    });

    $("#step0Prev").click(function () {
        $('#Nombre').focus();
    });

    $("#derecho_a_reduccion1").click(function () {
        comprueba_reduccion1();
    });

    $("#exportar_a_excel").click(function () {
        $('#exporta').val(1);
        submit_formulario();
    });

    $("#step1Next").click(function () {
        if ($("input[name='EstadoFisico']:checked").val() == 'LIQ') { calcula_volatilidad(); }
    });

});
// Fin de funciones para ejecutar al cargar la página ***************************************************


function cambia_estado(estado) {
    switch (estado) {
        case 'SOL': { $("#Agente_solido").attr("checked", "checked"); $("#capacidad_liquidos").hide(); $("#capacidad_solidos").show(); $("#capacidad_gases").hide(); $("#unidades_vla-ed").text(unidades_vla_solido); $("*[id^='SOL_']").show(); $("*[id^='LIQ_']").hide(); $("*[id^='GAS_']").hide(); break }
        case 'LIQ': { $("#Agente_liquido").attr("checked", "checked"); $("#capacidad_liquidos").show(); $("#capacidad_solidos").hide(); $("#capacidad_gases").hide(); $("#unidades_vla-ed").text(unidades_vla_liquido); $("*[id^='SOL_']").hide(); $("*[id^='LIQ_']").show(); $("*[id^='GAS_']").hide(); break }
        case 'GAS': { $("#Agente_gaseoso").attr("checked", "checked"); $("#capacidad_liquidos").hide(); $("#capacidad_solidos").hide(); $("#capacidad_gases").show(); $("#unidades_vla-ed").text(unidades_vla_gas); $("*[id^='SOL_']").hide(); $("*[id^='LIQ_']").hide(); $("*[id^='GAS_']").show(); break }
    }
}

function cambia_capacidad(capacidad) {
    switch (capacidad) {
        case 'Baja': { $("#Capacidad_baja").attr("checked", "checked"); break }
        case 'Media': { $("#Capacidad_media").attr("checked", "checked"); break }
        case 'Alta': { $("#Capacidad_alta").attr("checked", "checked"); break }
    }
}

function cambia_cantidad(cantidad) {
    switch (cantidad) {
        case 'Pequeña': { $("#Cantidad_pequeña").attr("checked", "checked"); break }
        case 'Mediana': { $("#Cantidad_mediana").attr("checked", "checked"); break }
        case 'Grande': { $("#Cantidad_grande").attr("checked", "checked"); break }
    }
}

function calcula_volatilidad() {
    var temp_ebull = parseFloat($("#temperatura_ebullicion").val());
    var temp_proce = parseFloat($("#temperatura_proceso").val());
    if (!isNaN(temp_ebull) && !isNaN(temp_proce)) {
        var referencia1 = (5 * temp_proce) + 50;
        var referencia2 = (2 * temp_proce) + 10;
        if (temp_ebull > referencia1) { $("#resultado_volatilidad").text('Baja'); return }
        if (temp_ebull > referencia2) { $("#resultado_volatilidad").text('Media'); return }
        if (temp_ebull < referencia2) { $("#resultado_volatilidad").text('Alta'); return }
    }
    else {
        $("#resultado_volatilidad").text('Baja');
    }
}

function frases_checkbox2string(idFrases) {
    var arrayFrases = [];

    $("#ArrayFrases").val("");

    $(idFrases + " input:checked").each(function (i) { // para los marcados, construye el array de frases
        arrayFrases.push($(this).val());
    });

    $("#ArrayFrases").val(arrayFrases.join('-'));
    $("#Peligrosidad").val(calcula_peligrosidad(arrayFrases));

}

function frases_string2checkbox(arrayFrases) {
    // funcion para marcar los checkbox desde el array de frases ***************************************************
    inicializa_frases();

    if (arrayFrases.length > 0) { // si es existen datos en el array de frases
        var cadena = arrayFrases;
        var ListaFrases = cadena.split("-");
        var numDeFrases = ListaFrases.length;

        if (ListaFrases[0].substr(0, 1) == 'H') {
            var idFrases = '#selector_frasesH';
            $("#seleccion_peligrosidad_frasesR").hide();
            $("#seleccion_peligrosidad_frasesH").show();
        }
        else {
            var idFrases = '#selector_frasesR';
            $("#seleccion_peligrosidad_frasesR").show();
            $("#seleccion_peligrosidad_frasesH").hide();
        }

        $("#ArrayFrases").val(arrayFrases);

        $(idFrases + " input:checkbox").each(function (i) { // buscamos los elementos que están en el array de frases y los marcamos
            if (jQuery.inArray($(this).val(), ListaFrases) > -1) {
                $(this).attr('checked', 'checked');
                $(this).parent().toggleClass("selected");
            }
            else {
                $(this).attr('checked', '');
                //				$(this).parent().toggleClass("");
                $(this).parent().attr('class', 'checkboxlabel');
            }
        });
        $("#Peligrosidad").val(calcula_peligrosidad(ListaFrases));

    }
}

function categorias_string2checkbox(arrayCategorias) {
    // funcion para marcar los checkbox desde el array de frases ***************************************************
    if (arrayCategorias.length > 0) { // si es existen datos en el array de frases
        var cadena = arrayCategorias;
        var ListaCategorias = cadena.split("#");
        var numDeCategorias = ListaCategorias.length;
        var arrayFrasesH = [];

        $("#ArrayFrases").val(arrayCategorias);

        $("#selector_frasesH input:checkbox").each(function (i) { // buscamos los elementos que están en el array de frases y los marcamos
            var nombre = $(this).attr("name");
            if (jQuery.inArray(nombre, ListaCategorias) > -1) {
                $(this).attr('checked', 'checked');
                $(this).parent().toggleClass("selected");
                arrayFrasesH.push($(this).val());
            }
            else {
                $(this).attr('checked', '');
            }
        });
        $("#ArrayFrases").val(arrayFrasesH.join('-'));
        $("#Peligrosidad").val(calcula_peligrosidad(arrayFrasesH));

    }
}

function calcula_peligrosidad(arrayFrases) {
    var array_peligrosidades = [];

    for (var c = 0; c < arrayFrases.length; c++) {
        if (jQuery.inArray(arrayFrases[c], ArrayPeligrosidad_E) > -1) {
            array_peligrosidades.push('E');
        }
        else if (jQuery.inArray(arrayFrases[c], ArrayPeligrosidad_D) > -1) {
            array_peligrosidades.push('D');
        }
        else if (jQuery.inArray(arrayFrases[c], ArrayPeligrosidad_C) > -1) {
            array_peligrosidades.push('C');
        }
        else if (jQuery.inArray(arrayFrases[c], ArrayPeligrosidad_B) > -1) {
            array_peligrosidades.push('B');
        }
        else {
            array_peligrosidades.push('A');
        }
    }
    array_peligrosidades.sort();
    array_peligrosidades.reverse();
    return array_peligrosidades[0];
}

function validar_step0() {
    if ($("#Nombre").val() == "" || isNaN(parseFloat($("#Duracion").val()))) {
        $("#error_paso1").show();
        $("#step0Next").hide();
    }
    else {
        $("#error_paso1").hide();
        $("#step0Next").show();
    }
}

function calcular_reducciones(arrayFrases) {
    var loael1 = parseFloat($("#loael_oral").val());
    var loael2 = parseFloat($("#loael_dermica").val());
    var loael3 = parseFloat($("#loael_inhalatoria").val());
    var vla = parseFloat($("#vla-ed").val());
    var tieneR1 = $("#tiene_reduccion1").val();
    var tieneR2 = $("#tiene_reduccion2").val();

    if (arrayFrases != null) {

        var array = arrayFrases.split("-")

        var peligro_inicial = calcula_peligrosidad(array);

        var array_reducido_g1 = $.grep(array, function (n, i) {
            return $.inArray(n, ArrayPeligrosidad_Nota2_Grupo1) == -1;
        });

        var array_reducido = $.grep(array_reducido_g1, function (n, i) {
            return $.inArray(n, ArrayPeligrosidad_Nota2_Grupo2) == -1;
        });

        if (array_reducido.length <= 0) { var peligro_reducido = 'A'; }
        else { var peligro_reducido = calcula_peligrosidad(array_reducido); }

        if ($("#derecho_a_reduccion1").attr('checked') == false) {

            if (tieneR1 == '1') {
                if (loael1 > 50 && loael2 > 100 && loael3 > 0.25 && peligro_reducido <= 'B') {
                    peligro_reducido = 'B';
                }
                if ((loael1 > 5 && loael1 <= 50) || (loael2 > 10 && loael2 <= 100) || (loael3 > 0.025 && loael3 <= 0.25)) {
                    peligro_reducido = 'C';
                }
                if (loael1 <= 5 || loael2 <= 10 || loael3 <= 0.025) {
                    peligro_reducido = 'D';
                }
            }

            if (tieneR2 == '1') {
                if ($("input[name='EstadoFisico']:checked").val() == "SOL") {
                    switch (true) {
                        case vla > 1: { if (peligro_reducido < 'B') { peligro_reducido = 'A' }; break }
                        case vla > 0.1: { if (peligro_reducido <= 'B') { peligro_reducido = 'B' }; break }
                        case vla <= 0.1: { if (peligro_reducido <= 'C') { peligro_reducido = 'C' }; break }
                    }
                }
                else {
                    switch (true) {
                        case vla > 50: { if (peligro_reducido < 'B') { peligro_reducido = 'A' }; break }
                        case vla > 5: { if (peligro_reducido <= 'B') { peligro_reducido = 'B' }; break }
                        case vla <= 5: { if (peligro_reducido <= 'C') { peligro_reducido = 'C' }; break }
                    }
                }
            }
        }
        else { peligro_reducido = peligro_inicial; }

        $("#Peligrosidad").val(peligro_reducido);

        if (peligro_reducido != peligro_inicial) { $("#Reduccion1").val(peligro_inicial); }
        else { $("#Reduccion1").val(''); }

    }
}


function calcular_riesgo() {

    var peligrosidad = $("#Peligrosidad").val();
    var estado = $("input[name='EstadoFisico']:checked").val();
    var capacidad = $("input[name='Capacidad']:checked").val();
    var cantidad = $("input[name='Cantidad']:checked").val();
    var volatilidad = $("#resultado_volatilidad").text();
    var volatilidad_GAS = $("#resultado_volatilidad_gas").text();
    var modocalculo = $("input[name='ModoCalculoPeligrosidad']:checked").val();
    var duracion = parseFloat($("#Duracion").val());
    var repeticiones = parseFloat($("#Repeticiones").val());
    var id_sustancia = $("#Id_Sustancia").val();
    var loael1 = parseFloat($("#loael_oral").val());
    var loael2 = parseFloat($("#loael_dermica").val());
    var loael3 = parseFloat($("#loael_inhalatoria").val());
    var vla = parseFloat($("#vla-ed").val());
    var reduccion1 = $("#Reduccion1").val();
    var derecho_a_reduccion1 = $("#derecho_a_reduccion1").attr('checked');

    var resultado = '';
    var riesgo = 1;

    if (peligrosidad == '') { peligrosidad = 'A' }
    switch (estado) {
        case 'SOL': { resultado = peligrosidad + ',' + cantidad + ',' + estado + ',' + capacidad; capacidad = $("input[name='Capacidad']:checked").val(); break }
        case 'LIQ': { resultado = peligrosidad + ',' + cantidad + ',' + estado + ',' + volatilidad; capacidad = volatilidad; break }
        case 'GAS': { resultado = peligrosidad + ',' + cantidad + ',' + estado + ',' + volatilidad_GAS; capacidad = volatilidad_GAS; break }
    }

    if (peligrosidad != 'E') {
        var indice = jQuery.inArray(resultado, tablaCombinaciones)
        if (indice > -1) {
            riesgo = tablaRiesgos[indice];
        }
    }
    else { riesgo = 4; }

    var itemAgente = $("#Agente").val() + "#" + id_sustancia + "#" + estado + "#" + peligrosidad + "#" + cantidad + "#" + capacidad + "#" + riesgo + "#" + $("#ArrayFrases").val() + "#" + $("#temperatura_ebullicion").val() + "#" + $("#temperatura_proceso").val() + "#" + derecho_a_reduccion1 + "#" + reduccion1 + "#" + cuentaAgentes + "#" + loael1 + "#" + loael2 + "#" + loael3 + "#" + vla;

    //	Comprobamos que no esté ya el Agente en el array de Agentes
    if (jQuery.inArray(itemAgente, ArrayAgentes) == -1) {
        add_agente(itemAgente);
    }

    calcula_riesgo_maximo();

    $("#et_nombre").text($("#Nombre").val());
    $("#et_duracion").text(duracion + ' minutos');
    $("#et_repeticiones").text(repeticiones);

}

function calcula_riesgo_maximo() {
    var duracion = parseFloat($("#Duracion").val());
    var repeticiones = parseFloat($("#Repeticiones").val());
    RiesgoMaximo = 0;

    if (ArrayAgentes.length) {
        for (c = 0; c < ArrayAgentes.length; c++) {
            var cadena = ArrayAgentes[c].split('#');
            if (cadena[6] > RiesgoMaximo) {
                RiesgoMaximo = cadena[6];
            }
        }
    }

    if (duracion * repeticiones <= 30 && RiesgoMaximo > 1) {
        reduccion_riesgo_repeticiones = true;
        RiesgoMaximo--;
    }
    else {
        reduccion_riesgo_repeticiones = false;
    }

    $("#et_riesgo").text(RiesgoMaximo);
    $("#et_riesgo_total").text(RiesgoMaximo);
}

function comprueba_nota2(arrayFrases) {
    if (arrayFrases != null) {
        var array = arrayFrases.split("-")
    }
    var peligro = '';
    var tiene_grupo2 = false;
    $("#tiene_reduccion1").val(0);
    $("#tiene_reduccion2").val(0);

    $("#grupo_modificaciones").hide();
    $("#grupo1").hide();
    $("#grupo2").hide();
    $("#grupo2_notas").hide();
    $("#grupo_msg").text(grupo_msg1);

    for (var c = 0; c < array.length; c++) {
        if (jQuery.inArray(array[c], ArrayPeligrosidad_Nota2_Grupo2) > -1) {
            if (array.length == 1) {
                peligro = 'A';
            }
            else {
                var array_reducido = $.grep(array, function (n, i) {
                    return $.inArray(n, ArrayPeligrosidad_Nota2_Grupo2) == -1;
                });
                if (array_reducido.length == 0) { peligro = 'A' }
                else { peligro = calcula_peligrosidad(array_reducido); }
            }
            if (peligro <= 'C') {
                $("#grupo2").show();
                $("#grupo2_notas").show();
                $("#grupo_modificaciones").show();
                $("#grupo_msg").text(grupo_msg2);
                $("#tiene_reduccion1").val(1);
                tiene_grupo2 = true;
            }
        }
    }

    for (var c = 0; c < array.length; c++) {
        if (jQuery.inArray(array[c], ArrayPeligrosidad_Nota2_Grupo1) > -1) {
            if (array.length == 1) {
                peligro = 'A';
            }
            else {
                var array_reducido = $.grep(array, function (n, i) {
                    return $.inArray(n, ArrayPeligrosidad_Nota2_Grupo1) == -1;
                });
                if (array_reducido.length == 0) { peligro = 'A' }
                else { peligro = calcula_peligrosidad(array_reducido); }
            }
            if ((peligro <= 'B') || (peligro > 'B' && tiene_grupo2)) {
                $("#grupo1").show();
                $("#grupo_modificaciones").show();
                $("#grupo_msg").text(grupo_msg2);
                $("#tiene_reduccion2").val(1);
                tiene_grupo2 = true;
            }
        }
    }
}


function comprueba_notas() {
    $("#notas").hide();

    if (reduccion_riesgo_repeticiones) {
        $("#notas").show();
        $("#nota1").show();
        $("#et_nota1").show();
    }
    else {
        $("#nota1").hide();
        $("#et_nota1").hide();
    }
}

function comprueba_reduccion1() {
    if ($("#derecho_a_reduccion1").attr('checked')) {
        $('.loael :input').attr('disabled', 'disabled');
        $('.loael').addClass('texto_gris');
    }
    else {
        $('.loael :input').attr('disabled', '');
        $('.loael').removeClass('texto_gris');
    }
}


function add_agente(itemAgente) {

    ArrayAgentes.push(itemAgente);
    cuentaAgentes++;

    calcula_riesgo_maximo();
    $("#ArrayAgentes").val(ArrayAgentes.join(','));
    comprueba_notas();
    repintar_tabla_resultados();
}

function repintar_tabla_resultados() {
    var link_info1 = '';
    var link_info2 = '';
    var link_info3 = '';
    var link_infos = '';
    var contador = 3;
    var label = '';
    var existe_nota1 = false;
    var existe_nota2 = false;
    var existe_nota3 = false;

    $("#tabla_resultados tbody tr").each(function (i) {
        $(this).remove();
    });

    for (c = 0; c < ArrayAgentes.length; c++) {
        var cadena = ArrayAgentes[c].split('#');
        var nombre = cadena[0];
        var estado = cadena[2];
        var peligrosidad = cadena[3];
        var cantidad = cadena[4];
        var capacidad = cadena[5];
        var riesgo = cadena[6];
        var idagente = cadena[12];
        var reduccion1 = cadena[11];
        var clase = ''
        var riesgo_red = riesgo;

        if (reduccion_riesgo_repeticiones && riesgo > 1) {
            link_info1 = link_nota1;
            riesgo_red = riesgo - 1;
            existe_nota1 = true;
        }

        if (riesgo_red == RiesgoMaximo) {
            clase = 'selected';
        }

        if (reduccion1 != '') {
            link_info2 = link_nota2
            existe_nota2 = true;
        }
        else {
            link_info2 = link_nota3
            existe_nota3 = true;
        }

        if (link_info1 != '' && link_info2 != '') {
            link_infos = link_info1 + '<br>' + link_info2
        }
        else {
            link_infos = link_info1 + link_info2
        }

        linea = "<tr>";
        linea += "<td class='" + clase + "'>" + nombre + "</td>";
        linea += "<td class='" + clase + "'>" + estado + "</td>";
        linea += "<td class='" + clase + "'>" + peligrosidad + "</td>";
        linea += "<td class='" + clase + "'>" + cantidad + "</td>";
        linea += "<td class='" + clase + "'>" + capacidad + "</td>";
        linea += "<td class='" + clase + "'>" + riesgo_red + "</td>";
        linea += "<td class='" + clase + "'>" + link_infos + "</td>";
        linea += "<td class='" + clase + "'><a class='botoneditar' href='#' onclick='modifica_agente(" + idagente + ")' title='Modificar Agente'>&nbsp;</a><a class='botondelete' href='#' onclick='borrar_agente(" + idagente + ")' title='Quitar Agente'>&nbsp;</a></td>";
        linea += "</tr>";

        $('#tabla_resultados > tbody').append(linea);

    }

    if (existe_nota1 || existe_nota2 || existe_nota3) {
        $("#notas").show();
    }
    else {
        $("#notas").hide();
    }

    if (existe_nota1) { $("#nota1").show(); } else { $("#nota1").hide(); }
    if (existe_nota2) { $("#nota2").show(); } else { $("#nota2").hide(); }
    if (existe_nota3) { $("#nota3").show(); } else { $("#nota3").hide(); }

}

function borrar_agente(idagente) {
    ArrayAgentes = jQuery.grep(ArrayAgentes, function (value) {
        return value != item_agente(idagente);
    });

    calcula_riesgo_maximo();
    repintar_tabla_resultados();
    $("#ArrayAgentes").val(ArrayAgentes.join(','));
    comprueba_notas();
}

function item_agente(idagente) {
    var agente = '';

    if (ArrayAgentes) {
        for (c = 0; c < ArrayAgentes.length; c++) {
            var cadena = ArrayAgentes[c].split('#');
            if (cadena[12] == idagente) {
                agente = ArrayAgentes[c];
            }
        }
    }
    return agente;
}

function modifica_agente(idagente) {

    $('#step0').show();
    $('#step4').hide();
    $("#stepDesc4").attr('class', '');
    $("#stepDesc0").attr('class', 'current');
    $('#Nombre').focus();

    agente = item_agente(idagente);
    borrar_agente(idagente);

    inicializa_variables();

    var cadena = agente.split('#');

    var nombre = cadena[0];
    var sustancia = cadena[1];
    var estado = cadena[2];
    var peligrosidad = cadena[3];
    var cantidad = cadena[4];
    var capacidad = cadena[5];
    var riesgo = cadena[6];
    var frases = cadena[7];
    var temp_ebull = cadena[8];
    var temp_proce = cadena[9];
    var derecho_a_reduccion1 = cadena[10];
    var reduccion1 = cadena[11];
    var loael1 = cadena[13];
    var loael2 = cadena[14];
    var loael3 = cadena[15];
    var vla = cadena[16];

    $("#Agente").val(nombre);
    $("#Id_Sustancia").val(sustancia);
    $("#Peligrosidad").val(peligrosidad);
    $("#ArrayFrases").val(frases);
    $("#temperatura_ebullicion").val(temp_ebull);
    $("#temperatura_proceso").val(temp_proce);
    $("#loael_oral").val(loael1);
    $("#loael_dermica").val(loael2);
    $("#loael_inhalatoria").val(loael3);
    $("#vla-ed").val(vla);

    if (derecho_a_reduccion1 == 'true') {
        $("#derecho_a_reduccion1").attr('checked', 'checked');
    }
    else {
        $("#derecho_a_reduccion1").attr('checked', '');
    }

    comprueba_reduccion1();

    cambia_estado(estado);
    calcula_volatilidad();
    cambia_cantidad(cantidad);
    cambia_capacidad(capacidad);
    frases_string2checkbox(frases);
    $("#Peligrosidad").val(peligrosidad);
    comprueba_nota2(frases)
}


function inicializa_variables() {
    $("#Agente").val("");
    $("#Id_Sustancia").val("0");
    $("#ArrayFrases").val("");
    $("#Peligrosidad").val("A");
    $("#Agente_solido").attr('checked', 'checked');
    $("#Agente_liquido").attr('checked', '');
    $("#Agente_gaseoso").attr('checked', '');
    $("#derecho_a_reduccion1").attr('checked', '');
    $("#tiene_reduccion1").val(0);
    $("#tiene_reduccion2").val(0);
    comprueba_reduccion1();
    $("*[id^='SOL_']").show();
    $("*[id^='LIQ_']").hide();
    $("*[id^='GAS_']").hide();
    $("#Capacidad_baja").attr('checked', 'checked');
    $("#temperatura_ebullicion").val("0");
    $("#temperatura_proceso").val("20");
    $("input[name='ModoCalculoPeligrosidad']").attr("disabled", false);
    $("input[name='EstadoFisico']").attr("disabled", false);
    $(".loael").attr("disabled", false);
    $("#ModoFrasesH").attr('checked', 'checked');
    $("#ModoFrasesR").attr('checked', '');
    $("#seleccion_peligrosidad_frasesR").hide();
    $("#seleccion_peligrosidad_frasesH").show();
    $("#capacidad_gases").hide();
    $("#capacidad_liquidos").hide();
    $("#capacidad_solidos").show();
    inicializa_frases();
    inicializa_cantidad();
}

function inicializa_frases() {
    $("#selector_frasesR input:checkbox").each(function (i) {
        $(this).attr('checked', '');
        $(this).parent().attr('class', 'checkboxlabel');
    });
    $("#selector_frasesH input:checkbox").each(function (i) {
        $(this).attr('checked', '');
        $(this).parent().attr('class', 'checkboxlabel');
    });
}

function inicializa_cantidad() {
    $("#Cantidad_pequeña").attr('checked', 'checked');
    $("#Cantidad_mediana").attr('checked', '');
    $("#Cantidad_grande").attr('checked', '');
}


function submit_formulario() {
    $("#ArrayAgentes").val(ArrayAgentes.join('¶'));
    $("#NivelRiesgo").val(RiesgoMaximo);
    document.formulario_datos_operaciones.submit();
}
