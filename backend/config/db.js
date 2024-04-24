import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://greatestack:732523424@cluster0.dwiggyv.mongodb.net/food-delivery').then(() => console.log("DB Connected"));
}