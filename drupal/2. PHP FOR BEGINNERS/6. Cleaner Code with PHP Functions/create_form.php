<?php 
	require functions.php;
	
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
			
			$pets = get_pets();
			$newPet = array (
				'name' => $name,
				'breed' => $breed,
				'weight' => $weight,
				'bio' => $bio,
				'age' => $age,
				'image' => $image,
			);
		
		$pets[] = $newPet;
		//calls the save_pets function inside functions.php
		save_pets($pets);
		
		//5. PHP Redirect Response
		header('location:/');
		die();
			
	}
	
?>
	

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