$(document).ready(function() {
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$("input.search-field").on('change', function() {
		$("input.search-field").val(this.value);
		$("input#search-field").val(this.value);
	});

});

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
		Materialize.toast('<a class=btn-flat href=# onclick=removeElement(&#39;toast-container&#39;) >X</a><span>لطفا تمامی اطلاعات را به صورت کامل وارد کنید!</span>', 3000);
	}

	//Check if both passwords are the same
	else if($('#password').val() != $('#re-password').val())
	{
		Materialize.toast('<a class=btn-flat href=# onclick=removeElement(&#39;toast-container&#39;) >X</a><span>رمزهای عبور شبیه به هم نیستند! لطفا دوباره وارد کنید.</span>', 3000);
	}

	//Check if email has the correct syntax
	else if(!isEmail($('#email').val()))
	{
		Materialize.toast('<a class=btn-flat href=# onclick=removeElement(&#39;toast-container&#39;) >X</a><span>ایمیل وارد شده صحیح نیست! لطفا دوباره وارد کنید.</span>', 3000);
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

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}