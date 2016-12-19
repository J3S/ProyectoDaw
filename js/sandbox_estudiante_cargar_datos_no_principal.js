$(document).ready(function() {
    var nivel = $("#nivel");
    $.getJSON("../../../../data/estudiantes_sandbox/perfil_min_no_principal.json", function(data) {
        var nombreData = data.nombre;
        var nivelData = data.nivel;
        var imagenData = data.imagen;
        $("#nombre-menu").text(nombreData);
        $("#nombre-popup-menu").text(nombreData);
        $("#nombre-perfil").text(nombreData);
        $("#imagen-menu").attr('src', imagenData);
        $("#imagen-popup-menu").attr('src', imagenData);
        $("#imagen-perfil").attr('src', imagenData);
        nivel.text(nivelData);
    });
});