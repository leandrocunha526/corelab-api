import mongoose from "mongoose"

const VehiclesSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 150,
        required: true
    },
    description: {
        type: String,
        maxlength: 300,
        required: true
    },
    plate: {
        type: String,
        maxlength: 150,
        required: true
    },
    isFavorite: {
        type: Boolean,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        maxlength: 50,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.models.Vehicles || mongoose.model('Vehicles', VehiclesSchema)
