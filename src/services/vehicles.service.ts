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

export const DeleteVehicle = async(data: any) => {
    try{
        const vehicle = await Vehicles.findByIdAndDelete(data)

        if(vehicle === null){
            throw new Error('vehicle_not_found')
        }

        return vehicle
    }catch(error){
        throw error
    }
}

export const UpdateVehicle = async(data: any) => {
    try{
        const vehicle = await Vehicles.findByIdAndUpdate({
          _id: data._id,
        }, data, {new: true})

        if(vehicle === null){
            throw new Error('vehicle_not_found')
        }

        return vehicle
    }catch(error){
        throw error
    }
}

export const Favorite = async(data: any) => {
    try{
        const favorite = await Vehicles.updateOne({
            _id: data._id}, {
            isFavorite: data.isFavorite })
         return favorite
    } catch(error){
        throw error
    }
}
