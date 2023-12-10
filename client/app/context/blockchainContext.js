"use client"

import React, { useContext, useEffect, useState } from 'react';
import  * as eth  from 'ethers';
import { abi } from './api';
import { AxiosGet } from '../components/lib/axios';
import { AxiosPost } from '../lib/axios';
const semaphore = require("@semaphore-protocol/identity");
const Addr = "0x086795bfea323D1559c380A3C854Ff92B52055c6";
const ABI=abi

export const BlockchainConfig = React.createContext();

export const BlockchainProvider = ({ children }) => {
    // const provider = new eth.Web3Provider(window.ethereum);
const [userDBData, setUserDBData] = useState([]);
  const [currentAccount, setCurrentAccount] = useState('');
  const [proposals, setProposals] = useState([]);
  // const {uploadArtOffChain} = useContext(FirebaseConfig)
  const connectWallet = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');
console.log('entered')
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    setCurrentAccount(accounts[0]);
  };

  const RegisterContract = async() =>{
    const   provider = new eth.BrowserProvider(window.ethereum)
    const signer =await provider.getSigner();
  const contract =  new eth.Contract(Addr, ABI, signer);
    const transaction = await contract.register();

    await transaction.wait();
  }

  const AddProposal = async(title,timeEnd,regTime) =>{
    const   provider = new eth.BrowserProvider(window.ethereum)
    const signer =await provider.getSigner();
  const contract =  new eth.Contract(Addr, ABI, signer);
    const transaction = await contract.addProposal(title,timeEnd,20,regTime);

    await transaction.wait(); 
    await getProposals();
  }

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  const getProposals = async() =>{
    const   provider = new eth.BrowserProvider(window.ethereum)
    const signer =await provider.getSigner();
  const contract =  new eth.Contract(Addr, ABI, signer);
  const data=await contract.proposalList();
  setProposals(data);
  console.log(data);
  console.log(new Date().getTime())

  }

  const joinProposals = async(id) =>{
console.log(parseInt(id),userDBData.password);

  let { trapdoor, nullifier, commitment } = new semaphore.Identity(
    userDBData.password
  );
  console.log(commitment);
const   provider = new eth.BrowserProvider(window.ethereum)
const signer =await provider.getSigner();
const contract =  new eth.Contract(Addr, ABI, signer);
const data=await contract.joinProposal(parseInt(id),commitment);

  }


  const getUser = async() =>{
    const data=await AxiosPost("users/get",{ user_address:currentAccount});
    console.log(data);
    if(data.status==201){
        setUserDBData(data.data);
        console.log(data.data);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnect();
    getProposals();
    getUser();
  }, [currentAccount]);
  return (
    <BlockchainConfig.Provider
      value={{
        connectWallet,
        currentAccount,
        RegisterContract,
        AddProposal,
        proposals,
        joinProposals
      }}
    >
      {children}
    </BlockchainConfig.Provider>
  );
};
