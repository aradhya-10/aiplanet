import Events from '../components/Events'
import Hero from '../components/Hero'
// import React, { useEffect } from 'react'
// import hackathons from "../Hackathons";

const Home = () => {
	// useEffect(() => {
	//   localStorage.setItem('hackathons', JSON.stringify(hackathons));
	// }, [])
	
  return (
	<div>
		<Hero/>
		<Events/>
	</div>
  )
}

export default Home
