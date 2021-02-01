$("document").ready(function() {

const mq = window.matchMedia('(max-width: 768px)');

if(mq.matches) {
    $(".active").click(function() {
        $(".hidden").slideDown();
    });
}


});