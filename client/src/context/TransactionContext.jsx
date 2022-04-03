import React, {useEffect,useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);


console.log({
    provider,
    signer,
    transactionContract
}
)}

export const TransactionProvider = ({children}) => {
    
    const [currentAccount,setCurrentAccount] =  useState();

    const checkWalletConnected = async() => {

        try {
            if(!ethereum) {
                return alert ("Please install Metamask on browser as an extension")
            }
    
            const accounts = await ethereum.request({method: 'eth_accounts'})
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
                //getAllTransactions();
            }
            else {
                console.log("No accounts found");
            }
    
        }
        catch(error) {
            console.error(error);
            throw new Error['No Ethereum Object'] 
        }
        console.log (accounts);
    }

    const sendTransaction = async () => {
        
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) {
                return alert ("Please install Metamask on browser as an extension")
            }
            const accounts = await ethereum.request({method: 'eth_requestAccounts'})
            setCurrentAccount(accounts[0]);
        }

            catch(error) {
                console.error(error);

                throw new Error['No Ethereum Object'] 
            }
    }

    useEffect(() => {
        checkWalletConnected();
    },[]);

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount}}>
            {children}
        </TransactionContext.Provider>
    )
}