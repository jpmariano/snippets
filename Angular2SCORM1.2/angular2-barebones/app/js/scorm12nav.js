$( document ).ready(function() {
    /*
       $( "#scorm-test" ).click(function() {
            alert( "Handler for .click() called." );
        }); */
        $( "#scorm-test" ).click(function() {
             alert($( "slide").children().prop("tagName"));
        });
       //doStart(); 
});