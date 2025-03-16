'use server'

import Logo from "./logo"
import Profile from "./userIco"

export default async function Header() {
    return (
        <header className="bg-white px-4 py-2 flex justify-between fixed w-full items-center">
            <Logo />
            <div className="flex gap-4">
                <input name="search" id="search" placeholder="Поиск"/>
                <Profile />
            </div>
        </header>
    )
}