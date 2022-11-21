import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useRef, useState } from "react"
import "./App.css"

import Home from "./components/Home"
import BooksList from "./components/BooksList"
import WishList from "./components/WishList"

function App() {
	const [userName, setUserName] = useState("")
	const [booksArr, setBooksArr] = useState([])

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/bookslist">BooksList</Link>
						</li>
						<li>
							<Link to="/wishlist">Wish List</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="/bookslist"
						element={
							<BooksList
								userName={userName}
								setUserName={setUserName}
								booksArr={booksArr}
								setBooksArr={setBooksArr}
							/>
						}
					></Route>
					<Route path="/wishlist" element={<WishList />}></Route>
					<Route
						path="/"
						element={<Home userName={userName} setUserName={setUserName} />}
					></Route>
				</Routes>
			</div>
		</Router>
	)
}

export default App
