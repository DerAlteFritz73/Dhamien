<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class VoyagesController extends AbstractController
{
    #[Route('/voyages', name: 'section_voyages')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/voyages/photos', name: 'page_voyages_photos')]
    public function photos(): Response
    {
        return $this->render('voyages/photos.html.twig');
    }

    #[Route('/voyages/blog', name: 'page_voyages_blog')]
    public function blog(): Response
    {
        return $this->render('voyages/blog.html.twig');
    }
}
