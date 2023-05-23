$(document).ready(function () {

    $('#estaTienda').on('click', function () {
        if ($('#inputEsta').val() !== "") {
            $('#esta').removeClass('border border-danger border-3')
            $('#esta').css({ 'border': '0.2rem solid #318E34', 'background-color': '#90EF8F' })
            $('#spanEsta').removeClass('text-danger');
            $('#inputEsta').removeClass('text-white');
            $(this).removeClass('text-danger');
            $('#spanEsta').css('color', '#318E34');
            $('#inputEsta').css('color', '#318E34');
            $(this).css('color', '#318E34');
        }
    })

    $('#otraTienda').on('click', function () {
        if ($('#inputOtra').val() !== "") {
            $('#otra').removeClass('border border-danger border-3')
            $('#otra').css({ 'border': '0.2rem solid #DE9B13', 'background-color': '#F1FF1D' })
            $('#spanOtra').removeClass('text-danger');
            $('#inputOtra').removeClass('text-white');
            $(this).removeClass('text-danger');
            $('#spanOtra').css('color', '#DE9B13');
            $('#inputOtra').css('color', '#DE9B13');
            $(this).css('color', '#DE9B13');
        }
    })

    $('#soloOnline').on('click', function () {
        if ($('#inputOnline').val() !== "") {
            $('#online').removeClass('border border-danger border-3')
            $('#online').css({ 'border': '0.2rem solid #202799', 'background-color': '#ADD8E6' })
            $('#spanOnline').removeClass('text-danger');
            $('#inputOnline').removeClass('text-white');
            $(this).removeClass('text-danger');
            $('#spanOnline').css('color', '#202799');
            $('#inputOnline').css('color', '#202799');
            $(this).css('color', '#202799');
        }
    })
})