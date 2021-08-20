//Array
var info = {
  "full_name" : "Ray Villalobos",
  "title" : "Staff Author",
  "links" : {
      "Facebook" : "facebook.com",
      "Twitter" : "twitter.com"
  }
}; 

var output = '';

for (var i = 0; i <= info.links.length; 1++) {
  for (key in info.links[i]) {
    if (info.links[i].hasOwnProperty(key)){
      output += '<li>' +
        '<a href = "' + info.links[i][key] + 
        '">' + key '</a>' + '</li>';
      }// hasOwnProperty Check
    } // for each object
} //for each array element


var update = document.getElementById('links');
update.innerHTML = output;