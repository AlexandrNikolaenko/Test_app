'use client'

import { user } from "./defaultData";
import useGetSecretData from "./hooks"
import { API_HOST } from "./host"
import Image from "next/image";

export default function Profile() {
    let {data, setData} = useGetSecretData(`${API_HOST}/getuser`);

    if (!data.isSuccess && data.isLoad) setData({isLoad: data.isLoad, isSuccess: true, data: user});
    else if (!data.isLoad) return <></>
    else {
        return (
            <div className="flex gap-2 items-center">
                <Image alt="Avatar" width={32} height={32} src={data.data.avatar}/>
                <span className="text-sm font-base text-">{data.data.username}</span>
                <button onClick={() => {}}><Image alt="setting" width={20} height={20} src={'/Settings.svg'}/></button>
            </div>
        )
    }
}