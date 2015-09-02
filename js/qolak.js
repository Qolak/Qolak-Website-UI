$(document).ready(function() {
	$(".button-collapse").sideNav();
	$(".dropdown-button").dropdown();
	$("input#search").on('change', function() {
		$("input#sidebar-search").val(this.value);
	});
	$("input#sidebar-search").on('change', function() {
		$("input#search").val(this.value);
	});
});