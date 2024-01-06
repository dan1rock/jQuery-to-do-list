$(document).ready(function() {
    $('#addTask').click(function() {
        const task = $('#taskInput').val();
        if (task !== '') {
            $('#taskList').append('<li>' + task + '</li>');
            $('#taskInput').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });

    $(document).on('dblclick', 'li', function() {
        $(this).fadeOut('slow', function() {
            $(this).remove();
        });
    });
});