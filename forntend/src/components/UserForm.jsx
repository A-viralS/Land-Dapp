import { Userform } from '../constants';
import { useState } from 'react';
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from 'react-router-dom';
import { create } from '@web3-storage/w3up-client'
import axios from 'axios'
import FormData from 'form-data'



const UserForm = async ({ state }) => {
  const navigate = useNavigate();
  const [file, setFileUrl] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(localStorage.getItem("hash") || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const client = await create();


  const projectSecret = "90dfd298a0564c3fbf241a5b878e1f28";
  const projectId = "2NiR3FbQO66tZemocQ8819UJFSb";
  const pinataSecretApiKey = 'e4de29ff958b8f18dbd8';

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
      const formData = new FormData();
      formData.append('file', file, file.name);

      const response = await axios.post(
        'https://api.pinata.cloud/pinning/pinFileToIPFS',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${pinataSecretApiKey}`,
          },
        }
      );

      console.log('Pinata API Response:', response.data);

      // Extract the CID (Content Identifier) from the response
      const cid = response.data.IpfsHash;
      console.log('IPFS CID:', cid);

      localStorage.setItem("hash", cid); // Store the IPFS hash in local storage
      setIpfsHash(cid);

      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while submitting the form");
      setIsSubmitting(false);
    }
  };

  const registerUser = async (event) => {
    localStorage.setItem("hash", "");
    await handleSubmit(event);
    event.preventDefault();

    const { contract } = state;
    const _emailAddress = document.querySelector("#emailAddress").value;
    const _firstName = document.querySelector("#firstName").value;
    const _lastName = document.querySelector("#lastName").value;
    const _contact = document.querySelector("#contact").value;
    const _residentialAddress = document.querySelector("#residentialAddress").value;
    let newIpfsHash = localStorage.getItem("hash");
    const _ghanaCard = newIpfsHash;

    try {
      if (_emailAddress && _firstName && _lastName && _contact && _residentialAddress && _ghanaCard) {
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
        navigate('/user dashboard', { replace: true });
        alert("Transaction Is Successful.");
      }
      else {
        setErrorMessage("All fields are required for registering a User");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while registering the User");
    }
    checkForError()
  };

  const [isError, setError] = useState(false);
  function checkForError() {
    if (errorMessage) {
      setError(true);
    }
  }

  return (
    <div className="justify-center items-center z-[50]">
      <form action="" method="" onSubmit={registerUser} className=" mt-[50px] flex flex-col w-full items-center">
        {isError &&
          <>
            <ErrorMessage message={errorMessage} />
          </>
        }
        {errorMessage && (
          <ErrorMessage message={errorMessage} />
        )}
        <div className={`flex w-[80%] justify-center flex-col max-ss:items-center mb-10`}>
          <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10  md:w-fit w-full justify-center ">
            {Userform.map((Userform) => (
              <label
                htmlFor={Userform.id}
                key={Userform.id}
                className="text-left text-gray-600 md:w-fit w-full flex flex-col text-[18px] font-poppins"
              >
                {Userform.name}
                {Userform.type === "file" ? (
                  <input
                    type={Userform.type}
                    name={Userform.id}
                    id={Userform.id}
                    onChange={handleFileChange}
                    placeholder={Userform.title}
                    className="text-black bg-sky-200 p-2 border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
                  />
                ) : (
                  <input
                    type={Userform.type}
                    placeholder={Userform.title}
                    id={Userform.id}
                    onSubmit={handleSubmit}
                    className="text-black bg-sky-100 p-2 border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
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
        </div>
      </form>
    </div>
  );
};

export default UserForm;
