'use server'

import Logo from "./logo"
import { HeaderNav } from "./navigation"
import Profile from "./userIco"

export default async function Header() {
    return (
        <header className="bg-white min-h-[56px] px-4 py-2 flex justify-between fixed w-full items-center z-50">
            <Logo />
            <HeaderNav />
            <div className="flex gap-4">
                <div className="search relative">
                    <input name="search" id="search" placeholder="Поиск" className="max-[767px]:hidden w-[296px]"/>
                </div>
                <Profile />
            </div>
        </header>
    )
}