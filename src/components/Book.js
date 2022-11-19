import React from "react";

const Book = ({ volumeInfo }) => {
  const { title, imageLinks, authors, description } = volumeInfo;
  return (
    <div className="book-container">
      <div className="book-image-container">
        <img src={imageLinks.thumbnail} alt="book-img" />
      </div>
      <div className="book-details-container">
        <div className="title-container">{title}</div>
        <div className="authors-container">
          {authors.map((author) => (
            <div>{author}</div>
          ))}
        </div>
        <div className="description-container">{description}</div>
      </div>
    </div>
  );
};

export default Book;
