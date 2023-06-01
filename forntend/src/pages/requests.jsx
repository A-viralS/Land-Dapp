import { UserTopbar, Footer2, Requestdetails } from "../components";
import styles from "../style";
import { ethers } from "ethers";
import { search, approve_badge } from "../assets";
import React, { useEffect, useState, useContext } from "react";
import ErrorMessage from "../components/ErrorMessage";

const requests = ({ state }) => {
  const AppContext = React.createContext({});
  const [landList, setLandList] = useState([]);
  const { contract } = state;
  const [errorMessage, setErrorMessage] = useState("");
  // const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(true);



  const searchLand = async (event) => {
    event.preventDefault();
    const _search = document.querySelector("#search").value;
    if (_search) {
      const data = await contract.searchLands(_search);
      console.log(data.length)
      if (data.length>0) {
        setLandList(data);
      }
      else {
        setLandList([])
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 5000);
      }
      // checkForEmpty();

    } else {
      setErrorMessage("City or District is Required.");
      setIsError(true);
      setIsOpen(true);
    }
  };

  // const checkForError = () => {
  //   if (errorMessage !== "") {
  //     // setIsError(true);
  //     setIsOpen(true);
  //   }
  // };

  // const checkForEmpty = () => {
  //   if (landList==0) {
  //     // setIsEmpty(true);
  //     setShowMessage(true);
  //     setTimeout(() => {
  //       setShowMessage(false);
  //     }, 5000);
  //   } else {
  //     setIsEmpty(false);
  //   }
  // };



  const buyLandFromOwner = async (event) => {
    event.preventDefault();
    const _landId = document.querySelector("#buy").value;
    try {
      if (_landId) {
        console.log("Transaction is in progress.");
        alert("Transaction is in progress.");
  
        // Get the marketValue of the land
        console.log(_landId);
        const land = landList.find((land) => land.landId.toString() === _landId);
        const marketValue = land.marketValue;
  
        // Convert marketValue from cedis to Ether using the exchange rate
        const exchangeRate = 0.00005; // Replace with the actual exchange rate
        const ether = marketValue * exchangeRate;
  
        // Send the transaction with the value in Ether
        const transaction = await contract.buyLand(_landId, {
          value: ethers.utils.parseEther(String(ether)),
          gasLimit: 200000, // Replace with an appropriate gas limit
        });
  
        await transaction.wait();
  
        // Check if the transaction was successful
        console.log("Ownership of the land has been transferred.");
        alert("Ownership of the land has been transferred.");
        // if (transaction.status === 1) {
        //   console.log("Transaction is successful.");
        //   alert("Transaction is successful.");
  
        //   // Transfer ownership of the land
        //   await contract.buyLand(_landId).send({
        //     from: accounts[0],
        //     gas: 200000, // Replace with an appropriate gas limit
        //   });
  
          
        // } else {
        //   console.log("Transaction failed.");
        //   alert("Transaction failed.");
        // }
      } else {
        setErrorMessage("Transaction failed.");
        setIsError(true);
        setIsOpen(true);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.reason);
      setIsError(true);
      setIsOpen(true);
    }
  };
  


  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div className="bg-primary w-full overflow-hidden h-full relative">
      <UserTopbar />
      <div className="flex flex-col w-full py-10 relative min-h-[77.5vh]">
        <div className={` w-full flex flex-col z-[50]`}>
          {isError && (
            <ErrorMessage
              message={errorMessage}
              isOpen={isOpen}
              handleClose={handleClose}
            />
          )}

          {showMessage && (
            <div className="px-4 transition-all absolute self-center bg-red-600  w-full">
              <p className="text-white font-semibold open-sans text-[24px] text-center py-2 animate-pulse ">
                Land Not Found
              </p>
            </div>
          )}

          <form
          onSubmit={searchLand} 
            className={`flex ml-[60%]  xs:${styles.flexLeft} w-[400px] flex md:ml-[70%] xs:ml-[50px] pt-[50px] max-xs:ml-[20px]`}
          >
            <div
              className={` flex flex-row p-[10px] border mt-5 border-gray-900`}
            >
              <input
                type="text"
                id="search"
                className="ml-3 text-[18px] focus:outline-0 bg-transparent font-poppins"
                placeholder="Search land"
              />
              <button type="submit">
                <img src={search}alt="Search" className="w-[30px] h-[30px]"/> 
              </button>
            </div>
          </form>

          {landList.length != [] ? (
              landList.map((land) => 
                (
                  <>
                    <div className=" flex flex-col gap-0 items-center">
                      
                      <div className="flex flex-col my-3 xs:w-[80%] w-[100vw] gap-y-2 xs:border-radius xs:border border-b  xs:pl-20 max-xs:px-5">
                        <div key={Math.random()}>
                          <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                            <div className=" font-bold text-[20px] w-[200px]  text-secondary text-opacity-80">
                              Location
                            </div>
                            <div className="text-[18px] font-semibold max-xs:w-fit text-white">
                              {land.state}, {land.city}, {land.district}
                            </div>
                          </div>
        
                          <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                            <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                              Property Number
                            </div>
                            <div className="text-[18px] font-semibold max-xs:w-fit text-white">
                              {land.landId.toString()}
                            </div>
                          </div>
        
                          <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                            <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                              Market value
                            </div>
                            <div className="text-[18px] font-semibold max-xs:w-fit text-white">
                              {land.marketValue.toString()}
                            </div>
                          </div>
        
                          <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                            <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                              Owner
                            </div>
                            <div className="text-[18px] font-semibold max-xs:w-fit text-white">
                              {land.owner}
                            </div>
                          </div>
    
                          <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                            <div className=" font-bold text-[20px] w-[200px] text-secondary text-opacity-80">
                              Status
                            </div>
                            <div className="text-[18px] font-semibold max-xs:w-fit text-white">
                              {land.forSell.toString()=="true" ?
                              <>
                              <div className="text-[18px] font-semibold">
                                <form action="" onSubmit={buyLandFromOwner}>
                                  <button id="buy" className={`login-btn hover:bg-blue-600 focus:bg-green-700 `} value={land.landId.toString()}>
                                    Buy
                                  </button>

                                </form>
                              </div>
                              </>
                              :
                              <>
                                <p className="text-red-500 font-semibold text-center py-2">
                                  Not For Sell
                                </p>
                              </>
                              }
                            </div>
                          </div>
    
                        </div>
                      </div>
                        
                    </div>
                    <div className={` w-[100%] h-[1px] bg-black mt-[50px]`}>
                    </div>
                  </>
                  )
              )
            ) : (
              // <Requestdetails state={state}/>
              <h1>hi</h1>
          )}

            
        </div>
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[2] w-[20%] h-[25%] opacity-50 right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[1] w-[40%] h-[40%] opacity-50 right-0 top-0 white__gradient"></div>
          <div className="absolute z-[3] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100vw] h-full opacity-80 right-0 top-0 bg-primary'></div>
            <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-full right-0 top-0 -z-[0]"/>
        </div>
      </div>

      <div className=" bottom-0 w-full z-[50]">
      <Footer2/>
      </div>
    </div>
  );
};

export default requests


// const buyLandFromOwner = async (event) => {
//   event.preventDefault();
//   const _landId = document.querySelector("#buy").value;

//   const convertToEther = (ghanaCedis) => {
//     const ether = ghanaCedis * conversionRate;
//     return ether;
//   };

//   const valueInWei = web3.utils.toWei(val, "ether");
//   try {
//     if (_landId) {
//       console.log("Transaction Is In Progress.");
//       alert("Transaction Is In Progress.");
//       const transaction = await contract.buyLand(_landId);
//       console.log("hello")
//       await transaction.wait();
//       console.log("Transaction Is Successful.");
//       alert("Transaction Is Successful.");
//     } else {
//       setErrorMessage(
//         "All fields are required for registering your land"
//       );
//       setIsError(true);
//       setIsOpen(true);
//     }
//   } catch (error) {
//     console.log(error);
//     setErrorMessage(error.reason);
//     setIsError(true);
//     setIsOpen(true);
//   }
// };

  