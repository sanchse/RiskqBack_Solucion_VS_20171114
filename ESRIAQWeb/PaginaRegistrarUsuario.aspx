<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaRegistrarUsuario.aspx.cs" Inherits="RQWeb.PaginaRegistrarUsuario" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="css/estilos01.css" rel="stylesheet" />
    <link href="css/formulario01.css" rel="stylesheet" />
    <link href="css/maestra.css" rel="stylesheet" />

    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/maestra.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="formularioregistrausuario" class="" style="width: 250px; background-color:skyblue; color: white; float:left">
        <div class="titulo" style="font-size: 12px; margin-bottom: 10px; border-bottom: 1px dotted; align-content: center">Registrar Usuario</div>
        <div style="float: left;">
            <asp:Label ID="Label1" runat="server" Text="Identificador"></asp:Label>
        </div>
        <div style="float: right;">
            <asp:TextBox ID="IdentificadorRegistro" runat="server" Width="100"></asp:TextBox>
        </div>
        <br />
        <div style="float: left;">
            <asp:Label ID="Label2" runat="server" Text="Clave"></asp:Label>
        </div>
        <div style="float: right;">
            <asp:TextBox runat="server" ID="ClaveRegistro" Width="100"></asp:TextBox>
        </div>
        <br />
        <br />
        <div>
            <asp:LinkButton runat="server" ID="accederLink" CssClass="link_menu" OnClick="Registra_Click">Registrar ></asp:LinkButton>
        </div>
        <br />
        <asp:Label ID="errorlabel" runat="server" Text="" ForeColor="red" Visible="False"></asp:Label>
    </div>
</asp:Content>
