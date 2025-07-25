import { Router } from "express";
import { getImmos, createImmo } from "../handlers/immo";

const router = Router();

router.get('/getImmos', getImmos);

router.post('/createImmo', createImmo);

export default router;