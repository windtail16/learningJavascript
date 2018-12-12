$(document).ready(function(){
    'use strict'

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // TODO
    var c;
    /*
    초기값 25
    제한 조건 400 미만
    증가분 50
    x와 y 각 한번의 루프 실행
    */
    for(var x=25; x<400; x+=50) {
        for(var y=25; y<400; y+=50) {
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }

    paper.view.draw();
    //console.log('main.js is loaded');
})