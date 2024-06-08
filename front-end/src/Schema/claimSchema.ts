import { z } from 'zod';

export const claimSchema = z.object({
    foundItemId: z.string().min(1, { message: "This is required" }),
    status: z.string().min(1, { message: "This is required" }),
    distinguishingFeatures: z.string().min(1, { message: "This is required" }),
});