



$("document").ready(function () {

    $('.works1').slick({
        //dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        //variableWidth: true
    });

    $()

    $('.works2').slick({
        //dots: true,
        adaptiveHeight: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        //variableWidth: true
    });

    $()

    

    $(".title").click(function() {
        $(".main").toggleClass("hide");
        $(".carousels").addClass("hide");
        $(".works1").addClass("hide");
        $(".works2").addClass("hide");
        $(".sounds").addClass("hide");
    });

    $(".gfx").click(function() {
        $(".main").toggleClass("hide");
        $(".carousels").toggleClass("hide");
        //$(".imglog").toggleClass("hide");
        $(".works1").toggleClass("hide");
    });


    

    $(".ill").click(function() {
        $(".main").toggleClass("hide");
        $(".works2").toggleClass("hide");
        $(".carousels").toggleClass("hide");
        //$(".imglog").toggleClass("hide");
    });

   

    $(".mus").click(function() {
        $(".main").toggleClass("hide");
        $(".sounds").toggleClass("hide");
    });

    $(".clr1").click(function() {
        $(".bckgrnd").removeClass("bckgrnd2");
        $(".bckgrnd").removeClass("bckgrnd3");
        $(".bckgrnd").addClass("bckgrnd1");
    });

    $(".clr2").click(function() {
        $(".bckgrnd").removeClass("bckgrnd1");
        $(".bckgrnd").removeClass("bckgrnd3");
        $(".bckgrnd").addClass("bckgrnd2");
    });

    $(".clr3").click(function() {
        $(".bckgrnd").removeClass("bckgrnd1");
        $(".bckgrnd").removeClass("bckgrnd2");
        $(".bckgrnd").addClass("bckgrnd3");
    });




  
});