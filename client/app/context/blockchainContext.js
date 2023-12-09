"use client"

import React, { useContext, useEffect, useState } from 'react';
import  * as eth  from 'ethers';
import { abi } from './api';

const Addr = "0xf22d55bfFA001cb87c7bF3E74136FeAeb60989bA";
const ABI=abi

export const BlockchainConfig = React.createContext();

export const BlockchainProvider = ({ children }) => {
    // const provider = new eth.Web3Provider(window.ethereum);

  const [currentAccount, setCurrentAccount] = useState('');
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

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert('Please install MetaMask.');

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });

    if (accounts.length) {
      setCurrentAccount(accounts[0]);
    } else {
      console.log('No accounts found');
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  return (
    <BlockchainConfig.Provider
      value={{
        connectWallet,
        currentAccount,
        RegisterContract,

      }}
    >
      {children}
    </BlockchainConfig.Provider>
  );
};
