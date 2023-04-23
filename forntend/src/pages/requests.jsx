import { UserTopbar, Footer2, Requestdetails } from "../components";
import styles from "../style";
import { search } from "../assets";
import { useEffect, useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

const requests = ({ state }) => {
  const [landList, setLandList] = useState([]);
  const { contract } = state;
  const [errorMessage, setErrorMessage] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [isError, setIsError] = useState(false);

  const searchLand = async (event) => {
    event.preventDefault();
    const _search = document.querySelector("#search").value;
    if (_search) {
      const data = await contract.searchLands(_search);
      setLandList(data);
      checkForEmpty(data);
    } else {
      setErrorMessage("City or District is Required.");
      setIsError(true);
      setIsOpen(true);
    }
  };

  const checkForError = () => {
    if (errorMessage !== "") {
      setIsError(true);
      setIsOpen(true);
    }
  };

  const checkForEmpty = (data) => {
    if (data.length === 0) {
      setIsEmpty(true);
      setTimeout(() => {
        setShowMessage(true);
      }, 5000);
    } else {
      setIsEmpty(false);
      setShowMessage(false);
    }
  };

  const buyLandFromOwner = async (event) => {
    event.preventDefault();
    const _landId = document.querySelector("#buy").value;

    try {
      if (_landId) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.");
        const transaction = await contract.buyLand(_landId);
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
      } else {
        setErrorMessage(
          "All fields are required for registering your land"
        );
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

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="bg-white w-full overflow-hidden h-full ">
      <UserTopbar />
      <div className={` w-full bg-slate-300 flex flex-col`}>
        {isError && (
          <ErrorMessage
            message={errorMessage}
            isOpen={isOpen}
            handleClose={handleClose}
          />
        )}
        {showMessage && (
          <div className="px-4">
            <p className="text-red-500 font-semibold text-center py-2">
              Land Not Found
            </p>
          </div>
        )}
        <form
          action=""
          method=""
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
            <button onClick={searchLand}>
              <img src={search} alt="Search" className="w-[30px] h-[30px]"/> 
            </button>
          </div>
        </form>
        {landList.length === [] ? (
            landList.map((land) => 
              (
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
                            {land.landId.toString()}
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
  
                        <div className={` flex flex-row items-center xs:gap-10 border-b border-cyan-900 w-[100%] xs:w-[75%] p-3`}>
                          <div className=" font-bold text-[20px] w-[200px]">
                            Status
                          </div>
                          <div className="text-[18px] font-semibold max-xs:w-fit">
                            {land.forSell.toString()=="true" ?
                            <>
                            <div className="text-[18px] font-semibold">
                              <button id="buy" onClick={buyLandFromOwner} className={`login-btn hover:bg-blue-600 focus:bg-green-700 `} value={land.landId.toString()}>
                                Buy
                              </button>
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
            <Requestdetails state={state}/>
        )}

          
    </div>
    <div className=" bottom-0 w-full">
    <Footer2/>
    </div>
  </div>
  );
};

export default requests