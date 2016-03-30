/**
 * Created by vera on 17.03.16.
 */
//$(document).ready(
    $("#myCarousel").carousel();

    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });

    $(".right").click(function(){
       $("#myCarousel").carousel("next")
    });

    $('.collapse').collapse();

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [45.059536, 38.962692],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([45.059536, 38.962692], {
        hintContent: '"Хорс-инвест"',
        balloonContent: ''
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: '/new-horse/images/флажок.png',
        // Размеры метки.
        iconImageSize: [150, 110],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -110]
    });

    myMap.geoObjects.add(myPlacemark);
}