import { Server } from "http"
import app from "./app"
import config from "./config"



async function main() {
    const port = config.port
    const server: Server = app.listen(port, () => {
        console.log(`Server is running on ${port}`)
    })

}

main()

