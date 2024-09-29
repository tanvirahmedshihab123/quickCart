import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://chaitkaniz:Shihab123045@cluster-ecommerz.p66hqud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-ecommerz').then(()=>console.log("Database Connected"));
}


//mongodb+srv://shihabchaiti79:Shihab123045@nagar.yoi3d.mongodb.net/?retryWrites=true&w=majority&appName=nagar