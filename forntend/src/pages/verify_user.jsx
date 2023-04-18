import React from 'react'
import { Footer2, Topnav,Form } from '../components'

const verify_user = () => (
  <div className="bg-white w-full overflow-hidden h-full ">
    <Topnav/>
    <div>
      <div className="flex justify-center my-3 ">
        <div className="flex border-gray-400 border w-[90%] max-ss:w-[70%] max-xs:w-[85%] flex-col my-10">
          <div>
            <h1 className=" max-ss:ml-[40%] ml-[40px]">User Details</h1>
          </div>

          <div className={`flex flex-row ss:p-[20px] py-[20px] ss:gap-[10%] items-center  max-xs:my-4 max-ss:flex-col`}>

            <div className="justify-center items-center ss:w-[15%] w-full">
              <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
              <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                Name
              <hr className="w-full  bg-black max-ss:opacity-0" />
              </p>
              <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500 max-md:text-[14px] break-all text-[16px] ss:mt-[20px]">
                Adeyoju Ibukunoluwa
              </h3>

              </div>
            </div>

            <div className="justify-center items-center ss:w-[15%] w-full flex-wrap ">
              <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
              <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                Email
              <hr className="w-full  bg-black max-ss:opacity-0" />
              </p>
              <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500 break-all text-[16px] ss:mt-[20px]">
                adeyojuibukunoluwa1@gmail.com
              </h3>

              </div>
            </div>

            <div className="justify-center items-center ss:w-[15%] w-full">
              <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
              <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                Contact
              <hr className="w-full  bg-black max-ss:opacity-0" />
              </p>
              <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500  text-[16px] ss:mt-[20px]">
                0508855102
              </h3>

              </div>
            </div>

            <div className="justify-center items-center ss:w-[15%] w-full">
              <div className=" max-ss:border-b border-black max-ss:w-[100%] flex max-ss:flex-row flex-col justify-left ">
              <p className="p-[10px] text-center max-ss:text-slate-900 max-ss:ml-[40px]">
                Ghana Card
              <hr className="w-full  bg-black max-ss:opacity-0" />
              </p>
              <h3 className="p-[10px] text-center font-poppins font-normal max-ss:text-slate-500  text-[16px] ss:mt-[20px]">
                Hello World
              </h3>

              </div>
            </div>

          </div>
            <div className="  max-ss:ml[60%] max-xs:ml-5 ml-[70%]">
              <form action=" ">
                <div>
                  <button className={`addUser-btn focus:bg-blue-300 focus:text-black max-ss:px-[40px]`}>Verify</button>
                </div>
              </form>
            </div>

        </div>

      </div>
    </div>
    <div className=" bottom-0 w-full">
    <Footer2/>
    </div>
  </div>
)

export default verify_user