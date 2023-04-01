import { useState } from "react";
import cover from "../resources/images/cover.png"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useNavigate } from "react-router-dom";

const Submit = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [name, setName] = useState("")
	const [github, setGithub] = useState("")
	const [other, setOther] = useState("")
	const [summary, setSummary] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const [description, setDescription] = useState("");
	const [img, setImg] = useState(null);

	const handleSubmit = (e) =>{
		e.preventDefault();
		const hackathons = JSON.parse(localStorage.getItem('hackathons'));
		var length = localStorage.getItem('length');
		length+=1;
		localStorage.setItem('length',length.toString);
		const newHack = {
			id: length,
			title: title,
			summary: summary,
			description: description,
			img: img,
			start: start,
			end: end,
			name: name,
			github: github,
			other: other,
			fav: false
		};
		hackathons.push(newHack);
		localStorage.setItem('hackathons', JSON.stringify(hackathons));
		navigate('/')
	}
	const [textareaheight, setTextareaheight] = useState(5); 
	const handleChange = (e) => {
		
		setDescription(e.target.value);
		console.log( e.target.scrollHeight);
		const height = e.target.scrollHeight; 
		const rowHeight = 24; 
		const trows = Math.ceil(height / rowHeight) - 1; 
		
		if (textareaheight !== trows) { 
			setTextareaheight(trows); 
		} 		
		
		if (e.target.value === ""){
			setTextareaheight(5);
		}
    } 
  return (
    <div className="px-36 py-16 lg:w-10/12 w-full">
      <div className="bg-white rounded-2xl">
        <form className="wrapper pl-12 py-12 pr-40">
          <h1 className="pb-6 text-3xl font-[550]">
            New Hackathon SubmissioHmmn
          </h1>
          <div className="py-3 title">
            <p className="text-lg">Title</p>
            <input
              className="border-2 border-gray-300 rounded-lg w-full p-3 my-2"
              type="text"
              placeholder="Title of you Submission"
			  onInput={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="py-3 summary">
            <p className="text-lg">Summary</p>
            <input
			  className="border-2 border-gray-300 rounded-lg w-full p-3 my-2"
              type="text"
              placeholder="A short summary of your submission"
			  onInput={(e) => setSummary(e.target.value)}
			  />
          </div>
          <div className="py-3 desc relative">
            <p className="text-lg">Desription</p>
            <textarea
              className={`w-full border-2 text-base border-gray-300 rounded-lg my-2 p-3`}
              type="text"
			  rows={textareaheight}
			  onChange={handleChange}
              placeholder="Write a long description of your project. You can describe your idea and approach here."
			  />
            <p className="absolute right-0 bottom-0 text-gray-400 text-sm">
              <span className="italic">6/3,000 </span>characters
            </p>
          </div>
          <div className="py-3 covImg">
            <p className="text-lg">Cover Image</p>
            <p className="my-2 text-gray-400">
              Minimum Resolution: 360px X 360px
            </p>



					{
						img &&(
							<div className="flex justify-between p-2 bg-slate-100 rounded-xl items-center">
								<div className="left flex items-center">
									<img 
										className="w-16 mr-4"
										src={URL.createObjectURL(img)} 
										alt="Not Found" />
									<div className="name">
										{img.name}
									</div>
								</div>
								<div className="flex right text-gray-500 text-sm items-center cursor-pointer" onClick={() => setImg(null)}>
									Reupload 
									<CloudUploadIcon className="mx-3"/>
								</div>
							</div>
						)
					}
				{
					!img && (<div className="flex  w-full">
                    <label className="flex cursor-pointer flex-col rounded-md">
                      <div className="flex flex-col items-center justify-center">
						<img 
							src={cover} 
							alt=""
							className="relative top-0 z-10" />
                      <input
                        type="file"
                        name="images"
                        className={
							"h-12 font-semibold w-[60%] hidden"
                        }
                        required
                        accept="image/*"
                        onChange={(e) => setImg(e.target.files[0])}
						/>
					</div>
                    </label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {/* {files.map((ele, index) => {
                        return (
                          <div key={index} className="overflow-hidden relative">
                            <i
                              onClick={() => {
                                // removeImage(ele);
                              }}
                              className="text-white mdi mdi-close absolute right-1 hover:text-white cursor-pointer z-[20]"
                            >
                              x
                            </i>
                            <img
                              className="h-20 w-20 rounded-md"
                              src={ele}
                              alt="uploads"
                            />
                          </div>
                        );
                      })} */}
                    </div>
					</div>)
				}




          </div>
          <div className="py-3 hack">
            <p className="text-lg">Hackathon Name</p>
            <input
              className="border-2 border-gray-300 rounded-lg w-full p-3 my-2"
              type="text"
              placeholder="Enter the name of the hackathon"
			  onInput={(e) => setName(e.target.value)}
            />
          </div>
          <div className="py-3 dur flex">
			<div className="left w-full mr-8 ">
				<p className="pb-2 text-lg">Hackathon Start Date</p>
				<input
				type="date"
				placeholder="Select start date"
				className="p-3 border-2 border-gray-300 rounded-lg w-full start placeholder-gray-300 my-2 "
				onInput={(e) => setStart(e.target.value)}
				/>
			</div>
			<div className="right w-full">
				<p className="pb-2 text-lg">Hackathon End Date</p>
				<input
				type="date"
				placeholder="Select end date"
				className="p-3 border-2 border-gray-300 rounded-lg w-full end placeholder-gray-300 my-2 "
				onInput={(e) => setEnd(e.target.value)}
				/>
			</div>
          </div>
          <div className="py-3 repo">
            <p className="text-lg">Githup Repository</p>
            <input
              className="border-2 border-gray-300 rounded-lg w-full p-3 my-2"
              type="text"
              placeholder="Enter your submission's public GitHub repository link"
			  onInput={(e) => setGithub(e.target.value)}
            />
          </div>
          <div className="pt-3 links">
            <p className="text-lg">Other Links</p>
            <input
              className="border-2 border-gray-300 rounded-lg w-full p-3 mt-2"
              type="text"
              placeholder="You can upload a video demo or URL of your demo app here."
			  onInput={(e) => setOther(e.target.value)}
            />
          </div>
        </form>
		<div className="border-t-[1px] mx-12 pt-6 pb-8" >
          <button onClick={handleSubmit} className="submit bg-green-600 p-3 px-4 font-semibold rounded-lg text-white shadow-sm shadow-gray-500">
            Upload Submission
          </button>
		</div>
      </div>
    </div>
  );
};

export default Submit;
