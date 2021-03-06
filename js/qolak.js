$(document).ready(function() {
	$(".button-collapse").sideNav({menuWidth: 300});
	$(".dropdown-button").dropdown();
	$("input.search-field").on('change', function() {
		$("input.search-field").val(this.value);
		$("input#search-field").val(this.value);
	});

	/*for (var i = 0; i < 3; i++)
    	$(".card-obj").clone().appendTo(".items-row");*/
 stickyHeaders.load($(".followMeBar"));
var options = [
    {selector: '.pie_progress', offset: 150, callback: '$(".pie_progress").asPieProgress("go");'}
  ];
  Materialize.scrollFire(options);
});

function startIntro()
{
	//Set introDiv object's position to the middle of the screen
	$('#introDiv').css({
		'position' : 'absolute',
		'left' : (window.innerWidth/2 - 150).toString() + 'px',
		'top' : (window.innerHeight/2 - 150).toString() + 'px'

	});

	$('.button-collapse').sideNav('hide');
	introJs().setOptions({
	'skipLabel' : 'خروج',
	'nextLabel' : 'بعدی',
	'prevLabel' : 'قبلی',
	'doneLabel' : 'پایان',
	'showBullets' : false,
	'exitOnEsc' : true,
	'keyboardNavigation' : true,
	'disableInteraction' : true
	}).oncomplete(function(){
		scrollTo(0,0);
	}).onafterchange(function(){
		$('.introjs-button').removeClass('introjs-button').addClass('btn').addClass('waves-effect').addClass('waves-light');
	}).start();

}

function qolakToast(message, duration)
{
	if(qolakToast.toastID == undefined)
	{
		qolakToast.toastID = 1;
	}
	else
	{
		qolakToast.toastID++;
	}

	var messageText = '<a id=toast' + qolakToast.toastID + ' class=btn-flat href=# onclick=removeToast(&#39;toast' + qolakToast.toastID + '&#39;) >X</a><span class=truncate>'+ message +'</span>';
	Materialize.toast(messageText, duration);
}

function checkForm()
{
	//Check if the user has filled the form completely
	var counter = 0;
	$(".input-field input").each(function(index, el) {
		if( $(this).val() != "" )
		{
			counter++;
		}
	});

	if(counter!=6)
	{
		qolakToast('لطفا تمامی اطلاعات را به صورت کامل وارد کنید!', 3000);
	}

	//Check if both passwords are the same
	else if($('#password').val() != $('#re-password').val())
	{
		qolakToast('رمزهای عبور شبیه به هم نیستند! لطفا دوباره وارد کنید.', 3000);
	}

	//Check if email has the correct syntax
	else if(!isEmail($('#email').val()))
	{
		qolakToast('ایمیل وارد شده صحیح نیست! لطفا دوباره وارد کنید.', 3000);
	}

	else
	{
		$("#agreementModal").openModal();
	}
}

function submitForm()
{
	$("form").submit();
}

function removeElement(id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}

function removeToast(id) {
    return (elem=document.getElementById(id)).parentNode.parentNode.removeChild(elem.parentNode);
}

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}

var stickyHeaders = (function() {

  var $window = $(window),
      $stickies;

  var load = function(stickies) {

    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

      $stickies = stickies.each(function() {

        var $thisSticky = $(this).wrap('<div class="followWrap" />');
  
        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight())
              .parent()
              .height($thisSticky.outerHeight()); 	  
      });

      $window.off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();		
      });
    }
  };

  var _whenScrolling = function() {

    $stickies.each(function(i) {			

      var $thisSticky = $(this),
          $stickyPosition = $thisSticky.data('originalPosition');

      if ($stickyPosition <= $window.scrollTop()) {        
        
        var $nextSticky = $stickies.eq(i + 1),
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

        $thisSticky.addClass("fixed");

        if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

          $thisSticky.addClass("absolute").css("top", $nextStickyPosition-40);
        }

      } else {
        
        var $prevSticky = $stickies.eq(i - 1);

        $thisSticky.removeClass("fixed");

        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();