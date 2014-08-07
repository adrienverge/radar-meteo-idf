var imageList = [];

function updateImageList() {
  var now = new Date();

  // Round to previous quarter
  now.setUTCMinutes(15 * parseInt(now.getUTCMinutes() / 15));

  var date = now;

  // Set to 2 hours ago
  date.setUTCMinutes(date.getUTCMinutes() - 9 * 15);

  imageList = [];
  for (i = 0; i < 9; i++) {
    date.setUTCMinutes(date.getUTCMinutes() + 15);
    var url = date.getUTCFullYear() +
              ('0' + (date.getUTCMonth() + 1)).slice(-2) +
              ('0' + date.getUTCDate()).slice(-2) + '_' +
              ('0' + date.getUTCHours()).slice(-2) +
              ('0' + date.getUTCMinutes()).slice(-2);
    url = 'http://images.lachainemeteo.com/images/publicator_2009/' +
          'animatheque/publie/P4431403_60/P4431403_60_' + url + '_g.jpg';
    var str = ('0' + date.getHours()).slice(-2) + ':' +
              ('0' + date.getMinutes()).slice(-2);
    imageList.push([str, url]);
  }

  /*
  var page = 'http://animations.lachainemeteo.com/animations-meteo/images-radars/le-radar-des-precipitations-sur-l-ile-de-france-46.php';

  $.get(page, function(data) {
    console.log(data);
    //data is whatever the server returns from the request, do whatever is needed with it to show who is live.

    var number = data.search('P4431403_60_');
    if (number > -1)            
        document.write("Live");
    else 
        document.write("Offline");
  });
  */
}

var a = 0;

function refresh_map() {
  $('#carte').attr('src', imageList[a][1]);
  $('#horloge').html(imageList[a][0]);

  a++;
  if (a == imageList.length)
    a = 0;
}

$(document).ready(function() {
  console.log("ready!");
  updateImageList();
  refresh_map();
  var interval = setInterval(refresh_map, 1000);
});
