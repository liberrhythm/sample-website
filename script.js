$(document).ready(function () {
    $("#nav-about-me").on('click', function(event) {
        $('#about-me-container').css('display', 'block');
        $('#coursework-container').css('display', 'none');
        $('#fun-facts-container').css('display', 'none');
        $('#contact-me-container').css('display', 'none');
        event.preventDefault();
    });

    $("#nav-coursework").on('click', function(event) {
        $('#about-me-container').css('display', 'none');
        $('#coursework-container').css('display', 'block');
        $('#fun-facts-container').css('display', 'none');
        $('#contact-me-container').css('display', 'none');
        event.preventDefault();
    });

    $("#nav-fun-facts").on('click', function(event) {
        $('#about-me-container').css('display', 'none');
        $('#coursework-container').css('display', 'none');
        $('#fun-facts-container').css('display', 'block');
        $('#contact-me-container').css('display', 'none');
        event.preventDefault();
    });

    $("#nav-contact-me").on('click', function(event) {
        $('#about-me-container').css('display', 'none');
        $('#coursework-container').css('display', 'none');
        $('#fun-facts-container').css('display', 'none');
        $('#contact-me-container').css('display', 'block');
        event.preventDefault();
    });

    $("#contact-me-form").submit(function(event) {
        var dt = new Date().toISOString();
        var datetimeString = dt.substring(0, 10) + " " + dt.substring(11, 19);
        var formResults = $('form').serializeArray();
        console.log(formResults);
        $('#visitors-log').append('<p>' + formResults[0].value
            + ' (' + formResults[2].value + ') visited at ' + datetimeString + '</p>');

        event.preventDefault();
    });
});