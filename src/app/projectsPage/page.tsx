'use client';
import "@/app/projectsPage/projectpage.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Image from "next/image";
import { useRef } from "react";
import "@/app/projectsPage/projectpage.css"
const page = () => {
    const scrollTargetRef = useRef<HTMLDivElement>(null);;
    const handleScroll = () => {
        if (scrollTargetRef.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col w-full h-screen bg-black items-center justify-center'>
                <span className='text-[80px]'>Let’s Take a Tour!</span>
                <span className='text-center absolute bottom-32 text-md'>Explore the projects <br />that define my journey and expertise</span>
                <div onClick={handleScroll} className="flex absolute bottom-6 w-[62px] h-[88px] rounded-[42px] border-2 border-white-500 mt-3 items-center justify-center hover:bg-heath-700 hover:cursor-pointer"><ArrowDropDownIcon /></div>
            </div>
            <div ref={scrollTargetRef} className='flex w-full px-8 bg-black'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-24 p-24 w-full">
                    <div className="card flex flex-col">
                        
                    </div>
                    <div className="card"></div>
                    <div className="card"></div> 
                    <div className="card"></div>
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
            </div>
        </div>
    )
}

export default page