<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaPrincipal.Master" AutoEventWireup="true" CodeBehind="PaginaEditarOperacion.aspx.cs" Inherits="WebApplication1.PaginaEditarOperacion" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
     <script type="text/javascript" src="css/jquery-3.2.1.min.js"></script>
     <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>
    <link href="css/estilos.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="TextoInicialAtencion" class="cuadro_texto_inicial" >
        <p><br />¡ATENCIÓN! </p>
        <p>Esto es un ejemplo de EDICIÓN de una Operacion: </p>        
    </div>

    <div id="encabezado" >
        <p>Edición de la Operación: <%=Request.QueryString["id"]%></p>
    </div>
    <div id="cuerpo_pagina">
         <table id="tabla_operacion" border="1">
             <thead>
                 <tr>
                     <th>
                         Campo
                     </th>
                     <th>
                         Valor
                     </th>
                 </tr>
             </thead>
            <tr><td>ID_Operacion</td><td><input id="ID_Operacion" type="number"></td></tr><br>
            <tr><td>ID_Usuario</td><td><input id="ID_Usuario" type="number"></td></tr><br>
            <tr><td>nombre</td><td><input id="nombre" type="text"></td></tr><br>
            <tr><td>agentequimicooperacion</td><td><input id="agentequimicooperacion" type="text"></td></tr><br>
            <tr><td>descripcion</td><td><input id="descripcion" type="text"></td></tr><br>
            <tr><td>seleccionfrasesH</td><td><input id="seleccionfrasesH" type="number"></td></tr><br>
            <tr><td>noaplicafrasesHcheck</td><td><input id="noaplicafrasesHcheck" type="number"></td></tr><br>
            <tr><td>seleccionVLAED</td><td><input id="seleccionVLAED" type="number"></td></tr><br>
            <tr><td>seleccionVLAEDmatpar</td><td><input id="seleccionVLAEDmatpar" type="number"></td></tr><br>
            <tr><td>seleccionVLAEDparticulada</td><td><input id="seleccionVLAEDparticulada" type="number"></td></tr><br>
            <tr><td>seleccionVLAEDnoparticulada</td><td><input id="seleccionVLAEDnoparticulada" type="number"></td></tr><br>
            <tr><td>seleccionsustanciacomercialsino</td><td><input id="seleccionsustanciacomercialsino" type="number"></td></tr><br>
            <tr><td>seleccionmaterialesnosujetosanormativa</td><td><input id="seleccionmaterialesnosujetosanormativa" type="number"></td></tr><br>
            <tr><td>frasesHseleccionadas</td><td><input id="frasesHseleccionadas" type="number"></td></tr><br>
            <tr><td>clasepeligro</td><td><input id="clasepeligro" type="number"></td></tr><br>
            <tr><td>seleccioncantidaddia</td><td><input id="seleccioncantidaddia" type="number"></td></tr><br>
            <tr><td>clasecantidaddia</td><td><input id="clasecantidaddia" type="number"></td></tr><br>
            <tr><td>selecciontipofrecuenciautilizacion</td><td><input id="selecciontipofrecuenciautilizacion" type="number"></td></tr><br>
            <tr><td>seleccionfrecuenciautilizacion</td><td><input id="seleccionfrecuenciautilizacion" type="number"></td></tr><br>
            <tr><td>clasefrecuenciautilizacion</td><td><input id="clasefrecuenciautilizacion" type="number"></td></tr><br>
            <tr><td>claseexposicionpotencial</td><td><input id="claseexposicionpotencial" type="number"></td></tr><br>
            <tr><td>claseriesgopotencial</td><td><input id="claseriesgopotencial" type="number"></td></tr><br>
            <tr><td>puntuacionriesgopotencial</td><td><input id="puntuacionriesgopotencial" type="number"></td></tr><br>
            <tr><td>seleccionestadovolpul</td><td><input id="seleccionestadovolpul" type="number"></td></tr><br>
            <tr><td>seleccionvolatilidadpulverulenciasolido</td><td><input id="seleccionvolatilidadpulverulenciasolido" type="number"></td></tr><br>
            <tr><td>clasevolatilidadpulverulenciasolido</td><td><input id="clasevolatilidadpulverulenciasolido" type="number"></td></tr><br>
            <tr><td>tempusovolatilidadpulverulencialiquido</td><td><input id="tempusovolatilidadpulverulencialiquido" type="number"></td></tr><br>
            <tr><td>tempebullicionvolatilidadpulverulencialiquido</td><td><input id="tempebullicionvolatilidadpulverulencialiquido" type="number"></td></tr><br>
            <tr><td>clasevolatilidadpulverulenciaLiquido</td><td><input id="clasevolatilidadpulverulenciaLiquido" type="number"></td></tr><br>
            <tr><td>seleccionvolatilidadpulverulenciasolvapsolido</td><td><input id="seleccionvolatilidadpulverulenciasolvapsolido" type="number"></td></tr><br>
            <tr><td>clasevolatilidadpulverulenciasolvapsolido</td><td><input id="clasevolatilidadpulverulenciasolvapsolido" type="number"></td></tr><br>
            <tr><td>seleccionvolatilidadpulverulenciasolvapliquido</td><td><input id="seleccionvolatilidadpulverulenciasolvapliquido" type="number"></td></tr><br>
            <tr><td>clasevolatilidadpulverulenciasolvapliquido</td><td><input id="clasevolatilidadpulverulenciasolvapliquido" type="number"></td></tr><br>
            <tr><td>clasevolatilidadvulverulencia</td><td><input id="clasevolatilidadvulverulencia" type="number"></td></tr><br>
            <tr><td>puntuacionvolatilidadvulverulencia</td><td><input id="puntuacionvolatilidadvulverulencia" type="number"></td></tr><br>
            <tr><td>seleccionprocedimientotrabajo</td><td><input id="seleccionprocedimientotrabajo" type="number"></td></tr><br>
            <tr><td>claseprocedimientotrabajo</td><td><input id="claseprocedimientotrabajo" type="number"></td></tr><br>
            <tr><td>puntuacionprocedimientotrabajo</td><td><input id="puntuacionprocedimientotrabajo" type="number"></td></tr><br>
            <tr><td>seleccionproteccionescolectivas</td><td><input id="seleccionproteccionescolectivas" type="number"></td></tr><br>
            <tr><td>claseproteccionescolectivas</td><td><input id="claseproteccionescolectivas" type="number"></td></tr><br>
            <tr><td>puntuacionproteccionescolectivas</td><td><input id="puntuacionproteccionescolectivas" type="number"></td></tr><br>
            <tr><td>seleccionvla</td><td><input id="seleccionvla" type="number"></td></tr><br>
            <tr><td>puntuacionvla</td><td><input id="puntuacionvla" type="number"></td></tr><br>
            <tr><td>puntuacionriesgoporinhalacion</td><td><input id="puntuacionriesgoporinhalacion" type="number"></td></tr><br>
            <tr><td>prioridadaccion</td><td><input id="prioridadaccion" type="number"></td></tr><br>
         </table>
         <br />    
 </div>    

</asp:Content>

