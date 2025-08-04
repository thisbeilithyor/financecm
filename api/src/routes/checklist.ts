import { Router } from "express";
import { limiter } from "../miniscripts/rate-limit";
import { saveChecklist, getAll } from "../handlers/checklist";
import { checkPermission } from "../security/checkAdminPermission.middleware";
const router = Router();

router.post('/save', limiter, saveChecklist);

router.get('/getAll', limiter, checkPermission, getAll);

export default router;