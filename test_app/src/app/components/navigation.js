'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLink } from "./defaultData";
import Link from "next/link";

export default function Navigation() {
    let [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        try{
            document.getElementById("funcBar").setAttribute('style', `width:${document.getElementById('taskBody').getBoundingClientRect().width}px`);
        } catch(e) {
            console.log(e);
        }
    })

    return(
        <div className="flex w-fit h-full relative max-[767px]:hidden z-30">
            <div className="h-full relative z-30 bg-white border-r-[1px] border-t-[1px] border-stroke min-w-[56px]">
                <div className="p-4" onClick={() => setIsOpen(!isOpen)}><Image alt="navigation" width={24} height={24} src={`/Nav${isOpen ? 'Active' : ''}.svg`}/></div>
                <div className="p-4" onClick={() => setIsOpen(false)}><Image alt="navigation" width={24} height={24} src={`/Star.svg`}/></div>
            </div>
            <Nav isOpen={isOpen}/>
        </div>
    )
}

function Nav({isOpen}) {
    return (
        <nav className={`flex flex-col ${!isOpen ? 'hidden' : ''} relative max-[767px]:fixed max-[767px]:top-0 max-[767px]:left-0 max-[767px]:mt-14 z-20 max-[767px]:z-50 transition-all h-full overflow-scroll border-r-[1px] border-stroke min-w-[280px] bg-white`}>
            <div className="flex gap-2 p-4 border-y-[1px] border-y-stroke">
                <div className="filter_search relative">
                    <input placeholder="Поиск по меню" name="menuSearch" id="menuSearch" className="min-w-[208px]"/>
                </div>
                <button className="small-bt" onClick={(e) => e.preventDefault()}><Image alt="no pin" width={20} height={20} src={'/no-pin.svg'}/></button>
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
            <Link href={link.link} className="text-sm">{link.text}</Link>
        </li>
    )
}

export function HeaderNav() {
    let [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex relative min-[766px]:hidden z-30 h-8 w-8">
            <Image alt="navigation" width={24} height={24} src={`/Nav${isOpen ? 'Active' : ''}.svg`} onClick={() => setIsOpen(!isOpen)}/>
            <Nav isOpen={isOpen}/>
        </div>
    )
    
}