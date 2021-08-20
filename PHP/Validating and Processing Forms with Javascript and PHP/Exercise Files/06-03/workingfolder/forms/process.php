<?php
if (($_SERVER['REQUEST_METHOD'] == 'POST') && (!empty($_POST['action']))):

	if (isset($_POST['myname'])) { $myname = $_POST['myname']; }
	if (isset($_POST['mypassword'])) { $mypassword = $_POST['mypassword']; }
	if (isset($_POST['mypasswordconf'])) { $mypasswordconf = $_POST['mypasswordconf']; }
	if (isset($_POST['mycomments'])) {
			$mycomments = filter_var($_POST['mycomments'], FILTER_SANITIZE_STRING ); 
	}
	if (isset($_POST['reference'])) { $reference = $_POST['reference']; }
	if (isset($_POST['favoritemusic'])) { $favoritemusic = $_POST['favoritemusic']; }
	if (isset($_POST['requesttype'])) { $requesttype = $_POST['requesttype']; }

	$formerrors = false;

	if ($myname === '') :
		$err_myname = '<div class="error">Sorry, your name is a required field</div>';
		$formerrors = true;
	endif; // input field empty

	if (strlen($mypassword) <= 6):
		$err_passlength = '<div class="error">Sorry, the password must be at least six characters</div>';
		$formerrors = true;
	endif; //password not long enough


	if ($mypassword !== $mypasswordconf) :
		$err_mypassconf = '<div class="error">Sorry, passwords must match</div>';
		$formerrors = true;
	endif; //passwords don't match


	if ( !(preg_match('/[A-Za-z]+, [A-Za-z]+/', $myname)) ) :
		$err_patternmatch = '<div class="error">Sorry, the name must be in the format: Last, First</div>';
		$formerrors = true;
	endif; // pattern doesn't match

  $formdata = array (
    'myname' => $myname,
    'mypassword' => $mypassword,
    'mypasswordconf' => $mypasswordconf,
    'mycomments' => $mycomments,
    'reference' => $reference,
    'favoritemusic' => $favoritemusic,
    'requesttype' => $requesttype
  );

	if (!($formerrors)) :
		$to				= 	"youremail@yourdomain.com";
		$subject	=		"From $myname -- Signup Page";
		$message	=		json_encode($formdata);

		$replyto	=		"From: fromprocessor@iviewsource.com \r\n".
									"Reply-To: donotreply@iviewsource.com \r\n";

		if (mail($to, $subject, $message)):
			$msg = "Thanks for filling out our form";
		else:
			$msg = "Problem sending the message";
		endif; // mail form data

	endif; // check for form errors

endif; //form submitted
?>
