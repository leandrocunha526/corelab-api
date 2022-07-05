import Vehicles from "../models/vehicles.model"

export const CreateVehicle = async(data: any) => {
    try {
        const vehicle = await Vehicles.create(data)
        return vehicle
    } catch(err){
        throw err
    }
}
