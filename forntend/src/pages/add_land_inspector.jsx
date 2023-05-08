import React from 'react';
import {logo1} from "../assets";
import { Footer2, Ownernav } from '../components';
import { Inspectorform } from '../constants';
import ErrorMessage from "../components/ErrorMessage";
import { useState } from 'react';

const add_land_inspector = ({ state }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const registerInspector = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const { contract } = state;
    const _walletAddress = document.querySelector("#walletAddress").value;
    const _district = document.querySelector("#district").value;
    const _city = document.querySelector("#city").value;

    try {
      if (_walletAddress && _city && _district) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.");
        const transaction = await contract.createLandInspector(
          _walletAddress,
          _district,
          _city,
        );
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
        setIsSubmitting(false);
      } else {
        setErrorMessage("All fields are required for registering your land");
        setIsError(true);
      }
    } catch (error) {
      setIsSubmitting(false);
      console.log(error);
      setErrorMessage("An error occurred while registering the land");
      setIsError(true);
    }
  };

  return(
    <div className="bg-gray-800">
      <Ownernav/>
      <div className='flex flex-col bg-gray-900 md:my-0 my-10 relative' >
      {isError && (
          <ErrorMessage message={errorMessage}/>
        )}
        <div className="justify-center items-center flex h-[45.9vh] mt-10 z-[50]">
          <form action="" method="" onSubmit={registerInspector} className="mt-[150px] mb-[100px] flex flex-col w-full items-center">
            <div className={`flex w-[80%] justify-center flex-col max-ss:items-center`}>
              <h1 className="text-gray-600 font-poppins text-[20px] py-5">Enter The Land Inspector's Details below </h1>
              <div className="flex flex-col  md:gap-x-20 gap-y-10 md:w-fit w-full justify-center ">
                { Inspectorform.map((Userform, index) =>(
                  <label htmlFor={Userform.id} className="text-left text-gray-300 md:w-fit w-full flex flex-col  text-[18px] font-poppins">
                    {Userform.name}
                    <input type={Userform.type} placeholder={Userform.title} id={Userform.id} className=" text-gray-4200 p-2  border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0 bg-gray-700" />
                  </label>
                ))}
              </div>
              {isSubmitting ? (
                <button
                  type="button"
                  className="mt-10 px-[30px] w-[200px] py-[20px] border-radius text-[18px] bg-gray-400 text-gradient font-poppins"
                  disabled
                >
                  Submitting...
                </button>
              ) : (
                <>
                  <button
                    type="submit"
                    className="mt-10 px-[30px] w-[200px] py-[20px] border-radius bg-blue-gradient text-gray-900  text-[18px] font-poppins hover:bg-indigo-600 transition-all duration-200 ease-in-out"
                  >
                    Submit
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        <div className='w-[200px] h-[200px]'>
          <div className='absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient'></div>
          <div className='absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient'></div>
          <div className='absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient'></div>
          <div className='absolute z-[1] w-[100%] h-[100%] opacity-80 right-0 top-0 bg-gray-900'></div>
          <img src={logo1} alt="WaterMark" className="absolute opacity-5 w-full h-full top-0 -z-[0]"/>
        </div>
      </div>
      <div className=" bottom-0 w-full">
        <Footer2/>
      </div>
    </div>
  )
  


//   return(
 
//    <div className="bg-white w-full overflow-hidden h-full ">
//      <Ownernav/>
//      <div>
//      {isError && 
//           <>
//           <ErrorMessage message={errorMessage}/>
//           </>
//           }
//         {errorMessage && (
//             <ErrorMessage message={errorMessage}/>  
//         )}
//        <div className="justify-center items-center bg-slate-200 flex ">
//            <form action="" method="" onSubmit={registerInspector} className="mt-[50px] mb-[100px] flex flex-col w-full items-center">
//                <div className={`flex w-[80%] justify-center flex-col max-ss:items-center`}>
//                  <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10  md:w-fit w-full justify-center ">
//                    { Inspectorform.map((Userform, index) =>(
//                      <label htmlFor={Userform.id} className="text-left text-gray-800 md:w-fit w-full flex flex-col  text-[18px] font-poppins">
//                        {Userform.id}
//                        <input type={Userform.type} placeholder={Userform.title} id={Userform.id} className="text-black p-2  border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0" />
//                      </label>
//                    ))}
//                  </div>
//                  {isSubmitting ? (
//                     <button
//                       type="button"
//                       className="mt-10 px-[30px] w-[200px] py-[20px] border-radius text-[18px] bg-gray-400 font-poppins"
//                       disabled
//                     >
//                       Submitting...
//                     </button>
//                   ) : (
//                     <>
//                       <button
//                         type="submit"
//                         className="mt-10 px-[30px] w-[200px] py-[20px] border-radius text-white bg-indigo-500 text-[18px] font-poppins hover:bg-indigo-600 transition-all duration-200 ease-in-out"
//                         onClick={checkForError}
//                       >
//                         Submit
//                       </button>
//                     </>
//                   )}
//                </div>
//            </form>
//        </div>
//      </div>
//      <div className=" bottom-0 w-full">
//        <Footer2/>
//      </div>
//    </div>
//  )
}

export default add_land_inspector