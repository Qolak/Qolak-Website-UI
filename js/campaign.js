$(document).ready(function(){

	$("#com").addClass('active');
    $(".side-awards").clone().appendTo(".tab-awards");
	$(".tab-awards .side-awards").removeClass('col l4 hide-on-med-and-down').addClass('hide-on-large-only')
 
    resize_bugfix();

    $(".share-social").click(function(){
        $('#Socail-modal').openModal();
    });

    $(".award-item.not-logged").click(function(){
        $('#pledge-modal').openModal();
        $('#pledge-modal .logged').css("display","none");
        $('#pledge-modal .not-logged').css("display","block");        
    });

    $(".award-item.logged").click(function(){
        $('#pledge-modal').openModal();
        $('#pledge-modal .not-logged').css("display","none");
        $('#pledge-modal .logged').css("display","block");
    });

    $('#pledge_amount').keypress(function(event) {
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
});

 });

function resize_bugfix() {
	// Cache reference to our container
    var $container = $("#container");
    var $lastStatus=0;

    $(window).resize(function()
	{   
	    if($("#award").css("display")!="block") {	
    		if($lastStatus==1) {
    			$("#qolak").click();
    			$lastStatus=0;
    		}
    	}else{
    		$lastStatus=1;
    	}
	});
}