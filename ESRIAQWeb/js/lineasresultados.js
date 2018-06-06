function dibujar_lineas_riesgo_potencial() {
    var canvas = document.getElementById('lineasfranja03');
    var lineasriesgo = canvas.getContext('2d');
    var Ancho_lineas = 2;
    var Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(100, 0);
    lineasriesgo.lineTo(100, 62);

    lineasriesgo.moveTo(355, 0);
    lineasriesgo.lineTo(355, 30);

    lineasriesgo.moveTo(590, 0);
    lineasriesgo.lineTo(590, 30);

    lineasriesgo.moveTo(480, 30);
    lineasriesgo.lineTo(480, 60);

    // Horizontal
    lineasriesgo.moveTo(355, 30);
    lineasriesgo.lineTo(590, 30);

    lineasriesgo.closePath();
    lineasriesgo.stroke();


    canvas = document.getElementById('lineasfranja04');
    lineasriesgo = canvas.getContext('2d');

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(100, 0);
    lineasriesgo.lineTo(100, 35);

    //horizontal 
    lineasriesgo.moveTo(100, 35);
    lineasriesgo.lineTo(345, 35);

    // Vertical
    lineasriesgo.moveTo(240, 35);
    lineasriesgo.lineTo(240, 74);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasfranja05');
    lineasriesgo = canvas.getContext('2d');

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;


    // Vertical
    lineasriesgo.moveTo(240, -15);
    lineasriesgo.lineTo(240, 25);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

}

function dibujar_lineas_resultados() {
    var canvas = document.getElementById('lineasrfranja03');
    var lineasriesgo = canvas.getContext('2d');
    var Ancho_lineas = 2;
    var Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 48);

    lineasriesgo.moveTo(203, 0);
    lineasriesgo.lineTo(203, 24);

    lineasriesgo.moveTo(332, 0);
    lineasriesgo.lineTo(332, 24);

    lineasriesgo.moveTo(259, 24);
    lineasriesgo.lineTo(259, 46);

    // Horizontal
    lineasriesgo.moveTo(203, 24);
    lineasriesgo.lineTo(332, 24);


    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasrfranja04');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 64);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

    canvas = document.getElementById('lineasrfranja05');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(74, 0);
    lineasriesgo.lineTo(74, 24);

    lineasriesgo.moveTo(139, 24);
    lineasriesgo.lineTo(139, 46);

    lineasriesgo.moveTo(259, 0);
    lineasriesgo.lineTo(259, 24);

    // Horizontal
    lineasriesgo.moveTo(74, 24);
    lineasriesgo.lineTo(259, 24);

    lineasriesgo.closePath();
    lineasriesgo.stroke();


    canvas = document.getElementById('lineasrfranja07');
    lineasriesgo = canvas.getContext('2d');
    Ancho_lineas = 2;
    Color_lineas = 'blue';

    lineasriesgo.beginPath();
    lineasriesgo.lineWidth = Ancho_lineas;
    lineasriesgo.strokeStyle = Color_lineas;

    // Vertical
    lineasriesgo.moveTo(139, 0);
    lineasriesgo.lineTo(139, 24);

    lineasriesgo.moveTo(268, 0);
    lineasriesgo.lineTo(268, 24);

    lineasriesgo.moveTo(397, 0);
    lineasriesgo.lineTo(397, 46);

    lineasriesgo.moveTo(544, 0);
    lineasriesgo.lineTo(544, 24);

    lineasriesgo.moveTo(681, 0);
    lineasriesgo.lineTo(681, 24);

    // Horizontal
    lineasriesgo.moveTo(139, 24);
    lineasriesgo.lineTo(681, 24);

    lineasriesgo.closePath();
    lineasriesgo.stroke();

}