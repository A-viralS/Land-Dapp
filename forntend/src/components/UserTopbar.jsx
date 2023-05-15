import React, { useState, useEffect } from 'react';
    import { Link, useLocation } from 'react-router-dom';
    import {close, logo1, menu,} from '../assets';
    import Web3 from 'web3';

    import {sideNavLinks} from '../constants';

    const UserTopbar = () => {

      const [isConnected, setIsConnected] = useState(true);
      // const [ethBalance, setEthBalance] = useState("");
      // const [ethAccount, setEthAccount] = useState("");
    
      // const detectCurrentProvider = () =>{
      //   let provider;
      //   if (window.ethereum) {
      //     provider = window.ethereum;
      //   }
      //   else if(window.web3){
      //     provider = window.web3.currentProvider;
      //   }
      //   else{
      //     alert("Non-ethereum browser detected. You should install Metamask.");
      //   }
      //   return provider
      // }
      // const ethDetails=  () =>{
      //   let ethBalance = web3.eth.getBalance(account);
      //   let ethAccount =  web3.eth.getAccounts();
      //   setEthBalance(ethBalance);
      //   setEthAccount(ethAccount)
      //   return ethBalance
      // }
    
      const onConnect = async() => {
        // try{
        //   const currentProvider = detectCurrentProvider();
        //   if(currentProvider){
        //     await currentProvider.request({method: 'eth_requestAccounts'});
        //     const web3 = new Web3(currentProvider);
        //     const userAccount = await web3.eth.getAccounts();
        //     const account = userAccount[0];
        //     let ethBalance =await web3.eth.getBalance(account);
        //     let ethAccount = await web3.eth.getAccounts();
        //     setEthBalance(ethBalance);
        //     setEthAccount(ethAccount)
            // setIsConnected(true);
        //   }
        // }
        // catch(err){
        //   console.log(err);
        // }

      }
      
      const onDisconnected = () =>{
        setIsConnected(false);
      }
      const [toggle, setToggle] = useState(false);

      const [activeLink, setActiveLink] = useState(null);
      const location = useLocation();
    
      // On page load, set the active link based on the current URL
      useEffect(() => {
        setActiveLink(location.pathname);
      }, [location]);
    
      // Update the active link in state and storage when a link is clicked
      function handleLinkClick(pathname) {
        setActiveLink(pathname);
        localStorage.setItem('activeLink', pathname);
      }
    
      // Retrieve the active link from storage on page load
      useEffect(() => {
        const storedActiveLink = localStorage.getItem('activeLink');
        if (storedActiveLink) {
          setActiveLink(storedActiveLink);
        }
      }, []);
    
      // Define the styles for the active and inactive links
      const activeStyle = "text-gradient";
      const inactiveStyle = "text-white";
    

      return (
        <div>
          <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo1} alt="Logo" className='w-[100px] h-[52px]'/>
    
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-10'>
              { sideNavLinks.map((nav, index) =>(
                <li 
                  key={nav.path} className={`font-poppins font-normal cursor-pointer  text-[16px] ${index === sideNavLinks.length-1 ? 'mr-0' : 'mr-20'} active:text-secondary text-black`}
                >
                  <Link
                    to={nav.path}
                    className={` ${activeLink === nav.path ? activeStyle : inactiveStyle} hover:text-secondary`}
                    onClick={() => handleLinkClick(nav.path)}
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
              <form action="login" method="">
                  <button id="meta-btn" className={` `} onClick={onDisconnected} >
                    <p className={`meta-p pl-10 text-white`}>logout</p>
                  </button>                  
              </form>
            </ul>
    
            <div className="sm:hidden flex flex-1 justify-end items-center">
                <div className={` ${toggle ? 'hidden' : 'block'} bg-black  rounded-[10px] mr-8 p-2`}>
                    <img src={menu} alt="menu" className={` ${toggle ? 'hidden' : 'block'} w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
    
                </div>
    
              <div className={`${toggle ? 'flex' :'hidden'} flex flex-col p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl side-bar`}>
                <div className="bg-black  rounded-[10px] p-2">
                    <img src={close} alt="menu" className={` ${toggle ? 'block' : 'hidden'} w-[28px] h-[28px] object-contain`} onClick={() => setToggle((prev) => !prev)}/>
    
                </div>
                <ul className='list-none flex flex-col justify-end items-center flex-1'>
                { sideNavLinks.map((nav, index) =>(
                  <li 
                    key={nav.path} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === sideNavLinks.length-1 ? 'mr-0' : 'mb-10'} text-white`}
                  >
                    <Link
                    to={nav.path}
                    className={activeLink === nav.path ? activeStyle : inactiveStyle}
                    onClick={() => handleLinkClick(nav.path)}
                  >
                    {nav.title}
                  </Link>
                  </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }


    export default UserTopbar