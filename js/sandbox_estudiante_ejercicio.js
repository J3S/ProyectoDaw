$(document).ready(function() {
    var infoEjercicio = $("#info-ejercicio");
    var problema = $("#problema");
    var descripcionDiv = $("#descripcion");
    var etiquetasDiv = $("#etiquetas");
    $.getJSON("../../../../data/estudiantes_sandbox/ejercicio.json", function(data) {
        var titulo = data.titulo;
        var descripcion = data.descripcion;
        var autor = data.autor;
        var porcentaje = data.porcentajeEstudiantes;
        var dificultad = data.dificultad;
        var problema = data.problema;
        var resultadoCorrecto = data.resultadoCorrecto;
        $("#info-ejercicio h3").text(titulo);
        descripcionDiv.append($('<label>Descripción</label>'));
       descripcionDiv.append($('<p>' + descripcion + '</p>'));
        descripcionDiv.append($('<label>Autor</label>'));
        descripcionDiv.append($('<p>' + autor + '</p>'));
        etiquetasDiv.append($('<label>Etiquetas</label>'));
        var rowEtiquetas = $('<div class="row"></div>');
        var i = 0;
        var j = 0;
        var col6 = false;
        $.each(data.etiquetas, function(key, value) {
            if (i === 3 || j === 2) {
                col6 = !col6;
                i = 1;
                j = 0;
            } else {
                i++;
            }
            if (col6) {
                j++;
                var etiquetasContainer = $('<div class="col-xs-6 text-center"></div>');
            } else {
                var etiquetasContainer = $('<div class="col-xs-4 text-center"></div>');
            }
            var span = $('<span class="badge bg-red">' + value.nombre + '</span>');
            etiquetasContainer.append(span);
            rowEtiquetas.append(etiquetasContainer);
        });
        etiquetasDiv.append(rowEtiquetas);
        etiquetasDiv.append($('<br>'));
        etiquetasDiv.append($('<label>Resuelto por el ' + porcentaje + '% de los estudiantes</label>'));
        etiquetasDiv.append($('<div class="progress progress-xs progress-striped active"><div class="progress-bar progress-bar-success" style="width: ' + porcentaje + '%"></div></div>'));
        etiquetasDiv.append($('<label>Dificultad</label>'));
        etiquetasDiv.append($('<br>'));
        etiquetasDiv.append($('<span class="badge bg-maroon">' + dificultad + '</span>'));
    });
});