import express from 'express';
import { summaryController } from "../controller/controller";

const router = express.Router();

router.post('/summarize', summaryController);

export default router;