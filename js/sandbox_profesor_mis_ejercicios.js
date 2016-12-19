$(document).ready(function() {
    var listaEjercicios = $("#lista-ejercicios");
    $.getJSON("../../../../data/profesores_sandbox/mis_ejercicios.json", function(data) {
        var estadisticas = data.ejerciciosDificultad;
        var lista = data.listaEjerciciosDisponibles;
        var i = 0;
        $.each(lista, function(key, value){
            var nivel = value.nivel;
            var listaNivel = value.lista;
            $.each(listaNivel, function(key, value){
                var tr = $('<tr></tr>');
                var td1 = $('<td>' + value.titulo + '</td>'); 
                var td2 = $('<td><span class="badge ' + estadisticas[i].color + '">' + nivel + '</span></td>'); 
                var td3 = $('<td><button type="button" class="btn btn-default editar-button" style="margin-right:5px;">Editar</button><button type="button" class="btn btn-danger eliminar-button">Eliminar</button></td>'); 
                tr.append(td1);
                tr.append(td2);
                tr.append(td3);
                listaEjercicios.append(tr);
            });
            i++;
        });
        $('#example').DataTable( {
            "language": {
                "lengthMenu": "Mostrar _MENU_ registros por página",
                "zeroRecords": "No se ha encontrado ningún dato",
                "info": "Mostrando página _PAGE_ de _PAGES_",
                "infoEmpty": "Registros no disponibles",
                "infoFiltered": "(filtrado de _MAX_ total records)",
                "sSearch": "Buscar:",
                "oPaginate": {
                  "sFirst": "Primero",
                  "sLast": "Último",
                  "sNext": "Siguiente",
                  "sPrevious": "Anterior",
                }
            },
            "columnDefs": [
                { "orderable": false, "targets"  : [2] }
            ]
        });
    });
});