import { z } from 'zod';

export const foundItemSchema = z.object({
    category: z.string().min(1, { message: "Category is required" }),
    description: z.string().min(1, { message: "Description Name is required" }),
    date: z.date().optional(),
    location: z.string().min(1, { message: "Location is required" }),
    number: z.string().regex(/^\d+$/, { message: "Phone number must be numeric" }).optional(),
    email: z.string().email({ message: "Invalid email address" }).optional(),
});