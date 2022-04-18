import React, {useState, useEffect, createContext } from "react"
import {contractABI} from "../utils/constants"
import {contractAddress} from "../utils/constants"
import {ethers} from "ethers"

export const TransContext = createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)

    console.log({
        provider,
        signer,
        transactionContract
    })
}

export const TransactionProvider = ({children}) => {
    const [connectedAccount, setConnectedAccount] = useState("")

    const checkIfMetamaskIsConnected = async () => {
        if(!ethereum){
            return alert("Please install Metamask chrome extension")
        }
        const accounts = await ethereum.request({method: "eth_accounts"})
        console.log(accounts)
    }   
    
    const connectWallet = async () => {
        try{
            const accounts = await ethereum.request({method: "eth_requestAccounts"})
            setConnectedAccount(accounts[0])
        }
        catch(error){
            console.log(error)
            throw new Error("There is no Ethereum object")
        }
    }

    useEffect(() => {
        checkIfMetamaskIsConnected()
    }, [])
    
    return(
            <TransContext.Provider value = {{connectWallet: connectWallet, name: "Sixtus", age: 10}}> 
                {children}
            </TransContext.Provider>
    )
}


