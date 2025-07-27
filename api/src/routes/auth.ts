import { Router } from "express";
import { adminlogin } from "../handlers/auth";
import { validateRequest } from "../validations/validateRequest";
import { adminLoginSchema } from "../validations/adminLoginSchema";
import { limiter } from "../miniscripts/rate-limit";

const router = Router();

router.post('/adminlogin', limiter, validateRequest(adminLoginSchema), adminlogin);


export default router;