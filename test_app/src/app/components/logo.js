'use client'

import Image from "next/image"

export default function Logo() {
    return (
        <Image alt="logo" width={174} height={24} src={'/Logo.svg'} className="max-[767px]:hidden"/>
    )
}