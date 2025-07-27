import { Router } from "express";
import { adminlogin, verifyJWT } from "../handlers/auth";
import { validateRequest } from "../validations/validateRequest";
import { adminLoginSchema } from "../validations/adminLoginSchema";
import { limiter } from "../miniscripts/rate-limit";

const router = Router();

router.post('/adminlogin', limiter, validateRequest(adminLoginSchema), adminlogin);
router.post('/verifyJWT', limiter, verifyJWT);

export default router;