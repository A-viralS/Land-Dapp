import React from 'react'
import { Footer2, Ownernav, } from '../components'
import {Inspectorform} from '../constants';


const add_land_inspector = () => (
  <div className="bg-white w-full overflow-hidden h-full ">
    <Ownernav/>
    <div>
      <div className="justify-center items-center bg-slate-200 flex">
          <form action="" method="" className=" mt-[50px] flex flex-col w-full items-center">
              <div className={`flex w-[80%] justify-center flex-col max-ss:items-center`}>
                <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10  md:w-fit w-full justify-center ">
                  { Inspectorform.map((Userform, index) =>(
                    <label htmlFor={Userform.id} className="text-left text-gray-800 md:w-fit w-full flex flex-col  text-[18px] font-poppins">
                      {Userform.id}
                      <input type={Userform.type} placeholder={Userform.title} className="text-black p-2  border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0" />
                    </label>
                  ))}
                </div>
              <button type='submit' className=" mt-10 px-[30px] w-[200px] py-[20px] mb-10 border-radius text-[18px] bg-green-600 font-poppins">Submit</button>
              </div>
          </form>
      </div>
    </div>
    <div className=" bottom-0 w-full">
      <Footer2/>
    </div>
  </div>
)

export default add_land_inspector