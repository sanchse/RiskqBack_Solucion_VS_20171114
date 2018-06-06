<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaMisOperaciones.aspx.cs" Inherits="RQWeb.PaginaMisOperaciones" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    
    <link href="css/jquery.dataTables.min.css" rel="stylesheet" />
    <link href="css/operacion.css" rel="stylesheet" />
    <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" src="js/misoperaciones.js?Version=01"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <img id="top" src="../img/top.png" alt="" />
    <div id="form_container">
<%--        <input type="hidden" name="idUsuario" value="55" />--%>
        <div id="TextoInicialAtencion" class="cuadro_texto_inicial" >
    
            <div id="lit_atencion">
            <p>¡ATENCIÓN! </p>
            </div>

            <p>Este método no es aplicable a: </p>
            <p>*  MEDICAMENTOS </p>
            <p>*  PRODUCTOS DE DESCOMPOSICIÓN TÉRMICA </p>
            <br />
    
        </div>


    <div id="encabezado" >    
        <p>Mis Operaciones </p>
    </div>
         <br />
   <%--  <div id="cuerpo" >    
        <input id="strBuscar" name="strBuscar" class="element text medium" type="text" maxlength="255" value="" />
        <input id="button" class="button_text" type="button" name="Buscar" value="Buscar" onClick="return buscar('listado=misoperaciones')" />
         <p> <span id="literalcriteriosdebusqueda">Criterios de búsqueda: nombre de la operación </span></p>    
     </div>
      --%>
    
       <div id="contenedor_busqueda" class="display" >
        <div id="resultados_busqueda"></div>
         <%--<p><span id="Literalresordalf"> <b>Resultados (por orden alfabético) </b></span></p>--%>
         <table id="tabla_mis_operaciones" class="tabla_busqueda display compact cell-border">
             <thead>
                 <tr>
                        <th>Nombre de la operación</th>
                        <th>Prioridad de acción</th>
                        <th>Modificar</th>
                        <th>Borrar</th> 
                                                            

                 </tr>
             </thead>
         </table>

         <br />
     </div> 
        
           
        <div style="margin-left:270px; margin-top:5px ; padding-bottom:20px; " class="grupo_botones">
            <div class="btn btn_submit"> <a id="crearoperacion" href="PaginaOperacion.aspx" >Crear una nueva operación</a><span></span> </div>
       
        </div>
        <br />
        <p> </p>
                
     </div>
    <img id="bottom" src="../img/bottom.png" alt="" />
</asp:Content>
