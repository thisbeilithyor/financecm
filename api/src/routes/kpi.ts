import { Router } from "express";
import { track, getVisits } from "../handlers/kpi";
import { checkPermission } from "../security/checkAdminPermission.middleware";

const router = Router();

router.post('/track', track);


//priviledged routes
router.get('/getVisits', checkPermission, getVisits);

export default router;