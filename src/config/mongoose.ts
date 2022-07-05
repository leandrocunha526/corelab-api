import moongoose from "mongoose"

export default async function() {
    await moongoose.connect(process.env.MONGODB_URI!)
    console.log("MongoDB connected")
}
