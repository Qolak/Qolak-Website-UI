$(document).ready(function(){
    //$('.sort-by-button').dropdown();
    $('select').material_select();

    $('#Container').mixItUp();
	$('#filters').on('change', function() { 
	   $('#Container').mixItUp('filter',this.value);
	   if(this.value=="all") {
	   	$('.hide-on-sort').css('display','block');
	   }else{
	   	$('.hide-on-sort').css('display','none');
	   }
	});
	$('#orders').on('change', function() { 
	   $('#Container').mixItUp('sort',this.value);
	});
});
