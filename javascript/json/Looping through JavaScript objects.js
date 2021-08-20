//Array
var info = {
  "full_name" : "Ray Villalobos",
  "title" : "Staff Author",
  "links" : {
      "Facebook" : "facebook.com",
      "Twitter" : "twitter.com"
  }
}; 

var output = "";

for (key in info.links) {
  if (info.links.hasOwnProperty(key)) {
    output += '<li>' +
    '<a href = "' + info.links[key] + 
    '">' + key + '</a>' + '</li>';
  }//if the links has the key property
}//for..go through each link

var update = document.getElementById('links');
update.innerHTML = output;
