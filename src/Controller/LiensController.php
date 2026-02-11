<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class LiensController extends AbstractController
{
    #[Route('/liens', name: 'section_liens')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/liens/liens', name: 'page_liens')]
    public function liens(): Response
    {
        return $this->render('liens/liens.html.twig');
    }

    #[Route('/liens/merci', name: 'page_merci')]
    public function merci(): Response
    {
        return $this->render('liens/merci.html.twig');
    }
}
