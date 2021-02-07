import express from 'express';
import { signUp, signIn } from '../controllers/user.js';

const router = express.Router();

router.post('/signup', signIn);

router.post('/signin', signUp);

export default router;
