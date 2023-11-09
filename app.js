import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import Books from "./models/book.js";

dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/books", async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    const newBook = await Books.create({
      title,
      author,
      summary,
    });
    res.status(201).json({newBook,message:"Successfully Added The book"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/get_allbooks", async (req,res)=>{
    try {
        const books = await Books.find()
        res.status(200).json({books});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.get("/get_book/:id", async (req,res)=>{
    try {
        const { id } = req.params
        const book = await Books.findOne({_id:id})
        if(book){
            res.status(200).json({book});
        }else{
            res.status(404).json({success:false, message:"the book with the given id does not exist"});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.put("/update_book/:id", async(req,res)=>{
    try {
        const { id } = req.params
        const { title, author, summary} = req.body
        const updateBook =  await Books.updateOne({_id:id},{
            $set:{
                title, author, summary
            }
        })
        if(updateBook.modifiedCount > 0){
            res.status(200).json({success:true});
        }else{
            res.status(404).json({success:false, message:"Book Up to dated Nothing to upadate or the book with given id does not exist"});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.delete('/delete_book/:id', async(req,res)=>{
    try {
        const { id } = req.params
        const deletedItem = await Books.deleteOne({_id:id})
        if(deletedItem.deletedCount > 0){
            res.status(204).json({success:true});
        }else{
            res.status(404).json({success:false, message:"Book Not Found"});
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
