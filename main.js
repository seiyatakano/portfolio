'use strict';

$(function() {
    console.log('attempt2');
    var $container = $('.portfolios');

        $.getJSON('./data/content.json', function (data) {
            var elements = [];

            $.each(data, function(i, item){
                var itemHTML = 
                `<div class="portfolio">
                    <img src="${item.images.thumb}">
                    <div class="description">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href=${item.images.url}>リンクに飛ぶ</a>
                    </div>
                </div>`;
                elements.push($(itemHTML).get(0));
            });

            $.each(data, function(i, item){
                $container.append(elements[i]);
            });
        });

    var $image = $('.portfolio img');
    
    $image.on('click', function() {
        console.log('click')
    });
});