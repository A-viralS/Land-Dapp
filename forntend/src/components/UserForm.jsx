import {Userform} from '../constants';
import { Link } from 'react-router-dom';
// import abi from "../contractJson/LandRegistrationSystem.json"
// import {ethers} from "ethers"
// import { useState, useEffect } from "react";
// import  vanillaContract from "../pages/vanillaContract"
// import { ethers } from 'hardhat';

const UserForm = ({state}) => {
  // const [state, setState] = useState({
  //   provider:null,
  //   signer:null,
  //   contract:null
  // })
  // const [account, setAccount] = useState('Not Connected')


  // useEffect(()=>{
  //   const template=async()=>{
  //     const contractAddress="0x9C548a28c9BD60594F0FE095EAb010859Efe546B";
  //     const contractABI=abi.abi;

  //     //Metamask Part
  //     //1. In order to do transactions on goerli testnet
  //     //Metamask consist of infura
  //     try{
  //       const {ethereum}=window;
  //       const account = await ethereum.request({
  //         method: "eth_requestAccounts"
  //       })
  //       window.ethereum.on("accountsChanged", ()=>{window.location.reload()})
  //       setAccount(account);
  //       const provider = new ethers.providers.Web3Provider(ethereum);//read the blockchain
  //       const signer = provider.getSigner();//write the blockchain
  //       const contract = new ethers.Contract(contractAddress,
  //         contractABI,
  //         signer
  //       )
  //       console.log(contract)
  //       setState({provider,signer,contract});
  //       // return contract.getUsers
  //     }catch(error){
  //       alert(error);
  //     }
  //   }
  //   template();
  // }, [])

  const registerUser = async(event)=>{
    event.preventDefault();
    const {contract} = state;
    const _emailAddress = document.querySelector("#emailAddress").value;
    const  _firstName = document.querySelector("#firstName").value;
    const  _lastName = document.querySelector("#lastName").value;
    const _contact = document.querySelector("#contact").value;
    const _residentialAddress = document.querySelector("#residentialAddress").value;
    const _ghanaCard = document.querySelector("#ghanaCard").value;

    console.log("Transaction Is In Progress.")
    const transaction = await contract.createUser(
        _emailAddress,
        _firstName,
        _lastName,
        _contact,
        _residentialAddress,
        _ghanaCard,
      )
      await transaction.wait();
    console.log("Transaction Is Successful.")
    alert("Transaction Is Successful.")
    // const name = document.querySelector("#name")
    // const age = document.querySelector("#age")
    // console.log(name,age)
  }

  return (
    <div className="justify-center items-center bg-slate-200 flex">
        <form action="" method="" onSubmit={registerUser} className=" mt-[50px] flex flex-col w-full items-center">
            <div className={`flex w-[80%] justify-center flex-col max-ss:items-center`}>
              <div className="grid md:grid-cols-2 md:gap-x-20 gap-y-10  md:w-fit w-full justify-center ">
                { Userform.map((Userform, index) =>(
                  <label htmlFor={Userform.id} className="text-left text-gray-800 md:w-fit w-full flex flex-col  text-[18px] font-poppins">
                    {Userform.id}
                    <input id={Userform.id} type={Userform.type} placeholder={Userform.title} className="text-black p-2  border border-radius border-blue-500 text-[18px] font-poppins letterSpacing md:w-[400px] ss:w-[50vw] w-[70vw] focus:outline-0" />
                  </label>
                ))}
                  <div>
                    <label className="text-left text-gray-800 md:w-fit w-full flex flex-col  text-[18px] font-poppins">Gender</label>
                    <select name="Gender" id="user-gender"  className="text-black p-2  border border-radius border-blue-500 " >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                  </div>
              </div>
            <button type='submit' className=" mt-10 px-[30px] w-[200px] py-[20px] border-radius text-[18px] bg-green-600 font-poppins">
              <Link to={" "}>Submit</Link>
            </button>
            </div>
            {/* <input type="text" id='name' />
            <input type="text" id='age' />
            <button>Submit</button> */}
        </form>
    </div>
  )
}

export default UserForm