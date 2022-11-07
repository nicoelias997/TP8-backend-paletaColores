import { validationResult } from "express-validator"
import { Color } from "../models/color"

export const listarColores = async (req,res) => {
    try{
        const colores = await Color.find()
        res.status(200).json(colores)

    } catch (e){
        res.stauts(404).json({
            message: "No pudimos encontrar colores."
        })
    }
}

export const crearColor = async (req,res) => {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({
                    message: "Hay un error, no pudimos crear el color."
                })
            }
        const nuevoColor = new Color(req.body)
        await nuevoColor.save()
        res.status(201).json({
            message: "Hemos creado el color con exito."
        })

    } catch(e){
        res.stauts(404).json({
            message: "No pudimos crear el color."
        })
    }
}

export const obtenerColor = async (req, res) => {
    try{
        const colorBuscado = await Color.findById(req.params.id)
        res.status(200).json(colorBuscado)
    } catch(e){
        res.status(400).json({
            message: "No pudimos encontrar el color"
        })
    }
}

export const eliminarColor = async (req, res) => {
    try{
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({
            message: "Eliminamos el color con exito."
        })
    } catch(e){
        res.status(400).json({
            message: "No pudimos encontrar el color"
        })
    }
}

export const editarColor = async (req, res) => {
    try{
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: "Hemos editado el color con exito"
        })
    } catch(e){
        res.status(400).json({
            message: "No pudimos encontrar el color"
        })
    }
}