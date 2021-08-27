$(function(){
    $(document).on('menuopen',function(){
        $('nav .menu').toggleClass('open');
        $('#menu_btn').toggleClass('open');
        $('#menu_bk').toggleClass('open');
    });
    $('.menu_btn').on('click', function() {
        $(document).trigger('menuopen');
    });
    $('#menu_bk').on('click',function(){
        $(document).trigger('menuopen');
    });
    $('.menu_item a').on('click',function(){
        $(document).trigger('menuopen');
    });
});