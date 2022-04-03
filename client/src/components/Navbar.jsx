import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';
import logo from '../../images/logo.png';
import React from 'react';
import {useState} from 'react';
import { TransactionContext } from "../context/TransactionContext";
import {useContext} from "react";

const NavBarItem = ({title,classProps}) => {
    return (
        <li className={`mx-4 cursor-pointer hover:text-blue-400 ${classProps}`}>
            {title}
        </li>
    )
}

const Navbar = () => {

    const [toggleMenu,setToggleMenu] = useState(false);
    const {connectWallet, currentAccount} = useContext(TransactionContext);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} className="w-32 cursor-pointer" alt="logo"/>
            </div>

            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
            {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
           {!currentAccount && (<li onClick={connectWallet} className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                Login
            </li>)}
            </ul>
            <div className="flex-relative">
                {toggleMenu ? <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(false)} /> : <HiMenuAlt4 fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToggleMenu(true)} />}
                {toggleMenu && 
                (<ul className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism  text-white animate-slide-in">
                <li className="text-xl w-full my-2">
                    <AiOutlineClose className="cursor-pointer" onClick={() => setToggleMenu(false)}/>
                </li>
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} classProps="my-2 text-lg" />
        ))}
                </ul>)}
            </div>
            
        </nav>
    );
}

export default Navbar;