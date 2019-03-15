import React, { Component } from 'react';
import Logo from './images/logo.png';
import BookIMage from './images/bookImage.png';
import './App.css';

const booksArray = []
  
  class App extends Component {
  
    constructor() {
      super();
      this.state = {
        books: this.getDataFromLocalStorage(),
        optionsChecked:[]
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this);
      
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
      });}

    handleDelete(bookToDelete) {
      console.log(bookToDelete);
      const newBooks = this.state.books.filter((book) => {
        return book !== bookToDelete
      })
      this.setState({
        books: newBooks
      })
      this.saveInLocalStorage();
    }

    saveInLocalStorage() {
      localStorage.setItem('booksInList', JSON.stringify(this.state.books));
    }

    getDataFromLocalStorage() {
      const savedBooks = localStorage.getItem("booksInList");
      if (!savedBooks) {
        return [];
      } else {
        return JSON.parse(savedBooks);
      }
    } 

    handleCheckbox(event) {
        let checkedArray = this.state.optionsChecked;
        let selectedValue = event.target.value;
          
          if (event.target.checked === true) {
          
            checkedArray.push(selectedValue);
              this.setState({
                optionsChecked: checkedArray
              });
                          
          } else {
          
            let valueIndex = checkedArray.indexOf(selectedValue);
            checkedArray.splice(valueIndex, 1);
              
              this.setState({
                optionsChecked: checkedArray
              });     
      }
    }

  
    render() {
      const { books } = this.state;
      console.log('message',this.state.books);
      this.saveInLocalStorage();
      return (   
        <div>
          <header className='header__main'>
          <img className='header__logo'src={Logo}/>
          <section className='bookSearch__section'>
          <h2 className='header__title'>Save a new book:</h2>
          <form onSubmit={this.handleSubmit} className='header__form'>
            <input type="text" ref="name" placeholder="name" required className='form__input--text'/>
            <input type="number" ref="price" placeholder="price" className='form__input--text' />
            <select type="text" ref="gender" placeholder='gender' className='form__input--select'>
              <option value='Terror'>Terror</option>
              <option value='Romance'>Romance</option>
              <option value='Adventures'>Adventures</option>
              <option value='Poetry'>Poetry</option>
              <option value='Informative'>Informative</option>
              <option value='Other'>Other</option>
            </select>
            <button type="submit" className='form__btn'>Submit</button>
          </form>
          </section>
          </header>
          <main>
            <h2>Gender Filter:</h2>
            <form>
              <input type="checkbox" name="gender" value="terror" onClick={this.handleCheckbox} />Terror
              <input type="checkbox" name="gender" value="romance" onClick={this.handleCheckbox} />Romance
              <input type="checkbox" name="gender" value="adventures" onClick={this.handleCheckbox} />Adventures
              <input type="checkbox" name="gender" value="poetry" onClick={this.handleCheckbox} />Poetry
              <input type="checkbox" name="gender" value="tinformative" onClick={this.handleCheckbox} />Informative
              <input type="checkbox" name="gender" value="other" onClick={this.handleCheckbox} />Other
            </form>
          <h2 className='catalogue__title'>Book Catalogue:</h2>
          <ul className='catalogue__list'>
            {books.map((book) => 
             <li className='catalogue__list--item'>
               <h3 className='catalogue__list--title'>{book.name}</h3>
               <img className='catalogue__list--img' src={BookIMage} alt='Cover book example image' /> 
               <p className='catalogue__list--price' >PRICE: {book.price}€</p>
               <h4 className='catalogue__list--gender' >{book.gender}</h4>
               <button onClick={this.handleDelete.bind(this, book)}>Delete</button>
             </li>
            )}
          </ul>
          </main>
        </div>
      ) 
    }
  }

export default App;
