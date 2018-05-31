$(document).ready(function(){

    $(".mainpage").hide();

    $(".mainpage").fadeIn(3000)

    $(".scrollbtn").on("click", function() {

        $("html, body").animate({

            scrollTop: $(".navbar").offset().top}, 1000);

    });

    $('.parallax').parallax();

    

    $('.carousel').carousel();



});