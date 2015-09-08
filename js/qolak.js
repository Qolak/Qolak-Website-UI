$(document).ready(function() {
	$(".button-collapse").sideNav({menuWidth: 300});
	$(".dropdown-button").dropdown();
	$("input.search-field").on('change', function() {
		$("input.search-field").val(this.value);
		$("input#search-field").val(this.value);
	});

	for (var i = 0; i < 3; i++)
    	$(".card-obj").clone().appendTo(".items-row");
    

    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
    });

    $('.pie_day').asPieProgress({
        namespace: 'pie_day'
    });

var options = [
    {selector: '.pie_progress', offset: 150, callback: '$(".pie_progress").asPieProgress("go","60%");' },
  	{selector: '.pie_progress', offset: 150, callback: '$(".pie_day").asPieProgress("go","50%");' }
  ];
  Materialize.scrollFire(options);
});

function startIntro()
{
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