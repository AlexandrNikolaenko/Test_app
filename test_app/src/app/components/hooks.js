'use client'

import { useEffect, useState } from "react"

export default function useGetSecretData(query) {
    let [data, setData] = useState({data: null, isSuccess: false, isLoad: false});

    useEffect(() => {
        if (!data.isLoad) {
            async function getData() {
                try {
                    let res = await fetch(query);
                    if (res.ok) setData({data: await res.json(), isSuccess: true, isLoad: true});
                    else throw new Error(res.status);
                } catch(e) {
                    console.log(e);
                    setData({...data, isLoad: true});
                }
            }
            getData();
        }
    });

    return {data, setData};
}