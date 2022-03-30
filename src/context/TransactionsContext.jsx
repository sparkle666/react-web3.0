import {React, useState, useEffect } from "react"
import {contractABI} from "../utils/constants"
import {contractAddress} from "../utils/constants"
import {ethers} from "ethers"

export const TransactionsContext = React.createContext();

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
            <TransactionsContext.Provider value = {{name: "james"}}> 
                {children}
            </TransactionsContext.Provider>
    )
}


