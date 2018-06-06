<%@ Page Title="" Language="C#" MasterPageFile="~/PaginaPrincipal.master" AutoEventWireup="true" CodeBehind="PaginaMisOperaciones.aspx.cs" Inherits="ESRIAQWeb01.PaginaMisOperaciones" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href="js/jquery.dataTables.min.css" rel="stylesheet" />
    <script type="text/javascript" src="css/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/jquery.dataTables.min.js"></script>

</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="TextoInicialAtencion" class="cuadro_texto_inicial">
        <p>
            <br />
            ¡ATENCIÓN! </p>

        <p>Este método no es aplicable a: </p>
        <p>*  MEDICAMENTOS </p>
        <p>*  PRODUCTOS DE DESCOMPOSICIÓN TÉRMICA </p>
    </div>
    
    <div id="encabezado">
        <p>Mis Operaciones </p>
    </div>

    <div id="cuerpo">
        <input id="strBuscar" name="strBuscar" class="element text medium" type="text" maxlength="255" value="" />
        <input id="button" class="button_text" type="button" name="Buscar" value="Buscar" onclick="return buscar('listado=misoperaciones')" />
        <p>Criterios de búsqueda: nombre de la operación </p>
    </div>

    <div id="contenedor_busqueda" class="display">
        <div id="resultados_busqueda"></div>
        <p><span id="Literalresordalf"><b>Resultados (por orden alfabético) </b></span></p>
        <table id="tabla_mis_operaciones" class="tabla_busqueda">
            <thead>
                <tr>
                    <th>Nombre
                    </th>
                    <th>Editar
                    </th>
                    <th>Eliminar
                    </th>
                </tr>
                
            </thead>
        </table>

        <br />
    </div>
    <div id="loading">
        <div style="margin-left: 470px; padding-bottom: 20px; height: 50px;" class="grupo_botones">
            <div class="btn btn_submit">
                <%--<a href="#PaginaOperacion" onclick="openurl();">Crear una nueva operación</a><span></span>--%>
                <a href="PaginaOperacion.aspx">Crear una nueva operación</a><span></span>
            </div>

            <script type="text/javascript">
                function filterGlobal() {
                    $('#tabla_mis_operaciones').DataTable().search(
                                $('#strBuscar').val()
                            ).draw();
                }

                // DataTable
                $(document).ready(function () {
                    //Popup Informativo
                    var informado=<%=Session("AUTH_Informado")%>;
                    alert("Informado" + informado);
			        if (informado==0) {
				        $('a.poplight[href=#?w=350]').popOpen(); //Run popOpen function once on load
				        
			        }

                    //DataTable para los datos de las operaciones
                    var idUsuario = 1;
                    var destino = "http://localhost:8081/api/rq_operaciones/Usuario/" + idUsuario;
                    // SITE: sanchse-001-site1.etempurl.com 
                    //var destino = "http://sanchse-001-site1.etempurl.com/api/rq_operaciones/Usuario/" + idUsuario;

                    $('#tabla_mis_operaciones').DataTable(
                  {
                      "responsive": true,
                      "processing": true,
                      "serverSide": false,
                      "ajax": {
                          "url": destino,
                          "dataSrc": ""
                      },
                      "columns": [
                        { "data": "nombre" },
                        {
                              "mData": null,
                              "bSortable": false,
                              "mRender": function (data, type, full) {
                                  //return '<a class="btn btn-info btn-sm" href=../PaginaEditarOperacion.aspx?id=' + data.ID_Operacion + '>' + 'Editar' + '</a>';
                                  var destino = '<a href="../PaginaEditarOperacion.aspx?id=' +
                                      data.ID_Operacion +
                                      '"><img src="../img/edit.png" title="Editar"></a>';
                                  //var destino = '<button title="Editar" id="edit_btn_' + data.ID_Operacion +
                                  //    '" onClick="location.href=\'../PaginaEditarOperacion.aspx\'?' + data.ID_Operacion + ';"><img src="../img/edit.png"></button>';
                                  //alert(destino);                            
                                  return destino;
                              }
                        },
                        {
                            "mData": null,
                            "bSortable": false,
                            "mRender": function (data, type, full) {
                                //return '<a class="btn btn-info btn-sm" href=../PaginaEditarOperacion.aspx?id=' + data.ID_Operacion + '>' + 'Editar' + '</a>';
                                return '<button title="Eliminar" id="delete_btn_' + data.ID_Operacion + '" onclick="deleteOperation(' + data.ID_Operacion + ');"><img src="../img/delete.png"></button>';

                            }
                        }
                      ],
                      "language": {
                          "sLengthMenu": "Mostrar _MENU_ registros",
                          "emptyTable": "No hay operaciones asociadas al usuario.",
                          "zeroRecords": "No hay operaciones encontradas para la busqueda realizada.",
                          "oPaginate": {
                              "sFirst": "Primero",
                              "sLast": "Último",
                              "sNext": "Siguiente",
                              "sPrevious": "Anterior"
                          },
                          "sProcessing": "Procesando...",
                          "sZeroRecords": "No se encontraron resultados",
                          "sEmptyTable": "Ningún dato disponible en esta tabla",
                          "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                          "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
                          "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
                          "sInfoPostFix": "",
                          "sSearch": "Buscar:",
                          "sUrl": "",
                          "sInfoThousands": ",",
                          "sLoadingRecords": "Cargando..."
                      },
                      "searching": true,
                      "ordering": true,
                      "paging": true
                  });

                    $('#strBuscar').on('keyup click', function () {
                        filterGlobal();
                    });

                });

                function deleteOperation(operationId) {
                    if (!confirm("Se va a proceder a eliminar esta operacion. Debe confirmar la acción")) {
                        return;
                    };
                    jQuery.ajax({
                        type: "DELETE",
                        url: "http://localhost:8081/api/rq_operaciones/" + operationId,
                        contentType: "application/json; charset=utf-8",
                        //data: JSON.stringify(contactId),
                        dataType: "json",
                        success: function (data, status, jqXHR) {
                            // do something
                        },

                        error: function (jqXHR, status) {
                            alert("Se produjo un error: " + status);
                        }
                    });
                }
            </script>

        </div>
    </div>

</asp:Content>


