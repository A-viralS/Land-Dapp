import { Footer2, Topnav, } from '../components'
import { useEffect, useState, React } from "react";

const verify_land = ({state}) =>{
  const [landList, setLandList] = useState([])
  const {contract} = state;

  useEffect(() =>{
    const getUnverifiedLand = async (event) => {
      const data = await contract.getNonVerifiedLands();
      setLandList(data)
      // console.log(data)
    };
    contract && getUnverifiedLand()
  }, [contract])

  const verifyland = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const _landId = document.querySelector("#landid").value;
    const _InspectorId = ""
    
    try {
      if (_landId) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.")
        const transaction = await contract.verifyLand(
          _landId,
          _InspectorId
        );
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
      }
      else{
        setErrorMessage("All fields are required for registering your land");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while registering the land", error.message);
    }
  checkForError()
  }


  return(
<div className="bg-white w-full overflow-hidden h-full">
  <Topnav />
  <div className="flex justify-center my-3 flex-col items-center">
    {landList.map((land) => (
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
                  0001 {land.landId.toString()}
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
    ))}
  </div>
  <div className="bottom-0 w-full">
    <Footer2 />
  </div>
</div>

  )
} 


export default verify_land