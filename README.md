# Book Management API

This project is a Node.js-based RESTful API for managing books, featuring CRUD operations and MongoDB as the database.

## Features

- **CRUD Operations:**
  - Add a new book (title, author, summary)
  - View a list of all books
  - View details of a specific book by its ID
  - Update a book's details
  - Delete a book

- **Database:**
  - MongoDB is used for storing book data. You can utilize cloud solutions like MongoDB Atlas or set up a MongoDB instance on a local server or virtual machine.

## Video Demonstration

[Watch the Video Demo](https://youtu.be/ktDHAwOlKJw)

This video demonstrates all CRUD operations, including various test cases and edge cases such as attempting to view, update, or delete a non-existent book.

## Documentation

### API Endpoints and Usage

1. **Add a New Book**
   - **Endpoint:** `/books`
   - **Method:** POST
   - **Request Body:**
     ```json
     {
     
  "title": "To Kill a Moking Bird",
  "author": "Harper lee",
  "summary": "This Classic Noval set in the ratioally charged american south",
  
     }
     ```
   - **Response:** message:"Successfully Added The book".

2. **View a List of All Books**
   - **Endpoint:** `/get_allbooks`
   - **Method:** GET
   - **Response:** A list of all books in the database.

3. **View Details of a Specific Book by its ID**
   - **Endpoint:** `/get_book/:id`
   - **Method:** GET
   - **Response:** The book details with the specified `id`.

4. **Update a Book's Details**
   - **Endpoint:** `/update_book/:id`
   - **Method:** PUT
   - **Request Body:**
     ```json
     {
       "title": "Updated Title",
       "author": "Updated Author",
       "summary": "Updated summary."
     }
     ```
   - **Response:** The updated book object.

5. **Delete a Book**
   - **Endpoint:** `/delete_book/:id`
   - **Method:** DELETE
   - **Response:** No content.

### Setup and Local Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shareefkm/book_management_server.git
