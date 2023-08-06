"use client";

import Link from "next/link"
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { LayoutDashboard, MessageSquare , ImageIcon, VideoIcon, Music, Code2, Settings} from "lucide-react";

import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import { FreeCounter } from "./free-counter";

const montserrrat = Montserrat ({
    weight: "400",
    subsets: ["latin"]
});


const routes =[
    {
        label : "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-400",
    },
    {
        label : "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label : "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-500",
    },
    {
        label : "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-400",
    },
    {
        label : "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
    },
    {
        label : "Code Generation",
        icon: Code2,
        href: "code",
        color: "text-green-300",
    },
    {
        label : "Settings",
        icon: Settings,
        href: "/settings",
        color: "text-sky-200",
    },
];

interface SidebarProps{
    apiLimitCount: number;
    isPro: boolean;
}

const Sidebar = ({
    apiLimitCount=0,
    isPro=false
}) => {
    const pathname = usePathname();

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#23365e] text-white">
            <div className="px-3 py-2 flex-1">
            <Link href="/dashboard"
            className="flex items-center pl-3 mb-14">
                <div className="relative w-8 h-8 mr-4">
                    <Image
                    fill
                    alt="Logo"
                    src="/ai_logo.jpg"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold", montserrrat.className)}>
                    BrainStorm
                </h1>
             </Link>
             <div className="space-y-1">
                {routes.map((route)=>(
                    <Link
                    href ={route.href}
                    key={route.href}
                    className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                    pathname=== route.href ? "text-white bg-white/10" : "text-zinc-400"
                    )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("h-5 w-5 mr-3 ", route.color)}/>
                            {route.label}
                        </div>
                    </Link>
                ))}
             </div>
            </div>
            
            <FreeCounter 
            isPro={isPro}
            apiLimitCount={apiLimitCount}/>
        </div>
    );
}

export default Sidebar;

