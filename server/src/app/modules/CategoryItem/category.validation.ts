import { Status } from "@prisma/client";
import { z } from "zod";

const updateClaimStatus = z.object({
    body: z.object({
        status: z.enum([Status.APPROVED, Status.PENDING, Status.REJECTED])
    })
})
export const categoryValidation = {
    updateClaimStatus
}