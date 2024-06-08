import { z } from "zod";

export const updateProfileSchema = z.object({
    name: z.string().optional(),
    email: z.string().optional(),
});
export const updatePass = z.object({
    password: z.string().optional(),
    updatedPass: z.string().optional(),
});