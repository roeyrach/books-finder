import React, { useState } from "react"

import Book from "./Book.js"

const BooksList = (props) => {
	async function fetching() {
		const url =
			"https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyAHsKpoDCFfLdMVct7VhEqDCoUrqqXuYaM"
		const res = await fetch(url)
		const arr = await res.json()
		props.setBooksArr(arr.items)
	}
	const books = [
		// {
		// 	volumeInfo: {
		// 		title: "The Contemporary Thesaurus of Search Terms and Synonyms",
		// 		authors: ["Sara D. Knapp"],
		// 		imageLinks: {
		// 			smallThumbnail:
		// 				"http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
		// 			thumbnail:
		// 				"http://books.google.com/books/content?id=zYw3sYFtz9kC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
		// 		},
		// 	},
		// },
		// {
		// 	volumeInfo: {
		// 		title: "Hands-on Information Literacy Activities",
		// 		authors: ["Jane Birks", "Fiona Hunt"],
		// 		imageLinks: {
		// 			smallThumbnail:
		// 				"http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
		// 			thumbnail:
		// 				"http://books.google.com/books/content?id=77RZAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
		// 		},
		// 	},
		// },
	]

	return (
		<div>
			<h1>Hello {props.userName}</h1>
			{/* <Book {...books[0]} />
			<Book {...books[1]} /> */}
			<button onClick={fetching}>Click to books</button>
			{props.booksArr.map(book => <Book volumeInfo={book.volumeInfo}/>)}
		</div>
	)
}

export default BooksList
