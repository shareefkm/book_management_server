import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/booksManagement')
        console.log(`MongoDB connected ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDb connection error ${error}`);
    }
}

export default connectDB;