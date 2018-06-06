<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaMaestra.Master" AutoEventWireup="true" CodeBehind="PaginaRecursosAdicionales.aspx.cs" Inherits="RQWeb.PaginaRecursosAdicionales" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript" src="js/recursosadicionales.js"></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div id="contenido_general">
	  <div class="Titulo_Seccion">
                  Recursos Adicionales
      </div>
      <br />

      <hr class="gris" />
        
        <style>
				.img_icono {
					padding-left:20px;
					padding-right:10px;
					}
					
				.link_recurso_adicional { font-family:Arial, Helvetica, sans-serif; color:#888;
					}
				</style>
       <br />
       <img src="http://calculadores.insht.es:86/Portals/0/images/ico_pdf.gif" class="img_icono" align="middle" /> <a class="link_recurso_adicional" target="_blank" href="http://www.insht.es/InshtWeb/Contenidos/Documentacion/NTP/NTP/926a937/935w.pdf"  >NTP 935: Agentes químicos: evaluación cualitativa y simplificada del riesgo por inhalación (I). Aspectos generales</a>
       <br />
	   <img src="http://calculadores.insht.es:86/Portals/0/images/ico_pdf.gif"  class="img_icono"  align="middle"/> <a  class="link_recurso_adicional"   target="_blank" href="http://www.insht.es/InshtWeb/Contenidos/Documentacion/NTP/NTP/926a937/937w.pdf"  >NTP 937: Agentes químicos: evaluación cualitativa y simplificada del riesgo por inhalación (III). Método basado en el INRS</a>
       <br />
       <img src="http://calculadores.insht.es:86/Portals/0/images/ico_pdf.gif" class="img_icono" align="middle" /> <a class="link_recurso_adicional" target="_blank" href="http://www.insht.es/InshtWeb/Contenidos/Documentacion/CATALOGO%20DE%20PUBLICACIONES%20ONLINE/TEXTOS/Riesgo%20quimico/riesgo_quimico%20papel.pdf"  >Riesgo químico: sistemática para la evaluación higiénica</a>
       <br />
	   <img src="http://calculadores.insht.es:86/Portals/0/images/ico_pdf.gif"  class="img_icono"  align="middle"/> <a  class="link_recurso_adicional"   target="_blank" href="http://www.insht.es/InshtWeb/Contenidos/Documentacion/CATALOGO%20DE%20PUBLICACIONES%20ONLINE/FOLLETOS/NOVEDADES%202011/Riesgo%20quimico%20para%20la%20evaluacion%20higienica/documento%20riesgo%20quimico.pdf"  >Folleto. Riesgo químico: sistemática para la evaluación higiénica</a>                </div>

</asp:Content>
