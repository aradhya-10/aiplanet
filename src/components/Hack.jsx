import { useEffect, useState } from 'react';
import Edit from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useLocation, useNavigate } from 'react-router-dom';

const Hack = () => {
	const navigate = useNavigate();
	const {state: {hack}} = useLocation();
	const [deleteClicked, setDeleteClicked] = useState(false);
	const [isFav, setIsFav] = useState(hack.fav);

	useEffect(() => {
		window.scrollTo({top:0, left:0, behavior: "smooth"});
	  }, []);

	const handleClick = () => {
		setIsFav(!isFav)
		hack.fav = isFav;
		//further code to update the fav value of hack
	}

	const handleDelete = () => {
		console.log(hack);
		setDeleteClicked(true)
	}

	const handleCancel = () => {
		setDeleteClicked(false)
	}

	const applyDelete = () => {
		const hacks = JSON.parse(localStorage.getItem('hackathons'));
		console.log(hacks);
		for(var i=0; i<hacks.length; i++)
		{
			if(hacks[i]["id"]===hack['id'])
			{
				hacks.splice(i,1);
				for(var j=i; j<hacks.length; j++)
				{
					hacks[i]["id"]=j;
				}
				break;
			}
		}
		localStorage.setItem('hackathons', JSON.stringify(hacks));
		navigate('/')
	}

  return (
	<div className="hack">
	{
		deleteClicked && 
		<div className="del">
			<div className="w-full h-full fixed left-0 top-0 z-10 bg-black opacity-40"></div>
			<div className="w-full h-full fixed left-0 top-0 z-20 flex justify-center items-center">
				<div className="absolute bg-white opacity-100 w-[440px] h-48 p-6 rounded-3xl">
					<h2 className="text-xl font-medium ">Delete Model</h2>
					<p className="text-gray-500 py-2 text-sm">This action is irreversible. Are you sure you want to delete this model?</p>
					<div className="absolute bottom-6  right-6">
						<button className="cancel border-2 border-gray-600 px-4 py-2 rounded-lg mr-4" onClick={handleCancel}>
							Cancel
						</button>
						<button className="cancel border-none bg-red-600 text-white px-4 py-2 rounded-lg shadow-sm shadow-gray-600" onClick={applyDelete}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	}
	<div className="py-24 px-36 bg-[#003044] text-white relative flex justify-between z-0">
		<div className="left w-3/4">
			<div className="top flex justify-start items-center">
				<img 
					className="logo w-32 bg-slate-500 h-32 rounded-lg object-cover"
					src={hack.img} 
					alt=""
				/>
				<div className="title font-semibold text-5xl ml-12">
					{hack.title}
				</div>
			</div>
			<p className="py-6 text-lg">
				{hack.summary}	
			</p>
			<div className="bottom flex justify-start items-center">
				<div className="fav pb-1 pr-6 border-r-2 border-r-gray-400">
					{
						isFav && (
							<StarIcon onClick={handleClick}/>
					)}
					{
						!isFav && (
						<StarOutlineIcon onClick={handleClick}/>
					)}
				</div>
				<div className="flex items-center rounded-full bg-slate-600 px-3 py-1 text-sm font-light ml-6">
					<CalendarTodayIcon className="pr-2" />
					{hack.start}
				</div>
			</div>
		</div>
		<div className="right">
			<div className="wrapper flex flex-col justify-start">
			<button className="w-32 text-center py-2 rounded-xl bg-transparent border-2 my-2">
				<Edit className="mr-2"/>
				Edit
			</button>
			<button className="w-32 text-center py-2 rounded-xl bg-transparent border-2 my-2" onClick={handleDelete}>
				<DeleteIcon className="mr-2"/>
				Delete
			</button>
			</div>
		</div>
	</div>
	<div className="about flex py-14 px-36 justify-between">
		<div className="left pr-36">
			<div className="desc">
				<h3 className="pb-5 text-xl font-[500]">Description</h3>
					{hack.description}
			</div>
		</div>
		<div className="right mr-16">
			<h3 className="py-2 text-gray-500 ">Hackathon</h3>
			<h2 className="py-2 text-xl font-medium">{hack.name}</h2>
			<div className="py-2 dur flex text-gray-500 text-sm items-center">
				<CalendarTodayIcon className="mr-1 p-1" />
				<p>{hack.start} - {hack.end}</p>
			</div>
			<div className="py-4 wrapper font-medium flex flex-col justify-start text-gray-600">
			<a className="w-56 text-center py-2 rounded-xl border-gray-400 border-2 my-2 cursor-pointer" href={hack.github} target="__blanck">
				<GitHubIcon className="mr-2"/>
				GitHup Repository
			</a>
			<a className="w-56 text-center py-2 rounded-xl border-gray-400 border-2 my-2 cursor-pointer" href={hack.other} target="__blanck">
				<LaunchIcon className="mr-2"/>
				Other Link
			</a>
			</div>
			</div>
	</div>
	</div>
  )
}

export default Hack