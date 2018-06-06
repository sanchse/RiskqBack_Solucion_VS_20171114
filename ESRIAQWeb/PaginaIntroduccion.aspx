<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaIntroduccion.aspx.cs" Inherits="RQWeb.PaginaIntroduccion" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

<div id="contenido_general">
	
            <div class="Titulo_Seccion">
                   Exposición a agentes químicos. Evaluación cualitativa del riesgo por inhalación de agentes químicos.
            </div>
          
           <hr class="gris" >
         
            <p>El procedimiento que se describe en esta aplicación está basado en la metodología de evaluación simplificada del riesgo químico propuesta por el Institut National de Reserche et de Sécurité (INRS). Sobre dicha metodología se han realizado algunas modificaciones que permiten evaluar el riesgo en base a más variables.</p>
            <p>Esta evaluación cualitativa se realiza estableciendo una clase y una puntuación para cada una de las variables implicadas (ver esquema) y, en último término, una puntuación para el riesgo por inhalación que permita caracterizar el riesgo clasificándolo como riesgo a priori bajo, riesgo moderado o riesgo probablemente muy elevado.</p>
            <br />
  				
 
             <div id="esquemacalculo" width="720" height="380" style="margin-left:5px" ><img  src="../img/EsquemaCalculo03.png"  /></div>




</div>




</asp:Content>
