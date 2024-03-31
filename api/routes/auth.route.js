import express from 'express';
import { singup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/singup', singup);

export default router;