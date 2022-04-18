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
    return(
            <TransContext.Provider value = {{name: "james"}}> 
                {children}
            </TransContext.Provider>
    )
}


