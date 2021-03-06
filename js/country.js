$(function () {
  var urlParams = new URLSearchParams(window.location.search);
  console.log(urlParams.get("country"));
  var country = urlParams.get("country");
  $("#country").html(country);

  var url = "https://pomber.github.io/covid19/timeseries.json";
  $.getJSON(url, function (result) {
    var selectedCountry = result[country];
    var total = selectedCountry.length;
    for (var i = total - 1; i >= 0; i--) {
      var row = `<tr>
        <th scope="row">${selectedCountry[i].date}</th>
        <td>${selectedCountry[i].confirmed}</td>
        <td>${selectedCountry[i].deaths}</td>
        <td>${selectedCountry[i].recovered}</td>
                </tr>`;

      $("#data").append(row);
    }
    var confirmed = selectedCountry[total - 1].confirmed + " People";
    var deaths = selectedCountry[total - 1].deaths + " People";
    var recovered = selectedCountry[total - 1].recovered + " People";

    $("#confirmed").append(confirmed);
    $("#deaths").append(deaths);
    $("#recovered").append(recovered);
  });
});
