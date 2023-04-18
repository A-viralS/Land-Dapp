import React from 'react'
import styles from "../style"
import Button from './Button'


const Requestdetails = () => (
  <div className="w-[100vw] mt-10">
    <div className=" flex flex-col gap-0 items-center">
      
      <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:border-radius xs:border border-b  xs:pl-20 max-xs:px-5">

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px] ">
                Location
              </div>
              <div className="text-[18px] font-semibold max-xs:w-fit">Accra, Dansoman.sdzfjvibiidsfb oibhewfsdfbhef</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Survey Number
              </div>
              <div className="text-[18px] font-semibold max-xs:w-fit">GH0001</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Property Number
              </div>
              <div className="text-[18px] font-semibold max-xs:w-fit">0001</div>
            </div>

            <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
              <div className=" font-bold text-[20px] w-[200px]">
              Market value
              </div>
              <div className="text-[18px] font-semibold max-xs:w-fit">$50000</div>
            </div>
            <div className="text-[18px] font-semibold">
                  <a href="#" className="">
                    <button className={`login-btn focus:bg-green-700   `}>
                        Request For Land
                    </button>
                  </a>
            </div>
      </div>
        
    </div>
    <div className={` w-[100%] h-[1px] bg-black mt-[50px]`}>
    </div>
  </div>
)

export default Requestdetails