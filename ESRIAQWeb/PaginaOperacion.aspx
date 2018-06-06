<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaOperacion.aspx.cs" Inherits="RQWeb.PaginaOperacion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <link href="css/operacion.css" rel="stylesheet" /> 
    <link href="css/imprimir.css" rel="stylesheet" media="print" type="text/css" />    <link href="css/cuadroresultado.css" rel="stylesheet" />

    <script type="text/javascript" src="js/operacion.js?version=38"></script>
    <script type="text/javascript" src="js/lineasresultados.js?version=01"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <img id="top" src="../img/top.png" alt="" />
    <div id="form_container">

        <ul id="steps">
            <li id="stepDesc1"><a href="#" onclick="accionstep1()">Paso 1<span class="current">Datos &nbsp&nbsp operación </span></a></li>
            <li id="stepDesc2"><a href="#" onclick="accionstep2()">Paso 2 <span>Riesgo &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp potencial</span> </a></li>
            <li id="stepDesc3"><a href="#" onclick="accionstep3()">Paso 3 <span>Volatilidad Pulverulencia</span> </a></li>
            <li id="stepDesc4"><a href="#" onclick="accionstep4()">Paso 4 <span>Procedimiento &nbsp&nbsp&nbsp de trabajo</span> </a></li>
            <li id="stepDesc5"><a href="#" onclick="accionstep5()">Paso 5 <span>Protecciones Colectivas</span> </a></li>
            <li id="stepDesc6"><a href="#" onclick="accionstep6()">Paso 6 <span>Factor de &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp corrección VLA </span></a></li>
            <li id="stepDesc7"><a href="#" onclick="accionstep7()">Paso 7 <span>Resultados</span> </a></li>
        </ul>

        <div id="step1">
            <div id="substep11">
                <fieldset>
                    <legend>Datos de la operación</legend>
                    <ul>
                        <li id="linea11">
                            <label class="description" for="Nombre">Nombre de la operación:</label>
                            <div>
                                <input name="nombre" id="nombre" class="element text large" type="text" maxlength="255" onchange="validar_substep11();" value="" />
                            </div>
                        </li>
                        <li id="linea12">
                            <label class="description" for="Agente">Agente químico utilizado:</label>
                            <div>
                                <input name="agentequimico" id="agentequimico" class="element text large" type="text" maxlength="255" onchange="validar_substep11();" value="" />
                            </div>
                        </li>
                        <li id="linea2">
                            <label class="description" for="descripcion">Descripción:</label>
                            <div>
                                <textarea id="descripcion" name="descripcion" class="textarea" cols="110" rows="7" onchange="validar_substep11();"></textarea>
                            </div>
                        </li>
                    </ul>
                    <div class="error_message" id="error_substep11">El nombre de la operación es un campo obligatorio</div>

                    <div style="margin-left: 10px; margin-top: 30px;" class="grupo_botones">
                        <div class="btn btn_submit"><a href="PaginaMisOperaciones.aspx">Volver al listado de operaciones</a><span></span></div>
                    </div>

                    <br />
                    <p><a href="#" id="substep11Next" class="sig">Siguiente></a></p>
                </fieldset>
            </div>
        </div>
        <div id="step2">
            <div id="substep21">
                <fieldset>
                    <legend>Riesgo Potencial </legend>
                    <div id="grupo_generico" class="cuadro_Nota">
                        <p>En este <b>PASO 2</b> se va a calcular la puntuación del riesgo potencial.</p>
                        <br />
                        <p>Se obtiene a partir de:</p>
                        <p class="cuadro_Nota_Indentado">* la clase de peligro</p>
                        <p class="cuadro_Nota_Indentado">* la clase de exposición potencial (a partir de la cantidad absoluta de producto y la frecuencia de utilización).</p>
                        <br />
                        <br />
                        <p>En las pantallas siguientes se van a introducir los datos necesarios para obtener la clase de peligro, la clase de exposición potencial y, en último término, el riesgo potencial.</p>
                    </div>
                    <br />

                    <p><a href='#' id="substep21Prev" class="prev">< Anterior</a> <a href="#" id="substep21Next" class="sig">Siguiente></a></p>
                </fieldset>
            </div>

            <div id="substep22">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE PELIGRO</legend>
                    <div id="agente_quimico_01">
                        <label class="description" for="Agente">Agente químico:</label>
                        <div>
                            <input name="Agente" id="Agente" class="element text large" type="text" maxlength="255" onchange="cargar_agente();" value="" />
                        </div>
                        <%--<div>(Introduzca alguna de las siguientes variables: nombre del agente, número CAS, índice o CE)</div>--%>
                    </div>
                    <div id="seleccion_por_frases_H">
                        <label class="description_ind_peligro">
                            <br />
                            ¿El agente químico tiene indicaciones de peligro?
                        </label>
                        <div id="frases_H" class="seleccion_si_no_ind_peligro">
                            <input id="seleccion_frases_H_si" name="frases_H" checked class="element radio" type="radio" value="1" />
                            <label class="choice" for="seleccion_frases_H_si">Sí</label>
                            <input id="seleccion_frases_H_no" name="frases_H" class="element radio" type="radio" value="0" />
                            <label class="choice" for="seleccion_frases_H_no">No</label>
                        </div>
                    </div>
                    <div style="clear: both"></div>

                    <div id="seleccion_por_VLA_ED">
                        <label class="description_VLA">
                            <br />
                            ¿Tiene VLA-ED<sup>®</sup>? 
                        </label>

                        <div id="seleccion_VLA_ED_si_no" class="seleccion_por_VLA_ED">

                            <input id="seleccion_VLA_ED_si" name="VLA_ED" checked class="element radio" type="radio" value="1" />
                            <label class="choice" for="seleccion_VLA_ED_si">Sí &nbsp  &nbsp &nbsp Para consultar el VLA pinche <span><a target="_blank" href="http://bdlep.insht.es/LEP2017/">aquí.</a></span></label>
                            <input id="seleccion_VLA_ED_no" name="VLA_ED" class="element radio" type="radio" value="0" />
                            <label class="choice" for="seleccion_VLA_ED_no">No</label>

                        </div>

                    </div>
                    <div style="clear: both"></div>

                    <div id="seleccion_VLA_ED_grupo">
                        <div id="seleccion_VLA_ED_par_titulo">
                            <label class="description_mat_par">
                                <br />
                                ¿Se trata de materia particulada?
                            </label>
                        </div>
                        <div id="seleccion_VLA_ED_par" class="seleccion_si_no_mat_par">
                            <input id="seleccion_mat_par_si" name="VLA_ED_mat_par" checked class="element radio" type="radio" value="1" />
                            <label class="choice" for="seleccion_mat_par_si">Sí</label>
                            <input id="seleccion_mat_par_no" name="VLA_ED_mat_par" class="element radio" type="radio" value="0" />
                            <label class="choice" for="seleccion_mat_par_no">No</label>
                        </div>
                    </div>
                    <div id="seleccion_VLA_ED_no_par_grupo">

                        <div id="opcion_VLA_ED_par" class="seleccion_VLA_ED_par">
                            <p>Seleccione la opción que corresponda:</p>
                            <input id="VLA_ED_11" name="VLA_ED_par" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="VLA_ED_1">VLA-ED<sup>®</sup> > 10</label>
                            <input id="VLA_ED_21" name="VLA_ED_par" class="element radio" type="radio" value="1" />
                            <label class="choice" for="VLA_ED_2">1 < VLA-ED<sup>®</sup>  &#8804 10</label>
                            <input id="VLA_ED_31" name="VLA_ED_par" class="element radio" type="radio" value="2" />
                            <label class="choice" for="VLA_ED_3">0,1 < VLA-ED<sup>®</sup>  &#8804 1</label>
                            <input id="VLA_ED_41" name="VLA_ED_par" class="element radio" type="radio" value="3" />
                            <label class="choice" for="VLA_ED_4">0,01 < VLA-ED<sup>®</sup>  &#8804 0,1</label>
                            <input id="VLA_ED_51" name="VLA_ED_par" class="element radio" type="radio" value="4" />
                            <label class="choice" for="VLA_ED_5">VLA-ED<sup>®</sup>  &#8804 0,01</label>
                        </div>
                        <div id="opcion_VLA_ED_no_par" class="seleccion_VLA_ED_no_par">
                            <p>Seleccione la opción que corresponda:</p>
                            <input id="VLA_ED_1" name="VLA_ED_no_par" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="VLA_ED_1">VLA-ED<sup>®</sup> > 100</label>
                            <input id="VLA_ED_2" name="VLA_ED_no_par" class="element radio" type="radio" value="1" />
                            <label class="choice" for="VLA_ED_2">10 < VLA-ED<sup>®</sup>  &#8804 100</label>
                            <input id="VLA_ED_3" name="VLA_ED_no_par" class="element radio" type="radio" value="2" />
                            <label class="choice" for="VLA_ED_3">1 < VLA-ED<sup>®</sup> &#8804  10</label>
                            <input id="VLA_ED_4" name="VLA_ED_no_par" class="element radio" type="radio" value="3" />
                            <label class="choice" for="VLA_ED_4">0,1 < VLA-ED<sup>®</sup>  &#8804 1</label>
                            <input id="VLA_ED_5" name="VLA_ED_no_par" class="element radio" type="radio" value="4" />
                            <label class="choice" for="VLA_ED_5">VLA-ED<sup>®</sup>  &#8804 0,1</label>
                        </div>
                    </div>


                    <div id="seleccion_por_sustancia_comercial">
                        <label class="description_sus_com">
                            <br />
                            ¿Es una sustancia o mezcla comercial? 
                        </label>

                        <div id="seleccion_sustancia_comercial_si_no" class="seleccion_si_no_sus_com">
                            <input id="seleccion_sustancia_comercial_si" name="sustancia_comercial" checked class="element radio" type="radio" value="1" />
                            <label class="choice" for="seleccion_sustancia_comercial_si">Sí</label>
                            <input id="seleccion_sustancia_comercial_no" name="sustancia_comercial" class="element radio" type="radio" value="0" />
                            <label class="choice" for="seleccion_sustancia_comercial_no">No</label>
                        </div>
                    </div>
                    <div style="clear: both"></div>


                    <div id="seleccion_peligrosidad_frasesH">
                        <p>Seleccione las indicaciones de peligro relativas al agente:</p>


                        <div id="selector_frasesH">
                            <table id="tabla_frasesH" class="tabla_seleccion_frasesH">
                            </table>
                            <div class="no_aplica_FrasesH">
                                <input id="NoaplicaFrasesH" name="NoaplicaFrasesH" type="checkbox" value="1" /><label for="id_No_aplica_FrasesH"><b>No aplica ninguna de las indicaciones de peligro H indicadas</b></label>
                            </div>
                        </div>
                        <br />
                        <div class="listaindpeligro">
                            <div class="listaindpeligro_seccion">
                                <a id="titulolistaindpeligro" class="titulolistaindpeligro" href="#contenidolistaindpeligro">Ver la lista de indicaciones de peligro H y sus descripciones</a>

                                <div id="contenidolistaindpeligro" class="contenidolistaindpeligro">
                                    <table id="tabla_lista_frasesH" class="tabla_lista_frasesH">
                                    </table>

                                </div>
                            </div>
                        </div>




                    </div>


                    <div id="seleccion_sustancia_comercial">
                        <label class="description">
                            <br />
                            Para materiales o productos comercializados no sujetos a normativa de etiquetado, seleccione el agente químico emitido por el proceso:</label>

                        <br />

                        <div id="opcion_clase_peligro_otros" class="seleccion_clase_peligro_otros">
                            <input id="check_clase_peligros_otros_1" name="clase_peligro_otros" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="clase_peligro_otros">Hierro / Cereal y derivados / Grafito / Material de construcción / Talco / Cemento / Composites / Madera de combustión tratada / Soldadura metales-plásticos / Material vegetal-animal.</label>
                            <input id="check_clase_peligros_otros_2" name="clase_peligro_otros" class="element radio" type="radio" value="1" />
                            <label class="choice" for="clase_peligro_otros">Soldadura inoxidable / Fibras cerámicas-vegetales / Pinturas de plomo / Muelas / Arenas / Aceites de corte y refrigerantes.</label>
                            <input id="check_clase_peligros_otros_3" name="clase_peligro_otros" class="element radio" type="radio" value="2" />
                            <label class="choice" for="clase_peligro_otros">Maderas blandas y derivados / Plomo metálico / Fundición y afinaje de plomo.</label>
                            <input id="check_clase_peligros_otros_4" name="clase_peligro_otros" class="element radio" type="radio" value="3" />
                            <label class="choice" for="clase_peligro_otros">Amianto y materiales que lo contienen (legislación específica: requiere evaluación cuantitativa) /Betunes y breas / Gasolina – carburante (sólo para el trabajo en contacto directo) / Vulcanización / Maderas duras y derivados (polvo de maderas considerado cancerígeno).</label>

                        </div>


                    </div>

                    <br />

                    <p><a href='#' id="substep22Prev" class="prev">< Anterior</a> <a href="#" id="substep22Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

            <div id="substep23">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE EXPOSICIÓN POTENCIAL</legend>

                    <label class="description">
                        <br />
                        Seleccione la CANTIDAD utilizada por día:</label>
                    <label class="descriptionrojo">(En el caso de gases, utilizar el volumen en condiciones normales de presión y temperatura).</label>

                    <div id="seleccion_clase_exposicion_potencial_cantidad" class="seleccion_clase_exposicion_potencial_cantidad">
                        <input id="check_cantidad_1" name="clase_exposicion_potencial_cantidad" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="clase_exposicion_potencial_cantidad">< 100 g o ml</label>
                        <input id="check_cantidad_2" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="1" />
                        <label class="choice" for="clase_exposicion_potencial_cantidad">&#8805 100 g o ml y < 10 kg o l</label>
                        <input id="check_cantidad_3" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="2" />
                        <label class="choice" for="clase_exposicion_potencial_cantidad">&#8805 10 y < 100 kg o l</label>
                        <input id="check_cantidad_4" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="3" />
                        <label class="choice" for="clase_exposicion_potencial_cantidad">&#8805 100 y < 1000 kg o l</label>
                        <input id="check_cantidad_5" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="4" />
                        <label class="choice" for="clase_exposicion_potencial_cantidad">&#8805 1000 kg o l</label>

                    </div>

                    <br />

                    <p><a href='#' id="substep23Prev" class="prev">< Anterior</a> <a href="#" id="substep23Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>


            <div id="substep24">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE EXPOSICIÓN POTENCIAL</legend>

                    <label class="description">
                        <br />
                        Seleccione la FRECUENCIA DE UTILIZACIÓN:</label>

                    <br />

                    <div id="clase_exposicion_potencial_frecuencia_no_se_usa" class="seleccion_clase_exposicion_potencial_no_se_usa">
                        <input id="check_no_se_usa" name="clase_exposicion_potencial_frecuencia" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="clase_exposicion_potencial_frecuencia">El agente químico no se usa hace al menos un año / El agente químico no se usa más.</label>
                    </div>

                    <div id="seleccion_clase_exposicion_potencial_frecuencia" class="seleccion_clase_exposicion_potencial_frecuencia">
                        <input id="check_diaria" name="clase_exposicion_potencial_frecuencia" class="element radio" type="radio" value="1" />
                        <label class="choice" for="clase_exposicion_potencial_frecuencia">Diaria</label>
                        <input id="check_semanal" name="clase_exposicion_potencial_frecuencia" class="element radio" type="radio" value="2" />
                        <label class="choice" for="clase_exposicion_potencial_frecuencia">Semanal</label>
                        <input id="check_mensual" name="clase_exposicion_potencial_frecuencia" class="element radio" type="radio" value="3" />
                        <label class="choice" for="clase_exposicion_potencial_frecuencia">Mensual</label>
                        <input id="check_anual" name="clase_exposicion_potencial_frecuencia" class="element radio" type="radio" value="4" />
                        <label class="choice" for="clase_exposicion_potencial_frecuencia">Anual</label>

                    </div>

                    <div id="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="seleccion_clase_exposicion_potencial_frecuencia">
                        <input id="cepf_diaria_1" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">&#8804 30 min</label>
                        <input id="cepf_diaria_2" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="1" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 30 - &#8804 120 min</label>
                        <input id="cepf_diaria_3" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="2" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 2 - &#8804 6 h</label>
                        <input id="cepf_diaria_4" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="3" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 6 h </label>
                    </div>

                    <div id="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="seleccion_clase_exposicion_potencial_frecuencia">
                        <input id="cepf_semanal_1" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">&#8804 2 h</label>
                        <input id="cepf_semanal_2" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="element radio" type="radio" value="1" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">> 2 - &#8804 8 h</label>
                        <input id="cepf_semanal_3" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="element radio" type="radio" value="2" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">1 – 3 días</label>
                        <input id="cepf_semanal_4" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="element radio" type="radio" value="3" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">> 3 días   </label>
                    </div>

                    <div id="seleccion_clase_exposicion_potencial_frecuencia_mensual" class="seleccion_clase_exposicion_potencial_frecuencia">
                        <input id="cepf_mensual_1" name="seleccion_clase_exposicion_potencial_frecuencia_mensual" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_mensual">1 día</label>
                        <input id="cepf_mensual_2" name="seleccion_clase_exposicion_potencial_frecuencia_mensual" class="element radio" type="radio" value="1" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_mensual">2 – 6 días</label>
                        <input id="cepf_mensual_3" name="seleccion_clase_exposicion_potencial_frecuencia_mensual" class="element radio" type="radio" value="2" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_mensual">7 – 15 días</label>
                        <input id="cepf_mensual_4" name="seleccion_clase_exposicion_potencial_frecuencia_mensual" class="element radio" type="radio" value="3" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_mensual">> 15 días </label>
                    </div>
                    <div id="seleccion_clase_exposicion_potencial_frecuencia_anual" class="seleccion_clase_exposicion_potencial_frecuencia">
                        <input id="cepf_anual_1" name="seleccion_clase_exposicion_potencial_frecuencia_anual" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">&#8804 15 días</label>
                        <input id="cepf_anual_2" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="1" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 15 días - &#8804 2 meses</label>
                        <input id="cepf_anual_3" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="2" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 2 - ≤ 5 meses</label>
                        <input id="cepf_anual_4" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="3" />
                        <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 5 meses </label>
                    </div>

                    <div style="clear: both"></div>


                    <p><a href='#' id="substep24Prev" class="prev">< Anterior</a> <a href="#" id="substep24Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

            <div id="substep25">
                <fieldset>
                    <legend>Riesgo Potencial – Cálculos</legend>

                    <div id="riesgo_potencial_franja01" class="franja_riesgo_potencial">
  
                    </div>
                    <div id="riesgo_potencial_franja02" class="franja_riesgo_potencial">
  
                        <div id="caja_resultado_peligro" class="caja_resultado_peligro">
                            <div id="titulo resultado_peligro" class="titulo_resultado_peligro"> <span>PELIGRO</span></div>
                            <div id="clase resultado_peligro" class="clase_resultado_peligro">
                                <div id="clase literal resultado_peligro" class="clase_literal_resultado_peligro"> <span>Clase:</span> </div>
                                <div id="clase valor resultado_peligro" class="clase_valor_resultado_peligro"> <span id="r_clase_peligro"></span> </div>
                            </div>
                            
                        </div>

                        <div id="caja_resultado_cantidad" class="caja_resultado_cantidad">
                            <div id="titulo resultado_cantidad" class="titulo_resultado_cantidad"> <span>CANTIDAD</span></div>
                            <div id="clase resultado_cantidad" class="clase_resultado_cantidad">
                                <div id="clase literal resultado_cantidad" class="clase_literal_resultado_cantidad"> <span>Clase:</span> </div>
                                <div id="clase valor resultado_cantidad" class="clase_valor_resultado_cantidad"> <span id="r_clase_cantidad_dia"></span> </div>
                            </div>
                            
                        </div>


                        <div id="caja_resultado_frecuencia" class="caja_resultado_frecuencia">
                            <div id="titulo resultado_frecuencia" class="titulo_resultado_frecuencia"> <span>FRECUENCIA DE UTILIZACIÓN</span></div>
                            <div id="clase resultado_frecuencia" class="clase_resultado_frecuencia">
                                <div id="clase literal resultado_frecuencia" class="clase_literal_resultado_frecuencia"> <span>Clase:</span> </div>
                                <div id="clase valor resultado_frecuencia" class="clase_valor_resultado_frecuencia"> <span id="r_clase_frecuencia_utilizacion"></span> </div>
                            </div>
                            
                        </div>

                    </div>
                    <div id="riesgo_potencial_franja03" class="franja_riesgo_potencial">
                        <div id="riesgo_potencial_franja03_canvas" class="franja03_canvas">
                            <canvas id="lineasfranja03" width="740" height="70" style="border: 0px solid gray; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.

                            </canvas>

                        </div>

                    </div>

                    <div id="riesgo_potencial_franja04" class="franja_riesgo_potencial">

                        <div id="riesgo_potencial_franja04_canvas" class="franja04_canvas">
                            <canvas id="lineasfranja04" width="345" height="74" style="border: 0px solid gray; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.

                            </canvas>

                        </div>

                        <div id="caja_resultado_exposicion" class="caja_resultado_exposicion">
                            <div id="titulo resultado_exposicion" class="titulo_resultado_exposicion"> <span>EXPOSICIÓN POTENCIAL</span></div>
                            <div id="clase resultado_exposicion" class="clase_resultado_exposicion">
                                <div id="clase literal resultado_exposicion" class="clase_literal_resultado_exposicion"> <span>Clase:</span> </div>
                                <div id="clase valor resultado_exposicion" class="clase_valor_resultado_exposicion"> <span id="r_clase_exposicion_potencial"></span> </div>
                            </div>
                            
                        </div>
  
                    </div>
                    <div id="riesgo_potencial_franja05" class="franja_riesgo_potencial">
                            <canvas id="lineasfranja05" width="345" height="25" style="border: 0px solid gray; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.

                            </canvas>
  
                    </div>
                    <div id="riesgo_potencial_franja06" class="franja_riesgo_potencial">

                        <div id="caja_resultado_riesgo" class="caja_resultado_riesgo">
                            <div id="titulo resultado_riesgo" class="titulo_resultado_riesgo"> <span>RIESGO POTENCIAL</span></div>
                           
                            <div id="clase resultado_riesgo" class="clase_resultado_riesgo">
                                <div id="clase literal resultado_riesgo" class="clase_literal_resultado_riesgo"> <span>Clase:</span> </div>
                                <div id="clase valor resultado_riesgo" class="clase_valor_resultado_riesgo"> <span id="r_clase_riesgo_potencial"></span> </div>
                            </div>
                                                      
                            <div id="puntuacion resultado_riesgo" class="puntuacion_resultado_riesgo">
                                <div id="puntuacion literal resultado_riesgo" class="puntuacion_literal_resultado_riesgo"> <span>Puntuación:</span> </div>
                                <div id="puntuacion valor resultado_riesgo" class="puntuacion_valor_resultado_riesgo"> <span id="r_puntuacion_riesgo_potencial"></span> </div>
                            </div>
                                      
                        </div>
  
  
                    </div>

                     <div id="riesgo_potencial_franja07" class="franja_riesgo_potencial">
  
                    </div>

                    <p><a href='#' id="substep25Prev" class="prev">< Anterior</a> <a href="#" id="substep25Next" class="sig">Siguiente></a></p>

                    
    <%--               <div id="caja resultado_riesgo" class="caja_resultados_parciales">
                        <canvas id="cuadroriesgo" width="720" height="380" style="border: 0px solid gray; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                        </canvas>
                    </div>
--%>




                </fieldset>
            </div>


        </div>

        <div id="step3">
            <div id="substep31">
                <fieldset>
                    <legend>Volatilidad o pulverulencia</legend>

                    <div id="volatilidad_pulverulencia_introduccion" class="cuadro_Nota">
                        <p><b>ALGUNAS CONSIDERACIONES</b></p>
                        <br />
                        <p>Procesos desarrollados a distintas temperaturas, utilizar la temperatura más alta.</p>
                        <br />
                        <p>¿Qué punto de ebullición tomar en caso de mezclas/disoluciones?</p>
                        <p class="cuadro_Nota_Indentado">- Los de los componentes de forma individual.</p>
                        <p class="cuadro_Nota_Indentado">- Si es susceptible de formar un azeótropo: tomar esta temperatura como punto de ebullición.</p>
                        <p class="cuadro_Nota_Indentado">- Mezcla comercial: el que indique en la ficha de datos de seguridad (FDS) y, si da un intervalo de destilación, tomar la temperatura más baja.</p>
                        <p class="cuadro_Nota_Indentado">- Disoluciones: el que se indique en la FDS. Si no se indica, tomar la temperatura del disolvente.</p>
                        <br />


                    </div>

                    <p><a href='#' id="substep31Prev" class="prev">< Anterior</a> <a href="#" id="substep31Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

            <div id="substep32">
                <fieldset>
                    <legend>Volatilidad o pulverulencia</legend>

                    <label class="description">
                        <br />
                        Señale el estado físico teniendo en cuenta las consideraciones de la pantalla anterior.</label>
                    <br />
                    <br />
                    <div id="seleccion_volatilidad_pulverulencia" class="seleccion_volatilidad_pulverulencia">
                        <input id="check_estado_solido" name="volatilidad_pulverulencia_estado" checked class="element radio" type="radio" value="0" />
                        <label class="choice" for="volatilidad_pulverulencia_estado">Estado sólido</label>
                        <input id="check_estado_liquido" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="1" />
                        <label class="choice" for="volatilidad_pulverulencia_estado">Estado líquido</label>
                        <input id="check_estado_spraying" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="2" />
                        <label class="choice" for="volatilidad_pulverulencia_estado">Gases, humos y líquidos o sólidos en suspensión líquida que se utilicen en operaciones de pulverización (spraying).</label>
                        <input id="check_estado_part_vapor" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="3" />
                        <label class="choice" for="volatilidad_pulverulencia_estado">Agentes químicos presentes en el ambiente en forma de materia particulada y en forma de vapor simultáneamente (señalados con la nota “FIV” en el Documento de Límites de Exposición Profesional para agentes químicos en España”).</label>
                        <br />
                    </div>

                    <br />
                    <p><a href='#' id="substep32Prev" class="prev">< Anterior</a> <a href="#" id="substep32Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

            <div id="substep331">
                <fieldset>
                    <legend>Volatilidad o pulverulencia</legend>

                    <label class="description">
                        <br />
                        Estado sólido:</label>
                    <br />
                    <br />
                    <div id="seleccion_volatilidad_pulverulencia_solido" class="seleccion_volatilidad_pulverulencia_solido">
                        <input id="check_polvo_fino" name="volatilidad_pulverulencia_solido" checked class="element radio" type="radio" value='0' />
                        <label class="choice" for="volatilidad_pulverulencia_solido">Material en forma de polvo fino. Formación de polvo que queda en suspensión en la manipulación (por ejemplo: harina, azúcar en polvo, cemento, yeso, etc.).</label>
                        <input id="check_polvo_grano" name="volatilidad_pulverulencia_solido" class="element radio" type="radio" value='1' />
                        <label class="choice" for="volatilidad_pulverulencia_solido">Material en forma de polvo en grano (1-2 mm). El polvo sedimenta rápido en la manipulación (por ejemplo: azúcar consistente cristalizada). </label>
                        <input id="check_polvo_pastillas" name="volatilidad_pulverulencia_solido" class="element radio" type="radio" value='2' />
                        <label class="choice" for="volatilidad_pulverulencia_solido">Material en pastillas, granulado, escamas (varios mm o 1-2 cm) sin apenas emisión de polvo en la manipulación.</label>

                    </div>

                    <br />

                    <p><a href='#' id="substep331Prev" class="prev">< Anterior</a> <a href="#" id="substep331Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

            <div id="substep332">
                <fieldset>
                    <legend>Volatilidad o pulverulencia </legend>

                    <label class="description">
                        <br />
                        Estado líquido</label>
                    <label class="description">
                        <br />
                        Introduzca los siguientes datos:</label>
                    <br />
                    <table id="tabla_volatilidad_pulverulencia_liquido" class="tabla_volatilidad_pulverulencia_liquido">
                        <tr>
                            <td>Temperatura de utilización (ºC):  </td>
                            <td>
                                <input name="TemUti" id="TemUti" class="element text small numero_decimal" type="text" maxlength="3" value="" /></td>

                        </tr>
                        <tr>
                            <td>Punto de ebullición (ºC):  </td>
                            <td>
                                <input name="TemEbu" id="TemEbu" class="element text small numero_decimal" type="text" maxlength="3" value="" /></td>

                        </tr>

                    </table>

                    <br />

                    <p><a href='#' id="substep332Prev" class="prev">< Anterior</a> <a href="#" id="substep332Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>
            <div id="substep334">
                <fieldset>
                    <legend>Volatilidad o pulverulencia</legend>

                    <label class="description">
                        <br />
                        Agentes químicos presentes en el ambiente en forma de materia particulada y vapor simultáneamente.</label>

                    <br />

                    <div id="volatilidad_pulverulencia_part_vapor_solido" class="volatilidad_pulverulencia_part_vapor_solido">
                        <label class="description">Señale la opción que corresponda para materia particulada:</label>

                        <div id="seleccion_volatilidad_pulverulencia_part_vapor_sol" class="volatilidad_pulverulencia_part_vapor_sol">
                            <input id="check_polvo_fino_p_v" name="volatilidad_pulverulencia_part_vapor" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor">Material en forma de polvo fino. Formación de polvo que queda en suspensión en la manipulación (por ejemplo: harina, azúcar en polvo, cemento, yeso, etc.).</label>
                            <input id="check_polvo_grano_p_v" name="volatilidad_pulverulencia_part_vapor" class="element radio" type="radio" value="1" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor">Material en forma de polvo en grano (1-2 mm). El polvo sedimenta rápido en la manipulación (por ejemplo: azúcar consistente cristalizada). </label>
                            <input id="check_polvo_pastillas_p_v" name="volatilidad_pulverulencia_part_vapor" class="element radio" type="radio" value="2" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor">Material en pastillas, granulado, escamas (varios mm o 1-2 cm) sin apenas emisión de polvo en la manipulación.</label>

                        </div>
                        <br />
                    </div>
                    <div id="volatilidad_pulverulencia_part_vapor_vapor" class="volatilidad_pulverulencia_part_vapor_vapor">
                        <label class="description">Señale la opción que corresponda para vapor: </label>


                        <div id="volatilidad_pulverulencia_part_vapor_pv" class="volatilidad_pulverulencia_part_vapor_vp">
                            <input id="pv_1" name="volatilidad_pulverulencia_part_vapor_pv" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">Pv &#8805 25 KPa</label>
                            <input id="pv_2" name="volatilidad_pulverulencia_part_vapor_pv" class="element radio" type="radio" value="1" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">0,5 KPa &#8804 Pv < 25 KPa </label>
                            <input id="pv_3" name="volatilidad_pulverulencia_part_vapor_pv" class="element radio" type="radio" value="2" />
                            <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">Pv < 0,5 KPa</label>

                        </div>
                    </div>
                    <div style="clear: both"></div>

                    <br />
                    <p><a href='#' id="substep334Prev" class="prev">< Anterior</a> <a href="#" id="substep334Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>
            <div id="substep34">
                <fieldset>
                    <legend>Volatilidad o pulverulencia - Cálculos</legend>


                    <div id="marco resultado_volatilidad" class="marco_resultado_parcial">
                        <div id="caja_resultado_volatilidad" class="caja_resultado_parcial">
                            <div id="titulo resultado_volatilidad" class="titulo_resultado_parcial">
                                <span>VOLATILIDAD O PULVERULENCIA</span>
                            </div>
                            <div id="clase resultado_volatilidad" class="clase_resultado_parcial">
                                <div id="clase literal resultado_volatilidad" class="clase_literal_resultado_parcial">
                                    <span>Clase:</span>
                                </div>
                                <div id="clase valor resultado_volatilidad" class="clase_valor_resultado_parcial">
                                    <span id="r_clase_volatilidad_pulverulencia"></span>
                                </div>

                            </div>
                            <div id="puntuacion resultado_volatilidad" class="puntuacion_resultado_parcial">
                                <div id="puntuacion literal resultado_volatilidad" class="puntuacion_literal_resultado_parcial">
                                    <span>Puntuación:</span>
                                </div>
                                <div id="puntuacion valor resultado_volatilidad" class="puntuacion_valor_resultado_parcial">
                                    <span id="r_puntuacion_volatilidad_pulverulencia"></span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <%--                    <div id="caja resultado_volatilidad" class="caja_resultados_parciales" > 
                        <canvas id="cuadrovolatilidad" width="720" height="380" style="border:0px solid gray; margin:0px,0px,0px,0px; padding:0px,0px,0px,0px" >
                                Your browser does not support the HTML5 canvas tag.  
                        </canvas>
                    </div> --%>

                    <p><a href='#' id="substep34Prev" class="prev">< Anterior</a> <a href="#" id="substep34Next" class="sig">Siguiente></a></p>

                </fieldset>
            </div>

        </div>

        <div id="step4">
                <div id="substep41">
                    <fieldset>
                        <legend>Procedimiento de trabajo</legend>

                        <label class="description">Señale la opción que más se ajuste al procedimiento empleado:</label>

                        <div id="seleccion_procedimiento_trabajo" class="seleccion_procedimiento_trabajo">

                            <table class="tabla_seleccion_procedimiento_trabajo">
                                <tr>
                                    <td>
                                        <input id="p_t_4" name="procedimiento_trabajo" class="element radio" type="radio" value="0" />
                                    </td>
                                    <td>
                                        <p>4 </p>
                                    </td>
                                    <td>
                                        <p>Dispersivo </p>
                                    </td>
                                    <td>
                                        <span>
                                            <img src="../img/dispersivo.jpg" alt="Dispersivo" class="imgprocedimiento" /></span>
                                    </td>
                                    <td>
                                        <span>Ejemplos : </span>
                                        <br />
                                        <span>Pinturas a pistola, taladro, muela, vaciado de sacos a mano, de cubos ... </span>
                                        <br />
                                        <span>Soldadura al arco ... </span>
                                        <br />
                                        <span>Limpieza con trapos.</span>
                                        <br />

                                        <span>Máquinas portátiles (sierras, cepillos ...)</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_t_3" name="procedimiento_trabajo" class="element radio" type="radio" value="1" />
                                    </td>
                                    <td>
                                        <p>3 </p>
                                    </td>
                                    <td>
                                        <p>Abierto </p>
                                    </td>
                                    <td>
                                        <span>
                                            <img src="../img/abierto.jpg" alt="abierto" class="imgprocedimiento" /></span>
                                    </td>
                                    <td>
                                        <span>Ejemplos : </span>
                                        <br />
                                        <span>Conductos del reactor, mezcladores abiertos, pintura a brocha o pincel, puesto de acondicionamiento (toneles, bidones...) </span>
                                        <br />
                                        <span>Manejo y vigilancia de máquinas de impresión... </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_t_2" name="procedimiento_trabajo" class="element radio" type="radio" value="2" />
                                    </td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td>
                                        <p>Cerrado/abierto regularmente </p>
                                    </td>
                                    <td>
                                        <span>
                                            <img src="../img/cerrado abierto.jpg" alt="Cerrado abierto" class="imgprocedimiento" /></span>
                                    </td>
                                    <td>
                                        <span>Ejemplos : </span>
                                        <br />
                                        <span>Reactor cerrado con cargas regulares de agentes químicos, toma de muestras, máquina de desengrasar en fase líquida o de vapor... </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_t_1" name="procedimiento_trabajo" checked class="element radio" type="radio" value="3" />
                                    </td>
                                    <td>
                                        <p>1 </p>
                                    </td>
                                    <td>
                                        <p>Cerrado permanente </p>
                                    </td>
                                    <td>
                                        <span>
                                            <img src="../img/cerrado.jpg" alt="Cerrado" class="imgprocedimiento" /></span>
                                    </td>
                                    <td>
                                        <span>Ejemplos : </span>
                                        <br />
                                        <span>Reactor químico </span>
                                    </td>
                                </tr>
                            </table>

                        </div>


                        <p><a href='#' id="substep41Prev" class="prev">< Anterior</a> <a href="#" id="substep41Next" class="sig">Siguiente></a></p>

                    </fieldset>
                </div>

                <div id="substep42">
                    <fieldset>
                        <legend>Procedimiento de trabajo - Cálculos</legend>


                        <div id="marco resultado_procedimiento_trabajo" class="marco_resultado_parcial">
                            <div id="caja_resultado_procedimiento_trabajo" class="caja_resultado_parcial">
                                <div id="titulo resultado_procedimiento_trabajo" class="titulo_resultado_parcial">
                                    <span>PROCEDIMIENTO DE TRABAJO</span>
                                </div>
                                <div id="clase resultado_procedimiento_trabajo" class="clase_resultado_parcial">
                                    <div id="clase literal resultado_procedimiento_trabajo" class="clase_literal_resultado_parcial">
                                        <span>Clase:</span>
                                    </div>
                                    <div id="clase valor resultado_procedimiento_trabajo" class="clase_valor_resultado_parcial">
                                        <span id="r_clase_procedimiento_trabajo"></span>
                                    </div>

                                </div>
                                <div id="puntuacion resultado_procedimiento_trabajo" class="puntuacion_resultado_parcial">
                                    <div id="puntuacion literal resultado_procedimiento_trabajo" class="puntuacion_literal_resultado_parcial">
                                        <span>Puntuación:</span>
                                    </div>
                                    <div id="puntuacion valor resultado_procedimiento_trabajo" class="puntuacion_valor_resultado_parcial">
                                        <span id="r_puntuacion_procedimiento_trabajo"></span>
                                    </div>

                                </div>
                            </div>
                        </div>




                        <%--   <div id="caja resultado_procedimiento" class="caja_resultados_parciales" > 
                        <canvas id="cuadroprocedimiento" width="720" height="380" style="border:0px solid gray; margin:0px,0px,0px,0px; padding:0px,0px,0px,0px" >
                                Your browser does not support the HTML5 canvas tag.  
                        </canvas>
                    </div> --%>


                        <p><a href='#' id="substep42Prev" class="prev">< Anterior</a> <a href="#" id="substep42Next" class="sig">Siguiente></a></p>

                    </fieldset>
                </div>
            </div>

        <div id="step5">
                <div id="substep51">
                    <fieldset>
                        <legend>Protecciones Colectivas</legend>

                        <label class="description">Señale la opción que más se ajuste a la situación real:</label>
                        <div id="seleccion_proteccion-colectiva" class="seleccion_proteccion_colectiva">

                            <table class="tabla_seleccion_proteccion_colectiva_1">
                                <tr>
                                    <td>
                                        <input id="p_c_0" name="protecciones_colectivas" checked class="element radio" type="radio" value="0" /></td>
                                    </td>
                                        <td>
                                            <p>5 </p>
                                        </td>
                                    <td><span>
                                        <img src="../img/Trabajo en espacio con aberturas limitadas.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Trabajo en espacio con aberturas limitadas de entrada y salida y ventilación natural desfavorable  </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_1" name="protecciones_colectivas" class="element radio" type="radio" value="1" /></td>
                                    <td>
                                        <p>4 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/ausencia de ventilación.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Ausencia de ventilación mecánica </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_2" name="protecciones_colectivas" class="element radio" type="radio" value="2" /></td>
                                    <td>
                                        <p>3 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/Trabajo a la intemperie.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Trabajos en intemperie </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_3" name="protecciones_colectivas" class="element radio" type="radio" value="3" /></td>
                                    <td>
                                        <p>3 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/trabajador alejado.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Trabajador alejado de la fuente de emisión </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_4" name="protecciones_colectivas" class="element radio" type="radio" value="4" /></td>
                                    <td>
                                        <p>3 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/ventilación general.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Ventilación mecánica general </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_5" name="protecciones_colectivas" class="element radio" type="radio" value="5" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/campana superior.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Campana superior </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_6" name="protecciones_colectivas" class="element radio" type="radio" value="6" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/rendija de aspiración.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Rendija de aspiración </p>
                                    </td>
                                </tr>
                            </table>
                            <table class="tabla_seleccion_proteccion_colectiva_2">
                                <tr>
                                    <td>
                                        <input id="p_c_7" name="protecciones_colectivas" class="element radio" type="radio" value="7" /></td>
                                    </td>
                                        <td>
                                            <p>2 </p>
                                        </td>
                                    <td><span>
                                        <img src="../img/mesa con aspiración.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Mesa con aspiración </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_8" name="protecciones_colectivas" class="element radio" type="radio" value="8" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/aspiración integrada en herramienta.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Aspiración integrada en la herramienta </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_9" name="protecciones_colectivas" class="element radio" type="radio" value="9" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/cabina de pequeñas dimensiones.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Cabina de pequeñas dimensiones ventilada </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_10" name="protecciones_colectivas" class="element radio" type="radio" value="10" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/cabina horizontal.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Cabina horizontal </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_11" name="protecciones_colectivas" class="element radio" type="radio" value="11" /></td>
                                    <td>
                                        <p>2 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/cabina vertical.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Cabina vertical </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <input id="p_c_12" name="protecciones_colectivas" class="element radio" type="radio" value="12" /></td>
                                    <td>
                                        <p>1 </p>
                                    </td>
                                    <td><span>
                                        <img src="../img/captación envolvente.jpg" class="imgproteccion" alt="" /></span></td>
                                    <td>
                                        <p>Captación envolvente (vitrina de laboratorio) </p>
                                    </td>
                                </tr>

                            </table>

                        </div>

                        <div style="clear: both"></div>

                        <p><a href='#' id="substep51Prev" class="prev">< Anterior</a> <a href="#" id="substep51Next" class="sig">Siguiente></a></p>

                    </fieldset>
                </div>

                <div id="substep52">
                    <fieldset>
                        <legend>Protecciones Colectivas - Cálculos</legend>


                        <div id="marco resultado_protecciones_colectivas" class="marco_resultado_parcial">
                            <div id="caja_resultado_protecciones_colectivas" class="caja_resultado_parcial">
                                <div id="titulo resultado_protecciones_colectivas" class="titulo_resultado_parcial">
                                    <span>PROTECCIONES COLECTIVAS</span>
                                </div>
                                <div id="clase resultado_protecciones_colectivas" class="clase_resultado_parcial">
                                    <div id="clase literal resultado_protecciones_colectivas" class="clase_literal_resultado_parcial">
                                        <span>Clase:</span>
                                    </div>
                                    <div id="clase valor resultado_protecciones_colectivas" class="clase_valor_resultado_parcial">
                                        <span id="r_clase_protecciones_colectivas"></span>
                                    </div>

                                </div>
                                <div id="puntuacion resultado_protecciones_colectivas" class="puntuacion_resultado_parcial">
                                    <div id="puntuacion literal resultado_protecciones_colectivas" class="puntuacion_literal_resultado_parcial">
                                        <span>Puntuación:</span>
                                    </div>
                                    <div id="puntuacion valor resultado_protecciones_colectivas" class="puntuacion_valor_resultado_parcial">
                                        <span id="r_puntuacion_protecciones_colectivas"></span>
                                    </div>

                                </div>
                            </div>
                        </div>



                        <%--
                    <div id="caja resultado_proteccion" class="caja_resultados_parciales" > 
                        <canvas id="cuadroproteccion" width="720" height="380" style="border:0px solid gray; margin:0px,0px,0px,0px; padding:0px,0px,0px,0px" >
                                Your browser does not support the HTML5 canvas tag.  
                        </canvas>
                    </div> 
                        --%>
                        <p><a href='#' id="substep52Prev" class="prev">< Anterior</a> <a href="#" id="substep52Next" class="sig">Siguiente></a></p>

                    </fieldset>
                </div>
            </div>

        <div id="step6">
                <div id="substep61">
                    <fieldset>
                        <legend>Factor de corrección en función del VLA </legend>
                        <label class="description">
                            <br />
                            Seleccione la opción que corresponda:</label>
                        <div id="seleccion_VLA" class="seleccion_VLA">
                            <input id="VLA_1" name="VLA" checked class="element radio" type="radio" value="0" />
                            <label class="choice" for="VLA">VLA-ED<sup>®</sup> > 0,1</label>
                            <input id="VLA_2" name="VLA" class="element radio" type="radio" value="1" />
                            <label class="choice" for="VLA">0,01 < VLA-ED<sup>®</sup> &#8804 0,1</label>
                            <input id="VLA_3" name="VLA" class="element radio" type="radio" value="2" />
                            <label class="choice" for="VLA">0,001 < VLA-ED<sup>®</sup> &#8804 0,01</label>
                            <input id="VLA_4" name="VLA" class="element radio" type="radio" value="3" />
                            <label class="choice" for="VLA">VLA-ED<sup>®</sup> &#8804 0,001</label>
                        </div>

                        <p><a href='#' id="substep61Prev" class="prev">< Anterior</a> <a href="#" id="substep61Next" class="sig">Siguiente></a></p>
                    </fieldset>
                </div>

                <div id="substep62">
                    <fieldset>
                        <legend>Factor de corrección en función del VLA - Cálculos</legend>


                        <div id="marco resultado_VLA" class="marco_resultado_parcial">
                            <div id="caja_resultado_VLA" class="caja_resultado_parcial_vla">
                                <div id="titulo resultado_VLA" class="titulo_resultado_parcial_vla">
                                    <span>FACTOR DE CORRECCION VLA</span>
                                </div>

                                <div id="puntuacion resultado_VLA" class="puntuacion_resultado_parcial_vla">

                                    <div id="puntuacion valor resultado_VLA" class="puntuacion_valor_resultado_parcial_vla">
                                        <span id="r_puntuacion_vla"></span>
                                    </div>

                                </div>
                            </div>
                        </div>





     <%--                   <div id="caja resultado_VLA" class="caja_resultados_parciales">
                            <canvas id="cuadroVLA" width="720" height="380" style="border: 0px solid gray; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                            </canvas>
                        </div>--%>

                        <p><a href='#' id="substep62Prev" class="prev">< Anterior</a> <a href="#" id="substep62Next" class="sig">Siguiente></a></p>

                    </fieldset>
                </div>
            </div>

        <div id="step7">
                <div id="substep71">
                    <fieldset>
                        <legend>Informe de la evaluación cualitativa. Resultados</legend>
                    <div id="res_datos_operacion"> 
                        <label class="description"></label>
                        <p><b>Fecha de la evaluación:&nbsp;</b><span id="fechaevaluacion"> </span>&nbsp;<br /></p>
                        <p><b>Nombre:</b> <span id="resnombre"></span></p>
                        <p><b>Agente químico utilizado:</b> <span id="resagentequimico"></span></p>
                        <p><b>Descripción:</b> <span id="resdescripcion"></span></p>
                        <p><b>Resultado de la evaluación:</b></p>                    </div>

                    <div id="id_res_franja01" class="franja_resultados">
  
                    </div>  
  
                    <div id="id_res_franja02" class="franja_resultados">
  
                        <div id="id_caja_res_peligro" class="caja_res_1">
                            <div id="id_titulo_res_peligro" class="titulo_res"> <span>PELIGRO</span></div>
                            <div id="id_clase_res_peligro" class="clase_res_1">
                                <div id="id_clase_literal res_peligro" class="clase_literal_res_1"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_peligro" class="clase_valor_res"> <span id="rf_clase_peligro"></span> </div>
                            </div>                            
                        </div>
            
                        <div id="id_caja_res_cantidad" class="caja_res_1">
                            <div id="id_titulo_res_cantidad" class="titulo_res"> <span>CANTIDAD UTILIZADA</span></div>
                            <div id="id_clase_res_cantidad" class="clase_res_1">
                                <div id="id_clase_literal res_cantidad" class="clase_literal_res_1"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_cantidad" class="clase_valor_res"> <span id="rf_clase_cantidad_dia"></span> </div>
                            </div>                            
                        </div>
 
                        <div id="id_caja_res_frecuencia" class="caja_res_1">
                            <div id="id_titulo_res_frecuencia" class="titulo_res"> <span>FRECUENCIA DE UTILIZACIÓN</span></div>
                            <div id="id_clase_res_frecuencia" class="clase_res_1">
                                <div id="id_clase_literal res_frecuencia" class="clase_literal_res_1"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_frecuencia" class="clase_valor_res"> <span id="rf_clase_frecuencia_utilizacion"></span> </div>
                            </div>                            
                        </div>
       

                    </div>  
   
                    <div id="id_res_franja03" class="franja_resultados">
                         <canvas id="lineasrfranja03" width="720" height="48" style="border: 0px solid green; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                         </canvas>
                    </div>  
   
                    <div id="id_res_franja04" class="franja_resultados">
                         <canvas id="lineasrfranja04" width="80" height="64" style="border: 0px solid green; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                         </canvas>
                        <div id="id_caja_res_exposicion" class="caja_res_2">
                            <div id="id_titulo_res_exposicion" class="titulo_res"> <span>EXPOSICIÓN POTENCIAL</span></div>
                            <div id="id_clase_res_exposicion" class="clase_res_1">
                                <div id="id_clase_literal res_exposicion" class="clase_literal_res_1"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_exposicion" class="clase_valor_res"> <span id="rf_clase_exposicion_potencial"></span> </div>
                            </div>                            
                        </div>
  
                    </div>  
                       

                    <div id="id_res_franja05" class="franja_resultados">
                         <canvas id="lineasrfranja05" width="720" height="48" style="border: 0px solid green; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                         </canvas>
                    </div>  
       
                    <div id="id_res_franja06" class="franja_resultados">

                        <div id="id_caja_res_riesgo" class="caja_res">
                            <div id="id_titulo_res_riesgo" class="titulo_res"> <span>RIESGO POTENCIAL</span></div>
                            <div id="id_clase_res_riesgo" class="clase_res">
                                <div id="id_clase_literal res_riesgo" class="clase_literal_res"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_riesgo" class="clase_valor_res"> <span id="rf_clase_riesgo_potencial"></span> </div>
                            </div>
                            <div id="id_puntuacion_res_riesgo" class="puntuacion_res">
                                <div id="id_puntuacion_literal res_riesgo" class="puntuacion_literal_res"> <span>Puntuación:</span> </div>
                                <div id="id_puntuacion_valor_res_riesgo" class="puntuacion_valor_res"> <span id="rf_puntuacion_riesgo_potencial"></span> </div>
                            </div>
                        </div>
                        
                        <div id="id_caja_res_volatilidad" class="caja_res">
                            <div id="id_titulo_res_volatilidad" class="titulo_res"> <span>VOLATILIDAD</span></div>
                            <div id="id_clase_res_volatilidad" class="clase_res">
                                <div id="id_clase_literal res_volatilidad" class="clase_literal_res"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_volatilidad" class="clase_valor_res"> <span id="rf_clase_volatilidad_pulverulencia"></span> </div>
                            </div>
                            <div id="id_puntuacion_res_volatilidad" class="puntuacion_res">
                                <div id="id_puntuacion_literal res_volatilidad" class="puntuacion_literal_res"> <span>Puntuación:</span> </div>
                                <div id="id_puntuacion_valor_res_volatilidad" class="puntuacion_valor_res"> <span id="rf_puntuacion_volatilidad_pulverulencia"></span> </div>
                            </div>
                        </div>

                        <div id="id_caja_res_procedimiento" class="caja_res">
                            <div id="id_titulo_res_procedimiento" class="titulo_res"> <span>PROCEDIMIENTO</span></div>
                            <div id="id_clase_res_procedimiento" class="clase_res">
                                <div id="id_clase_literal res_procedimiento" class="clase_literal_res"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_procedimiento" class="clase_valor_res"> <span id="rf_clase_procedimiento_trabajo"></span> </div>
                            </div>
                            <div id="id_puntuacion_res_procedimiento" class="puntuacion_res">
                                <div id="id_puntuacion_literal res_procedimiento" class="puntuacion_literal_res"> <span>Puntuación:</span> </div>
                                <div id="id_puntuacion_valor_res_procedimiento" class="puntuacion_valor_res"> <span id="rf_puntuacion_procedimiento_trabajo"></span> </div>
                            </div>
                        </div>

                        <div id="id_caja_res_proteccion" class="caja_res">
                            <div id="id_titulo_res_proteccion" class="titulo_res"> <span>PROTECCIÓN COLECTIVA</span></div>
                            <div id="id_clase_res_proteccion" class="clase_res">
                                <div id="id_clase_literal res_proteccion" class="clase_literal_res"> <span>Clase:</span> </div>
                                <div id="id_clase_valor_res_proteccion" class="clase_valor_res"> <span id="rf_clase_protecciones_colectivas"></span> </div>
                            </div>
                            <div id="id_puntuacion_res_proteccion" class="puntuacion_res">
                                <div id="id_puntuacion_literal res_proteccion" class="puntuacion_literal_res"> <span>Puntuación:</span> </div>
                                <div id="id_puntuacion_valor_res_proteccion" class="puntuacion_valor_res"> <span id="rf_puntuacion_protecciones_colectivas"></span> </div>
                            </div>
                        </div>

                         <div id="id_caja_res_fcvla" class="caja_res">
                            <div id="id_titulo_res_fcvla" class="titulo_res"> <span>FC(VLA)</span></div>
                            
                            <div id="id_puntuacion_res_fcvla" class="puntuacion_res">
                                <div id="id_puntuacion_literal res_fcvla" class="puntuacion_literal_res2"> <span>Factor de &nbsp&nbsp&nbsp&nbsp&nbsp  corrección:</span> </div>
                                <div id="id_puntuacion_valor_res_fcvla" class="puntuacion_valor_res"> <span id="rf_puntuacion_vla"></span> </div>
                            </div>
                        </div>
  
                    
                    </div>                 
                        
                    <div id="id_res_franja07" class="franja_resultados">
                        <canvas id="lineasrfranja07" width="720" height="48" style="border: 0px solid green; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                        </canvas>
                    </div>    
                                               
                    <div id="id_res_franja08" class="franja_resultados">
  
                        <div id="id_caja_res_resultado" class="caja_res_resultado">
                            <div id="id_titulo_res_resultado" class="titulo_res_resultado"> <span>Puntuación del riesgo por inhalación =</span></div>
                            <div id="id_puntuacion_res_resultado" class="puntuacion_valor_res_resultado"> <span id="rf_puntuacion_riesgo_por_inhalacion"></span> </div>
                        </div>
                                             

                    </div>   
                        
                    <div id="res_datos_operacion_2"> 
                        <p><b>Prioridad de acción:&nbsp;</b><span id="prioridadaccion"> </span>&nbsp;<br /></p>
                        <p><b>Caracterización del riesgo:</b></p>

                        <div id="res_prioridad_Accion_3" class="prioridad_Accion_b">
                            <p>A priori bajo:</p>
                            <p class="cuadro_Nota_Indentado">- Siga los principios generales de prevención (art. 15 LPRL).</p>
                            <p class="cuadro_Nota_Indentado">- Forme a los trabajadores sobre el riesgo.</p>
                            <p class="cuadro_Nota_Indentado">- Asegúrese de que la tarea siempre se realiza en las mismas condiciones.</p>
                        </div>
                        
                        <div id="res_prioridad_Accion_2" class="prioridad_Accion_b">
                            <p>Moderado:</p>
                            <p class="cuadro_Nota_Indentado">- Siga los principios generales de prevención (art. 15 LPRL).</p>
                            <p class="cuadro_Nota_Indentado">- Forme a los trabajadores sobre el riesgo.</p>
                            <p class="cuadro_Nota_Indentado">- Probablemente necesita medidas correctoras y/o una evaluación más detallada que requiera la realización de mediciones.</p>
                            <p class="cuadro_Nota_Indentado">- Si opta por la implantación de nuevas medidas de control o por corregir las ya existentes, será necesaria una nueva evaluación para comprobar que se ha logrado reducir el riesgo.</p>
                        </div>
                       
                         <div id="res_prioridad_Accion_1" class="prioridad_Accion_b">
                            <p>Probablemente muy elevado:</p>
                            <p class="cuadro_Nota_Indentado">- Siga los principios generales de prevención (art. 15 LPRL).</p>
                            <p class="cuadro_Nota_Indentado">- Forme a los trabajadores sobre el riesgo.</p>
                            <p class="cuadro_Nota_Indentado">- Necesita la implantación de medidas correctoras inmediatas.</p>
                         </div>
           
                        <div id="notasa">
                    	<hr class="gris1" />
                        <p>Notas:<br /> </p>
                        <div id="nota11">
                            <blockquote>
                                En el esquema puede visualizar las variables que aportan mayor puntuación al riesgo y, de este modo, centrar las medidas de control en las mismas. Las medidas de control se ajustarán a la jerarquía establecida en el RD 374/2001.
                            </blockquote>
                        </div>
                        <div id="nota22">
                            <blockquote>
                                Los sistemas de protección colectiva requieren comprobaciones periódicas para su correcto funcionamiento. Asegúrese que se mantienen y funcionan adecuadamente para poder considerarlas en el método.
                            </blockquote>
                        </div>
                        <div id="nota33">
                            <blockquote>
                                El método evalúa solo el riesgo por inhalación. Si el agente tiene indicaciones de peligro relacionadas con la vía dérmica, deberá evaluar también la exposición por dicha vía.
                            </blockquote>
                        </div>
                        <div id="nota44">
                            <blockquote>
                                El método no tiene en cuenta la utilización de equipos de protección individual.
                            </blockquote>
                        </div>
                        <div id="nota55">
                            <blockquote>
                                Para agentes de especial peligrosidad, cancerígenos, mutágenos, tóxicos para la reproducción y sensibilizantes reduzca la exposición al nivel más bajo posible.
                            </blockquote>
                        </div>
                        <p></p>
                        </div>
                                            </div>                       

                      <p><a href='#' id="substep71Prev" class="prev">< Anterior</a>
                            <span id="ImprimirOperacion" style="margin-left: 290px" class="btn btn_submit"><a href='#' onClick="window.print()" id="ImprimeOperacion"> Imprimir Operación</a></span>
                            <span id="GrabarOperacion" style="margin-left: 20px; float:left" class="btn btn_submit"><a href='#' id="GrabaOperacion"> Grabar operación</a></span> </p>

                    <%--<p><a href='#' id="substep71Prev" class="prev">< Anterior</a> <a href="#" id="substep71Next" class="sig">Siguiente></a></p>--%>     
                        
    <%--                    <canvas id="cuadroResultado" width="720" height="380" style="border: 0px solid green; margin: 0px,0px,0px,0px; padding: 0px,0px,0px,0px">Your browser does not support the HTML5 canvas tag.  
                        </canvas>

  --%>

                    </fieldset>
                </div>
                <div id="substep72">
                    <fieldset>
                        <legend>Resultados</legend>
                        <div id="prioridad_Accion_1" class="prioridad_Accion">
                            <p>PRIORIDAD DE ACCIÓN 1</p>
                            <br />
                            <p>Riesgo probablemente muy elevado (medidas correctoras inmediatas).</p>
                        </div>
                        <div id="prioridad_Accion_2" class="prioridad_Accion">
                            <p>PRIORIDAD DE ACCIÓN 2</p>
                            <br />
                            <p>Riesgo moderado. Necesita probablemente unas medidas correctoras y/o una evaluación más detallada (mediciones).</p>
                        </div>
                        <div id="prioridad_Accion_3" class="prioridad_Accion">
                            <p>PRIORIDAD DE ACCIÓN 3</p>
                            <br />
                            <p>Riesgo a priori bajo (sin necesidad de modificaciones).</p>
                        </div>

                        <br />
               <%--         <p><a href='#' id="substep72Prev" class="prev">< Anterior</a>
                            <span id="ImprimirOperacion" style="margin-left: 290px" class="btn btn_submit"><a href='#' onClick="window.print()" id="ImprimeOperacion"> Imprimir Operación</a></span>
                            <span id="GrabarOperacion" style="margin-left: 20px; float:left" class="btn btn_submit"><a href='#' id="GrabaOperacion"> Grabar operación</a></span> </p>--%>
                    </fieldset>
                </div>



                <div style="clear: both"></div>

                <div id="substep73">
                    <fieldset>
                        <div id="encabezado">
                            <p>Añadiendo a 'Mis Operaciones'</p>
                        </div>
                        <div id="okbutton">
                            <img src="../img/button_ok.png" alt="OK" />

                        </div>
                        <div id="respuesta">
                            <div id="titulorespuesta">Operación Añadida correctamente </div>
                            <div style="clear: both; margin-top: 20px;"></div>
                            <div style="margin-left: 270px; margin-top: 40px;" class="grupo_botones">
                                <div style="text-align: center; visibility: hidden" class="btn btn_submit"><a href='#'></a><span></span></div>
                                <div style="text-align: center" class="btn btn_submit"><a id="enlaceaMisOperaciones" href="PaginaMisOperaciones.aspx">Volver</a><span></span></div>
                            </div>

                        </div>
                        <div style="clear: both; height: 20px;"></div>
                    </fieldset>
                </div>

            </div>

     </div>

        <img id="bottom" src="../img/bottom.png" alt="" />
</asp:Content>
