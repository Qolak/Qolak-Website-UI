$(document).ready(function() {
    $('.move-step').on('click', function(e)  {
        var targetTab = $(this).attr('href');
        // Show/Hide Tabs
        $('.steps ' + targetTab).show().siblings().hide();
 
        // Change/remove current tab to active
        $(".progress-nav " + targetTab +'-li').removeClass('done').prev().addClass('done').next().next().removeClass('done');
        e.preventDefault();
    });
    $('.checkout-btn').click(function(){
    	$('#checkout-li').addClass('done');
    });

});