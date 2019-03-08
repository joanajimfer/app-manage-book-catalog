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
          <h2>Add a new book:</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" placeholder="name" />
            <input type="number" ref="price" placeholder="price" />
            <select type="text" ref="gender" placeholder='gender'>
              <option value='Terror'>Terror</option>
              <option value='Romance'>Romance</option>
              <option value='Adventures'>Adventures</option>
              <option value='Poetry'>Poetry</option>
              <option value='Informative'>Informative</option>
              <option value='Other'>Other</option>
            </select>
            <button type="submit">Submit</button>
          </form>
          <h2>Book Catalogue:</h2>
          <ul>
            {books.map((book) => 
             <li>
               <h3>NAME: {book.name}</h3>
               <p>PRICE: {book.price}</p>
               <h4>GENDER: {book.gender}</h4>
               <button onClick={this.handleDelete.bind(this, book)}>Eliminar</button>
             </li>
            )}
          </ul>
        </div>
      ) 
    }
  }

export default App;
