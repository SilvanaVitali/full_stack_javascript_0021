$(document).ready(function () {
    $('#inputCod').on("keyup", function () {
        if ($(this).val() !== "JQUERY2222" && $(this).val() !== "") {
            $('#fondoCod').removeClass('bg-white');
            $('#fondoCod').addClass('bg-primary-subtle');
            $(this).addClass('text-primary-emphasis');
        } if ($(this).val() === "JQUERY2222") {
            $('#fondoCod').removeClass('bg-primary-subtle');
            $('#fondoCod').css('background-color', '#AAF1A8');
            $(this).addClass('text-success-emphasis');
        }
    })

    $('#btnCompra').on("click", function () {
        $('#fondoCod').removeClass('btn-danger')
        $(this).css({
            'background-color': 'Orange',
            'color': 'white'
        })
        $(this).text('¿Estás seguro?')
    })

    $('#btnCompra').on("dblclick", function () {
        $('#fondoCod').removeClass('btn-danger')
        $(this).css({
            'background-color': 'blue',
            'color': 'white'
        })
        $(this).text('¡OK!')

        $(this).on("mouseleave", function () {
            $('#fondoCod').removeClass('btn-danger')
            $(this).css({
                'background-color': '#E2E3E5',
                'color': 'green'
            })
            $(this).text('COMPRADO')
        })
    })
})