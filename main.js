'use strict';

$(function() {
    console.log('attempt3');
    var $container = $('.portfolios');

        $.getJSON('./data/content.json', function (data) {
            var elements = [];

            $.each(data, function(i, item){
                var itemHTML = 
                `<div class="portfolio">
                    <div>
                        <img src="${item.images.thumb}">
                    </div>
                    <div class="description">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <p><a href=${item.images.url}>リンクに飛ぶ</a></p>
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