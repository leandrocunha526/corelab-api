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

export const GetVehiclesForFilters = async () => {
    try{
        const VehiclesData = {
            name: await Vehicles.distinct("name"),
            year: await Vehicles.distinct("year"),
            color: await Vehicles.distinct("year")
        }
        return VehiclesData
    } catch(error){
        throw error
    }
}

export const GetVehiclesByFilters = async (data: any) => {
    try{
        let dataVehicles = []
        const search = []
        const filter = JSON.parse(data.filters)

        if(filter.price !== undefined){
            filter.price["$lte"] = filter.price["priceMax"]
            filter.price["$gte"] = filter.price["priceMin"]
            delete filter.price['priceMax']
            delete filter.price['priceMin']

            Object.entries(filter.price).forEach(([key, value]) => {
                if(value === undefined || value === "")
                    delete filter.price[key]
            })
            if(JSON.stringify(filter.price) === '{}'){
                delete filter['price']
            }
        }
        Object.entries(filter).forEach(([key, value]) => {
            if(value !== undefined && value !== 'Todos'){
                search.push({[key]: value})
            }
        })
        dataVehicles = search.length > 0 ? await Vehicles.find({$and: search}) :  await Vehicles.find()

        let vehiclesData = []

        vehiclesData = dataVehicles.filter(Vehicle =>
            Object.entries(Vehicle._doc).find(([key, value]) => {
                if(value.toString().toLowerCase().includes(data.keyword.toLowerCase()) || data.keyword === ""){
                    return true
                }
            })
        )

        if(dataVehicles.length === 0){
            throw new Error("vehicle_not_found")
        }

        return vehiclesData

    } catch(error){
        throw Error
    }
}
