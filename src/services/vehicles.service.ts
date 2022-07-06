import Vehicles from "../models/vehicles.model"

export const CreateVehicle = async(data: any) => {
    try {
        const vehicle = await Vehicles.create(data)
        return vehicle
    } catch(error){
        throw error
    }
}

export const GetAllVehicles = async() => {
    try{
      const vehicles = await Vehicles.find({})
      return vehicles
    } catch(error){
        throw error
    }
}
