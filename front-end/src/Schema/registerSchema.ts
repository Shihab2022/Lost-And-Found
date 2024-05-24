import { z } from "zod";

export const registerValidationSchema = z.object({
    name: z.string({
        required_error: "User Name is required",
    }),
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(4, "Must be at least 4 characters"),
});