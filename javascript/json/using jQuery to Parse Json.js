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

<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="myscript.js"></script>

</body>
</html>
//myscripts.js
$(document).ready(function() {

  $.getJSON('data.json', function(info){

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

	}); //getJSON

}); // ready
