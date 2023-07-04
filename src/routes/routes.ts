import { Router } from 'express';

export const router = Router();

router.post('/login');
router.post('/auth');
router.post('/newadmin');
router.get('/admins');
router.post('/newdelivery');
router.get('/deliverys');
router.post('/newdestination');
router.get('/destinations');
router.post('/newroute');
router.get('/routes');
router.post('/newadress');
router.get('/adresses');

