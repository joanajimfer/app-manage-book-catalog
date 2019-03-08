import React, { Component } from 'react';
import logo from './logo.svg';
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
  
    render() {
      const { books } = this.state;
      console.log('message',this.state.books);
      return (   
        <div>
          <h2>Add Someone</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref="name" placeholder="name" />
            <input type="number" ref="price" placeholder="price" />
            <input type="text" ref="gender" placeholder="gender" />
            <button type="submit">Submit</button>
          </form>
          <h2>Exsiting books:</h2>
          <ul>
            {books.map((book) => 
             <li>{`Name: ${book.name} price: ${book.price} gender: ${book.gender}`}</li>
            )}
          </ul>
        </div>
      ) 
    }
  }

export default App;
