var containerEl = document.querySelector('.media_container');
var mixer = mixitup(containerEl);
$(".s_videos li").click(function() {
    $(".s_videos li").removeClass("active");
    $(this).addClass("active");
});
$(document).ready(function() {

    $(".top_text h1").animated("flipInX", "flipOutX");
    $(".top_text p, h2").animated("fadeInUp", "fadeOutDown");
    $(".animate_left").animated("fadeInLeft", "fadeOut");
    $(".animate_right").animated("fadeInRight", "fadeOut");
    $(".animate_fadeIn, .left_border").animated("fadeIn", "fadeOut");

    function heightDetect() {   //Change background img size under window size
        $(".main_head").css("height", $(window).height());
    }
    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });
    
    $('.popup_link').magnificPopup({
        type: 'image'
    });
    $("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

    $(".top_mnu a").mPageScroll2id();

});

$(window).load(function() { //Preloader smooth animation
	$(".loader_inner").fadeOut(); 
    $(".loader").delay(400).fadeOut("slow"); 
});

$(".menu_toggle").on('click', function() {//Close and open menu onclick button
    $(this).toggleClass("on");
    $(".hidden").toggleClass('hidden');
    $(this).css("background-color", "none");
    if ($(".top_mnu").is(":hidden")){
        $(".top_mnu").fadeIn(600);
    } else {
        $(".top_mnu").fadeOut(600);
    };
});

$(".a_mnu").on('click', function () {//Close menu if you tap any menu ul
    $(".top_mnu").fadeOut(600);
    $(".menu_toggle").removeClass("on");
    $(".hidden").toggleClass('hidden');
});