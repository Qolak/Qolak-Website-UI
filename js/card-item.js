    jQuery(document).ready(function($){
      //for (var i = 0; i < 3; i++)
        //$(".card-obj").clone().appendTo(".items-row");
      
   $(".progKnob").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 90,
	        'height': 90,
	        'thickness': 0.3,
	        'tickColorizeValues': true,
					'bgColor' : '#b2d9ed',
					'fgColor' : '#29b6f6',
					'inputColor': '#29b6f6'
	    }); 

    $(".dayKnob").knob({
	        'min':0,
	        'max':100,
	        'readOnly': true,
	        'width': 50,
	        'height': 50,
	        'thickness': 0.2,
	        'tickColorizeValues': true,
					'bgColor' : '#b2d9ed',
					'fgColor' : 'rgb(1, 87, 155)',
					'inputColor': 'rgb(1, 87, 155)'
	    }); 

    });