import { z } from 'zod';

export const lostItemSchema = z.object({
    category: z.string().min(1, { message: "Category is required" }),
    brand: z.string().min(1, { message: "Brand Name is required" }),
    color: z.string().min(1, { message: "Color is required" }),
    distinguishing: z.string().min(1, { message: "Distinguishing feature is required" }),
    location: z.string().min(1, { message: "Location is required" }),
    number: z.string().regex(/^\d+$/, { message: "Phone number must be numeric" }).optional(),
    email: z.string().email({ message: "Invalid email address" }).optional(),
    file: z.string().optional(),
});

