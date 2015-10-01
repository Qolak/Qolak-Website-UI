$(document).ready(function(){
    //$('.sort-by-button').dropdown();
    $('select').material_select();

    $('#Container').mixItUp();
	$('#filters').on('change', function() { 
		//alert(this.value);
	   $('#Container').mixItUp('filter',this.value);
	});
});
