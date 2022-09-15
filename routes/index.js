import express from 'express';
import { paginasInicio, paginaNosotros,paginaViajes,paginaTestimoniales, paginaDetalleViaje } from '../controllers/paginasControllers.js';
import { guardarTestimonial} from '../controllers/testimonialController.js'

const router= express.Router();

router.get('/', paginasInicio)


router.get('/nosotros', paginaNosotros)

router.get('/viajes',paginaViajes)

router.get('/viajes/:slug',paginaDetalleViaje)

router.get('/testimoniales',paginaTestimoniales)

router.post('/testimoniales', guardarTestimonial)


export default router