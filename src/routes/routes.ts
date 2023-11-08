import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import AuthController from '../controllers/AuthController';
import DeliveryController from '../controllers/DeliveryController';
import DestinationController from '../controllers/DestinationController';
import DeliverRouteController from '../controllers/DeliverRouteController';

export const router = Router();

router.post('/auth', AuthController.Login);
router.post('/admin', AdminController.store);
router.get('/admin/:id', AdminController.show);


router.post('/delivery', DeliveryController.store);
router.get('/delivery', DeliveryController.index);
router.get('/delivery/:id', DeliveryController.show);
router.put('/delivery/:id', DeliveryController.update);
router.delete('/delivery/:id', DeliveryController.delete);


router.post('/destination', DestinationController.store);
router.get('/destination', DestinationController.index);
router.get('/destination/:id', DestinationController.show);
router.put('/delivery/:id', DestinationController.update);
router.delete('/delivery/:id', DestinationController.delete);


router.post('/route', DeliverRouteController.store);
router.get('/route', DeliverRouteController.index);
router.get('/route/:id', DeliverRouteController.show);
router.put('/route/:id', DeliverRouteController.update);
router.delete('/route/:id', DeliverRouteController.delete);


