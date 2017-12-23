import React, { Component } from 'react';
import { PropTypes } from 'prop-types'

//components
import Book from  './Books'

 class BookShelf extends Component {
    
    static propTypes={
        title: PropTypes.string.isRequired,
        books: PropTypes.array,
        onMovingBook: PropTypes.func.isRequired
      }
    
  handleShelfChange = (id,shelf) => {
    this.props.onMovingBook(id,shelf)
  }    

    render() {
    
       const  books = this.props.books
        let shelfbooks;
        shelfbooks=books.map((book,index) => { 
          
            return (
                <Book key={index} 
                      id={book.id}
                      booktitle={book.title}
                      bookauthors={book.authors}
                      bookimage={book.imageLinks}
                      shelf={book.shelf !==''  ?book.shelf: `none` }
                      onMovingBook={this.handleShelfChange}
              
                       />
            ) // return

          } )
        return (
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.title}</h2>
                  <div className="bookshelf-books"> 
                     <ol className="books-grid">
                         {shelfbooks}
                        </ol>  
                  </div>

                </div>
              </div>
           </div>
        );
    }
}


export default BookShelf