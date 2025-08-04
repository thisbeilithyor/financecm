import { Router } from "express";
import { limiter } from "../miniscripts/rate-limit";
import { saveChecklist } from "../handlers/checklist";
const router = Router();

router.post('/save', limiter, saveChecklist);

export default router;