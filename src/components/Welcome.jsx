import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import {Loader} from '.'
import {React, useContext} from "react"
import { TransactionsContext } from '../context/TransactionsContext';

const Welcome = () => {

  const {name} = React.useContext(TransactionsContext)
  return <div className = "flex w-full justify-center items-center">
    {name}
  </div>;
}

export default Welcome;
