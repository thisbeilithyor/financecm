import { Router } from "express";
import { track } from "../handlers/kpi";

const router = Router();

router.post('/track', track);

export default router;