$(document).ready(llenarAyudantes());

function llenarAyudantes() {
    var ayudantesD = $("#ayudantes-deberes");
    var ayudantesC = $("#ayudantes-clases");
    var profesores = $("#profesores");
    var coordinador = $("#coordinador");
     $.getJSON("../../data/personal/ayudantes.json", function(data) {
        var i = 0;
        agregarContenedor(data.ayudantesClases, 'header-ayudante-clase', ayudantesC, i);
        agregarContenedor(data.ayudantesDeberes, 'header-ayudante-deber', ayudantesD, i);
     });
     $.getJSON("../../data/personal/profesores.json", function(data) {
        var i = 0;
        agregarContenedor2(data.coordinador, 'header-coordinador', coordinador, i);
        agregarContenedor2(data.profesores, 'header-profesor', profesores, i);
     });
}

function agregarContenedor(datos, strId, elemento_agregar, index) {
    $.each(datos, function(key, value) {
            var contenedor = $('<div class="col-sm-3 contenedor-card"></div>');
            var card = $('<div class="card"></div>');
            var canvas = $('<canvas class="header-bg" width="250" height="70" id="' + strId + index + '"></canvas>');
            var avatar = $('<div class="avatar"></div>');
            var img = $('<img src="' + value.rutaImagen + '" alt="" />');
            var content = $('<div class="content"></div>');
            var nombre = $('<label>' + value.nombre + '</label><br>');
            var correo = $('<label>' + value.correo + '</label>');
            content.append(nombre);
            content.append(correo);
            avatar.append(img);
            card.append(canvas);
            card.append(avatar);
            card.append(content);
            contenedor.append(card);
            index++;
            elemento_agregar.append(contenedor);
    });
}

function agregarContenedor2(datos, strId, elemento_agregar, index) {
    $.each(datos, function(key, value) {
            var contenedor = $('<div class="col-sm-4 contenedor-card"></div>');
            var card = $('<div class="card"></div>');
            var canvas = $('<canvas class="header-bg" width="250" height="70" id="' + strId + index + '"></canvas>');
            var avatar = $('<div class="avatar"></div>');
            var img = $('<img src="' + value.rutaImagen + '" alt="" />');
            var content = $('<div class="content"></div>');
            var nombre = $('<label>' + value.nombre + '</label><br>');
            var correo = $('<label>' + value.correo + '</label><br>');
            var oficina = $('<label>Oficina: ' + value.oficina + '</label><br>');
            var horario = $('<label>Horario: ' + value.horario + '</label>');
            content.append(nombre);
            content.append(correo);
            content.append(oficina);
            content.append(horario);
            avatar.append(img);
            card.append(canvas);
            card.append(avatar);
            card.append(content);
            contenedor.append(card);
            index++;
            elemento_agregar.append(contenedor);
    });
}