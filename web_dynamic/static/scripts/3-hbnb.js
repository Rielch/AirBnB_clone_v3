$(document).ready(function () {
    let amenity = {};
    $('input[type="checkbox"]').click(function () {
	if ($(this).is(':checked')) {
	    amenity[$(this).attr('data-id')] = $(this).attr('data-name');
	}
	else {
	    delete amenity[$(this).attr('data-id')];
	}
	$('.amenities h4').text(Object.values(amenity).join(', '));
    });
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
	if (data.status === 'OK') {
	    $('div#api_status').addClass('available');
	}
	else {
	    $('div#api_status').removeClass('available');
	}
    });
    $.put('http://0.0.0.0:5001/api/v1/places_search/', {}, function (data) {
	for (const place of data) {
	    $('section.places').append('<article>
  <div class="title_box">
    <h2>${place.name}</h2>
    <div class="price_by_night">${place.price_by_night}</div>
  </div>
  <div class="information">
    <div class="max_guest">{place.max_guest} Guest' if (place.max_guest != 1) { + 's'} + '</div>
    <div class="number_rooms">{place.number_rooms} Bedroom' if (place.number_rooms != 1) { + 's'} + '</div>
    <div class="number_bathrooms">{place.number_bathrooms} Bathroom' if (place.number_bathrooms != 1) { + 's'} + '</div>
  </div>
  <div class="description">
    {place.description}
  </div>
</article>');
	}
    });
});
