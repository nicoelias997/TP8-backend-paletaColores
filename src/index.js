import express from "express";
import morgan from "morgan";
import cors from "cors"
import path from "path" 

import coloresRouter from "./routes/colores.routes"

import "./database"

const app = express()

app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"), () => {
    console.log("Estoy en el puerto" + app.get("port"))
})

//middlewares
// 1
app.use(cors())
// 2
app.use(express.json())
// 3
app.use(express.urlencoded({extended: true}))
// 4
app.use(morgan("dev"))
// 5
app.use(express.static(path.join(__dirname, "../public")))

//inicializamos la diferenciacion de url del front
app.use("/apicolores", coloresRouter)
