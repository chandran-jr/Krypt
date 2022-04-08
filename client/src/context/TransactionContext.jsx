import React, {useEffect,useState} from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';
import { parse } from '@ethersproject/transactions';

export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress,contractABI,signer);


return transactionContract;

}

export const TransactionProvider = ({children}) => {

    const [formData, setformData] = useState({ addressTo: "", amount: "", keyword: "", message: "" });
    const [currentAccount, setCurrentAccount] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const [transactions, setTransactions] = useState([]);

    const handleChange = (e, name) => {
        setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
      };

      const getAllTransactions = async () => {
          try {
            if(!ethereum) {
                return alert ("Please install Metamask on browser as an extension")
            }
            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map((transaction) => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
              }));

              setTransactions(structuredTransactions)
              console.log(structuredTransactions);
            
              
          } catch (error) {
              console.log(error);
          }
      }

    const checkWalletConnected = async() => {

        try {
            if(!ethereum) {
                return alert ("Please install Metamask on browser as an extension")
            }
    
            const accounts = await ethereum.request({method: 'eth_accounts'})
    
            if(accounts.length) {
                setCurrentAccount(accounts[0]);
                getAllTransactions();
            }
            else {
                console.log("No accounts found");
            }
    
        }
        catch(error) {
            console.error(error);
            throw new Error['No Ethereum Object'] 
        }
    }

    const sendTransaction = async () => {
        try{
            if(!ethereum) {
                return alert ("Please install Metamask on browser as an extension")
            }
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex
                }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount,message,keyword);

            setIsLoading(true);
            console.log(transactionHash.hash);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(transactionHash.hash);

            const transactionCount = await transactionContract.getTransactionCount();

            setTransactionCount(transactionCount.toNumber());

            window.reload();
        }
        catch(error) {
            console.error(error);
            throw new Error['No Ethereum Object']
        }
    }

    const checkTransactionExists = async() => {
        try {
            const transactionContract = getEthereumContract();
            const transactionCount = await transactionContract.getTransactionCount();
            window.localStorage.setItem("transactionCount", transactionCount);
        } catch (error) {
            console.error(error);
            throw new Error['No Ethereum Object'] 
        }
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
        checkTransactionExists();
    },[]);

    return (
        <TransactionContext.Provider value={{connectWallet, currentAccount, formData,handleChange,sendTransaction,transactions,isLoading}}>
            {children}
        </TransactionContext.Provider>
    )
}