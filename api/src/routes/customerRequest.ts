import { Router } from "express";
import { limiter } from "../miniscripts/rate-limit";
import { createCustomerRequest } from "../handlers/customerRequest";

const router = Router();

//sanitize input
router.post('/createCustomerRequest', limiter, createCustomerRequest);


export default router;