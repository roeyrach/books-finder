import React from "react";

import Book from "./Book.js";

const BooksList = () => {
  const books = [
    {
      volumeInfo: {
        title: "The Contemporary Thesaurus of Search Terms and Synonyms",
        authors: ["Sara D. Knapp"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
      },
    },
    {
      volumeInfo: {
        title: "Hands-on Information Literacy Activities",
        authors: ["Jane Birks", "Fiona Hunt"],
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
      },
    },
  ];

  return (
    <div>
      <Book {...books[0]} />
      <Book {...books[1]} />
    </div>
  );
};

export default BooksList;
