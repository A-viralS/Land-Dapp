// import { Footer2, Topnav, } from '../components'
// import { useEffect, useState, React } from "react";
// import * as ipfsClient from "ipfs-http-client";
// import { Buffer } from "buffer";
// import ErrorMessage from "../components/ErrorMessage";


// const verify_land = ({state}) =>{
//   const [landList, setLandList] = useState([])
//   const [errorMessage, setErrorMessage] = useState([]);
//   const {contract} = state;

//   useEffect(() =>{
//     const getUnverifiedLand = async (event) => {
//       const data = await contract.getNonVerifiedLands();
//       setLandList(data)
//       // console.log(data)
//     };
//     contract && getUnverifiedLand()
//   }, [contract])

//   const [isError, setError] = useState(false);
//   function checkForError() {
//     if(errorMessage!=[]){
//       setError(true);
//     }
//     setIsOpen(true);
//   }

//   const verifyland = async (event) => {
//     event.preventDefault();
//     const { contract } = state;
//     const _landId = document.querySelector("#landid").value;    
//     try {
//       if (_landId) {
//         console.log("Transaction Is In Progress.");
//         alert("Transaction Is In Progress.")
//         const transaction = await contract.verifyLand(_landId);
//         await transaction.wait();
//         console.log("Transaction Is Successful.");
//         alert("Transaction Is Successful.");
//       }
//       else{
//         setErrorMessage("All fields are required for registering your land");
//       }
//     } catch (error) {
//       const Message = error.error.data.originalError.message; // extract the error message
//       console.log(Message); // log the error message to the console
//       // set the error message in state to display it to the user 
//       setErrorMessage(Message);
//       checkForError()
//     }
//   checkForError()
//   }
//   const client = ipfsClient.create({
//     host: "ipfs.infura.io",
//     port: 5001,
//     protocol: "https",
//     headers: {
//     authorization: auth,
//     },
//   });

//   const fileFetch = async (event, ipfsHash) =>{
//     try {
//       const file = await client.cat(ipfsHash);
//       // Do something with the file data, such as save it to a variable or download it
//     } catch (error) {
//       console.log(error);
//       setErrorMessage("An error occurred while retrieving the file");
//     }
//   }

  
//   const [isOpen, setIsOpen] = useState(true);

//   function handleClose() {
//       setIsOpen(false);
//   }


//   return(
// <div className="bg-white w-full overflow-hidden h-full">
//   <Topnav />
//   <div className="flex justify-center my-3 flex-col items-center ">
//   {isError && <ErrorMessage message={errorMessage} isOpen={isOpen} handleClose={handleClose}/>}
//   {landList.length === 0 ? (
//             <p className="text-[24px] text-red-700 my-[100px]">There is no Land Pending to be Verified.</p>
//           ) : (
//             landList.map((land) => (
//               <>
//                 <div
//                   key={Math.random()}
//                   className="flex border-gray-400 border sm:w-[80%] w-full flex-col my-10 items-end pr-10"
//                 >
//                   <table className="sm:w-full w-[80%] text-left">
//                   <div>
//                     <h1 className="text-center text-[20px]">Land Details</h1>
//                   </div>
//                     <tbody>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">District</th>
//                         <td className="bg-gray-200 p-2">{land.district}</td>
//                       </tr>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">City</th>
//                         <td className="bg-gray-200 p-2">{land.city}</td>
//                       </tr>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">State</th>
//                         <td className="bg-gray-200 p-2">{land.state}</td>
//                       </tr>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">
//                           Property Number
//                         </th>
//                         <td className="bg-gray-200 p-2">
//                           {land.propertyNumber}
//                         </td>
//                       </tr>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">Size</th>
//                         <td className="bg-gray-200 p-2">{land.size.toString()} Square Feet</td>
//                       </tr>
//                       <tr>
//                         <th className="bg-gray-100 p-2 w-1/4 sm:w-1/6">
//                           Land Document
//                         </th>
//                         <td className="bg-gray-200 p-2">{land.landDocument}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                   <div className="text-center my-2">
//                     <button id="landid" className="add-btn focus:bg-blue-300 focus:text-black" value={land.landId.toString()} onClick={verifyland}>
//                       Verify
//                     </button>
//                   </div>
//                 </div>
//               </>
//             ))
//           )}


//   </div>
//   <div className="bottom-0 w-full">
//     <Footer2 />
//   </div>
// </div>

//   )
// } 


// export default verify_land


  // const fetchLandDocument = async (ipfsHash) => {
  //   try {
  //     const file = await client.cat(ipfsHash);
  //     // const fileBuffer = Buffer.from(file);
  //     // const fileUrl = URL.createObjectURL(new Blob([fileBuffer]));
  //     setLandDocumentUrl(file);
  //     console.log(file)
  //   } catch (error) {
  //     console.log(error);
  //     setErrorMessage("An error occurred while retrieving the file");
  //   }
  // };

  // import { Buffer } from "buffer";






import { Footer2, Topnav } from "../components";
import { useEffect, useState } from "react";
import * as ipfsClient from "ipfs-http-client";
import ErrorMessage from "../components/ErrorMessage";
import { logo1 } from '../assets';


const verify_land = ({ state }) => {
  const [landList, setLandList] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);
    const [landDocumentUrl, setLandDocumentUrl] = useState('');
  const { contract } = state;

  useEffect(() => {
    const getUnverifiedLand = async (event) => {
      const data = await contract.getNonVerifiedLands();
      // fetchLandDocument(data.landDocument)
      setLandList(data);
    };
    contract && getUnverifiedLand();
  }, [contract]);

  const [isError, setError] = useState(false);
  function checkForError() {
    if (errorMessage != []) {
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
        alert("Transaction Is In Progress.");
        const transaction = await contract.verifyLand(_landId);
        await transaction.wait();
        console.log("Transaction Is Successful.");
        alert("Transaction Is Successful.");
        setErrorMessage('');
      } else {
        setErrorMessage("All fields are required for registering your land");
      }
    } catch (error) {
      const Message = error.error.data.originalError.message;
      console.log(Message);
      setErrorMessage(Message);
      checkForError();
    }
    checkForError();
  };

  const client = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
  });

  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
  }

  function toSentenceCase(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  
  return (
    <div className="bg-primary w-full overflow-hidden h-full">
      <Topnav />
      <div className=" min-h-[77.5vh]">
        <div className=" flex justify-center flex-col items-center relative pt-[50px]">
        {isError && <ErrorMessage message={errorMessage} isOpen={isOpen} handleClose={handleClose}/>}
        {landList.length === 0 ? (
          <p className="text-[24px] text-gradient font-extrabold font-poppins  my-[100px] min-h-[25.7vh] z-[50]">There is no Land Pending to be Verified.</p>
        ) : (
          landList.map((land) => (
            <div
              key={Math.random()}
              className="flex border-gray-400  pl-2 border-radius border z-[50] sm:w-[80%] w-full flex-col my-10 items-end pr-10 "
            >
              <table className="sm:w-full w-[100%]">
                <thead className="">
                  <tr className="mt-5">
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">District</th>
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">City</th>
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">State</th>
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">Property Number</th>
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">Size</th>
                    <th className="bg-black-600 text-gradient text-center py-4 mx-2 border-b-sky-700 border-b  ">Land Document</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="item-center justify-center ">
                    <td className=" border-radius py-10 text-white text-center">{toSentenceCase(land.district)}</td>
                    <td className=" border-radius py-10 text-white text-center">{toSentenceCase(land.city)}</td>
                    <td className=" border-radius py-10 text-white text-center">{toSentenceCase(land.state)}</td>
                    <td className=" border-radius py-10 text-white text-center">{toSentenceCase(land.propertyNumber)}</td>
                    <td className=" border-radius py-10 text-white text-center">{toSentenceCase(land.size.toString())} Square Feet</td>
                    <td className="border-radius  py-10 text-white p-2 whitespace-wrap">{toSentenceCase(land.landDocument)}</td>
                  </tr>
                </tbody>
              </table>
                      <button
                        id="landid"
                        className="add-btn focus:bg-blue-300 mr-10 focus:text-black"
                        value={land.landId.toString()}
                        onClick={verifyland}
                      >
                        Verify
                      </button>
            </div>
          ))
        )}
  
        <div className="w-[200px] h-[200px]">
          <div className="absolute z-[1] w-[20%] h-[25%] right-0 top-0 left-30 pink__gradient"></div>
          <div className="absolute z-[3] w-[40%] h-[40%] right-0 top-0 white__gradient"></div>
          <div className="absolute z-[2] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
          <div className='absolute z-[1] w-[100%] h-[100%] opacity-80 right-0 top-0 bg-primary'></div>
            <img src={logo1} alt="WaterMark" className="absolute opacity-5  w-full h-full top-0 -z-[0]"/>
        </div>

        </div>
      </div>
      <div className="bottom-0 w-full">
        <Footer2 />
      </div>
    </div>

    )
} 


  export default verify_land

