import React, { Component } from 'react';

import './App.css';

const booksArray = []
  
  class App extends React.Component {
  
    constructor() {
      super();
      this.state = {
        books: booksArray
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      const
      { books } = this.state,
      name = this.refs.name.value,
      price = this.refs.price.value,
      gender = this.refs.gender.value;
      this.setState({
        books: [...books, {
          name,
          price,
          gender
        }]
      }, () => {
        this.refs.name.value = '';
        this.refs.price.value = '';
        this.refs.gender.value = '';
      });
    }

    handleDelete(bookToDelete) {
      console.log(bookToDelete);
      const newBooks = this.state.books.filter((book) => {
        return book != bookToDelete
      })
      this.setState({
        books: newBooks
      })

    }
  
    render() {
      const { books } = this.state;
      console.log('message',this.state.books);
      return (   
        <div>
          <h2>Book Form:</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" placeholder="name" />
            <input type="number" ref="price" placeholder="price" />
            <input type="text" ref="gender" placeholder="gender" />
            <button type="submit">Submit</button>
          </form>
          <h2>Exsiting books:</h2>
          <ul>
            {books.map((book) => 
             <li>
               <h3>NOMBRE: {book.name}</h3>
               <p>PRECIO: {book.price}</p>
               <h4>GÉNERO: {book.gender}</h4>
               <button onClick={this.handleDelete.bind(this, book)}>Eliminar</button>
             </li>
            )}
          </ul>
        </div>
      ) 
    }
  }

export default App;
