<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaDesconectar.aspx.cs" Inherits="RQWeb.PaginaDesconectar" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estilos.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div id="container_pagina">
        <div id="cuerpo_pagina">
            <div id="contenido_general">

                <div class="Titulo_Seccion">
                    Sesion cerrada correctamente
                </div>
                <hr class="gris" />

                <h2>Atención</h2>
                <p>El programa le permite gestionar sus consultas para que Ud. pueda acceder en cualquier momento.</p>
                <p>El programa le propone este identificador para futuras visitas:</p>
                <blockquote><b>Identificador: </b><%=Session["AUTH_Email"]%><br />
                    <b>Clave: </b><%=Session["AUTH_Password"]%></blockquote>
                <p>En caso de <b>NO</b> emplear el identificador no podrá acceder a la información generada que únicamente esta disponible durante la presente conexión.</p>
                <br />

                <div class="btn btn_submit">
                    <a href="PaginaMiID.aspx">Descargar</a><span></span>
                </div>
                <div class="btn btn_submit">
                    <asp:LinkButton ID="LinkSalir" runat="server" OnClick="LinkSalir_Click">Salir</asp:LinkButton>
                    <span></span>
                </div>
            </div>
        </div>
    </div>

</asp:Content>
