import { z } from "zod";

export const registerValidationSchema = z.object({
    firstName: z.string({
        required_error: "First Name is required",
    }),
    lastName: z.string({
        required_error: "Last Name is required",
    }),
    email: z.string().email("Please enter a valid email address!"),
    password: z.string().min(4, "Must be at least 4 characters"),
});