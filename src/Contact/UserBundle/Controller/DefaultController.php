<?php

namespace Contact\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('ContactUserBundle:Default:index.html.twig');
    }
}
