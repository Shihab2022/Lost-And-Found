import { ZodError, ZodIssue } from "zod"
// import { TErrorSource, TGenericErrorResponse } from "../interface/error"

const handleZodError = (err: ZodError): any => {

    const errorSources: any = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue.path.length - 1],
            message: issue.message
        }
    })
    const statusCode = 400
    return {
        statusCode,
        message: "validation Error",
        errorSources
    }
}

export default handleZodError