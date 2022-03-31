import { AiFillPlayCircle } from "react-icons/ai";
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';

import {Loader} from './'

const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[2px] border-white-400 text-sm font-bold text-white";

const Welcome = () => {
    const connectWallet = () => {
    
    }

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">Send Crypto <br/>Anywhere, Anytime!</h1>
                    <p className="text-left mt-5 text-green-500 font-bold md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy & Sell Crypto here!!</p>
                    <button type="button" className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] text-white font-bold" onClick={connectWallet}>
                        Connect Wallet
                    </button>
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Reliable
                        </div>
                        <div className={commonStyles}>
                            Secure
                        </div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Fast
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Web 3.0
                        </div>
                        <div className={`${commonStyles}`}>
                            Ethereum
                        </div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            Low fees
                        </div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism">

                    </div>
                </div>

            </div>
        </div>
    );
}
export default Welcome;