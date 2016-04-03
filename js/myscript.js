/**
 * Created by vera on 17.03.16.
 */
$(document).ready(function(){
    var t = $(".clip-text").children("p").text();
    $(".clip-text").text(shorten(t, 20));
    $(".article-head").click(function(){
        $(".clip-text").css("height", "auto")
    });

    //переключалка карт
    $("#rostov").click(function(){
       $("#kr-address").fadeOut(function(){
           $("#rd-address").fadeIn();
       });
    });

    $("#krdr").click(function(){
        $("#rd-address").fadeOut(function(){
            $("#kr-address").fadeIn();
        });
    });

    //красная палочка и серый шрифт в faq
    var line = $("<div></div>").addClass("line");
    var title = $(".panel-group>.panel>.panel-heading>.panel-title");
    $(title).before(line);
    $(title).click(function(){
        $(this).prev().toggle();
        $(title).not(this).prev().css("display", "none");
        $(title).not(this).toggleClass("gray-text");
    })
});


$("#myCarousel").carousel();

$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});

$(".right").click(function(){
    $("#myCarousel").carousel("next");
});

$('.collapse').collapse();

ymaps.ready(init);

var Map1;
var Map2;
var Placemark1;
var Placemark2;



function shorten(text, maxLength) {

    function checkSpace(item) {
        return item != "";
    }

    var ret = text;
    var arr = ret.split(" ").filter(checkSpace);
    var over = arr.length-maxLength;
    if (arr.length > maxLength) {
        arr.splice(arr.length-over,over);
        arr.push("...");
        ret = arr.join(" ");
    }
    return ret;
}

function init(){
    Map1 = new ymaps.Map("map1", {
        center: [45.059536, 38.962692],
        zoom: 16
    });

    Map2 = new ymaps.Map("map2", {
        center: [47.233809, 39.715624],
        zoom: 16
    });

    Placemark1 = new ymaps.Placemark([45.059536, 38.962692], {
            hintContent: 'г.Краснодар, ул.Монтажников 1/4, оф.1103 (11 этаж)',
            balloonContent: 'г.Краснодар, ул.Монтажников 1/4, оф.1103 (11 этаж), 8 (800) 234-81-88, 8 (861) 279-40-38'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/флажок.png',
            // Размеры метки.
            iconImageSize: [150, 110],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -110]
        });
    Placemark2 = new ymaps.Placemark([47.233809, 39.715624],{
            hintContent: 'г.Ростов на Дону, ул.Варфоломеева 259-261, оф.409',
            balloonContent: 'г.Ростов на Дону, ул.Варфоломеева 259-261, оф.409, тел: 8 (863) 218-87-84'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/флажок.png',
            // Размеры метки.
            iconImageSize: [150, 110],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-30, -110]
        });

    Map1.geoObjects.add(Placemark1);
    Map2.geoObjects.add(Placemark2);
}
