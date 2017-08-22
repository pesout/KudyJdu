/*
************************
Created by Stepan Pesout
*****www.pesout.eu******
*****@stepanpesout******
************************
*/

function carka()
{
  if (document.formular.vstup1.value.charAt(document.formular.vstup1.value.length-1) == ",")
  {
    document.formular.vstup1.value = document.formular.vstup1.value.slice(0, document.formular.vstup1.value.length-1);
  }
}

document.write('<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>');

function getLocations(locations)
{
  var elevator = new google.maps.ElevationService();
    var positionalRequest = {
      'locations': locations
    }

    elevator.getElevationForLocations(positionalRequest, function(results, status) {
      if (status == google.maps.ElevationStatus.OK) {
        if (results[0]) {
          for (var i=0; i< results.length; i++) {
            document.formular.vstup1.value =
              document.formular.vstup1.value + Math.round(results[i].elevation.toFixed(1)*1) + ",";
          }
        }
      }
    });
  }

function vyska(a, b)
{
    var locations = [
      new google.maps.LatLng(
        Number(a),
        Number(b)
      )
    ];
    getLocations(locations);
}

function sourad()
{
  a = document.formular.vstup1.value.split(/\r\n|\r|\n/g);

  document.formular.vstup1.value = "";

  for (j = 0; j < a.length; j++)
  {
    x = a[j].split(", ")

    if (x[0] != 0 && x[1] != 0)
    {
      vyska(x[0], x[1]);
    }

  }

  document.getElementById("del").style.display = "none";

}
