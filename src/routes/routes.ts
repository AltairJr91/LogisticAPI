import { Router } from 'express';
import AdminController from '../controllers/AdminController';
import AuthController from '../controllers/AuthController';

export const router = Router();

router.post('/login',);
router.post('/auth', AuthController.Login);
router.post('/newadmin', AdminController.createNewAdmin);
router.get('/admins', AdminController.getAdmin);
router.post('/newdelivery');
router.get('/deliverys');
router.post('/newdestination');
router.get('/destinations');
router.post('/newroute');
router.get('/routes');
router.post('/newadress');
router.get('/adresses');

