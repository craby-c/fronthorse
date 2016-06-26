$(document).ready(function(){
    var tr_white = 'rgba(255,255,255,0.9)';
    $('.navbar-toggle').on('click', first_click);
    function first_click (){
        $('.navbar-toggle').css('transform', 'rotate(90deg)');
        $('.navbar-header').css('background', tr_white);
        $('#bs-collapse').css('background', tr_white).collapse("show");
        $(this).off('click', first_click).on('click', second_click);
    }
    function second_click (){
        $('.navbar-toggle').css('transform', 'none');
        $('.navbar-header').css('background', 'transparent');
        $('#bs-collapse').css('background', 'transparent').collapse("hide");
        $(this).off('click', second_click).on('click', first_click);
    }
});
