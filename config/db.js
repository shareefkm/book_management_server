import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_CONNECTION)
        console.log(`MongoDB connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDb connection error ${error}`);
    }
}

export default connectDB;