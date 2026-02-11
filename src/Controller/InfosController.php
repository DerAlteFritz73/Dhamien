<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class InfosController extends AbstractController
{
    #[Route('/infos', name: 'section_infos')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/infos/contact', name: 'page_contact')]
    public function contact(): Response
    {
        return $this->render('infos/contact.html.twig');
    }

    #[Route('/infos/presentation', name: 'page_presentation')]
    public function presentation(): Response
    {
        return $this->render('infos/presentation.html.twig');
    }

    #[Route('/infos/photos', name: 'page_infos_photos')]
    public function photos(): Response
    {
        return $this->render('infos/photos.html.twig');
    }

    #[Route('/infos/presse', name: 'page_presse')]
    public function presse(): Response
    {
        return $this->render('infos/presse.html.twig');
    }
}
