$(document).ready(function () {
    let amenity = {};
    $('input[type = "checkbox"]').change(function () {
	if $(this).is(':checked') {
	    amenity[$(this).attr('data-id')] = $(this).attr('data-name');
	}
	else {
	    delete amenity[$(this).attr('data-id')]
	}
	$('.amenities h4').text(Object.values(amenity).join(', '))
    });
    $.get("http://0.0.0.0:5001/api/v1/status/", function (data, status) {
	if status is "OK" {
	    $("div#api_status").addClass("available");
	}
	else {
	    $("div#api_status").removeClass("available");
    });
});
