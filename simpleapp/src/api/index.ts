import express from "express";

import {default as fooAPI} from './fooApi';
import {default as barAPI} from './barApi';

const router = express.Router();

router.use('/foo', fooAPI);
router.use('/bar', barAPI);

export default router;