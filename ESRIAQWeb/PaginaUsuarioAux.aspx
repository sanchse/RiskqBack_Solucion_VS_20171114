<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaUsuarioAux.aspx.cs" Inherits="RQWeb.PaginaUsuarioAux" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

     <script type="text/javascript" src="js/usuarioaux_V02.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

     <div id="form_container">
                            
                    <legend>Datos de identificación de usuario</legend>
                <ul> 
                    <li>
                        <label class="description" for="IdUsuario">Identificación de usuario:</label>
                        <div><input name="nombre" id="usuarioaux" class="element text small numero_decimal" type="text" maxlength="3" value="66" /></div>

                    </li>

                </ul>
                        
            <div style="margin-left:240px; padding-bottom:20px; height:50px;" class="grupo_botones">
            <div id="id1" class="btn btn_submit"> <a id="botonusuarioaux" href="PaginaMisOperaciones.aspx" >Mis operaciones</a><span></span> </div>
            </div>     

      </div>

</asp:Content>
