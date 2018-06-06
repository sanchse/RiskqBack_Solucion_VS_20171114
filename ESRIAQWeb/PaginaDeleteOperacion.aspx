<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaDeleteOperacion.aspx.cs" Inherits="RQWeb.PaginaDeleteOperacion" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript" src="js/deleteoperacion.js?version=01"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
     <img id="top" src="../img/top.png" alt="" />
	
    <div id="form_container">
        <div id="encabezado">
           <p>Borrando en 'Mis Operaciones'</p>
        </div>

        <div id="paso1">
                    <fieldset>                                     
                       
                       <div id="respuesta1">
                           <div id="titulorespuesta1">Se va a proceder a borrar la Operación:</div>
                           <br />
                           <ul>
                            <li id="linea11">
                                <label class="description" for="Nombre"></label>
                                <div><input name="nombre" id="nombre" class="element text large" type="text" maxlength="255" value="" disabled /></div>
                            </li>                        
                           </ul>
                        
                           <div style="clear:both; margin-top:20px;" ></div> 
                           <div style="margin-left:240px; margin-top:80px;" class="grupo_botones"> 
                           <div style="text-align:center" class="btn btn_submit"><a href="PaginaMisOperaciones.aspx">Cancelar</a><span></span></div>
                           <div style="text-align:center" id="BorrarOperacion" class="btn btn_submit"><a id="BorraOperacion" href='#'> Confirmar</a><span></span></div>
                          </div>
                       
                         </div>
                         <div style="clear:both; height:20px;"></div> 
                    </fieldset>
        </div>

        <div id="paso2">
                    <fieldset>                                     
                       
                       <div id="okbutton">
                     	    <img src="../img/button_ok.png" alt="OK" />
                   
                      </div>
                       <div id="respuesta">
                           <div id="titulorespuesta">Operación borrada correctamente </div>
                           <div style="clear:both; margin-top:20px;" ></div> 
                           <div style="margin-left:310px; margin-top:40px;" class="grupo_botones"> 
                           <div style="text-align:center" class="btn btn_submit"><a id="enlaceaMisOperaciones" href="PaginaMisOperaciones.aspx">Volver</a><span></span></div>
                        </div>
                       
                       </div>
                    <div style="clear:both; height:20px;"></div> 
                    </fieldset>
        </div>

    </div>
    <img id="bottom" src="../img/bottom.png" alt="" />

</asp:Content>
