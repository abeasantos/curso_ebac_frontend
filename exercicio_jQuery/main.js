$(document).ready(function() {
    $('#form-lista').on('submit', function(e) {
        e.preventDefault();

        const itemNovo = $('#novo-item').val().trim();

        if (itemNovo !== '') {
            const itemLista = $('<li></li>');
            const conteudo = $(`<div class="check-list">${itemNovo}</div>`);
            const botaoRemover = $('<span class="remover">🗑️</span>');

            itemLista.append(conteudo, botaoRemover);
            $('#lista-tarefas').append(itemLista);
            $('#novo-item').val('');
        }
    });

    $('#lista-tarefas').on('click', '.check-list', function() {
        $(this).parent().toggleClass('riscar');
    });

    $('#lista-tarefas').on('click', '.remover', function() {
        $(this).parent().fadeOut(300, function() {
            $(this).remove();
        });
    });

    $('#botao-apagar').on('click', function() {
        $('#novo-item').val('');
    });
});
