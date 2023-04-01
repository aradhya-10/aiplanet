// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// shadow-[#efeff3]
const Event = ({ days, hack }) => {
  const navigate = useNavigate();
  return (
    <div
      className="py-2 cursor-pointer"
      onClick={() => navigate("/submissions", { state: { hack: hack } })}
    >
      <div className="p-8 card h-[280px] w-[360px] relative bg-white rounded-2xl shadow-lg shadow-[#e8e6e5] border-[#f7f5f4] border-[1px]">
        <div className="top flex pb-4">
          <img
            className="w-24 h-24 rounded-lg object-cover"
            src={hack.img}
            alt=""
          />
          <h2 className="head text-xl font-semibold px-8 my-auto">
            {hack.title}
          </h2>
        </div>
        <div className="desc pb-12">
			{hack.summary}
        </div>
        <div className="foot italic absolute bottom-4 right-4 text-sm text-gray-500">
          {`uploaded ${days} days ago`}
        </div>
      </div>
    </div>
  );
};

export default Event;
