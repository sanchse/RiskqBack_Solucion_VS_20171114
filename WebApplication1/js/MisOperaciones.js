// JavaScript source code
$(document).ready(function () {

    //$("#buttonprueba").click(function () {
    //    alert("entra en el boton");

    //    var respuestadesdecs;

    //    respuestadesdecs = fun();
                
    //    alert("despues de webmethods" + respuestadesdecs); 

    //    $("#salidadelwebmethod").val(respuestadesdecs);
        
    //    //$("#salidadelwebmethod").val("salida del webmethod desde javascript");

    //});

});

function fun() {
    PageMethods.leerOperacion(onSucceed, onError);
    return false;
}
function onSucceed(result) {
    alert(result);
}
function onError(result) {
}