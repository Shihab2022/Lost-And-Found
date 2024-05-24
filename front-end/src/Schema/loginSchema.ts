import { z } from "zod";

export const loginValidationSchema = z.object({
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(4, "Must be at least 4 characters"),
});