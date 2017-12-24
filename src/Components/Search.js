import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { Debounce } from "react-throttle";
import * as BooksAPI from "../utils/BooksAPI";

//Components
import BookShelf from "./BookShelf";

class Search extends Component {
  static propTypes = {
    myBooks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        imageLinks: PropTypes.object.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string.isRequired),
        id: PropTypes.string.isRequired
      })
    ),
    onMovingBook: PropTypes.func.isRequired
  };

  state = {
    books: [],
    query: ""
  };

  updateQuery = e => {
    const queryString = e.target.value.trim();
    this.setState({ query: queryString });
    if (queryString !== "") {
      this.searchBooks(queryString);
    } // if queryString
  }; // updateQuery

  clearState = () => {
    this.setState({ query: "" }, { books: [] });
  };

  // iterating through search result to set my books shelf state
  stateMyBooks = (queryResults, myBooks) => {
    if (queryResults.length > 0) {
      return queryResults.map(book => {
        const myBook = myBooks.find(myBook => myBook.id === book.id);
        book.shelf = typeof myBook !== "undefined" ? myBook.shelf : "none";
        return book;
      });
    } // if
  };

  //Search the librray for books that matches the query string
  searchBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query, 12).then(searchResults => {
        if (searchResults.length > 0) {
          searchResults = this.stateMyBooks(searchResults, this.props.myBooks);
          // set the books object state to the search results receved from BooksAPI
          this.setState({ books: searchResults });
        } else {
          this.setState({ books: [] });
        }
      }); // BooksAPI
    } else {
      // if (query.length > 0 )
      this.setState({ books: [], query: "" });
    }
  }; //searchBooks

  render() {
    const books = this.state.books;
    const query = this.state.query;

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <Debounce time="400" handler="onChange">
                <input
                  type="text"
                  placeholder="Search by book title or author"
                  value={this.value}
                  onChange={this.updateQuery}
                />
              </Debounce>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid" />
          </div>
        </div>
        {query !== "" && books.length > 0 ? (
          <BookShelf
            title="Search Results"
            books={books}
            onMovingBook={(id, shelf) => {
              this.props.onMovingBook(id, shelf);
            }}
          />
        ) : (
          <div> No results Found </div>
        )}
      </div>
    );
  }
}

export default Search;
