import { useState } from "react";
import * as ipfsClient from "ipfs-http-client";
import { Buffer } from "buffer";
import { landForm } from "../constants";
// import { ethers } from "ethers";
import {approve_badge} from "../assets"
import ErrorMessage from "./ErrorMessage";

const Form = ({ state }) => {
  const [file, setFileUrl] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(localStorage.getItem("hash") ||"");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectSecret = "816cc9713c7cf711fe8f266ec5392412";
  const projectId = "2NiR3FbQO66tZemocQ8819UJFSb";
  const auth = "Basic " + Buffer.from(projectId + ":" + projectSecret).toString("base64");

  const client = ipfsClient.create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
    authorization: auth,
    },
  });

  const handleFileChange = (event) => {
    setFileUrl(event.target.files[0]);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
    setErrorMessage("Please select a file");
    return;
    }
    setIsSubmitting(true);
    try {
      const added = await client.add({ content: file });
      localStorage.setItem("hash", added.path); // Store the IPFS hash in local storage
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      
      setFileUrl(url);
      setIpfsHash(added.path);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while submitting the form");
      setIsSubmitting(false);
    }
  };

  const registerLand = async (event) => {
    localStorage.setItem("hash", "");
    await handleSubmit(event);
    event.preventDefault();
    // Get the new IPFS hash value from localStorage
    // Update the value of the ipfsHash variable with the new value
    const { contract } = state;
    const _city = document.querySelector("#city").value;
    const _district = document.querySelector("#district").value;
    const _state = document.querySelector("#state").value;
    const _propertyNumber = document.querySelector("#propertyNumber").value;
    const _marketValue = document.querySelector("#marketValue").value;
    const _size = document.querySelector("#size").value;
    let newIpfsHash = localStorage.getItem("hash");
    const _landDocument = newIpfsHash;


      try {
        if (_landDocument&&_city&&_district&&_state&&_propertyNumber&&_marketValue&&_size ) {
          console.log("Transaction Is In Progress.");
          alert("Transaction Is In Progress.")
          console.log("Hash: ", _landDocument)
          const transaction = await contract.createLand(
            _city,
            _district,
            _state,
            _propertyNumber,
            _marketValue,
            _size,
            _landDocument
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
        setErrorMessage("An error occurred while registering the land");
      }
    checkForError()
  };

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage){
      setError(true);
    }
  }

  return (
    <div className="justify-center items-center flex pb-10 relative">

      <form
        className="mt-[50px] flex flex-col w-full items-center z-[50]"
        onSubmit={registerLand}
        >
          {isError && 
          <>
          <ErrorMessage message={errorMessage}/>
          </>
          }
          {errorMessage && (
            <ErrorMessage message={errorMessage}/>  
          )}
        <div className={`flex w-[80%] justify-center flex-col max-ss:items-center`}>
          <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10 md:w-fit w-full justify-center ">
            {landForm.map((landForm) => (
              <label
                htmlFor={landForm.id}
                key={landForm.id}
                className="text-left text-gray-800 md:w-fit w-full flex flex-col text-[18px] font-poppins"
              >
                {landForm.id}
                {landForm.type === "file" ? (
                  <input
                    type={landForm.type}
                    name={landForm.id}
                    id={landForm.id}
                    onChange={handleFileChange}
                    placeholder={landForm.title}
                    className="text-black p-2 border border-radius bg-sky-100  border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
                  />
                ) : (
                  <input
                    type={landForm.type}
                    placeholder={landForm.title}
                    id={landForm.id}
                    onSubmit={handleSubmit}
                    className="text-black p-2 border border-radius bg-sky-100 border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
                  />
                )}
              </label>
            ))}
          </div>
          {isSubmitting ? (
            <button
              type="button"
              className="mt-10 px-[30px] w-[200px] py-[20px] border-radius text-[18px] bg-gray-400 font-poppins"
              disabled
            >
              Submitting...
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="mt-10 px-[30px] w-[200px] py-[20px] border-radius text-white bg-indigo-500 text-[18px] font-poppins hover:bg-indigo-600 transition-all duration-200 ease-in-out"
                onClick={checkForError}
              >
                Submit
              </button>
            </>
          )}
          {/* {ipfsHash && (
            <p className="mt-5 text-green-500 font-bold text-center">
              Your file hash: {ipfsHash}
            </p>
          )} */}
        </div>
      </form>

      <div className="w-[200px] h-[200px]">`
        <div className="absolute z-[2] w-[20%] h-[25%] opacity-50 right-0 top-0 left-30 pink__gradient"></div>
        <div className="absolute z-[1] w-[40%] h-[40%] opacity-50 right-0 top-0 white__gradient"></div>
        <div className="absolute z-[3] w-[20%] h-[20%] right-0 top-0 blue__gradient"></div>
        <div className='absolute z-[1] w-full h-full opacity-80 right-0 top-0 bg-primary'></div>
          <img src={approve_badge} alt="WaterMark" className="absolute opacity-10  w-[800px] h-[800px] right-0 top-0 -z-[0]"/>
      </div>`
    </div>
  );
  
};

export default Form;