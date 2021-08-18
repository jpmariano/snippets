<?php 
//https://drupalize.me/blog/201512/speak-http-drupal-httpclient

$client = \Drupal::httpClient();

/* Post Request */
$nickname = 'ObjectOrienter'.rand(0, 999);
$data = array(
    'nickname' => $nickname,
    'avatarNumber' => 5,
    'tagLine' => 'a test dev!'
);

$request = $client->post('/api/programmers', null, json_encode($data));
$response = $request->send();

$programmerUrl = $response->getHeader('Location');
$request = $client->get($url);
$response = $request->send();

//$response = json_decode($request->getBody());

/*End Post Request*/


/* Get Request specific resource*/
$request = $client->get('/api/programmers/'.$nickname);
$response = $request->send();

echo $response;
echo "\n\n";
/* End Get Request */

/* Get Request list resource*/
$request = $client->get('/api/programmers/');
$response = $request->send();

echo $response;
echo "\n\n";
/* End Get Request */