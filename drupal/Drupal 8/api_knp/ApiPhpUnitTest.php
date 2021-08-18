<?php 


namespace Drupal\module_name\Tests;

//modulename/src/Tests/ProgrammerControllerTest.php
class ProgrammerControllerTest extends \PHPUnit_Framework_TestCase {
    public function testPOST()
    {
        
        $client = \Drupal::httpClient();

        $nickname = 'ObjectOrienter'.rand(0, 999);
        $data = array(
            'nickname' => $nickname,
            'avatarNumber' => 5,
            'tagLine' => 'a test dev!'
        );

        $request = $client->post('/api/programmers', null, json_encode($data));
        $response = $request->send();
        $this->assertEquals(201, $response->getStatusCode());
        $this->assertTrue($response->hasHeader('Location'));
        $data = json_decode($response->getBody(true), true);
        $this->assertArrayHasKey('nickname', $data);
    }
}
//Running test from terminal using php: $ php vendor/bin/phpunit modules/custom/module_name/src/Tests/ProgrammerControllerTest.php
//$ ./vendor/bin/phpunit -c core/ core/tests/Drupal/Tests/Component/Plugin/DefaultFactoryTest.php
//$ ./vendor/bin/phpunit modules/custom/module_name/src/Tests/ProgrammerControllerTest.php
