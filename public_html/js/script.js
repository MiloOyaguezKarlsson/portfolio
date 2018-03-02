
var $bild1Segment1;
var $segment1Shadow;
var $segment2Shadow;
var $segment3Shadow;
var $bild1Segment2;
var $bild1Segment3;
$(document).ready(function () {
    $bild1Segment1 = $("#bild1Segment1");
    $segment1Shadow = $("#segment1Shadow");
    $segment2Shadow = $("#segment2Shadow");
    $segment3Shadow = $("#segment3Shadow");
    $bild1Segment2 = $("#bild1Segment2");
    $bild1Segment3 = $("#bild1Segment3");
    
    startAnimation();
});

function startAnimation() {
    $bild1Segment1.animate({"left": "+=1000"}, 3000).animate({"left": "-=1000"}, 3000);
    $segment1Shadow.animate({"left": "+=1000"}, 3000).animate({"left": "-=1000"}, 3000);
    $bild1Segment2.animate({"left": "-=1000"}, 3000).animate({"left": "+=1000"}, 3000);
    $segment2Shadow.animate({"left": "-=1000"}, 3000).animate({"left": "+=1000"}, 3000);
    $bild1Segment3.animate({"width": "+=100", "height": "+=100"}, 3000).animate({"width": "-=100", "height": "-=100"}, 3000);
    $segment3Shadow.animate({"width": "+=99", "height": "+=99"}, 3000).animate({"width": "-=99", "height": "-=99"}, 3000);
    animationFinish();
}
function animationFinish(){
    $segment1Shadow.hide(100);
    $segment2Shadow.hide(100);
}


