import {BrowserRouter, Route, Routes} from 'react-router-dom';
import abi from "./contractJson/LandRegistrationSystem.json";
import {ethers} from "ethers";
import { useState, useEffect } from "react";

import {About, Add_land_inspector, Home, Land_inspector, Land_registration,  Login, Profile, Property, Requested, Requests, User_dashboard, User_registration, Nopage, Register_land, Verify_land, Verify_user, Inspector_dashboard,Commissioner } from './pages/index'

const App = () => {
  
  const [state, setState] = useState({
    provider:null,
    signer:null,
    contract:null
  })
  const [account, setAccount] = useState("Not Connected")

  useEffect(()=>{
    const template=async()=>{
      // 0x5EF3a388AF7C8A152C67DbF56cDECe7fF2E76e55
      //
      // 0x693f7340f03DCeB56a4eBbf2d5946FF57111bC48
      // Ganache delpoyment key 0x461664E711508cf35d10D987cA97D43381D93ceB
      // Goerli new deployment key 0x51A8E56061bE5C44b014fA897C20aaC48D34623d
      const contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3";
      const contractABI=abi.abi;

      //Metamask Part
      //1. In order to do transactions on goerli testnet
      //Metamask consist of infura
      try {
        const { ethereum } = window;
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        window.ethereum.on('accountsChanged', () => {
          window.location.reload();
        });
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        console.log(contract);
        console.log(accounts);
        setState({ provider, signer, contract });
        // return contract.getUsers
      } catch (error) {
        console.log(error);
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
        <Route path='/commissioner'  element={<Commissioner state={state} />} />
        <Route path='/add land inspector'  element={<Add_land_inspector state={state} />} />
        <Route path='/land inspector'  element={<Land_inspector />} />
        <Route path='/land registration'  element={<Land_registration />} />
        <Route path='/login'  element={<Login state={state} account={account}/>} />
        <Route path='/profile'  element={<Profile state={state} account={account}/>} />
        <Route path='/property'  element={<Property state={state}/>} />
        <Route path='/requested'  element={<Requested state={state}/>} />
        <Route path='/requests'  element={<Requests state={state}/>} />
        <Route path='/user dashboard'  element={<User_dashboard state={state} account={account}/>} />
        <Route path='/user registration'  element={<User_registration state={state}/>} />
        <Route path='/register land'  element={<Register_land state={state}/>} />
        <Route path='/inspector dashboard'  element={<Inspector_dashboard state={state} account={account}/>} />
        <Route path='/verify land'  element={<Verify_land state={state}/>} />
        <Route path='/verify user'  element={<Verify_user state={state}/>} />
        
        <Route path='/*'  element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
  }
export default App