import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import AuthController from '../controllers/AuthController';
import DeliveryController from '../controllers/DeliveryController';
import DestinationController from '../controllers/DestinationController';
import DeliverRouteController from '../controllers/DeliverRouteController';
import { MiddleWare } from '../middleware/SecurityMiddleware';

export const router = Router();

router.post('/auth', AuthController.Login);
router.post('/admin', MiddleWare, AdminController.store);
router.get('/admin', MiddleWare, AdminController.index);
router.get('/admin/:id', MiddleWare, AdminController.show);


router.post('/delivery', MiddleWare, DeliveryController.store);
router.get('/delivery', MiddleWare, DeliveryController.index);
router.get('/delivery/:id', MiddleWare, DeliveryController.show);
router.put('/delivery/:id', MiddleWare, DeliveryController.update);
router.delete('/delivery/:id', MiddleWare, DeliveryController.delete);


router.post('/destination', MiddleWare, DestinationController.store);
router.get('/destination', MiddleWare, DestinationController.index);
router.get('/destination/:id', MiddleWare, DestinationController.show);
router.put('/destination/:id', MiddleWare, DestinationController.update);
router.delete('/destination/:id', MiddleWare, DestinationController.delete);


router.post('/route', MiddleWare, DeliverRouteController.store);
router.get('/route', MiddleWare, DeliverRouteController.index);
router.get('/route/:id', MiddleWare, DeliverRouteController.show);
router.put('/route/:id', MiddleWare, DeliverRouteController.update);
router.delete('/route/:id', MiddleWare, DeliverRouteController.delete);


