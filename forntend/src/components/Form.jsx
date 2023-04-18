import { useState } from "react";
import * as ipfsClient from "ipfs-http-client";
import { Buffer } from "buffer";
import { landForm } from "../constants";

const Form = () => {
  const [file, setFileUrl] = useState(null);
  const [ipfsHash, setIpfsHash] = useState(localStorage.getItem("hash") || "");
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

      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      setFileUrl(url);
      setIpfsHash(added.toString());
      localStorage.setItem("hash", added.path); // Store the IPFS hash in local storage
      setIsSubmitting(false);
      console.log(setIpfsHash);
    } catch (error) {
      console.log(error);
      setErrorMessage("An error occurred while submitting the form");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="justify-center items-center bg-slate-200 flex pb-10">
      <form
        className="mt-[50px] flex flex-col w-full items-center"
        onSubmit={handleSubmit}
      >
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
                    onChange={handleFileChange}
                    placeholder={landForm.title}
                    className="text-black p-2 border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0"
                  />
                ) : (
                  <input
                    type={landForm.type}
                    placeholder={landForm.title}
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
              >
                Submit
              </button>
              {errorMessage && (
                <p className="mt-5 text-red-500 font-bold text-center">
                  {errorMessage}
                </p>
              )}
            </>
          )}
          {ipfsHash && (
            <p className="mt-5 text-green-500 font-bold text-center">
              Your file hash: {ipfsHash}
            </p>
          )}
        </div>
      </form>

    </div>
  );
  
};

export default Form;