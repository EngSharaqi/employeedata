
$(document).ready(function(){

    $(".ci").click(function(){
        $(".search-page").fadeOut(200);
        $('body').css("overflow-y", "scroll");
        $('.si, .fa-search').show();
        $('.ci').css('display', 'none')
    });

    console.log($(window).innerWidth() + 'px');
    $(".search-page").css("height", $(window).height());

    var searchicon = '<div class="search"><i class="fas fa-search"></i></div>';
    var closeicon = '<div class="search close"><i class="fas fa-times"></i></div>';
    $(".si").click(()=>{
        $('body').css("overflow-y", "hidden");
        $(".search-page").fadeIn(500);
        $(".search-page > input").focus();
        $('.ci').show();
        $('.fa-search').css('display', 'none')
    });

    
})
