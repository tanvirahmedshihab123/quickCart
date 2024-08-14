import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shihabchaiti79:Shihab123045@nagar.yoi3d.mongodb.net/?retryWrites=true&w=majority&appName=nagar').then(()=>console.log("Database Connected"));
}


