/**
 * Created by vera on 31.05.16.
 */

// фунция для изменения стилей полей, прошедших валидизацию (addClass "valid" or "invalid")
// добавить текст "Проверте правильность заполнения поля" или
// иконку <span class="glyphicon glyphicon-ok" aria-hidden=true></span> с цветом #cdcdcd


$(document).ready(function(){
    var hash = window.location.hash;
    if (hash != ''){
        $('a[href='+hash+']').tab('show');
    }
    var tb = $(".trade-block");
    tb.children(".doc-link").popover({
        trigger: "manual",
        placement: "bottom",
        html: true,
        content: '<div class="text-center">' +
        '<p>1st place<br><span class="red-link">%%%</span></p>' +
        '<p>2nd place<br><span class="red-link">%%%</span></p>' +
        '<p>3rd place<br><span class="red-link">%%%</span></p></div>'
    });
    var background;
    tb.hover(
        function () {
            background = $(this).children(".medal").css("background");
            $(this).children(".medal").css("background", "None");
            $(this).children(".doc-link").popover('show');
        },
        function() {
            $(this).children(".medal").css("background", background);
            $(this).children(".doc-link").popover('hide')
        }
    );
});