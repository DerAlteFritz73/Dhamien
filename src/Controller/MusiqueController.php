<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MusiqueController extends AbstractController
{
    #[Route('/musique', name: 'section_musique')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/musique/musique', name: 'page_musique')]
    public function musique(): Response
    {
        return $this->render('musique/musique.html.twig');
    }

    #[Route('/musique/spectacles', name: 'page_spectacles')]
    public function spectacles(): Response
    {
        return $this->render('musique/spectacles.html.twig');
    }
}
