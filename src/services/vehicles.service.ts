import Vehicles from "../models/vehicles.model"

export const CreateVehicle = async(data: any) => {
    try {
        const vehicle = await Vehicles.create(data)
        return vehicle
    } catch(error){
        throw error
    }
}

export const GetAllVehicle = async() => {
    try{
      const vehicle = await Vehicles.find()
      if(vehicle == null){
        throw new Error("No vehicle found")
      }
    } catch(error){
        throw error
    }
}
