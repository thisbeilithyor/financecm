import { Router } from "express";
import { limiter } from "../miniscripts/rate-limit";
import { createCustomerRequest, getCustomerRequests } from "../handlers/customerRequest";
import { checkPermission } from "../security/checkAdminPermission.middleware";

const router = Router();

//sanitize input
router.post('/createCustomerRequest', limiter, createCustomerRequest);

router.get('/getCustomerRequests', checkPermission, getCustomerRequests);

export default router;