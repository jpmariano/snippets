<?php 

require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_BQokikJOvBiI2HlWgH4olfQ2", //grab this from your account
  "publishable_key" => "pk_test_g6do5S237ekq10r65BnxO6S0" //grab this from your account
);

//vendor/stripe/stripe-php/lib/Stripe.php
\Stripe\Stripe::setApiKey($stripe['secret_key']);
