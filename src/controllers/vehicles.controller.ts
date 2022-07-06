import { Router } from "express"
import { nextTick } from "process"

const router = Router()

//Services
import { CreateVehicle, GetAllVehicles } from "../services/vehicles.service"

router.post('/register', async(req, res) => {
    try{
        const vehicle = await CreateVehicle(req.body)
        res.status(201).json(vehicle)
    } catch(error){
        res.status(500).json(error)
    }
})

router.get('/list', async(req, res) => {
    try{
      const vehiclesList = await GetAllVehicles()
      res.status(200).json(vehiclesList)
    } catch(error){
        res.status(500).json(error)
    }
})

export default router
