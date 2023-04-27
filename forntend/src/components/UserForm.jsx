import {Userform} from '../constants';
import * as ipfsClient from "ipfs-http-client";
import { Buffer } from "buffer";
import { useState } from 'react';
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from 'react-router-dom';
// import abi from "../contractJson/LandRegistrationSystem.json"
// import {ethers} from "ethers"
// import { useState, useEffect } from "react";
// import  vanillaContract from "../pages/vanillaContract"
// import { ethers } from 'hardhat';

const UserForm = ({state}) => {
  const navigate = useNavigate();
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

  const registerUser = async(event)=>{
    localStorage.setItem("hash", "");
    await handleSubmit(event);
    event.preventDefault();

    const {contract} = state;
    const _emailAddress = document.querySelector("#emailAddress").value;
    const  _firstName = document.querySelector("#firstName").value;
    const  _lastName = document.querySelector("#lastName").value;
    const _contact = document.querySelector("#contact").value;
    const _residentialAddress = document.querySelector("#residentialAddress").value;
    let newIpfsHash = localStorage.getItem("hash");
    const _ghanaCard = newIpfsHash;

    try {
      if (_emailAddress&&_firstName&&_lastName&&_contact&&_residentialAddress&&_ghanaCard ) {
        console.log("Transaction Is In Progress.");
        alert("Transaction Is In Progress.")
        console.log("Hash: ", _ghanaCard)
        const transaction = await contract.createUser(
          _emailAddress,
          _firstName,
          _lastName,
          _contact,
          _residentialAddress,
          _ghanaCard,
        )
        await transaction.wait();
        console.log("Transaction Is Successful.");
        navigate('/user dashboard', {replace: true});
        alert("Transaction Is Successful.");
      }
      else{
        setErrorMessage("All fields are required for registering a User");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while registering the User");
    }
  checkForError()
  }

  const [isError, setError] = useState(false);
  function checkForError() {
    if(errorMessage){
      setError(true);
    }
  }

  return (
    <div className="justify-center items-center bg-slate-200 flex">
        <form action="" method="" onSubmit={registerUser} className=" mt-[50px] flex flex-col w-full items-center">
        {isError && 
          <>
          <ErrorMessage message={errorMessage}/>
          </>
          }
          {errorMessage && (
            <ErrorMessage message={errorMessage}/>  
          )}
            <div className={`flex w-[80%] justify-center flex-col max-ss:items-center mb-10`}>
              <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10  md:w-fit w-full justify-center ">
                { Userform.map((Userform) =>(
                    <label
                    htmlFor={Userform.id}
                    key={Userform.id}
                    className="text-left text-gray-800 md:w-fit w-full flex flex-col text-[18px] font-poppins"
                    >
                    {Userform.id}
                    {Userform.type === "file" ? (
                      <input
                        type={Userform.type}
                        name={Userform.id}
                        id={Userform.id}
                        onChange={handleFileChange}
                        placeholder={Userform.title}
                        className="text-black p-2 border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
                      />
                    ) : (
                      <input
                        type={Userform.type}
                        placeholder={Userform.title}
                        id={Userform.id}
                        onSubmit={handleSubmit}
                        className="text-black p-2 border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
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
    </div>
  );
};

export default UserForm