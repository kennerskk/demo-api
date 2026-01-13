import express from 'express';
const router = express.Router();
import adminController from '../controllers/admin.controller.js';


//post
router.post('/admin/do', adminController.postFunc);

//get
router.get('/admin/dt', adminController.getFunc);

export default router;