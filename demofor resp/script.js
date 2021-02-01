$("document").ready(function() {

const mq = window.matchMedia('(max-width: 768px)');

if(mq.matches) {
    $("h1").click(function() {
        $("nav").slideDown();
    });
}


});