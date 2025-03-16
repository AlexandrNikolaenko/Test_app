'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLink } from "./defaultData";
import Link from "next/link";

export default function Navigation() {
    let [isOpen, setIsOpen] = useState(false);
    let [id, setId] = useState(0);

    useEffect(() => {
        if (!isOpen && window.innerWidth > 991 && id == 0) setIsOpen(true);
    })

    return(
        <div className="flex w-fit h-full">
            <div className="h-full relative z-30 bg-white border-r-[1px] border-t-[1px] border-stroke">
                <div className="p-4" onClick={() => {setIsOpen(!isOpen); setId(0)}}><Image alt="navigation" width={24} height={24} src={`/Nav${isOpen ? 'Active' : ''}.svg`}/></div>
                <div className="p-4" onClick={() => {setIsOpen(false); setId(1)}}><Image alt="navigation" width={24} height={24} src={`/Star.svg`}/></div>
            </div>
            <Nav isOpen={isOpen}/>
        </div>
    )
}

function Nav({isOpen}) {
    return (
        <nav className={`flex flex-col ${!isOpen ? '-translate-x-full' : ''} relative z-20 transition-all h-full overflow-scroll border-r-[1px] border-stroke`}>
            <div className="flex gap-2 p-4 border-y-[1px] border-y-stroke">
                <input placeholder="Поиск по меню" name="menuSearch" id="menuSearch"/>
                <button><Image alt="no pin" width={20} height={20} src={'/no-pin.svg'}/></button>
            </div>
            <ul className="flex flex-col bg-bg-input">
                {navLink.map(link => <NavLink key={link.id} link={link}/>)}
            </ul>
        </nav>
    )
}

function NavLink({link}) {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <li className="flex gap-2 py-2.5 px-4 items-center">
            <Image alt="open" width={16} height={16} src={'/Arrow.svg'} onClick={() => setIsOpen(!isOpen)} className={`transition-all ${isOpen ? 'rotate-90': ''}`}/>
            <Link href={link.link}>{link.text}</Link>
        </li>
    )
}