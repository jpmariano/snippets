<?php

class databasics_handler_field_percent_graph extends databasics_handler_field_percent {
	// override the render method
  function render($values) {
  	//dsm($values); - Add a view and a field to see the dsm results
    $value = $this->get_value($values);
		//This will show on views previews output
    return '<div class="databasics-graph" style="display:block; background: #000; height: 10px; width: ' . $value . '%;">' . $value . '</div>';
  }
}