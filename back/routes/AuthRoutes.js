import express from "express";
import { signUp, logIn } from '../controllers/AuthController.js';

const router = express.Router();

router
    .post('/signup', signUp)
    .post('/login', logIn)

export default router