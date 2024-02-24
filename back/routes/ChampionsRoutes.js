import express from "express";
import { createChampions, getChampions, getChampion, updateChampions, deleteChampions } from "../controllers/ChampionsController.js";

const router = express.Router()

router
    .post('/', createChampions)
    .get('/', getChampions)
    .get('/:id', getChampion)
    .put('/:id', updateChampions)
    .delete('/:id', deleteChampions)

export default router