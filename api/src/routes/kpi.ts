import { Router } from "express";
import { track, getVisits } from "../handlers/kpi";

const router = Router();

router.post('/track', track);

router.get('/getVisits', getVisits);

export default router;