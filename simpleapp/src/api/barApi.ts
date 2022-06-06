import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
    console.log('Hello Bar Get');
    res.send("Good");
})

router.post("/", (req, res) => {
    console.log('Hello Bar POST');
    res.send("Good");
})

export default router;