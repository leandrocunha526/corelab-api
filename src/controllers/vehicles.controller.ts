import { Router } from "express"

const router = Router()

//Services
import {
    CreateVehicle,
    GetAllVehicles,
    DeleteVehicle,
    UpdateVehicle
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

router.delete("/delete/:id?", async(req, res) => {
    try {
        const vehicle = await DeleteVehicle(req.params.id)
        res.status(200).send({message: vehicle.id + "it was excluded"})
    }catch(error){
        if(error === 'vehicle_not_found') {
            res.status(404).json(error)
        }
        else{
            res.status(500).json({message: "Error 500: Internal server error"})
        }
    }
})

export default router
