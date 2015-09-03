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
	var counter = 0;
	$(".input-field input").each(function(index, el) {
		if( $(this).val() != "" )
		{
			counter++;
		}
	});

	if(counter==6)
	{
		$("#agreementModal").openModal();
	}
	else
	{
		Materialize.toast('<a class=btn-flat href=# onclick=removeElement(&#39;toast-container&#39;) >X</a><span>لطفا تمامی اطلاعات را به صورت کامل وارد کنید!</span>', 3000);
	}
}

function submitForm()
{
	$("form").submit();
}

function removeElement(id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
}