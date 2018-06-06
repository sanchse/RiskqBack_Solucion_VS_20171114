<%@ Page Language="C#" AutoEventWireup="true" MasterPageFile="~/PaginaPrincipal.Master" CodeBehind="PaginaOperacion.aspx.cs" Inherits="WebApplication1.PaginaOperacion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
                <link href="css/formulario.css" rel="stylesheet" />          <!--    <script type="text/javascript" src="js/validacion_formularios.js"></script>    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>    <script type="text/javascript" src="js/formToWizard.js"></script>
   -->
    
   <%-- <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script> --%>
    
    <!--   <script type="text/javascript" src="js/jquery.min.js"></script> 
    <script type="text/javascript" src="js/view.js"></script>  -->
    <script type="text/javascript" src="js/validacion_formularios-04.js"></script>
    <script type="text/javascript" src="js/CuadroResultado.js"></script>
     <!--
        <script type="text/javascript" src="js/formToWizard-02.js"></script> 
    -->
      </asp:Content> 

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <img id="top" src="../img/top.png" alt="" />
		<div id="form_container">
            <form name="formulario_datos_operaciones" id="formulario_datos_operaciones" action="guarda_operacion.asp" method="post">
           	<input type="hidden" name="ID_Operacion" value="" />
           	<input type="hidden" id="accion" name="accion" value="nueva" />
           	<input type="hidden" id="exporta" name="exporta" value="0" />
           	<input type="hidden" id="derecho_a_reduccion" name="derecho_a_reduccion" value="0" />
           	<input type="hidden" class="element text large" name="ArrayAgentes" id="ArrayAgentes" value="" />
           	<input type="hidden" name="Id_Sustancia" id="Id_Sustancia" value="0" />
           	<input type="hidden" name="NivelRiesgo" id="NivelRiesgo" value="0" />
            <input type="hidden" class="element text large" name="ArrayFrases" id="ArrayFrases" value="" />
            <input type="hidden" name="Peligrosidad" id="Peligrosidad" value="" />
            <input type="hidden" name="tiene_reduccion1" id="tiene_reduccion1" value="false" />
            <input type="hidden" name="tiene_reduccion2" id="tiene_reduccion2" value="false" />
            <input type="hidden" name="Reduccion1" id="Reduccion1" value="" />
            <input type="hidden" name="VLA_indice" id="VLA_indice" value="3" />
            <input type="hidden" name="factor_correccion_por_VLA" id="factor_correccion_por_VLA" value="2000" />
            <input type="hidden" name="puntuacion_riesgo_por_inhalacion" id="puntuacion_riesgo_por_inhalacion" value="1000" />
            <%--<input type="hidden" name="prioridad_accion" id="prioridad_accion" value="3" />--%>
                

             <ul id="steps">

                <li id="stepDesc1"> <a href="#" onclick="accionstep1()">Paso 1<span class="current">Datos &nbsp&nbsp operación </span> </a></li>
                <li id="stepDesc2"> <a href="#" onclick="accionstep2()">Paso 2 <span>Riesgo potencial</span> </a></li>                               
                <li id="stepDesc3"> <a href="#" onclick="accionstep3()">Paso 3 <span>Volatilidad Pulverulencia</span> </a></li>
                <li id="stepDesc4"> <a href="#" onclick="accionstep4()">Paso 4 <span>Procedimiento de trabajo</span> </a></li>
                <li id="stepDesc5"> <a href="#" onclick="accionstep5()">Paso 5 <span>Protecciones Colectivas</span> </a></li>
                <li id="stepDesc6"> <a href="#" onclick="accionstep6()">Paso 6 <span>Factor de &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp corrección VLA </span> </a></li>
                <li id="stepDesc7"> <a href="#" onclick="accionstep7()">Paso 7 <span>Resultados</span> </a></li>
              </ul>
                                    
            <div id="step1">
            <div id="substep11">
                <fieldset>                   
                    <legend>Datos de la operación</legend>
                <ul>
                    <li id="linea11">
                        <label class="description" for="Nombre">Nombre de la operación:</label>
                        <div><input name="nombre" id="nombre" class="element text large" type="text" maxlength="255" onChange="validar_substep11();" value="" /></div>
                    </li>
                    <li id="linea12">
                        <label class="description" for="Agente">Agente químico utilizado:</label>
                        <div><input name="agentequimico" id="agentequimico" class="element text large" type="text" maxlength="255" onChange="validar_substep11();" value="" /></div>
                    </li>
                    <li id="linea2">
                    <label class="description" for="descripcion">Descripción:</label>
                        <div>
                        <textarea id="descripcion" name="descripcion" class="textarea" cols="110" rows="7" ></textarea>
                        </div>
                    </li>
                </ul>
                   <div class="error_message" id="error_substep11">El nombre del proceso es un campo obligatorio</div>
                             
                    <div style="margin-left:10px; margin-top:30px;" class="grupo_botones">
                    <div class="btn btn_submit"><a href="PaginaMisOperaciones.aspx" >Volver al listado de operaciones</a><span></span></div>
                    </div>                                      <br />                    <p> <a href="#" id="substep11Next" class="next"> Siguiente></a></p>               </fieldset>
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
                          <p class="cuadro_Nota_Indentado"> * la clase de peligro</p>
                          <p class="cuadro_Nota_Indentado"> * la clase de exposición potencial (a partir de la cantidad absoluta de producto y frecuencia de utilización).</p>
                          <br />
                          <br />
                          <p>En las pantallas siguientes se van a introducir los datos necesarios para obtener la clase de peligro, la clase de exposición potencial y, en último término, el riesgo potencial.</p>
                      </div>
                      <br />                                        <p> <a href='#' id="substep21Prev" class="prev">< Anterior</a> <a href="#" id="substep21Next" class="next"> Siguiente></a></p>                </fieldset>
            </div> 
            
            <div id="substep22">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE PELIGRO</legend>
                       <div id="agente_quimico_01">
                                <label class="description" for="Agente">Agente químico:</label>
                                <div><input name="Agente" id="Agente" class="element text large" type="text" maxlength="255" value="" /></div>
                                <div>(Introduzca alguna de las siguientes variables: nombre del agente, número CAS, índice o CE)</div>
                       </div>
                       <div id="seleccion_por_frases_H">         
                          <label class="description_ind_peligro"><br /> ¿Tiene indicaciones de peligro? </label>
                                <div id="frases_H" class="seleccion_si_no_ind_peligro">       
                                    <input id="seleccion_frases_H_si" name="frases_H" checked class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_frases_H_si">Si</label>
                                    <input id="seleccion_frases_H_no" name="frases_H" class="element radio" type="radio" value="0" />
                                    <label class="choice" for="seleccion_frases_H_no">No</label>                                                                                                                               
                                </div>                                                                                                                                                                 
                       </div>
                       <div style="clear: both"></div>
                       
                        <div id="seleccion_por_VLA_ED">         
                          <label class="description_VLA"> <br />¿Tiene VLA-ED®?  </label>
                                                                          
                                <div id="seleccion_VLA_ED_si_no" class="seleccion_por_VLA_ED">       
                                    <input id="seleccion_VLA_ED_si" name="VLA_ED" checked class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_VLA_ED_si">Si</label>
                                    <input id="seleccion_VLA_ED_no" name="VLA_ED" class="element radio" type="radio" value="0" />
                                    <label class="choice" for="seleccion_VLA_ED_no">No</label>                                                                                                                               
                                </div>                                                                                                                                                                 
                        </div>
                        <div style="clear: both"></div>

                        <div id="seleccion_VLA_ED_grupo">         
                                <div id="seleccion_VLA_ED_par_titulo">
                                    <label  class="description_mat_par"> <br />¿Se trata de materia particulada? </label>
                                </div>                                          
                                <div id="seleccion_VLA_ED_par" class="seleccion_si_no_mat_par">       
                                    <input id="seleccion_mat_par_si" name="VLA_ED_mat_par" checked class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_mat_par_si">Si</label>
                                    <input id="seleccion_mat_par_no" name="VLA_ED_mat_par" class="element radio" type="radio" value="0" />
                                    <label class="choice" for="seleccion_mat_par_no">No</label>                                                                                                                               
                                </div>                                                                                                                                                                 
                        </div>
                        <div id="seleccion_VLA_ED_no_par_grupo">         
                <!--        <label class="description_VLA_ED_no_par"><br /> Seleccione la opción que corresponda:</label> -->
                            
                            <div id="opcion_VLA_ED_par" class="seleccion_VLA_ED_par">
                                <p>Seleccione la opción que corresponda:</p> 
                                <input id="VLA_ED_11" name="VLA_ED_par" checked class="element radio" type="radio" value="0" />
                                <label class="choice" for="VLA_ED_1">VLA-ED® > 10</label>
                                <input id="VLA_ED_21" name="VLA_ED_par" class="element radio" type="radio" value="1" />
                                <label class="choice" for="VLA_ED_2"> 1 < VLA-ED® =< 10</label>
                                <input id="VLA_ED_31" name="VLA_ED_par" class="element radio" type="radio" value="2" />
                                <label class="choice" for="VLA_ED_3">0,1 < VLA-ED® =< 1</label>
                                <input id="VLA_ED_41" name="VLA_ED_par" class="element radio" type="radio" value="3" />
                                <label class="choice" for="VLA_ED_4"> 0,01 < VLA-ED® =< 0,1</label>
                                <input id="VLA_ED_51" name="VLA_ED_par" class="element radio" type="radio" value="4" />
                                <label class="choice" for="VLA_ED_5"> VLA-ED® =< 0,01</label>                               
                             </div>
                             <div id="opcion_VLA_ED_no_par" class="seleccion_VLA_ED_no_par">
                                <p>Seleccione la opción que corresponda:</p> 
                                <input id="VLA_ED_1" name="VLA_ED_no_par" checked class="element radio" type="radio" value="0" />
                                <label class="choice" for="VLA_ED_1">VLA-ED® > 100</label>
                                <input id="VLA_ED_2" name="VLA_ED_no_par" class="element radio" type="radio" value="1" />
                                <label class="choice" for="VLA_ED_2"> 10 < VLA-ED® =< 100</label>
                                <input id="VLA_ED_3" name="VLA_ED_no_par" class="element radio" type="radio" value="2" />
                                <label class="choice" for="VLA_ED_3">1 < VLA-ED® =< 10</label>
                                <input id="VLA_ED_4" name="VLA_ED_no_par" class="element radio" type="radio" value="3" />
                                <label class="choice" for="VLA_ED_4"> 0,1 < VLA-ED® =< 1</label>
                                <input id="VLA_ED_5" name="VLA_ED_no_par" class="element radio" type="radio" value="4" />
                                <label class="choice" for="VLA_ED_5"> VLA-ED® =< 0,1</label>                               
                             </div>
                    </div>
                    

                        <div id="seleccion_por_sustancia_comercial">
                          <label class="description_sus_com"><br /> ¿Es una sustancia o mezcla comercial?  </label>
                                                                          
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
                        <table id="tabla_frasesH"class="tabla_seleccion_frasesH" >
                             <tr>
                                
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="id_FraseH304" name="FraseH304" type="checkbox" value="H304" /><label class="tooltip" for="id_FraseH304"><b>H304</b></label>
                                      
                                        <div class="tooltip_txt"><p><b><i>Prueba tooltip.</p></div>                                  
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH350" name="FraseH350" type="checkbox" value="H350"  /><label for="id_FrasesH350"><b>H350</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH361" name="FraseH350" type="checkbox" value="H361"  /><label for="id_FrasesH361"><b>H361</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseEUH029" name="FraseEUH029" type="checkbox" value="EUH029"  /><label for="id_FrasesEUH029"><b>EUH029</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH330" name="FraseH330" type="checkbox" value="H330"  /><label for="id_FrasesH330"><b>H330</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH351" name="FraseH351" type="checkbox" value="H351"  /><label for="id_FrasesH351"><b>H351</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH361f" name="FraseH361f" type="checkbox" value="H361f"  /><label for="id_FrasesH361f"><b>H361f</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseEUH031" name="FraseEUH031" type="checkbox" value="EUH031"  /><label for="id_FrasesEUH031"><b>EUH031</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH331" name="FraseH331" type="checkbox" value="H331"  /><label for="id_FrasesH331"><b>H331</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH350i" name="FraseH350i" type="checkbox" value="H350i"  /><label for="id_FrasesH350i"><b>H350i</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH361d" name="FraseH361d" type="checkbox" value="H361d"  /><label for="id_FrasesH361d"><b>H361d</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseEUH032" name="FraseEUH032" type="checkbox" value="EUH032"  /><label for="id_FrasesEUH032"><b>EUH032</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH332" name="FraseH332" type="checkbox" value="H332"  /><label for="id_FrasesH332"><b>H332</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360" name="FraseH360" type="checkbox" value="H360"  /><label for="id_FrasesH360"><b>H360</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH361fd" name="FraseH361fd" type="checkbox" value="H361fd"  /><label for="id_FrasesH361fd"><b>H361fd</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseEUH070" name="FraseEUH070" type="checkbox" value="EUH070"  /><label for="id_FrasesEUH070"><b>EUH070</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH334" name="FraseH334" type="checkbox" value="H334"  /><label for="id_FrasesH334"><b>H334</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360F" name="FraseH360F" type="checkbox" value="H360F"  /><label for="id_FrasesH360F"><b>H360F</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH362" name="FraseH362" type="checkbox" value="H362"  /><label for="id_FrasesH362"><b>H362</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseEUH071" name="FraseEUH071" type="checkbox" value="EUH071"  /><label for="id_FrasesEUH071"><b>EUH071</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH335" name="FraseH335" type="checkbox" value="H335"  /><label for="id_FrasesH335"><b>H335</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360D" name="FraseH360D" type="checkbox" value="H360D"  /><label for="id_FrasesH360D"><b>H360D</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH370" name="FraseH370" type="checkbox" value="H370"  /><label for="id_FrasesH370"><b>H370</b></label>
                                     </div>
                                 </td>
                             </tr>
                             <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH336" name="FraseH336" type="checkbox" value="H336"  /><label for="id_FrasesH336"><b>H336</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360Fd" name="FraseH360Fd" type="checkbox" value="H360Fd"  /><label for="id_FrasesH360Fd"><b>H360Fd</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH371" name="FraseH371" type="checkbox" value="H371"  /><label for="id_FrasesH371"><b>H371</b></label>
                                     </div>
                                 </td>
                             </tr>
                           <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH340" name="FraseH340" type="checkbox" value="H340"  /><label for="id_FrasesH340"><b>H340</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360Df" name="FraseH360Df" type="checkbox" value="H360Df"  /><label for="id_FrasesH360Df"><b>H360Df</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH372" name="FraseH372" type="checkbox" value="H372"  /><label for="id_FrasesH372"><b>H372</b></label>
                                     </div>
                                 </td>
                             </tr>
                            
                            <tr>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH341" name="FraseH341" type="checkbox" value="H341" /><label for="id_FrasesH341"><b>H341</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH360FD" name="FraseH360FD" type="checkbox" value="H360FD"  /><label for="id_FrasesH360FD"><b>H360FD</b></label>
                                     </div>
                                 </td>
                                 <td>
                                     <div class="checkboxlabel">
                                         <input id="FraseH373" name="FraseH373" type="checkbox" value="H373"  /><label for="id_FrasesH373"><b>H373</b></label>
                                     </div>
                                 </td>
                              </tr>
                                               
                        </table>                        <div class="no_aplica_FrasesH">
                              <input id="NoaplicaFrasesH" name="NoaplicaFrasesH" type="checkbox" value="1"  /><label for="id_No_aplica_FrasesH"><b>No aplica ninguna de las indicaciones de peligro H indicadas</b></label>
                        </div>                    </div>
                    
                    <div class="accordion clearAll">
                        <ul id="listacompletaul">
                            <li><input type="checkbox" name="list" id="listacompletali"><label for="listacompleta">Ver la lista de indicaciones de peligro H y sus descripciones</label>
                                 <ul class="interior">

                                    <li><strong>H304</strong>/>
                                    Puede ser mortal en caso de ingestión y penetración en las vías respiratorias.Puede ser mortal en caso de ingestión y penetración en las vías respiratorias.</li>
						
					                <li><strong>H330/21</strong>/>
                                    Mortal en caso de inhalación.</li>
                               </ul>
                            </li>
                         </ul>
                    </div>
                    </div>
                    
                    
                    <div id="seleccion_sustancia_comercial">         
                        <label class="description"><br /> Para materiales o productos comercializados no sujetos a normativa de etiquetado, seleccione el agente químico emitido por el proceso:</label>
                        
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
                                        
                    <br />                                        <p> <a href='#' id="substep22Prev" class="prev">< Anterior</a> <a href="#" id="substep22Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>     
                
            <div id="substep23">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE EXPOSICIÓN POTENCIAL</legend>
              
                        <label class="description"><br /> Seleccione la CANTIDAD utilizada por día:</label>
                        <label class="descriptionrojo" > (En el caso de gases, utilizar el volumen en condiciones normales de presión y temperatura).</label>
                                                                    
                                <div id="seleccion_clase_exposicion_potencial_cantidad" class="seleccion_clase_exposicion_potencial_cantidad">       
                                    <input id="check_cantidad_1" name="clase_exposicion_potencial_cantidad" checked class="element radio" type="radio" value="0" />
                                    <label class="choice" for="clase_exposicion_potencial_cantidad">< 100 g o ml</label>
                                    <input id="check_cantidad_2" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="1" />
                                    <label class="choice" for="clase_exposicion_potencial_cantidad">≥ 100 g o ml y < 10 kg o l</label>
                                    <input id="check_cantidad_3" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="2" />
                                    <label class="choice" for="clase_exposicion_potencial_cantidad">≥ 10 y < 100 kg o l</label>
                                    <input id="check_cantidad_4" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="3" />
                                    <label class="choice" for="clase_exposicion_potencial_cantidad">≥ 100 y < 1000 kg o l</label>
                                    <input id="check_cantidad_5" name="clase_exposicion_potencial_cantidad" class="element radio" type="radio" value="4" />
                                    <label class="choice" for="clase_exposicion_potencial_cantidad">≥ 1000 kg o l</label>
                                                        
                                </div>                                                                                                                                                                 
                             
                             <br />                                        <p> <a href='#' id="substep23Prev" class="prev">< Anterior</a> <a href="#" id="substep23Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div> 


            <div id="substep24">
                <fieldset>
                    <legend>Riesgo Potencial – CLASE DE EXPOSICIÓN POTENCIAL</legend>
                    
                        <label class="description"><br /> Seleccione la FRECUENCIA DE UTILIZACIÓN:</label>
                        
                        <br />
                 
                            <div id="clase_exposicion_potencial_frecuencia_no_se_usa" class="seleccion_clase_exposicion_potencial_no_se_usa"  >
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
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">≤ 30 min</label>
                                    <input id="cepf_diaria_2" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 30 - ≤ 120 min</label>
                                    <input id="cepf_diaria_3" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="2" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 2 - ≤ 6 h</label>                                                                                                                              
                                    <input id="cepf_diaria_4" name="seleccion_clase_exposicion_potencial_frecuencia_diaria" class="element radio" type="radio" value="3" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_diaria">> 6 h </label>
                            </div>
                     
                            <div id="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="seleccion_clase_exposicion_potencial_frecuencia">
                                    <input id="cepf_semanal_1" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" checked class="element radio" type="radio" value="0" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">≤ 2 h</label>
                                    <input id="cepf_semanal_2" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal">> 2 - 8 h</label>
                                    <input id="cepf_semanal_3" name="seleccion_clase_exposicion_potencial_frecuencia_semanal" class="element radio" type="radio" value="2" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_semanal"> 1 – 3 días</label>                                                                                                                              
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
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">≤ 15 días</label>
                                    <input id="cepf_anual_2" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="1" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 15 días - ≤ 2 meses</label>
                                    <input id="cepf_anual_3" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="2" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 2 - ≤ 5 meses</label>                                                                                                                              
                                    <input id="cepf_anual_4" name="seleccion_clase_exposicion_potencial_frecuencia_anual" class="element radio" type="radio" value="3" />
                                    <label class="choice" for="seleccion_clase_exposicion_potencial_frecuencia_anual">> 5 meses </label>
                            </div>
                      
                    <div style="clear: both"></div>
                                  
                                                            <p> <a href='#' id="substep24Prev" class="prev">< Anterior</a> <a href="#" id="substep24Next" class="next"> Siguiente></a></p>                                </fieldset>
            </div> 

            <div id="substep25">
                <fieldset>
                <legend>Riesgo Potencial – Cálculos</legend>

                     <label class="debug" for="debug">Debug:</label>
                        <div>
                        <textarea id="debug" name="debug" class="textarea" cols="110" rows="7" ></textarea>
                        </div>
                    
                                       
                    <div id="caja_peligro_medio" class="caja_resultado_medio">
                                               
                        <p><span class="titulo_resultados_medio"> PELIGRO  </span></p> 
                        <p><span class="literal_etiquetas_medio">Clase:&nbsp</span><span id="r_clase_peligro" class="caja_clase_media"></span> </p>                                                         </div>   

                    <div id="caja_cantidad_medio" class="caja_resultado_medio">
                                               
                        <p><span class="titulo_resultados_medio"> CANTIDAD  </span></p> 
                        <p><span class="literal_etiquetas_medio">Clase:&nbsp</span><span id="r_clase_cantidad_dia" class="caja_clase_media"></span> </p>                                                         </div>   

                    <div id="caja_frecuencia_utilizacion" class="caja_resultado_medio_largo">
                                               
                        <p><span class="titulo_resultados_medio"> FRECUENCIA DE UTILIZACIÓN  </span></p> 
                        <p><span class="literal_etiquetas_medio">Clase:&nbsp</span><span id="r_clase_frecuencia_utilizacion" class="caja_clase_media"></span> </p>                                                         </div> 

                    <div id="caja_exposicion_potencial" class="caja_resultado_medio_largo">
                                               
                        <p><span class="titulo_resultados_medio"> EXPOSICIÓN POTENCIAL  </span></p> 
                        <p><span class="literal_etiquetas_medio">Clase:&nbsp</span><span id="r_clase_exposicion_potencial" class="caja_clase_media"></span> </p>                                                         </div> 
                    
                    <div id="caja_riesgo_potencial" class="caja_resultado_medio_largo">
                                               
                        <p><span class="titulo_resultados_medio"> RIESGO POTENCIAL  </span></p> 
                        <p><span class="literal_etiquetas_medio">Clase:&nbsp</span><span id="r_clase_riesgo_potencial" class="caja_clase_media"></span> </p>                         <p><span class="literal_etiquetas_medio">Puntuación:&nbsp</span><span id="r_puntuacion_riesgo_potencial" class="caja_clase_media"></span> </p>                                </div> 

                                                            <br/>                    <p> <a href='#' id="substep25Prev" class="prev">< Anterior</a> <a href="#" id="substep25Next" class="next"> Siguiente></a></p>                              </fieldset>
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
                          <p class="cuadro_Nota_Indentado"> - Los de los componentes de forma individual.</p>
                          <p class="cuadro_Nota_Indentado"> - Si es susceptible de formar un azeótropo: tomar esta temperatura como punto de ebullición.</p>
                          <p class="cuadro_Nota_Indentado"> - Mezcla comercial: el que indique en la ficha de datos de seguridad (FDS) y, si da un intervalo de destilación, tomar la temperatura más baja.</p>
                          <p class="cuadro_Nota_Indentado"> - Disoluciones: el que se indique en la FDS. Si no se indica, tomar la temperatura del disolvente.</p>
                          <br />
                         
                          
                      </div>                                          <p> <a href='#' id="substep31Prev" class="prev">< Anterior</a> <a href="#" id="substep31Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>         
                
             <div id="substep32">
                <fieldset>
                <legend>Volatilidad o pulverulencia</legend>
                           
                        <label class="description"><br /> Señale el estado físico teniendo en cuenta las consideraciones de la pantalla anterior.</label>
                        <br/>
                        <br/>
                            <div id="seleccion_volatilidad_pulverulencia" class="seleccion_volatilidad_pulverulencia">
                                <input id="check_estado_solido" name="volatilidad_pulverulencia_estado" checked class="element radio" type="radio" value="0" />
                                <label class="choice" for="volatilidad_pulverulencia_estado">Estado sólido</label>
                                <input id="check_estado_liquido" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="1" />
                                <label class="choice" for="volatilidad_pulverulencia_estado">Estado líquido</label>
                                <input id="check_estado_spraying" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="2" />
                                <label class="choice" for="volatilidad_pulverulencia_estado">Gases, humos y líquidos o sólidos en suspensión líquida que se utilicen en operaciones de pulverización (spraying).</label>
                                <input id="check_estado_part_vapor" name="volatilidad_pulverulencia_estado" class="element radio" type="radio" value="3" />
                                <label class="choice" for="volatilidad_pulverulencia_estado">Agentes químicos presentes en el ambiente en forma de materia particulada y en forma de vapor simultáneamente (señalados con la nota “FIV” en el Documento de los Límites de Exposición Profesional para agentes químicos en España”).</label>
                                 <br />                                                                                               
                             </div>
                                                                <br/>                    <p> <a href='#' id="substep32Prev" class="prev">< Anterior</a> <a href="#" id="substep32Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            
            <div id="substep331">
                <fieldset>
                <legend>Volatilidad o pulverulencia</legend>
                         
                        <label class="description"><br /> Estado sólido:</label>
                        <br/>
                        <br/>
                            <div id="seleccion_volatilidad_pulverulencia_solido" class="seleccion_volatilidad_pulverulencia_solido">
                                <input id="check_polvo_fino" name="volatilidad_pulverulencia_solido" checked class="element radio" type="radio" value='0' />
                                <label class="choice" for="volatilidad_pulverulencia_solido">Material en forma de polvo fino. Formación de polvo que queda en suspensión en la manipulación (por ejemplo: harina, azúcar en polvo, cemento, yeso, etc.).</label>
                                <input id="check_polvo_grano" name="volatilidad_pulverulencia_solido" class="element radio" type="radio" value='1' />
                                <label class="choice" for="volatilidad_pulverulencia_solido">Material en forma de polvo en grano (1-2 mm). El polvo sedimenta rápido en la manipulación (por ejemplo: azúcar consistente cristalizada). </label>
                                <input id="check_polvo_pastillas" name="volatilidad_pulverulencia_solido" class="element radio" type="radio" value='2' />
                                <label class="choice" for="volatilidad_pulverulencia_solido">Material en pastillas, granulado, escamas (varios mm o 1-2 cm) sin apenas emisión de polvo en la manipulación.</label>
                                                                                                                                                               
                             </div>
                                                                               <br/>                    <p> <a href='#' id="substep331Prev" class="prev">< Anterior</a> <a href="#" id="substep331Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            
            <div id="substep332">
                <fieldset>
                <legend>Volatilidad o pulverulencia </legend>
                       
                        <label class="description"><br /> Estado líquido</label>
                        <label class="description"><br /> Introduzca los siguientes datos:</label>
                        <br/>
                            <table id="tabla_volatilidad_pulverulencia_liquido" class="tabla_volatilidad_pulverulencia_liquido">
                               <tr>
                                   <td>Temperatura de utilización (ºC):  </td>
                                   <td><input name="TemUti" id="TemUti" class="element text small numero_decimal" type="text" maxlength="3" value="" /></td>
                                                                    
                                </tr> 
                                <tr>
                                    <td> Punto de ebullición (ºC):  </td>
                                   <td><input name="TemEbu" id="TemEbu" class="element text small numero_decimal" type="text" maxlength="3" value="" /></td>
                                
                                </tr> 
                                                                                                                                                                                            
                             </table>
                                                                            <br/>                    <p> <a href='#' id="substep332Prev" class="prev">< Anterior</a> <a href="#" id="substep332Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>      
            <div id="substep334">
                <fieldset>
                <legend>Volatilidad o pulverulencia</legend>
                                         
                        <label class="description"><br /> Agentes químicos presentes en el ambiente en forma de materia particulada y vapor simultáneamente.</label>
                        
                        <br />
                   
                    <div id="volatilidad_pulverulencia_part_vapor_solido" class="volatilidad_pulverulencia_part_vapor_solido" >         
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
                                    <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">Pv >= 25 KPa</label>
                                    <input id="pv_2" name="volatilidad_pulverulencia_part_vapor_pv" class="element radio" type="radio" value="1" />
                                    <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">0,5 KPa =< Pv < 25 KPa </label>
                                    <input id="pv_3" name="volatilidad_pulverulencia_part_vapor_pv" class="element radio" type="radio" value="2" />
                                    <label class="choice" for="volatilidad_pulverulencia_part_vapor_pv">Pv < 0,5 KPa</label>
                                                                                                                                                             
                            </div>
                    </div>
                     <div style="clear: both"></div>
                                                        <br/>                                    <p> <a href='#' id="substep334Prev" class="prev">< Anterior</a> <a href="#" id="substep334Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>                   
             <div id="substep34">
                <fieldset>
                <legend>Volatilidad o pulverulencia - Cálculos</legend>
                    <div id="caja_volatilidad_pulverulencia" class="caja_resultado">
                        <div id="titulo_resultados_volatilidad_pulverulencia" class="titulo_resultados">
                        <p> VOLATILIDAD O PULVERULENCIA </p> 
                        </div>
                                       
                                            <div id="caja_etiquetas_volatilidad_pulverulencia" class="caja_etiquetas">                        <p><span class="literal_etiquetas">Clase:&nbsp</span></p>                         <br />                        <p><span class="literal_etiquetas">Puntuación:&nbsp</span> </p>                         <br />                        </div>                        <div id="caja_valores_volatilidad_pulverulencia" class="caja_valores">                        <p><span id="r_clase_volatilidad_pulverulencia" class="caja_clase"></span></p>                         <p><span id="r_puntuacion_volatilidad_pulverulencia" class="caja_puntuacion"></span> </p>                         <br />                        </div>                                                                    </div>                                                  <br/>                    <p> <a href='#' id="substep34Prev" class="prev">< Anterior</a> <a href="#" id="substep34Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>       
            
            </div>  

            <div id="step4">
            <div id="substep41">
                <fieldset>
                <legend>Procedimiento de trabajo</legend>
                  
                        <label class="description"> Señale la opción que más se ajuste al procedimiento empleado:</label>
                                                   
                            <div id="seleccion_procedimiento_trabajo" class="seleccion_procedimiento_trabajo">

                                <table class="tabla_seleccion_procedimiento_trabajo" >
                                    <tr>
                                         <td>
                                            <input id="p_t_4" name="procedimiento_trabajo" class="element radio" type="radio" value="0" />
                                         </td>
                                         <td>
                                             <p> 4 </p>
                                         </td>
                                         <td>
                                             <p> Dispersivo </p>                                                                                   </td>
                                         <td>
                                             <span><img src="../img/dispersivo.jpg" alt="Dispersivo" class="imgprocedimiento" /></span>                                          </td>                                         
                                          <td>
                                             <span> Ejemplos : </span>
                                             <br/>
                                             <span> Pinturas a pistola, taladro, muela, vaciado de sacos a mano, de cubos ... </span>
                                             <br/>
                                             <span> Soldadura al arco ... </span>
                                             <br/>
                                             <span> Limpieza con trapos.</span>
                                             <br/>

                                             <span> Máquinas portátiles (sierras, cepillos ...)</span>
                                          </td>
                                     </tr>
                                    <tr>
                                         <td>
                                            <input id="p_t_3" name="procedimiento_trabajo" class="element radio" type="radio" value="1" />
                                         </td>
                                         <td>
                                             <p> 3 </p>
                                         </td>
                                         <td>
                                             <p> Abierto </p>                                                                                   </td>
                                         <td>
                                             <span><img src="../img/abierto.jpg" alt="abierto" class="imgprocedimiento" /></span>                                          </td>                                         
                                          <td>
                                             <span> Ejemplos : </span>
                                              <br />
                                             <span> Conductos del reactor, mezcladores abiertos, pintura a brocha o pincel, puesto de acondicionamiento (toneles, bidosnes...) </span>
                                              <br />
                                              <span> Manejo y vigilancia de máquinas de impresión... </span>
                                          </td>
                                     </tr>
                                      <tr>
                                         <td>
                                            <input id="p_t_2" name="procedimiento_trabajo" class="element radio" type="radio" value="2" />
                                         </td>
                                         <td>
                                             <p> 2 </p>
                                         </td>
                                         <td>
                                             <p> Cerrado/abierto regularmente </p>                                                                                   </td>
                                         <td>
                                             <span><img src="../img/cerrado abierto.jpg" alt="Cerrado abierto" class="imgprocedimiento"/></span>                                          </td>                                         
                                          <td>
                                             <span> Ejemplos : </span>
                                              <br />
                                             <span> Reactor cerrado con cargas regulares de agentes químicos, toma de muestras, máquina de desengrasar en fase líquida o de vapor... </span>
                                          </td>
                                     </tr>
                                     <tr>
                                         <td>
                                            <input id="p_t_1" name="procedimiento_trabajo" checked class="element radio" type="radio" value="3" />
                                         </td>
                                         <td>
                                             <p> 1 </p>
                                         </td>
                                         <td>
                                             <p> Cerrado permanente </p>                                                                                   </td>
                                         <td>
                                             <span><img src="../img/cerrado.jpg" alt="Cerrado" class="imgprocedimiento" /></span>                                          </td>                                         
                                          <td>
                                             <span> Ejemplos : </span>
                                              <br />
                                             <span> Reactor químico </span>
                                          </td>
                                     </tr> 
                                </table>
                                                           
                             </div>
                                        <p> <a href='#' id="substep41Prev" class="prev">< Anterior</a> <a href="#" id="substep41Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            
            <div id="substep42">
                <fieldset>
                <legend>Procedimiento de trabajo - Cálculos</legend>
                    <div id="caja_procedimiento_trabajo" class="caja_resultado">
                        <div id="titulo_resultados_procedimiento_trabajo" class="titulo_resultados">
                        <p> PROCEDIMIENTO DE TRABAJO </p> 
                        </div>
                                       
                                            <div id="caja_etiquetas_procedimiento_trabajo" class="caja_etiquetas">                        <p><span class="literal_etiquetas">Clase:&nbsp</span></p>                         <br />                        <p><span class="literal_etiquetas">Puntuación:&nbsp</span> </p>                         <br />                        </div>                        <div id="caja_valores_procedimiento_trabajo" class="caja_valores">                        <p><span id="r_clase_procedimiento_trabajo" class="caja_clase"></span></p>                         <p><span id="r_puntuacion_procedimiento_trabajo" class="caja_puntuacion"></span> </p>                         <br />                        </div>                                                                    </div>                                                  <br/>                    <p> <a href='#' id="substep42Prev" class="prev">< Anterior</a> <a href="#" id="substep42Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            </div>  

            <div id="step5">
            <div id="substep51">
                <fieldset>
                <legend>Protecciones Colectivas</legend>
                          
                        <label class="description"> Señale la opción que más se ajuste a la situación real:</label>
                            <div id="seleccion_proteccion-colectiva" class="seleccion_proteccion_colectiva">
                               
                                <table class="tabla_seleccion_proteccion_colectiva_1" >
                                    <tr>
                                        <td> <input id="p_c_0" name="protecciones_colectivas" checked class="element radio" type="radio" value="0" /></td>                                   </td>
                                        <td> <p> 5 </p> </td>
                                        <td> <span><img src="../img/Imagen trabajo en espacio con aperturas limitadas.png" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Trabajo en espacio con aberturas limitadas de entrada y salida y ventilación natural desfavorable  </p> </td>
                                     </tr>
                                    <tr>
                                        <td><input id="p_c_1" name="protecciones_colectivas" class="element radio" type="radio" value="1" /></td>
                                        <td> <p> 4 </p> </td>
                                        <td> <span><img src="../img/ausencia de ventilación.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Ausencia de ventilación mecánica </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_2" name="protecciones_colectivas" class="element radio" type="radio" value="2" /></td>
                                        <td> <p> 3 </p> </td>
                                        <td> <span><img src="../img/ausencia de ventilación.jpg" class="imgproteccion"  alt="" /></span></td>                                         
                                        <td> <p> Trabajos en intemperie </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_3" name="protecciones_colectivas" class="element radio" type="radio" value="3" /></td>
                                        <td> <p> 3 </p> </td>
                                        <td> <span><img src="../img/trabajador alejado.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Trabajador alejado de la fuente de emisión </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_4" name="protecciones_colectivas" class="element radio" type="radio" value="4" /></td>
                                        <td> <p> 3 </p> </td>
                                        <td> <span><img src="../img/ventilación general.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Ventilación mecánica general </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_5" name="protecciones_colectivas" class="element radio" type="radio" value="5" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/campana superior.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Campana superior </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_6" name="protecciones_colectivas" class="element radio" type="radio" value="6" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/rendija de aspiración.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Rendija de aspiración </p> </td>
                                     </tr> 
                                </table>
                                <table class="tabla_seleccion_proteccion_colectiva_2" >
                                    <tr>
                                        <td> <input id="p_c_7" name="protecciones_colectivas" class="element radio" type="radio" value="7" /></td>                                   </td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/mesa con aspiración.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Mesa con aspiración </p> </td>
                                     </tr>
                                    <tr>
                                        <td><input id="p_c_8" name="protecciones_colectivas" class="element radio" type="radio" value="8" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/aspiración integrada en herramienta.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Aspiración integrada en la herramienta </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_9" name="protecciones_colectivas" class="element radio" type="radio" value="9" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/cabina de pequeñas dimensiones.jpg" class="imgproteccion"  alt="" /></span></td>                                         
                                        <td> <p> Cabina de pequeñas dimensiones ventilada </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_10" name="protecciones_colectivas" class="element radio" type="radio" value="10" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/cabina horizontal.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Cabina horizontal </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_11" name="protecciones_colectivas" class="element radio" type="radio" value="11" /></td>
                                        <td> <p> 2 </p> </td>
                                        <td> <span><img src="../img/cabina vertical.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Cabina vertical </p> </td>
                                     </tr> 
                                    <tr>
                                        <td><input id="p_c_12" name="protecciones_colectivas" class="element radio" type="radio" value="12" /></td>
                                        <td> <p> 1 </p> </td>
                                        <td> <span><img src="../img/captación envolvente.jpg" class="imgproteccion" alt="" /></span></td>                                         
                                        <td> <p> Captación envolvente (vitrina de laboratorio) </p> </td>
                                     </tr> 
                                    
                                </table>                           
                                                           
                             </div>

                    <div style="clear: both"></div>                                        <p> <a href='#' id="substep51Prev" class="prev">< Anterior</a> <a href="#" id="substep51Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            
            <div id="substep52">
                <fieldset>
                <legend>Protecciones Colectivas - Cálculos</legend>
                    <div id="caja_protecciones_colectivas" class="caja_resultado">
                        <div id="titulo_resultados_caja_protecciones_colectivas" class="titulo_resultados">
                        <p> PROTECCIONES COLECTIVAS </p> 
                        </div>
                                       
                                            <div id="caja_etiquetas_protecciones_colectivas" class="caja_etiquetas">                        <p><span class="literal_etiquetas">Clase:&nbsp</span></p>                         <br />                        <p><span class="literal_etiquetas">Puntuación:&nbsp</span> </p>                         <br />                        </div>                        <div id="caja_valores_protecciones_colectivas" class="caja_valores">                        <p><span id="r_clase_protecciones_colectivas" class="caja_clase"></span></p>                         <p><span id="r_puntuacion_protecciones_colectivas" class="caja_puntuacion"></span> </p>                         <br />                        </div>                                                                    </div>                                                  <br/>                    <p> <a href='#' id="substep52Prev" class="prev">< Anterior</a> <a href="#" id="substep52Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            </div>  
            <div id="step6">
            <div id="substep61">
                <fieldset>
                    <legend>Factor de corrección en función del VLA </legend> 
                    <label class="description"><br /> Seleccione la opción que corresponda:</label>
                            <div id="seleccion_VLA" class="seleccion_VLA">
                                <input id="VLA_1" name="VLA" checked class="element radio" type="radio" value="0" />
                                <label class="choice" for="VLA"> VLA-ED® > 0,1</label>
                                <input id="VLA_2" name="VLA" class="element radio" type="radio" value="1" />
                                <label class="choice" for="VLA"> 0,01 < VLA-ED® <= 0,1</label>
                                <input id="VLA_3" name="VLA" class="element radio" type="radio" value="2" />
                                <label class="choice" for="VLA">0,001 < VLA-ED® <= 0,01</label>
                                <input id="VLA_4" name="VLA" class="element radio" type="radio" value="3" />
                                <label class="choice" for="VLA">VLA-ED® <= 0,001</label>
                             </div>

                                                     <p> <a href='#' id="substep61Prev" class="prev">< Anterior</a> <a href="#" id="substep61Next" class="next"> Siguiente></a></p>                </fieldset>
            </div>          
            
            <div id="substep62">
                <fieldset>
                    <legend>Factor de corrección en función del VLA - Cálculos</legend>
                    <div id="caja_vla" class="caja_resultado">
                        <div id="titulo_resultados_VLA" class="titulo_resultados">
                            <br />
                            <p> FACTOR DE CORRECCIÓN VLA </p> 
                        </div>
                                                                       <div id="caja_valores_vla" class="caja_valores">                                                          <p><span id="r_puntuacion_vla" class="caja_puntuacion"></span> </p>                                                 </div>                    </div>                              <br/>                    <p> <a href='#' id="substep62Prev" class="prev">< Anterior</a> <a href="#" id="substep62Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div>          
            </div>          
            <div id="step7">
            <div id="substep71">
                <fieldset>
                  <legend>Resultados</legend> 
                    <canvas id="cuadroResultado" width="720" height="380" style="border:0px solid green; margin:0px,0px,0px,0px; padding:0px,0px,0px,0px" >
                            Your browser does not support the HTML5 canvas tag.  
                    </canvas>
                                        <p> <a href='#' id="substep71Prev" class="prev">< Anterior</a> <a href="#" id="substep71Next" class="next"> Siguiente></a></p>                              </fieldset>
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
                  
                    <br />                    <p> <a href='#' id="substep72Prev" class="prev">< Anterior</a> <a href="#" id="substep72Next" class="next"> Siguiente></a></p>                              </fieldset>
            </div> 
            
            </div>
           
            
            <div style="clear:both"></div>    
		</form>	
</div>
   
</asp:Content>
