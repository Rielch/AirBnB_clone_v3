$(document).ready(function () {
    let amenity = [];
    $("input").change(function () {
	if $(this).checked {
	    amenity.append($(this).id);
	}
	else {
	    amenity.remove($(this).id);
	}
	$(".amenities h4").text(amenity.join(", "))
    });
});
