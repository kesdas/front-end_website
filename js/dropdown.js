/*global $ */


$(document).ready(function () {
    'use strict';
    $(".nav-toggle").on('click', function () {
        $("#dropList").slideToggle();
    });
});

$(document).ready(function () {
    'use strict';
    $(".read-more-trigger").on('click', function () {
        $(this).hide();
        var content = $(this).siblings('.readmore');
        content.css('display', 'block');
        
    });
});