import express, {Request, Response} from "express";
import {fooLogic} from "../domain/logic";
import {ApiValidator} from "../server/validator";

const router = express.Router();

router.get("/",
    ApiValidator.required(['id'], 'query'),
    (req, res) => {
        const {id} = req.query;
        res.send(fooLogic.find(id as string));
})


router.post("/",
    ApiValidator.required(['name', 'age']),
    (req, res) => {
        const {name, age} = req.body;
        res.send(fooLogic.register({name, age}));
})

export default router;