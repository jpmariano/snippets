<?php

//Step 3: Create class; Step 5: go to databasics.views.inc   Line 76 View count field. replace the current handler with databasics_handler_field_percent
class databasics_handler_field_percent extends views_handler_field_numeric {
	
	//Sets the defaults of this objects as to how it works
  function construct() {
    parent::construct();
		//to make sure that nid is selected
    $this->additional_fields['nid'] = 'nid';
		//dsm($this);
    $this->definition['float'] = TRUE;
  }
   //Step 4: Go to Drupal API and search the handler name to see the class and their heirarchy
	//IF it's the parent class you are extending from - look at the child class as to how it got extended
  function options_form(&$form, &$form_state) {
  	//Call the original options form you are over
    parent::options_form($form, $form_state);
    //adds a checkbox for your field settings
    $form['percent'] = array(
      '#type' => 'checkbox',
      '#title' => t('Display as percent'),
      '#descritpion' => t('If checked display the number as percent of total views of this node by all users.'),
      '#default_value' => $this->options['percent'],
    );
  }
	
	
	
  // When Checkbox is checked do the rest of this functions
  //how data is collected and rendered
  
  //Provide the default values of all the options of that form
  function option_definition() {
  	//call the parent
    $options = parent::option_definition();
		//default: do not display as a percent
    $options['percent'] = array('default' => FALSE);
    return $options;
  }


  // how sql is build 
  function query() {
    parent::query();
    if ($this->options['percent']) {
    	// when user selects this settings it makes sure that nid is available before it starts it's calculation: add_additional_fields in line 10
      $this->add_additional_fields();
    }
  }
  
	
	//what's displayed on the screen
	// search for the handler in the api and see example of how it's rendered - views_handler_field_numeric::render
	// override the pre_render - copied from views_handler_field::pre_render
  function pre_render(&$values) {
    parent::pre_render($values);
		//dsm($values); - shows all the values in views ui
		//dsm($this); - make sure the checkbox is checked to see the dsm output
		
		//just a logic 
		//$this is databasics_handler_field_percent
	  // if percent is checked
    if ($this->options['percent']) {
      foreach($values as $key => $row) {
      	//Make sure that nid is added to view by using the contruct function in line 6
      	
      	//figure out the aliases of nid field that view outputs and use it as a name of the row field that contains the $nid
        $nid = $row->{$this->aliases['nid']};
				//Do a simple db_query 
        $total = db_query('SELECT SUM(view_count) FROM {databasics} WHERE nid = :nid', array(':nid' => $nid))->fetchField();
				
				//to get the value of the current field
        $count = $this->get_value($row);
        $percentage = ($count / $total) * 100;
        $values[$key]->{$this->field_alias} = $percentage;
      }
    }
  }

}
