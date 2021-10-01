import React, {createContext, useEffect, useState } from "react";
import InstaContract from "./contracts/Insta.json";
import Home from './Home';
import Account from './Account';
import {Route ,Switch} from "react-router-dom"
import Web3 from "web3";

import MetamaskLogo from "./Images/metamask.png"
import InstaLogo from "./Images/insta.svg.png"
import Phone from "./Images/dashboard.png"


import "./App.css";

let Handlers = createContext()

function App() {
  const [storageValue, setstorageValue] = useState(0)
  const [web3, setWeb3] = useState(null)
  const [accounts, setAccounts] = useState(null)
  const [contract, setContract] = useState(null)


  useEffect(() => {
    async function start() {
      try{

        const getWeb3 = () =>
        new Promise(async(resolve, reject) => {
          // Wait for loading completion to avoid race conditions with web3 injection timing.
         
            // Modern dapp browsers...
            if (window.ethereum) {
              const web3 = new Web3(window.ethereum);
              try {
                // Request account access if needed
               
                if((await web3.eth.getAccounts()).length > 0){
                  resolve(web3);
                }
              } catch (error) {
                reject(error);
              }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
              // Use Mist/MetaMask's provider.
              const web3 = window.web3;
              console.log("Injected web3 detected.");
              resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
              const provider = new Web3.providers.HttpProvider(
                "http://127.0.0.1:8545"
              );
              const web3 = new Web3(provider);
              console.log("No web3 instance injected, using Local web3.");
              resolve(web3);
            }
          
        });
  
        const web3 = await getWeb3();
        
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = InstaContract.networks[networkId];
        const instance = new web3.eth.Contract(
          InstaContract.abi,
          deployedNetwork && deployedNetwork.address,
        );

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
        //console.log(await instance.methods.getImageData().call())
        //await contract.methods.addAccount().send({from:accounts[0], gas:'1000000'}); 

  
        
      }
      catch(err){
        alert(
          `Failed to load web3, accounts, or contract. Check console for details. 1`,
        );
        console.error(err);
      }
    }

        start();
  }, [])

    async function start() {
      try{
        
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        
        const getWeb3 = () =>
        new Promise(async(resolve, reject) => {
          // Wait for loading completion to avoid race conditions with web3 injection timing.
         
            // Modern dapp browsers...
            if (window.ethereum) {
              const web3 = new Web3(window.ethereum);
              try {
                // Request account access if needed
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                
                // Accounts now exposed
                resolve(web3);
              } catch (error) {
                reject(error);
              }
            }
            // Legacy dapp browsers...
            else if (window.web3) {
              // Use Mist/MetaMask's provider.
              const web3 = window.web3;
              console.log("Injected web3 detected.");
              resolve(web3);
            }
            // Fallback to localhost; use dev console port by default...
            else {
              const provider = new Web3.providers.HttpProvider(
                "http://127.0.0.1:8545"
              );
              const web3 = new Web3(provider);
              console.log("No web3 instance injected, using Local web3.");
              resolve(web3);
            }
          
        });





        const web3 = await getWeb3();
        
        // Use web3 to get the user's accounts.
        const accounts = await web3.eth.getAccounts();

        // Get the contract instance.
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = InstaContract.networks[networkId];
        const instance = new web3.eth.Contract(
          InstaContract.abi,
          deployedNetwork && deployedNetwork.address,
        );

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.
        setWeb3(web3);
        setAccounts(accounts);
        setContract(instance);
        let checker = await instance?.methods?.accountExist(accounts[0])?.call();
        if(!checker){
          await instance.methods.addAccount().send({from:accounts[0], gas:'1000000'});
        }

      }
      catch(err){
        alert(
          `Failed to load web3, accounts, or contract. Check console for details. 2`,
        );
        console.error(err);
      }
    }


/*

  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(5).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };
*/

 if(web3 === null){

    
    return(
    <div className="container-fluid" style={{background:'#fafafa'}}>
      
      <div className="container h-screen my-auto mx-auto grid grid-col-2 grid-flow-col">
          <div className="md:flex justify-end items-center hidden ">
              <img src={Phone} className="img-fluid" width="450"/>
          </div>
          <div className="flex justify-start items-center mx-auto md:mx-0">
              <div className="p-5 border-2  bg-white px-20">
                  <img src={InstaLogo} className="img-fluid mx-auto" width="200"/>
                  <div className="flex justify-center items-center text-lg text-white font-semibold p-3 rounded-md hover:opacity-95 cursor-pointer transition enableEthereumButton" onClick={start} role="button"  style={{background:'#ee811a'}}>
                    <img src={MetamaskLogo} className="img-fluid mr-5" width="30"/>
                    Log in with Metamask
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
  }
  else{
    return(
      <Handlers.Provider value={{web3:web3,contract:contract,accounts:accounts}} >
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route path="/account" component={Account}/>  
        </Switch>
     </Handlers.Provider>
    )
  }
}
export default App;
export {Handlers};

