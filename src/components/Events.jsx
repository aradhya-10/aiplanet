import { useState } from 'react'
import Event from "./Event"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { ClickAwayListener } from '@mui/material';

const Events = () => {
	const hackathons = JSON.parse(localStorage.getItem('hackathons'));
	const [showFav, setShowFav] = useState(false)
	const [isClicked, setIsClicked] = useState(false)
	const [newSort, setNewSort] = useState("bg-green-100")
	const [oldSort, setOldSort] = useState("bg-white")
	const [one, setOne] = useState("border-b-green-600")
	const [two, setTwo] = useState("border-b-transparent")
	const handleButton = (sub) =>{
		if(sub==="all")
		{
			setShowFav(false);
			setOne("border-b-green-600");
			setTwo("border-b-transparent")
		}
		else
		{
			setShowFav(true);
			setTwo("border-b-green-600");
			setOne("border-b-transparent")
		}
	}

	const handleClick = () =>{
		setIsClicked(!isClicked)
	}

	const handleClickAway = () =>{
		if(isClicked)
		{
			setIsClicked(false);
		}
	}

	const handleSort = (sort) =>{
		if(sort==='new')
		{
			setNewSort("bg-green-100");
			setOldSort("bg-white")
		}
		else
		{
			setOldSort("bg-green-100")
			setNewSort("bg-white");
		}
	}

  return (
	<div className="container relative px-36 py-16 z-auto">
		<div className="top flex justify-between">
		<div className="left flex">
			<button className={`one px-4 font-[500] text-lg ${one} border-b-4`} onClick={()=>handleButton("all")}>
				All Submissions	
			</button>
			<button className={`two px-4 font-[500] text-lg ${two} border-b-4`} onClick={()=>handleButton("fav")}>
				Favourite Submissions
			</button>
		</div>
		<div className="right flex text-gray-500 relative">
			<div className="search border-2 border-gray-500 rounded-full p-2 mx-8 absolute right-36 w-80">
				<SearchIcon className="mr-2"/>
				Search
			</div>
			<div className="sort relative">
			<ClickAwayListener onClickAway={handleClickAway}>
			<button className="border-2 border-gray-500 rounded-full py-2 px-4 cursor-pointer absolute right-0 w-36 " onClick={handleClick}>
				{oldSort==="bg-white"?"Newest":"Oldest"}
				<ArrowDropDownIcon className="ml-4 mr-2" />
			</button>
			</ClickAwayListener>
			{
				isClicked && (
					<div className="sorting absolute rounded-xl overflow-hidden top-14 right-0 text-black shadow-md z-10">
						<button className={`new w-36 text-center ${oldSort} py-2`} onClick={() => handleSort("old")}>Oldest</button>
						<button className={`old w-36 text-center ${newSort} py-2`} onClick={() => handleSort("new")}>Newest</button>
					</div>	
				)
			}
			</div>
		</div>
		</div>
		<div className="items my-8">
		<div className="arrange	grid grid-cols-3 gap-8">
			{
				hackathons.map((hack)=>{
					if(!showFav)
						return <Event days={9} hack={hack} key={hack.id}/>
					if(hack.fav)
						return <Event days={9} hack={hack} key={hack.id}/>
					return <></>
				})
			}
			{/* <Event days={9} />
			<Event days={9} />
			<Event days={9} />
			<Event days={9} />
			<Event days={9} /> */}
		</div>
	</div>
	</div>
  )
}

export default Events