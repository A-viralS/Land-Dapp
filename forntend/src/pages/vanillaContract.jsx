import abi from "../contractJson/LandRegistrationSystem.json"
import {ethers} from "ethers"
import { useState,useEffect } from "react";

const vanillaContract = () => {


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

  return(
    state
  )
}
  export default vanillaContract
