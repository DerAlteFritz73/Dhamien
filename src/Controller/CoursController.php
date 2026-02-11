<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class CoursController extends AbstractController
{
    #[Route('/cours', name: 'section_cours')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/cours/biographie', name: 'page_biographie')]
    public function biographie(): Response
    {
        return $this->render('cours/biographie.html.twig');
    }

    #[Route('/cours/stage', name: 'page_stage')]
    public function stage(): Response
    {
        return $this->render('cours/stage.html.twig');
    }

    #[Route('/cours/prive', name: 'page_prive')]
    public function prive(): Response
    {
        return $this->render('cours/prive.html.twig');
    }
}
