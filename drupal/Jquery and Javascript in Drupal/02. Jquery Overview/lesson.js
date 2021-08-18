//Jquery Syntax
//http://www.w3schools.com/jquery/

$(selector).action()

//For Example:
 $( document ).ready(function() {
        console.log( "document loaded" );
 });


$(selector).events()

//For Example:
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


//$(selector).effects()


//For Example:
$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});



//Jquery DOM Manipulation

//For Example:
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});



//Jquery Chaining

//For Example:
$(document).ready(function()
  {
  $("button").click(function(){
    $("#p1").css("color","red").slideUp(2000).slideDown(2000);
  });
});


//Jquery Traversing

//For Example:
$(document).ready(function()
  {
  $("button").click(function(){
    $("#p1").css("color","red").slideUp(2000).slideDown(2000);
  });
});

//Jquery Get/Post

//For Example Get:
$(document).ready(function(){
  $("button").click(function(){
    $.get("demo_test.asp",function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});

//For Example Get:
$(document).ready(function(){
  $("button").click(function(){
    $.post("demo_test_post.asp",
    {
      name:"Donald Duck",
      city:"Duckburg"
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});

//Jquery Noconflict()

//For Example:
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery is still working!");
  });
});



