import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Loader} from '.'
import React, {useContext} from "react"
import { TransContext } from '../context/TransactionsContext';

const Welcome = () => {

  const {connectWallet, name, age} = React.useContext(TransContext)

  

  return <div className = "flex w-full justify-center items-center mt-2">
    <p className = "mt-2">
    {name} is {age} years old. omnis explicabo error consectetur
    </p>
    <button type = "button" 
    className = "p-2 hover:bg-red-400 text-center rounded-md border-0 bg-red-600 text-white"
    onClick={connectWallet}
    >
    Connect Wallet
    </button>
  </div>;
}

export default Welcome;
