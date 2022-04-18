import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Loader} from '.'
import React, {useContext} from "react"
import { TransContext } from '../context/TransactionsContext';

const Welcome = () => {

  const {name} = React.useContext(TransContext)

  // console.log(name)

  return <div className = "flex w-full justify-center items-center">
    hello
  </div>;
}

export default Welcome;
