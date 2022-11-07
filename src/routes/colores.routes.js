import { Router } from "express";
import { check } from "express-validator";
import { listarColores, crearColor, obtenerColor, eliminarColor, editarColor } from "../controllers/colores.controllers";

const router = Router();

router
  .route("/colores")
  .get(listarColores)
  .post(
    [
      check("nombreColor", "El nombre del color debe ser obligatorio")
        .notEmpty()
        .withMessage("El color no puede ser un campo vacio.")
        .trim()
        .withMessage("El color no puede ser un campo vacio.")
        .isIn([
          "red",
          "pink",
          "purple",
          "deepPurple",
          "indigo",
          "blue",
          "lightBlue",
          "cyan",
          "teal",
          "green",
          "lightGreen",
          "lime",
          "yellow",
          "amber",
          "orange",
          "deepOrange",
          "brown",
          "grey",
          "blueGrey",
        ])
        .withMessage("El color debe ser escrito en camelCase y en ingles!"),
    ],
    crearColor
  );

  router
  .route("/colores/:id")
  .get(obtenerColor)
  .delete(eliminarColor)
  .put(
    [
      check("nombreColor", "El nombre del color debe ser obligatorio")
        .notEmpty()
        .withMessage("El color no puede ser un campo vacio.")
        .trim()
        .withMessage("El color no puede ser un campo vacio.")
        .isIn([
          "red",
          "pink",
          "purple",
          "deepPurple",
          "indigo",
          "blue",
          "lightBlue",
          "cyan",
          "teal",
          "green",
          "lightGreen",
          "lime",
          "yellow",
          "amber",
          "orange",
          "deepOrange",
          "brown",
          "grey",
          "blueGrey",
        ])
        .withMessage("El color debe ser escrito en camelCase y en ingles!"),
    ],
    editarColor
  );
export default router;
