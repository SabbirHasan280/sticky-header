$(function(){
    
//sticky header//
    
    $(window).on('scroll',function (event) {
       var asad = $(window).scrollTop();
        if (asad < 245) {
            $(".navbar").removeClass("bg");
        }   else{
            $(".navbar").addClass("bg");
        }
    });
    
//    sticky header//
    
});