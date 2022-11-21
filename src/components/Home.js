import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
const Home = (props) => {
	const navigate = useNavigate()
	const todoRef = useRef()
	const [alert, setAlert] = useState("")

	const nav = () => {
		if (todoRef.current.value === "") {
			setAlert("Username cannot be empty")
			return
		}
		// console.log(todoRef.current.value)
		// alert(todoRef.current.value)
		props.setUserName(todoRef.current.value)
		navigate("/bookslist")
	}

	return (
		<div>
			<h4>Welcome Page</h4>
			<input type={"text"} ref={todoRef} />
			<button onClick={nav}>Click To Add User</button>
			<h1>{alert}</h1>
		</div>
	)
}
export default Home
