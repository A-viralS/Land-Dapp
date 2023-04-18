import {BrowserRouter, Route, Routes} from 'react-router-dom';
import abi from "./contractJson/LandRegistrationSystem.json";
import {ethers} from "ethers";
import { useState, useEffect } from "react";

import {About, Add_land_inspector, Home, Land_inspector, Land_registration,  Login, Profile, Property, Requested, Requests, User_dashboard, User_registration, Nopage, Register_land, Verify_land, Verify_user, Inspector_dashboard, } from './pages/index'

const App = () => {
  
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account, setAccount] = useState('Not Connected')

  useEffect(()=>{
    const template=async()=>{
      const contractAddress="0x9C548a28c9BD60594F0FE095EAb010859Efe546B";
      const contractABI=abi.abi;

      //Metamask Part
      //1. In order to do transactions on goerli testnet
      //Metamask consist of infura
      try{
        const {ethereum}=window;
        const account = await ethereum.request({
          method: "eth_requestAccounts"
        })
        window.ethereum.on("accountsChanged", ()=>{window.location.reload()})
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);//read the blockchain
        const signer = provider.getSigner();//write the blockchain
        const contract = new ethers.Contract(contractAddress,
          contractABI,
          signer
        )
        console.log(contract)
        setState({provider,signer,contract});
        // return contract.getUsers
      }catch(error){
        alert(error);
      }
    }
    template();
  }, [])

  return (
  <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home'  element={<Home />}/>
        <Route path='/about'  element={<About />} />
        <Route path='/add land inspector'  element={<Add_land_inspector />} />
        <Route path='/land inspector'  element={<Land_inspector />} />
        <Route path='/land registration'  element={<Land_registration />} />
        <Route path='/login'  element={<Login state={state} account={account}/>} />
        <Route path='/profile'  element={<Profile />} />
        <Route path='/property'  element={<Property />} />
        <Route path='/requested'  element={<Requested />} />
        <Route path='/requests'  element={<Requests />} />
        <Route path='/user dashboard'  element={<User_dashboard />} />
        <Route path='/user registration'  element={<User_registration state={state}/>} />
        <Route path='/register land'  element={<Register_land/>} />
        <Route path='/inspector dashboard'  element={<Inspector_dashboard/>} />
        <Route path='/verify land'  element={<Verify_land/>} />
        <Route path='/verify user'  element={<Verify_user/>} />
        
        <Route path='/*'  element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
  }
export default App