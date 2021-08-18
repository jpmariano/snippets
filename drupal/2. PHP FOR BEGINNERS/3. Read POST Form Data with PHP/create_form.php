<!-- Get is for reading; Post - Submitting data; -->
<!-- $_POST is a superglobal variable http://php.net/manual/en/language.variables.superglobals.php --> 



<!-- When using var_dump you can see that the name in input will become the variable names in php
	<?php var_dump($_POST); ?> To see what form is posted	
	<?php 
		$name = $_POST['name'];
		$breed = $_POST['breed'];
		$weight = $_POST['weight'];
		$bio = $_POST['bio'];
		var_dump($name,$breed, $weight, $bio); 
	?>
	<?php
	if (array_key_exists('name', $_POST)){
		$name = $_POST['name'];
	} else {
		$name = '';
	}
	
	if (array_key_exists('name', $_POST)){
		$breed = $_POST['breed'];
	} else {
		$breed  = '';
	}
	
	if (array_key_exists('name', $_POST)){
		$weight = $_POST['weight'];
	} else {
		$weight = '';
	}
	
	if (array_key_exists('name', $_POST)){
		$bio = $_POST['bio'];
	} else {
		$bio = '';
	}
	var_dump($name,$breed, $weight, $bio); 
	
	?>
	
	<?php var_dump($_SERVER); ?> To see what method get or post
	if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
		if (array_key_exists('name', $_POST)){
			$name = $_POST['name'];
		} else {
			$name = '';
		}
		
		if (array_key_exists('name', $_POST)){
			$breed = $_POST['breed'];
		} else {
			$breed  = '';
		}
		
		if (array_key_exists('name', $_POST)){
			$weight = $_POST['weight'];
		} else {
			$weight = '';
		}
		
		if (array_key_exists('name', $_POST)){
			$bio = $_POST['bio'];
		} else {
			$bio = '';
		}
		
		var_dump($name,$breed, $weight, $bio); 
		
	}
	
	?>
	
-->
<form action="/create_form.php" method="POST">
	<div class="form-group">
	        <label for="pet-name" class="control-label">Pet Name</label>
	        <input type="text" name="name" id="pet-name" class="form-control" />
	    </div>
	    <div class="form-group">
	        <label for="pet-breed" class="control-label">Breed</label>
	        <input type="text" name="breed" id="pet-breed" class="form-control" />
	    </div>
	    <div class="form-group">
	        <label for="pet-weight" class="control-label">Weight</label>
	        <input type="number" name="weight" id="pet-weight" class="form-control" />
	    </div>
	    <div class="form-group">
	        <label for="pet-bio" class="control-label">Pet Bio</label>
	        <textarea name="bio" id="pet-bio" class="form-control"></textarea>
	 </div>
	  <button type="submit" class="btn btn-primary">
        <span class="glyphicon glyphicon-heart"></span> 
    </button>
</form>
//