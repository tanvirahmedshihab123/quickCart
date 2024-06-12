import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sabatanvir2019:Shihab123045@cluster0.lukdc7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/miraz').then(()=>console.log("Database Connected"));
}


//mongodb+srv://sabatanvir2019:Shihab123045@cluster0.lukdc7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0