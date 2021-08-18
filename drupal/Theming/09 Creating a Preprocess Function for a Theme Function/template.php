<?php
/* */
function YOURTHEMENAME_preprocess_username($variables) {
 //kpr($variables);
 // $account = user_load($variable['Object']->uid);  user_load to load the full object
 $account = user_load($variable['account']->uid);
 //kpr($account);
 
 if(isset($account->field_real_name[LANGUAGE-NONE][0]['safe_value'])){
 	 $variables['name'] = $account->field_real_name[LANGUAGE_NONE][0]['safe_value'];
 }
}