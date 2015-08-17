var onDocumentReady = function () {
  var input = document.getElementById('input');
  var output = document.getElementById('output');

  var autocomplete = new google.maps.places.Autocomplete(input);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    output.value = JSON.stringify(place, null, '  ');
  });
};

document.addEventListener('DOMContentLoaded', onDocumentReady);