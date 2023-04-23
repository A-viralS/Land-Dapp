import { Footer2, Topnav, } from '../components'
import { useEffect, useState, React } from "react";
import ErrorMessage from "../components/ErrorMessage";


const verify_land = ({state}) =>{
  const [landList, setLandList] = useState([])
  const [errorMessage, setErrorMessage] = useState([]);
  const {contract} = state;

  useEffect(() =>{
    const getUnverifiedLand = async (event) => {
      const data = await contract.getNonVerifiedLands();
      setLandList(data)
      // console.log(data)
    };
    contract && getUnverifiedLand()
  }, [contract])

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage!=[]){
      setError(true);
    }
    setIsOpen(true);
  }

  const verifyland = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const _landId = document.querySelector("#landid").value;    
    try {
      if (_landId) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.")
        const transaction = await contract.verifyLand(_landId);
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
      }
      else{
        setErrorMessage("All fields are required for registering your land");
      }
    } catch (error) {
      const Message = error.error.data.originalError.message; // extract the error message
      console.log(Message); // log the error message to the console
      // set the error message in state to display it to the user 
      setErrorMessage(Message);
      checkForError()
    }
  checkForError()
  }

  
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
      setIsOpen(false);
  }


  return(
<div className="bg-white w-full overflow-hidden h-full">
  <Topnav />
  <div className="flex justify-center my-3 flex-col items-center ">
  {isError && <ErrorMessage message={errorMessage} isOpen={isOpen} handleClose={handleClose}/>}
  {landList.length === 0 ? (
            <p className="text-[24px] text-red-700 my-[100px]">There is no Land Pending to be Verified.</p>
          ) : (
            landList.map((land) => (
              <>
                <div
                  key={Math.random()}
                  className="flex border-gray-400 border sm:w-[80%] w-full flex-col my-10 items-end pr-10"
                >
                  <table className="sm:w-full w-[80%] text-left">
                  <div>
                    <h1 className="text-center text-[20px]">Land Details</h1>
                  </div>
                    <tbody>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">District</th>
                        <td className="bg-gray-200 p-2">{land.district}</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">City</th>
                        <td className="bg-gray-200 p-2">{land.city}</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">State</th>
                        <td className="bg-gray-200 p-2">{land.state}</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">
                          Property Number
                        </th>
                        <td className="bg-gray-200 p-2">
                          {land.propertyNumber}
                        </td>
                      </tr>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">Size</th>
                        <td className="bg-gray-200 p-2">{land.size.toString()} Square Feet</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">
                          Land Document
                        </th>
                        <td className="bg-gray-200 p-2">{land.landDocument}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center my-2">
                    <button id="landid" className="add-btn focus:bg-blue-300 focus:text-black" value={land.landId.toString()} onClick={verifyland}>
                      Verify
                    </button>
                  </div>
                </div>
              </>
            ))
          )}


  </div>
  <div className="bottom-0 w-full">
    <Footer2 />
  </div>
</div>

  )
} 


export default verify_land