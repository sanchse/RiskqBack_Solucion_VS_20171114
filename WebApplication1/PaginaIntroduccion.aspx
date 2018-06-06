<%@ Page Language="C#" MasterPageFile="~/PaginaPrincipal.master" AutoEventWireup="true" CodeBehind="PaginaIntroduccion.aspx.cs" Inherits="WebApplication1.PaginaIntroduccion" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div id="contenido_general">
	
            <div class="Titulo_Seccion">
                   Exposición a agentes químicos. Evaluación cualitativa del riesgo por inhalación de agentes químicos.
            </div>
          
            <hr class="gris" />
            <p>El procedimiento que se describe en está aplicacion está basado en metodología de evaluación simplicada del riesgo químico propuesta por el institut National de Reserche et de Securité (INRS). Sobre dicha metodología se han realizado algunas modificaciones que permiten evaluar el riesgo en base a más variables.</p>
            <p>Esta evaluación cualitativa se realiza estableciendo una clase y una puntuación para cada uno de las variables implicadas (ver esquema) y, en último término, una puntuación para el riesgo por inhalación que permita caracterizar el riesgo clacificándolo como riesgo a priori bajo, riesgo moderado riesgo probablemente muy elevado.</p>
            <br />
            <br />
				
                <!--<div class="btn btn_submit">
                    <a href="/riskquim/Usuarios/Registro.asp?aplicacion=CB">Empezar ></a><span></span>
                </div> -->
    </div>
</asp:Content>
