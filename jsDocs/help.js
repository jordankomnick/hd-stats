$(document).ready(function() {
    $('#helpText h3').click(function() {

        $(this).next('.helpAnswer').slideToggle(500);
        $(this).toggleClass('close');

    });
}); // end ready


/*Single Page FAQ With Toggling Answers Using jQuery*/
/*http://callmenick.com/2013/04/08/single-page-faq/*/