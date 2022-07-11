import { Router } from "express"

const router = Router()

//Services
import {
    CreateVehicle,
    GetAllVehicles,
    DeleteVehicle,
    UpdateVehicle,
    Favorite,
    GetVehiclesForFilters,
    GetVehiclesByFilters
} from "../services/vehicles.service"

router.post('/register', async(req, res) => {
    try{
        const vehicle = await CreateVehicle(req.body)
        res.status(201).json(vehicle)
    } catch(error){
        res.status(500).json({message: "Error 500: Internal server error"})
    }
})

router.get('/list', async(req, res) => {
    try{
      const vehiclesList = await GetAllVehicles()
      res.status(200).json(vehiclesList)
    } catch(error){
        res.status(500).json({message: "Error 500: Internal server error"})
    }
})

router.put('/update', async(req, res) => {
    try {
        const vehicle = await UpdateVehicle(req.body)
        res.status(200).json(vehicle)
    } catch(error){
        if(error === 'vehicle_not_found'){
            res.status(404).send({message: "Error 404: Vehicle not found"})
        } else{
            res.status(500).json({message: "Error 500: Internal server error"})
        }
    }
})

router.delete('/delete/:id?', async(req, res) => {
    try {
        const vehicle = await DeleteVehicle(req.params.id)
        res.status(200).send({message: vehicle.id + "it was excluded"})
    } catch(error){
        if(error === 'vehicle_not_found') {
            res.status(404).json({message: "Error 404: Vehicle not found"})
        }
        else{
            res.status(500).json({message: "Error 500: Internal server error"})
        }
    }
})

router.post('/favorite', async(req, res) => {
    try {
        const favorite = await Favorite(req.body)
        res.status(200).json(favorite)
    } catch(error){
        res.status(500).json({message: "Error 500: Internal server error"})
    }
})

router.get("/filters", async(req, res) => {
    try{
        const data = await GetVehiclesForFilters()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json(error)
    }
})

router.get("/filtered", async (req, res) => {
    try{
        const data = await GetVehiclesByFilters(req.query)
        res.status(200).json(data)
    }catch(error){
        if(error.message === "vehicle_not_found"){
            res.status(404).json({message: error.message})
        }
        res.status(500).json(error)
    }
})

export default router
