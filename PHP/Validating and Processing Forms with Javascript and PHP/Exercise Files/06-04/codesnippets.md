Send scripts back to the form page
====================================

if ( $ajaxrequest ) { echo "<script>$('#mypassword').after('<div class=\"error\">Sorry, the password must be at least six characters</div>');</script>"; }
if ( $ajaxrequest ) { echo "<script>$('#mypasswordconf').after('<div class=\"error\">Sorry, passwords must match</div>');</script>"; }
if ( $ajaxrequest ) { echo "<script>$('#myform').before('<div id=\"formmessage\"><p>Thanks for filling out our form. An email has been sent with your request</p></div>'); $('#myform').hide();</script>"; }
