import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shihabtanvir03:Shihab123045@pataoo.mfiw9b4.mongodb.net/?retryWrites=true&w=majority&appName=pataoo').then(()=>console.log("Database Connected"));
}


//mongodb+srv://shihabchaiti79:Shihab123045@nagar.yoi3d.mongodb.net/?retryWrites=true&w=majority&appName=nagar