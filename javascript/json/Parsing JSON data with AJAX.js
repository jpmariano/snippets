//data.json
{
  "full_name" : "Ray Villalobos",
	"title" : "Staff Author",
	"links" : [
			{ "blog"     : "http://iviewsource.com" },
			{ "facebook" : "http://facebook.com/iviewsource" },
			{ "podcast"  : "http://feeds.feedburner.com/authoredcontent" },
			{ "twitter"  : "http://twitter.com/planetoftheweb" },
			{ "youtube"  : "http://www.youtube.com/planetoftheweb" }
		]
}

//myscript.js
//browser check
var request;
if (window.XMLHttpRequest) {
  request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

//Check Request Status
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

      //brigning in data into objects;responseText 
			info = JSON.parse(request.responseText);
      
      //working with the json data
			var output='';
			for (var i = 0; i <= info.links.length-1; i++) {
				for (key in info.links[i]) {
					if (info.links[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<a href = "' + info.links[i][key] +
						'">' + key + '</a>';
						'</li>';
			    }   
				}
			}
			
			var update = document.getElementById('links');
			update.innerHTML = output;
			
			
	} //ready
} //event
request.send();

//index.html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
  <title>JavaScript And JSON</title>
</head>
<body>

<h2>Links</h2>
<ol id="links">
</ol>

<script src="myscript.js"></script>

</body>
</html>