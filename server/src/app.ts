import express from "express"
import cors from "cors"
import cookieParser from 'cookie-parser'
import globalErrorHandler from "./app/middlewares/globalErrorHandler"
import notFound from "./app/utils/notFound"
import { rootRouter } from "./app/routes"
import { corsOptions } from "./app/conostant/conostant"
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions));
app.use("/api", rootRouter)
app.get('/', (req, res) => {
    res.send({
        message: "Hey every one this is assignment 9 test routes"
    })
})

app.use(globalErrorHandler)

app.use(notFound)
export default app