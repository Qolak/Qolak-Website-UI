$(document).ready(function(){

	$("#com").addClass('active');
    $(".side-awards").clone().appendTo(".tab-awards");
	$(".tab-awards .side-awards").removeClass('col l4 hide-on-med-and-down').addClass('hide-on-large-only')
 
    resize_bugfix();

 });

function resize_bugfix() {
	// Cache reference to our container
    var $container = $("#container");
    var $lastStatus=0;
    // A function for updating max-height
    function updateMaxHeight () {
    	if($("#award").css("display")!="block") {	
    		if($lastStatus==1) {
    			$("#qolak").click();
    			$lastStatus=0;
    		}
    	}else{
    		$lastStatus=1;
    	}
    }
    // Call updateMaxHeight when browser resize event fires
    $(window).on("resize", updateMaxHeight);
}