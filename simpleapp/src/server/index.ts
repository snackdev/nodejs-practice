import express from 'express';
import API from '../api';
import {Logger} from "./logger";
const app = express();
const port = 3000


app.use(Logger.timeLogger)
app.use(express.json())

app.use('/', API)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})