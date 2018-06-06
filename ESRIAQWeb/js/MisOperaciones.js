

$(document).ready(function () {

    $("#ml02").addClass("selected");
    $("#ml01").removeClass("selected");
    $("#ml03").removeClass("selected");
    $("#ml04").removeClass("selected");

    
    var j_usuario = document.getElementById("ID_Usuario").value;
    var urlbase = document.getElementById("RQBack_URL").value;
    var destino = urlbase + "/api/rq_operaciones/Usuario/" + j_usuario;


    // gestión tabla operaciones

    // DataTable
    $(document).ready(function () {
        //var idUsuario = 2;
        ////var destino = "http://localhost:8081/api/rq_operaciones/Usuario/" + idUsuario;
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
                    { "data": "prioridadaccion", "bSortable": false, },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (data, type, full) {
                            //return '<a class="btn btn-info btn-sm" href=../PaginaEditarOperacion.aspx?id=' + data.ID_Operacion + '>' + 'Editar' + '</a>';
                            var destino = '<a href="../PaginaOperacion.aspx?idOperacion=' +
                                data.ID_Operacion +
                                '"><img src="../img/pencil.png" title="Editar"></a>';
                            //var destino = '<button title="Editar" id="edit_btn_' + data.ID_Operacion +
                            //    '" onClick="location.href=\'../PaginaEditarOperacion.aspx\'?' + data.ID_Operacion + ';"><img src="../img/pencil.png"></button>';
                            //alert(destino);                            
                            return destino;
                        }
                    },
                    {
                        "mData": null,
                        "bSortable": false,
                        "mRender": function (data, type, full) {
                            var destino = '<a href="../PaginaDeleteOperacion.aspx?idOperacion=' +
                                data.ID_Operacion +
                                '"><img src="../img/delete.png" title="Borrar"></a>';
                            //return '<a class="btn btn-info btn-sm" href=../PaginaEditarOperacion.aspx?id=' + data.ID_Operacion + '>' + 'Editar' + '</a>';
                            //return '<button title="Eliminar" id="delete_btn_' + data.ID_Operacion + '" onclick="deleteOperation(' + data.ID_Operacion + ');"><img src="../img/delete.png"></button>';
                            return destino;
                        }
                    },
                    { "data": "ID_Operacion", "visible": false },
                    { "data": "ID_Usuario", "visible": false }
                   
                    //{ "data": "agentequimicooperacion" },
                    //{ "data": "descripcion" },
                    //{ "data": "seleccionfrasesH" },
                    //{ "data": "noaplicafrasesHcheck" },
                    //{ "data": "seleccionVLAED" },
                    //{ "data": "seleccionVLAEDmatpar" },
                    //{ "data": "seleccionVLAEDparticulada" },
                    //{ "data": "seleccionVLAEDnoparticulada" },
                    //{ "data": "seleccionsustanciacomercialsino" },
                    //{ "data": "seleccionmaterialesnosujetosanormativa" },
                    //{ "data": "frasesHseleccionadas" },
                    //{ "data": "clasepeligro" },
                    //{ "data": "seleccioncantidaddia" },
                    //{ "data": "clasecantidaddia" },
                    //{ "data": "selecciontipofrecuenciautilizacion" },
                    //{ "data": "seleccionfrecuenciautilizacion" },
                    //{ "data": "clasefrecuenciautilizacion" },
                    //{ "data": "claseexposicionpotencial" },
                    //{ "data": "claseriesgopotencial" },
                    //{ "data": "puntuacionriesgopotencial" },
                    //{ "data": "seleccionestadovolpul" },
                    //{ "data": "seleccionvolatilidadpulverulenciasolido" },
                    //{ "data": "clasevolatilidadpulverulenciasolido" },
                    //{ "data": "tempusovolatilidadpulverulencialiquido" },
                    //{ "data": "tempebullicionvolatilidadpulverulencialiquido" },
                    //{ "data": "clasevolatilidadpulverulenciaLiquido" },
                    //{ "data": "seleccionvolatilidadpulverulenciasolvapsolido" },
                    //{ "data": "clasevolatilidadpulverulenciasolvapsolido" },
                    //{ "data": "seleccionvolatilidadpulverulenciasolvapliquido" },
                    //{ "data": "clasevolatilidadpulverulenciasolvapliquido" },
                    //{ "data": "clasevolatilidadvulverulencia" },
                    //{ "data": "puntuacionvolatilidadvulverulencia" },
                    //{ "data": "seleccionprocedimientotrabajo" },
                    //{ "data": "claseprocedimientotrabajo" },
                    //{ "data": "puntuacionprocedimientotrabajo" },
                    //{ "data": "seleccionproteccionescolectivas" },
                    //{ "data": "claseproteccionescolectivas" },
                    //{ "data": "puntuacionproteccionescolectivas" },
                    //{ "data": "seleccionvla" },
                    //{ "data": "puntuacionvla" },
                    //{ "data": "puntuacionriesgoporinhalacion" }
                    

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
           
     function filterGlobal() {
         $('#tabla_mis_operaciones').DataTable().search(
             $('#strBuscar').val()
         ).draw();
     }
    
});

