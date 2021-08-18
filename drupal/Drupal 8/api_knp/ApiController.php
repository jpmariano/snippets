<?php 
//https://api.drupal.org/api/drupal/services
namespace Drupal\modulename\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\modulename\Servicefoldername\Programmer;//1
/**
 * An example controller.
 */
class ApiController extends ControllerBase {

  /**
   * {@inheritdoc}
   */
  protected function addRoutes(ControllerCollection $controllers)
    {
        $controllers->post('/api/programmers', array($this, 'newAction'));
        $controllers->get('/api/programmers/{nickname}', array($this, 'showAction'))
        ->bind('api_programmers_show');
        $controllers->get('/api/programmers', array($this, 'listAction'));
    }
    public function newAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $programmer = new Programmer($data['nickname'], $data['avatarNumber']);
        $programmer->tagLine = $data['tagLine'];
        $programmer->userId = $this->findUserByUsername('weaverryan')->id;
        $this->save($programmer);
        
        $data = $this->serializeProgrammer($programmer);
        
        /* This is also correct
        $response = new Response(
            json_encode($data),
            201
        );*/
        $response = new JsonResponse($data, 201);
  
        //$response = new Response('It worked. Believe me - I\'m an API', 201);
        
        $programmerUrl = $this->generateUrl(
            'api_programmers_show',
            ['nickname' => $programmer->nickname]
        );
        $response->headers->set('Location', $programmerUrl); //Location where to go next
        //$response->headers->set('Location', '/some/programmer/url');

        $response->headers->set('Content-Type', 'application/json');

        
        return $response;
    }

    public function showAction($nickname)
    {
        $programmer = $this->getProgrammerRepository()->findOneByNickname($nickname);
        if (!$programmer) {
            $this->throw404('Crap! This programmer has deserted! We\'ll send a search party');
        }

        $data = array(
            'nickname' => $programmer->nickname,
            'avatarNumber' => $programmer->avatarNumber,
            'powerLevel' => $programmer->powerLevel,
            'tagLine' => $programmer->tagLine,
        );

        $response = new Response(json_encode($data), 200);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    public function throw404($message){
        throw new NotFoundHttpException($message);
    }

    public function listAction()
    {
        $programmers = $this->getProgrammerRepository()->findAll();
        if (!$programmers) {
            $this->throw404('Crap! This programmer has deserted! We\'ll send a search party');
        }

        $data = array('programmers' => array());
        foreach ($programmers as $programmer) {
            $data['programmers'][] = $this->serializeProgrammer($programmer);
        }

        $response = new Response(json_encode($data), 200);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    private function serializeProgrammer(Programmer $programmer)
    {
        return array(
            'nickname' => $programmer->nickname,
            'avatarNumber' => $programmer->avatarNumber,
            'powerLevel' => $programmer->powerLevel,
            'tagLine' => $programmer->tagLine,
        );
    }

 
}