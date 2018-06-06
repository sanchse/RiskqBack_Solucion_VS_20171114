<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaMisOperaciones2.aspx.cs" Inherits="ESRIAQWeb.PaginaMisOperacion" %>
<%@ Register Assembly="AjaxControlToolkit" Namespace="AjaxControlToolkit" TagPrefix="asp" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">   
    <link href="css/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="css/operacion.css" rel="stylesheet" />
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/misoperaciones.js"></script>
    <link href="css/MiPopup.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server"> 
    <div id="form_container">
        <div id="TextoInicialAtencion" class="cuadro_texto_inicial" >  
            <div id="lit_atencion">
            <p><br />¡ATENCIÓN! </p>
            </div>

            <p>Este método no es aplicable a: </p>
            <p>*  MEDICAMENTOS </p>
            <p>*  PRODUCTOS DE DESCOMPOSICIÓN TÉRMICA </p>
            <br />  
        </div>
    <div id="encabezado" >    
        <p>Mis Operaciones </p>
    </div>

     <%--<div id="cuerpo" >    
        <input id="strBuscar" name="strBuscar" class="element text medium" type="text" maxlength="255" value="" />
        <input id="button" class="button_text" type="button" name="Buscar" value="Buscar" onClick="return buscar('listado=misoperaciones')" />
         <p> <span id="literalcriteriosdebusqueda">Criterios de búsqueda: nombre de la operación </span></p>    
     </div>--%>
      
    
       <div id="contenedor_busqueda" class="display" >
        <div id="resultados_busqueda"></div>
         <p><span id="Literalresordalf"> <b>Resultados (por orden alfabético) </b></span></p>
         <table id="tabla_mis_operaciones" class="tabla_busqueda compact ">
             <thead>
                 <tr>
                        <th>Nombre de la operación</th>
                        <th>Prioridad de acción</th>
                        <th>Modificar</th>
                        <th>Borrar</th> 
                        <th>ID_Operacion </th>
                        <th>ID_Usuario</th>
                       
                       <%-- <th>agentequimicooperacion</th>
                        <th>descripcion</th>
                        <th>seleccionfrasesH</th>
                        <th>noaplicafrasesHcheck</th>
                        <th>seleccionVLAED</th>
                        <th>seleccionVLAEDmatpar</th>
                        <th>seleccionVLAEDparticulada</th>
                        <th>seleccionVLAEDnoparticulada</th>
                        <th>seleccionsustanciacomercialsino</th>
                        <th>seleccionmaterialesnosujetosanormativa</th>
                        <th>frasesHseleccionadas</th>
                        <th>clasepeligro</th>
                        <th>seleccioncantidaddia</th>
                        <th>clasecantidaddia</th>
                        <th>selecciontipofrecuenciautilizacion</th>
                        <th>seleccionfrecuenciautilizacion</th>
                        <th>clasefrecuenciautilizacion</th>
                        <th>claseexposicionpotencial</th>
                        <th>claseriesgopotencial</th>
                        <th>puntuacionriesgopotencial</th>
                        <th>seleccionestadovolpul</th>
                        <th>seleccionvolatilidadpulverulenciasolido</th>
                        <th>clasevolatilidadpulverulenciasolido</th>
                        <th>tempusovolatilidadpulverulencialiquido</th>
                        <th>tempebullicionvolatilidadpulverulencialiquido</th>
                        <th>clasevolatilidadpulverulenciaLiquido</th>
                        <th>seleccionvolatilidadpulverulenciasolvapsolido</th>
                        <th>clasevolatilidadpulverulenciasolvapsolido</th>
                        <th>seleccionvolatilidadpulverulenciasolvapliquido</th>
                        <th>clasevolatilidadpulverulenciasolvapliquido</th>
                        <th>clasevolatilidadvulverulencia</th>
                        <th>puntuacionvolatilidadvulverulencia</th>
                        <th>seleccionprocedimientotrabajo</th>
                        <th>claseprocedimientotrabajo</th>
                        <th>puntuacionprocedimientotrabajo</th>
                        <th>seleccionproteccionescolectivas</th>
                        <th>claseproteccionescolectivas</th>
                        <th>puntuacionproteccionescolectivas</th>
                        <th>seleccionvla</th>
                        <th>puntuacionvla</th>
                        <th>puntuacionriesgoporinhalacion</th>--%>
                        

                 </tr>
             </thead>
         </table>

         <br />
     </div>    
                 
        <div style="margin-left:240px; padding-bottom:20px; height:50px;" class="grupo_botones">
            <div class="btn btn_submit"> <a href="PaginaOperacion.aspx" >Crear una nueva operación</a><span></span> </div>     
        
        </div>
        <br />
        <p></p>
     </div>
        
    
    <!--  
       POP UP MODAL
    -->
    <asp:ScriptManager ID="asm" runat="server" />       
    <div>
        <asp:Button ID="ClientButton" runat="server" Text="Launch Modal Popup (Client)" Visible="false" />
        <asp:Panel ID="ModalPanel" runat="server" Width="1px" CssClass="modalPopup">
             
        <div id="popup_name" class="popup_block2">
            <asp:ImageButton ID="imgbtnClose" 
                Style="z-index: 100px; height: 40px; width: 40px; float: right; margin: -40px -40px 0 0;"
                OnClientClick="return hide();"
                runat="server" ImageUrl="~/img/close_pop.png" />
            <h2 align="center">Atención</h2>
            <p>Riskquim le permite gestionar sus consultas de etiquetado y clasificación para que Ud. pueda acceder en cualquier momento.</p>
            <p>Riskquim le propone este identificador para futuras visitas:</p>
            <div style="text-align: center">
                <b>Identificador: </b><%=Session["AUTH_Email"]%><br />
                <b>Clave: </b><%=Session["AUTH_Password"]%><br />
                <a href="PaginaMiID.aspx" title="Descargar identificador">
                    <img src="/img/descargar.png" width="60" height="60" border="0" alt="Descargar identificador" /></a>
            </div>
            <p>En caso de <b>NO</b> emplear el identificador no podrá acceder a la información generada que únicamente esta disponible durante la presente conexión.</p>
            <p align="center">
              <asp:Button ID="OKButton" runat="server" Text="Close"  Visible="False"/>  
            </p>            
        </div>          
        </asp:Panel>
        
        <asp:ModalPopupExtender ID="mpe"  BehaviorID="MyMPE1" runat="server" TargetControlId="ClientButton" 
 PopupControlID="ModalPanel" OkControlID="OKButton" BackgroundCssClass="modalBackground" DropShadow="True" />
    </div>
    
    <script language="javascript" type="text/javascript">
    <!--
        function hide() {
            document.getElementById('popup_name').style.display = 'none';
            
            
        }
    -->
    </script>
</asp:Content>

