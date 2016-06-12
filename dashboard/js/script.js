/**
 * Created by vera on 31.05.16.
 */

// фунция для изменения стилей полей, прошедших валидизацию (addClass "valid" or "invalid")
// добавить текст "Проверте правильность заполнения поля" или
// иконку <span class="glyphicon glyphicon-ok" aria-hidden=true></span> с цветом #cdcdcd


$(document).ready(function(){
    // работа bookmarks при переходе
    var hash = window.location.hash;
    if (hash != ''){
        $('a[href='+hash+']').tab('show');
    }
    // popover для лучших трейдеров
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

    // Переключение формы добавления клиента
    var progress_bar = $(".progress-bar");
    var steps_text = $(".steps").children("i");
    var client_form = $("#client_form");
    var max_step = client_form.children(".form-group").length;
    var step = 1;
    var max_value = 100;
    var value_step = max_value/max_step;
    var value = value_step;
    progress_bar.css("width", value+"%");
    $(".backward").css("visibility", "hidden");
    client_form.children(".form-group").css("display","none");
    client_form.children(".form-group").eq(step-1).css("display","block");
    $(".forward").click(function () {
        if (step < max_step){
            step += 1;
            value += value_step;
            if (step >= max_step){
                $(this).css("visibility", "hidden");
            }
            steps_text.text(step + " шаг");
            $(".backward").css("visibility", "visible");
            progress_bar.css("width", value+"%");
            client_form.children(".form-group").css("display","none");
            client_form.children(".form-group").eq(step-1).css("display", "block");
        }
    });
    $(".backward").click(function () {
        if (step > 1){
            step -= 1;
            value -= value_step;
            if (step <= 1){
                $(this).css("visibility", "hidden");
            }
            $(".forward").css("visibility", "visible");
            steps_text.text(step + " шаг");
            progress_bar.css("width", value+"%");
            client_form.children(".form-group").css("display","none");
            client_form.children(".form-group").eq(step-1).css("display", "block");
        }
    });
});