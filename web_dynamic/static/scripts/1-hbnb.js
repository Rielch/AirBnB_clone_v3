$(document).ready(function () {
    let amenity = {};
    $('input[type=checkbox').each(function () {
	$('input[type=checkbox]').click(function () {
	    if ($(this).is(':checked')) {
		amenity[$(this).attr('data-id')] = $(this).attr('data-name');
	    }
	    else {
		delete amenity[$(this).attr('data-id')];
	    }
	    $('.amenities h4').text(Object.values(amenity).join(', '));
	});
    });
});
