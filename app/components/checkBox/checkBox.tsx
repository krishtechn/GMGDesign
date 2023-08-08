import React, { useState } from 'react'

const checkBox = () => {
  let radiodata = ["Night","Day","Morning"];
  let [userselect,setuserselect] = useState("");
  alert(userselect);
  return (
    <div className="flex gap-10 justify-center items-center">
      {
        radiodata.map(items=><div className="inline-flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full p-3"
        >
          <input
            id="html"
            name="selectradio"
            type="radio"
            value={items}
            onChange={(e)=>setuserselect(e.target.value)}
            className="before:content[''] peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border border-[#d0d5dd] text-[#d0d5dd] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#7f56d9] checked:before:bg-[#7f56d9] hover:before:opacity-10"
          />
           <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-[#7f56d9] opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[10px] w-[10px]"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
          </svg>
        </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none text-[#475467] font-semibold">
          {items}
        </label>
      </div>
      
    )
  }
    </div>)
}

export default checkBox