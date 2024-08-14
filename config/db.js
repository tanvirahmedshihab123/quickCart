import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shihabchaiti79:Shihab123045@nagar.yoi3d.mongodb.net/?retryWrites=true&w=majority&appName=nagar').then(()=>console.log("Database Connected"));
}


//mongodb+srv://sabatanvir2019:Shihab123045@cluster0.lukdc7f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


// mongodb+srv://jamilakhatun000000:Shihab123045@cluster0.zdouq8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
