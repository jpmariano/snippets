New Variables
---------------

  $mycomments = $_POST['mycomments'];
  $reference = $_POST['reference'];
  $favoritemusic = $_POST['favoritemusic'];
  $requesttype = $_POST['requesttype'];



Do variables exist?
---------------

if (isset($_POST['myname'])) { $myname = $_POST['myname']; }
if (isset($_POST['mypassword'])) { $mypassword = $_POST['mypassword']; }
if (isset($_POST['mypasswordconf'])) { $mypasswordconf = $_POST['mypasswordconf']; }
if (isset($_POST['mycomments'])) { $mycomments = $_POST['mycomments']; }
if (isset($_POST['reference'])) { $reference = $_POST['reference']; }
if (isset($_POST['favoritemusic'])) { $favoritemusic = $_POST['favoritemusic']; }
if (isset($_POST['requesttype'])) { $requesttype = $_POST['requesttype']; }


Mirroring Regular Inputs
------------------------

  value="<?php if (isset($myname)) { echo $myname; } ?>" 
  value="<?php if (isset($mypassword)) { echo $mypassword; } ?>" 
  value="<?php if (isset($mypasswordconf)) { echo $mypasswordconf; } ?>" 


Mirroring Checkboxes
------------------------

  <?php if ((isset($favoritemusic)) && (in_array("rock", $favoritemusic))) { echo "checked"; } ?> 
  <?php if ((isset($favoritemusic)) && (in_array("classical", $favoritemusic))) { echo "checked"; } ?>
  <?php if ((isset($favoritemusic)) && (in_array("reggaeton", $favoritemusic))) { echo "checked"; } ?>


Mirroring Option Selections
----------------------------

  <?php if ((isset($reference)) && ($reference === 'friend')) { echo "selected"; } ?> 
  <?php if ((isset($reference)) && ($reference === 'facebook')) { echo "selected"; } ?>
  <?php if ((isset($reference)) && ($reference === 'twitter')) { echo "selected"; } ?>


Mirroring Radio Input
----------------------------

  <?php if ((isset($requesttype)) && ($requesttype === 'question')) { echo "checked"; } ?>
  <?php if ((isset($requesttype)) && ($requesttype === 'comment')) { echo "checked"; } ?>
  <?php if ((isset($requesttype)) && ($requesttype === 'suggestion')) { echo "checked"; } ?>


Mirroring Textarea
----------------------------

  <?php if (isset($mycomments)) { echo $mycomments; } ?>
