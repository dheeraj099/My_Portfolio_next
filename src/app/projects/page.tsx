"use client";
import "@/app/projects/projectpage.css"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useEffect, useRef, useState } from "react";
import AiotelProject from "@/app/assets/aiotel_project2.png";
import KarmminProject from "@/app/assets/K_Project.png";
import Image from "next/image";
import Twinvrse_p from "@/app/assets/Twinvrse2.png"
import thingspad_img from "@/app/assets/ThingsPad_PR.png"
import three_img from "@/app/assets/3dTwin_PR.png"
import Header from "../common/Header";
import { useRouter } from "next/navigation";
import {supabase} from "../../../supabase"
const page = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const router = useRouter(); 

  const handleProject = (projectName: string) => {
    console.log("projectName::", projectName);
  
    
    router.push(`/projects/${projectName}`); // Redirect dynamically
  };
  
  

  return (
    <div className="flex flex-col bg-black">
      {/* <video id="overlay_video" className="body-overlay" muted autoPlay loop>
        <source src="/projectPageVideo.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute top-0 w-full">
      <Header/>
      </div>
      <div className="projectPageWrapper">
        <div className="flex flex-col w-full h-screen bg-transparent items-center justify-center">
          <span className="text-[80px] text-white">Let’s Take a Tour!</span>
          <span className="text-center absolute bottom-32 text-md text-white">
            Explore the projects <br />
            that define my journey and expertise
          </span>
          <div
            onClick={handleScroll}
            className="flex absolute bottom-6 w-[62px] h-[88px] rounded-[42px] mt-3 items-center justify-center hover:bg-heath-700 hover:cursor-pointer border border-white"
          >
            <ArrowDropDownIcon sx={{ color:"white" }} />
          </div>
        </div>
        <div ref={scrollTargetRef} className="flex w-full px-8 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 p-24 w-full">
            <div className="projectcard flex flex-col cursor-pointer " onClick={()=>handleProject("Aiotel")}>
              {/* <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              /> */}
              <Image className="rounded-[30px] px-3 pt-3" src={AiotelProject} alt="Aiotel project"/>
              <div className="flex justify-between mt-2 items-center px-4 ">
                <span className=" text-center font-semibold text-white ">
                  Aiotel - Website
                </span>

                <button className="button">
                  Explore
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="projectcard flex flex-col cursor-pointer  ">
              {/* <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              /> */}
              <Image src={KarmminProject} alt="Karmmin Project" className="rounded-[30px] px-3 pt-3"/>
              <div className="flex justify-between mt-2 mb-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Karmmin - Edu-tech Platform
                </span>

                <button className="button">
                  Explore
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="projectcard flex flex-col cursor-pointer ">
              {/* <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              /> */}
              <Image src={Twinvrse_p} alt="twinvrse project" className="rounded-[30px] px-3 pt-3"/>
              <div className="flex justify-between mt-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Twinvrse - 3D platform
                </span>

                <button className="button">
                  Explore
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="projectcard flex flex-col cursor-pointer ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Project 4
                </span>

                <button className="button">
                  Explore
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="projectcard flex flex-col cursor-pointer ">
              {/* <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              /> */}
              <Image className="rounded-[30px] px-3 pt-3" src={thingspad_img} alt="thingspad project"/>
              <div className="flex justify-between mt-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Thingspad - website
                </span>

                <button className="button">
                  Explore
                  <svg fill="white" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="projectcard flex flex-col cursor-pointer ">
              <Image src={three_img} alt="3D twin" className="rounded-[30px] px-3 pt-3"/>
              <div className="flex justify-between mt-2 mb-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  3dTwin - website
                </span>

                <button className="button">
                  Explore
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clipRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
