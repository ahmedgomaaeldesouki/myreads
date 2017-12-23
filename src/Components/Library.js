import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'


// components
import BookShelf from './BookShelf'

const newLocal = 'Currently Reading';

 class Library extends Component {

    static propTypes = {
          books: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          shelf: PropTypes.string.isRequired,
          imageLinks: PropTypes.object.isRequired,
          authors: PropTypes.arrayOf(PropTypes.string.isRequired),
          id: PropTypes.string.isRequired,
        })),
        onMovingBook: PropTypes.func.isRequired
      }

 shelves = [
    {shelfTitle: newLocal, shelfName :'currentlyReading'},
    {shelfTitle: 'Want To Read',  shelfName : 'wantToRead'},
    {shelfTitle: 'Read' , shelfName : 'read'}
 ]
 


 handleShelfChange=(id,shelf)=>{
   this.props.onMovingBook(id,shelf)
 }

    render() {
    const books = this.props.books;
     let ShelfBooks;

     ShelfBooks = this.shelves.map ( 
         (shelf,index) => <BookShelf title={shelf.shelfTitle} 
                                     key={index} 
                                     books={books.filter( (book) =>book.shelf === shelf.shelfName  ) } 
                                     onMovingBook={this.handleShelfChange } 
                            />  
                     )

        return (
            <div className="list-books">
                 <div className="list-books-title">
                     <h1>MyReads</h1>
                 </div>
                 <div> {ShelfBooks}</div> 
                    <div className="open-search">
                    <Link
                        to="/Search"
                    >Add a book</Link>
                    </div>
             </div>
        );
    }
}





export default Library