
$(document).ready(function () {

    $("#botonusuarioaux").click(function () {
        var j_idUsuario = $("#usuarioaux").val();
        
        $("#botonusuarioaux").attr('href', 'PaginaMisOperaciones.aspx?idUsuario=' + j_idUsuario);
    });


})
