$(document).ready(function () {
    var activeRow;
    var activeMenu;
    var wrap = $("#wrap");
    var sub = $("#sub");
    var carousel = $('#carousel-example-generic');
    wrap.on('mouseenter', function () {
        if (carousel.hasClass('none')) {
            sub.removeClass('none');
        }
    }).on('mouseleave', function(){
        sub.addClass('none');
        carousel.removeClass('none');
    }).on('mouseenter', 'li', function (e) {
        if (!activeRow) {
            sub.removeClass('none');
            activeRow = $(e.target);
            activeMenu = $('#' + activeRow.data('id'));
            activeMenu.removeClass('none');
            return;
        }

        sub.removeClass('none');
        activeRow.removeClass('active');
        activeMenu.addClass('none');
        activeRow = $(e.target);
        activeMenu = $('#' + activeRow.data('id'));
        activeMenu.removeClass('none');

    }).on('mouseleave', function(e){
        if (activeRow){
            activeRow.removeClass('active');
        }

        if (activeMenu) {
            activeMenu.addClass('none');
        }
        sub.addClass('none');
        carousel.removeClass('none');
    });

});