import { useNavigate } from "react-router-dom"
import logo from "../resources/images/AI Planet Logo.png" 

const Navbar = () => {
	const navigate = useNavigate();
	const handleClick = () =>{
		navigate('/');
	}
  return (
  <div className="container py-2 mx-auto px-36 bg-white">
		<img 
			src={logo} 
			alt="" 
			className="cursor-pointer"
			onClick={handleClick}/>
  </div>
  )
}

export default Navbar