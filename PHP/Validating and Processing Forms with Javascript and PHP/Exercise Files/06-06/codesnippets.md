Clean up empty fields
======================

if (isset($_POST['myname'])) { $myname = $_POST['myname']; }
  else { $myname = ''; }
if (isset($_POST['mypassword'])) { $mypassword = $_POST['mypassword']; }
  else { $mypassword = ''; }
if (isset($_POST['mypasswordconf'])) { $mypasswordconf = $_POST['mypasswordconf']; }
  else { $mypasswordconf = ''; }
if (isset($_POST['mycomments'])) {
    $mycomments = filter_var($_POST['mycomments'], FILTER_SANITIZE_STRING ); }
    else { $mycomments = ''; }
if (isset($_POST['reference'])) { $reference = $_POST['reference']; }
  else { $reference = ''; }
if (isset($_POST['favoritemusic'])) { $favoritemusic = $_POST['favoritemusic']; } 
  else { $favoritemusic = array(); }
if (isset($_POST['requesttype'])) { $requesttype = $_POST['requesttype']; }
  else { $requesttype = ''; }
if (isset($_POST['ajaxrequest'])) { $ajaxrequest = $_POST['ajaxrequest']; }
  else { $ajaxrequest = ''; }


Database Query
===============

$forminfoquery = "INSERT INTO form_info (
  forminfo_id,
  forminfo_ts,
  myname,
  mypassword,
  mycomments,
  reference,
  favoritemusic,
  requesttype
) 
VALUES (
  '',
  '".$datefordb."',
  '".$myname."',
  '".$salted."',
  '".$mycomments."',
  '".$reference."',
  '".implode(', ', $favoritemusic)."',
  '".$requesttype."'
)";


Check database Query
======================

if ($forminforesult = mysqli_query($forminfolink, $forminfoquery)):
  $msg = "Your form data has been processed. Thanks.";
  if ( $ajaxrequest ):
    echo "<script>$('#myform').before('<div id=\"formmessage\"><p>",$msg,"</p></div>'); $('#myform').hide();</script>";
  endif; // ajaxrequest
else:
  $msg = "Problem with database";
  if ( $ajaxrequest ):
    echo "<script>$('#myform').before('<div id=\"formmessage\"><p>",$msg,"</p></div>'); $('#myform').hide();</script>";
  endif; // ajaxrequest
endif; //write to database
