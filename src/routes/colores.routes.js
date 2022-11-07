import {Router} from "express"
import { listarColores, crearColor } from "../controllers/colores.controllers"

const router = Router()

router.route("/colores").get(listarColores).post(crearColor)

export default router