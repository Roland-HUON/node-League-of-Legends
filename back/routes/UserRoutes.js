import express from "express";
import { getProfil, favoriteChampions } from "../controllers/UserController.js";

const router = express.Router();

router
    .get('/', getProfil)
    .put('/favorite', favoriteChampions)

export default router