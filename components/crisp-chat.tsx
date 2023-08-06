"use client"

import { useEffect } from "react"

import { Crisp } from "crisp-sdk-web"

export const CrispChat = ()=>{
    useEffect(()=>{
        Crisp.configure("c9815149-de41-4a50-9b69-a7003af6b939");
    }, []);

    return null;
}

