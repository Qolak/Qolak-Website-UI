$(document).ready(function() {
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$("input.search-field").on('change', function() {
		$("input.search-field").val(this.value);
		$("input#search-field").val(this.value);
	});
	
});