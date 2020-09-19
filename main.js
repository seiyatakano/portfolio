'use strict';

$(function() {
    console.log('attempt1');
    var $container = $('.container_portfolios');

        $.getJSON('./data/content.json', function (data) {
            var elements = [];

            $.each(data, function(i, item){
                var itemHTML = 
                `<div class="portfolio"><img src="${item.images.thumb}"></div>`;
                elements.push($(itemHTML).get(0));
            });

            $.each(data, function(i, item){
                $container.append(elements[i]);
            });
        });

    var $portfolio = $('.portfolio');
    
    $portfolio.on('click', function() {
        alert('seiyatakano');
    });
})