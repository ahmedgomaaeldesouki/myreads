import React, { Component } from 'react';
import { PropTypes }  from 'prop-types'

 class Book extends Component {
    
    static propTypes = {
        bookimage: PropTypes.object.isRequired,
        booktitle: PropTypes.string.isRequired,
        bookauthors: PropTypes.array,
        shelf: PropTypes.string.isRequired,
        onMovingBook: PropTypes.func.isRequired
      }

   handleShelfChange =  (e)=>{
        let shelf = e.target.value ; 
        this.props.onMovingBook (this.props.id ,shelf)
      }

    render() {

       const bookimage = this.props.bookimage.smallThumbnail || this.props.bookimage.thumbnail
     
        return (
            <li>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${bookimage}")` }}></div> 
                <div className="book-shelf-changer">
                  <select onChange={this.handleShelfChange} defaultValue={this.props.shelf} >   
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                  </div>
                     </div>
                <div className="book-title">{`${this.props.booktitle}`}</div>
                {this.props.authors && this.props.authors.map((author,index)=>(
                  <div
                    className="book-authors"
                    key={index}
                  >{`${author}`}</div>
                ))}
              </div>
          </li>
        );
    }
}



export default Book