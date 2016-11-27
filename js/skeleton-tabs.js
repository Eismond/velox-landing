
$(function() {
    $('ul.tab-nav li a.portfolio').click(function() {
        var href = $(this).attr('href');

        $('li a.active.portfolio', $(this).parent().parent()).removeClass('active');
        $(this).addClass('active');

        $('.tab-pane.active', $(href).parent()).removeClass('active');
        $(href).addClass('active');

        return false;
    });
});
