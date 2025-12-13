import { Router } from "express";
import { adminlogin, verifyJWT } from "../handlers/auth";
import { validateRequest } from "../validations/validateRequest";
import { adminLoginSchema } from "../validations/adminLoginSchema";
import { limiter } from "../miniscripts/rate-limit";
import { logout } from "../handlers/auth";

const router = Router();

router.post('/adminlogin', limiter, validateRequest(adminLoginSchema), adminlogin);
router.post('/verifyJWT', limiter, verifyJWT);
router.post('/logout', limiter, logout);

export default router;