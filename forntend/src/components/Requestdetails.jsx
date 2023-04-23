import React from 'react'
import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";



const Requestdetails = ({state}) =>{
  const [landList, setLandList] = useState([])
  const {contract} = state;
  const [errorMessage, setErrorMessage] = useState([]);
  const [Empty, setisEmpty] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() =>{
    const getLand = async (event) => {
      const data = await contract.getLands();
      setLandList(data)
      // console.log(data)
    };
    contract && getLand()

  }, [contract])

  const buyLandFromOwner = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const _landId = document.querySelector("#buy").value;

      try {
          console.log("Transaction Is In Progress.");
          alert("Transaction Is In Progress.")
          const transaction = await contract.buyLand(_landId);
          await transaction.wait();
          console.log("Transaction Is Successful.");
          alert("Transaction Is Successful.");

      } catch (error) {
        // if (error.code === "UNPREDICTABLE_GAS_LIMIT") {
          const errorMessage = error.error.data.originalError.message; // extract the error message
          console.log(errorMessage); // log the error message to the console
          // set the error message in state to display it to the user
          setErrorMessage(errorMessage);
          checkForError()
        // }
      }
  };

  function checkForError() {
    if (errorMessage!=[]) {
      setError(true);
    }
    setIsOpen(true);
  }

  function checkForEmpty() {
    if (List.length === 0) {
      setisEmpty(true);
    } else {
      setisEmpty(false);
    }
  }

  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
      setIsOpen(false);
    }

  return (
    <div className="w-[100vw] mt-10">
    {isError && <ErrorMessage message={errorMessage} isOpen={isOpen} handleClose={handleClose}/>}
    {landList.map((land) => (
      <>
        {land.forSell.toString()=="true" &&
        <>
          <div className=" flex flex-col gap-0 items-center">
            
            <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:border-radius xs:border border-b  xs:pl-20 max-xs:px-5">
              <div key={Math.random()}>
                <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                  <div className=" font-bold text-[20px] w-[200px] ">
                    Location
                  </div>
                  <div className="text-[18px] font-semibold max-xs:w-fit">
                    {land.state}, {land.city}, {land.district}
                  </div>
                </div>

                <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                  <div className=" font-bold text-[20px] w-[200px]">
                    Property Number
                  </div>
                  <div className="text-[18px] font-semibold max-xs:w-fit">
                    {land.propertyNumber}
                  </div>
                </div>

                <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                  <div className=" font-bold text-[20px] w-[200px]">
                    Market value
                  </div>
                  <div className="text-[18px] font-semibold max-xs:w-fit">
                    {land.marketValue.toString()}
                  </div>
                </div>

                <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                  <div className=" font-bold text-[20px] w-[200px]">
                    Owner
                  </div>
                  <div className="text-[18px] font-semibold max-xs:w-fit">
                    {land.owner}
                  </div>
                </div>
              </div>

              <div className="text-[18px] font-semibold">
                <button id="buy" onClick={buyLandFromOwner} className={`login-btn hover:bg-blue-600 focus:bg-green-700 `} value={land.landId.toString()}>
                  Buy
                </button>
              </div>

            </div>
              
          </div>
          <div className={` w-[100%] h-[1px] bg-black mt-[50px]`}>
          </div>
        </>
      }
        </>

))};
  </div>
    
    
  );
} 


export default Requestdetails