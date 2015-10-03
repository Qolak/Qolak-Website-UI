$(document).ready(function(){
    //$('.sort-by-button').dropdown();
    $('select').material_select();

    $('#Container').mixItUp();
	$('#filters').on('change', function() { 
	   $('#Container').mixItUp('filter',this.value);
	   if(this.value=="all") {
	   	$('.hide-on-sort').css('display','block');   	
	   	$.scrollTo($(".featured").scrollTop(), 800);
	   	
	   }else{
	   	$('.hide-on-sort').css('display','none');
	   	$.scrollTo(0, 800);
	   }
	});
	$('#orders').on('change', function() { 
	   $('#Container').mixItUp('sort',this.value);
	});
});
