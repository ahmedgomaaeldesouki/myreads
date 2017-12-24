import React from "react";
import { PropTypes } from "prop-types";

const handleShelfChange = (e, props) => {
  props.onMovingBook(props.id, e.target.value);
};

const Book = props => {
  const bookimage = props.bookimage.smallThumbnail || props.bookimage.thumbnail;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${bookimage}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={e => handleShelfChange(e, props)}
              value={props.shelf}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{`${props.booktitle}`}</div>
        {props.authors &&
          props.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {`${author}`}
            </div>
          ))}
      </div>
    </li>
  );
};

Book.propTypes = {
  bookimage: PropTypes.object.isRequired,
  booktitle: PropTypes.string.isRequired,
  bookauthors: PropTypes.array,
  shelf: PropTypes.string.isRequired,
  onMovingBook: PropTypes.func.isRequired
};

export default Book;
