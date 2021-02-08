
// $(window).load(function() {
//     $(".works1").slick();
//     $(".works1").hide();
// });

//code funtionctions when above is removed



$("document").ready(function () {

    $('.works1').slick({
        infinite: true
    });

    $()

    //i combined all your separate functions into one event listener for each link—you can do multiple things with one click!

    $(".gfx").click(function() {
        $(".main").toggleClass("hide");
        $(".carousels").toggleClass("hide");
        //because "works1" (and "works2" below) are contained inside your "carousels" section, you don't have to hide and show your works1 and works2 separately. They'll hide and show whenever you toggle its parent container.
        // $(".works1").toggleClass("hide");
    });


    // $(".gfx").click(function() {
    //     $(".carousels").toggleClass("hide");
    // });

    // $(".gfx").click(function() {
    //     $(".works1").toggleClass("hide");
    // });

    //gfx

    $(".ill").click(function() {
        $(".main").toggleClass("hide");
        // $(".works2").toggleClass("hide");
        $(".carousels").toggleClass("hide");
    });

    // $(".ill").click(function() {
    //     $(".works2").toggleClass("hide");
    // });

    // $(".ill").click(function() {
    //     $(".carousels").toggleClass("hide");
    // });
    
    //ill

    $(".mus").click(function() {
        $(".main").toggleClass("hide");
        $(".sounds").toggleClass("hide");
    });

    // $(".mus").click(function() {
    //     $(".sounds").toggleClass("hide");
    // });

    //mus

  
});