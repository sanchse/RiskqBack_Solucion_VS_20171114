var operationId;
var urlbase;
var destinobase;



$(document).ready(function () {
      
    urlbase = document.getElementById("RQBack_URL").value;
    destinobase = urlbase + "/api/rq_operaciones/";

    $("#paso2").hide();

    if ((obtenerParamURL()["idOperacion"]) == null) {
    }
    else {
        operationId = obtenerParamURL()["idOperacion"];
        leer_operacion();
    }
    
    $("#BorraOperacion").click(function () {
       deleteOperation();
    });

})


function obtenerParamURL() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}

function leer_operacion() {

    operacion_bd = {};
    
    $.ajax({
        url: destinobase + operationId,
        type: "GET",
        contentType: "application/json",
        success: function (data) {
            //alert("Successfully Registered..");
            operacion_bd = data;
            j_nombre = operacion_bd.nombre;
            $("#nombre").val(j_nombre);
        },

        error: function (xhRequest, ErrorText, thrownError) {
            alert("Failed to process correctly, please try again");
        }
    });
}



function deleteOperation() {
    
    //if (!confirm("Se va a proceder a eliminar esta operacion. Debe confirmar la acción")) {
    //    return;
    //};

    jQuery.ajax({
        type: "DELETE",
        url: destinobase + operationId,
        contentType: "application/json",
        success: function (data, status, jqXHR) {
             $("#paso1").hide();
             $("#paso2").show();
        },

        error: function (jqXHR, status) {
            alert("Se produjo un error: " + status);
        }
    });
}