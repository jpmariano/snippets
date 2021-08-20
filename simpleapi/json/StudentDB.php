<?php

class StudentDB {

	public $first_name = "";
	public $last_name = "";
	public $email = "";
	public $street = "";
	public $city = "";
	public $state = "";
	public $zip;
	public $phone = "";
	public $birth_date = "";
	public $sex = "";
	public $date_entered = "";
	public $lunch_cost;
	public $student_id;
	
	function __construct($first_name, $last_name, $email, $street,
		$city, $state, $zip, $phone, $birth_date, $sex,
		$date_entered, $lunch_cost, $student_id){
	
		$this->first_name = $first_name;
		$this->last_name = $last_name;
		$this->email = $email;
		$this->street = $street;
		$this->city = $city;
		$this->state = $state;
		$this->zip = $zip;
		$this->phone = $phone;
		$this->birth_date = $birth_date;
		$this->sex = $sex;
		$this->date_entered = $date_entered;
		$this->lunch_cost = $lunch_cost;
		$this->student_id = $student_id;
	
	}

}

?>