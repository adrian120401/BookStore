import React, { useEffect, useState } from "react";
import httpCLient from "../lib/httpCLient";
import "./book.css"
const initialBook = [
  {
    "ID":"",
    "title":"",
    "author":"",
    "content":"",
    "content_short":"",
    "publisher":"",
    "publisher_date":"",
    "pages":"",
    "language":"",
    "url_details":"",
    "url_download":"",
    "url_read_online":"",
    "cover":"",
    "thumbnail":"",    
    "num_comments":"",
    "categories":[],
    "tags":[]
  }
]

const Book = (props) => {
    const[books,setBooks] = useState(initialBook)

    useEffect(() =>{
          const getBooksByCatiegories=async() => {
        try {
            const data = await httpCLient.get(`get?category=${props.categorie}`);
            setBooks(data);
          } catch (error) {
            console.log(error);
          }
    }
    getBooksByCatiegories()
    },[props])


    const listItems = books.map((book) =>{
      console.log(book.thumbnail)
    return(
    <div className="listaLibros">
        <img src={book.thumbnail} className="portada" alt="portada"></img>
        <p>{book.title}</p>
    </div>
    )})

    return(
      <>
      <h2 className="title">Catalogo de libros</h2>
      <div className="container">
            {listItems}
        </div>
      </>
        
    )
} 

export default Book