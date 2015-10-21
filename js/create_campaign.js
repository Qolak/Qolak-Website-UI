$(document).ready(function() {

    //Highlight the current tab
    var currentTab = $('.progress-nav').children(':first-child').addClass('done');

    $('.move-step').on('click', function(e)  {
        var targetTab = $(this).attr('href');
        // Show/Hide Tabs
        $('.steps ' + targetTab).show().siblings().hide();
 
        // Change/remove current tab to active
        $(".progress-nav " + targetTab +'-li').addClass('done').prev().addClass('done').next().next().removeClass('done');
        e.preventDefault();
        $.scrollTo($(targetTab).offset().top-160, 800);
    });
    $('.checkout-btn').click(function(){
    	$('#checkout-li').addClass('done');
    });

});