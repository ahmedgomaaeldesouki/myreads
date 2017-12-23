import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import './css/App.css'

// components
import Library from '../src/Components/Library.js'
import Search  from '../src/Components/Search.js'

class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
   this.fetchMyBooks()

  } //componentDidMount
  
  fetchMyBooks () {
    BooksAPI.getAll()
    .then((books) => {
    this.setState ({books: books})
    })
  
  } // fetchMyBooks


handleShelfChange =  (id, shelf) => {
    BooksAPI.update({id},shelf)
            .then ( (data) => { 
              this.fetchMyBooks()
                // console.log (data) 
             })
            
  } // handleShelfChange
  
  render() {
  
    return (
      <div className="app">
          <Route
             exact
             path="/search"
             render={({history}) => (
               <Search
                 myBooks={this.state.books}
                 onMovingBook={(id,shelf)=>{
                   this.handleShelfChange(id,shelf)
                   history.push('/')
                 }}
               />
             )}
           />
        
        <Route
            exact
            path="/"
            render={()=>(
              <Library
                books={this.state.books}
                onMovingBook={(id,shelf)=>{
                  this.handleShelfChange(id,shelf)
                }}
              />
            )}
          />

      </div>
    )
  }
}



export default BooksApp
