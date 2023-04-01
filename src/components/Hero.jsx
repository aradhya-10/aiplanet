import waves from "../resources/images/waves.png"
import bulb from "../resources/images/bulb.png"
import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
  return (
	<div className="py-24 px-36 bg-[#003044] text-white relative">
		<div className="left w-3/5">
		<h1 className=" text-5xl font-semibold ">Hackathon Submissions</h1>
		<p className="my-7 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quisquam. Voluptate voluptatibus, molestiae sapiente accusamus est voluptates neque impedit quod itaque maxime deleniti natus.</p>
		<button className="bg-green-600 py-3 px-4 font-semibold rounded-lg" onClick={()=>{navigate('/upload')}}>Upload Submision</button>
		</div>
		<div className="right absolute bottom-0 right-0">
			<img src={waves} alt="" />
		</div>
		<div className="right absolute bottom-16 right-40 w-52 ">
			<img className=" " src={bulb} alt="" />
		</div>
	</div>
  )
}

export default Hero