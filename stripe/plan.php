<?php

require_once('./config.php');

//create a the user token
$token = $_POST['stripedToken'];

$customer = \Stripe\Customer::create(array(
    'source' => $token
));

//Create Subscription plan
$test_plan = \Stripe\Subscription::create(array(
    'customer' => $customer->id,
    'plan' => '<plan-id-from-stripe-gui>'
));

echo "</h1>You have successfully make your subscription</h1>";