import { z } from "zod";

export const adminLoginSchema = z.object({
    username: z.string().min(3).max(25),
    password: z.string().min(3).max(25),
})