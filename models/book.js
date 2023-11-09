import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type:String
    },
    author: {
        type:String
    },
    summary: {
        type:String
    }
})

const Books = mongoose.model('Books', bookSchema);

export default Books;
