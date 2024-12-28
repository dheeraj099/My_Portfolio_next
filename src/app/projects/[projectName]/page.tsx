"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../../supabase";
import Header from "@/app/common/Header";
interface Project {
  id: number;
  title: string;
  heroSection_image: string;
  description?: string | null;
  about?: string | null;
  technologies?: Record<string, string>;
  features?: string | null;
  contributions?: string | null;
  live?: string | null;
  images?: Record<any, any>;
}
const page = () => {
  const { projectName } = useParams();
  const [projectData, setProjectData] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("portfolio")
        .select("*")
        .eq("title", projectName)
        .single(); // Fetch only one record

      if (error) {
        console.error("Error fetching project data:", error);
      } else {
        console.log("data:::", data);
        setProjectData(data);
      }
    };

    fetchData();
  }, [projectName]);

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-col h-screen w-full overflow-y-hidden">
        <div className="absolute bg-black/70 w-full h-screen flex "></div>
        <img src={projectData?.heroSection_image} />
        <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <span className="text-7xl text-white text-center font-medium uppercase">
            {projectData?.title}
          </span>
          <span className="text-5xl text-white font-light">
            {projectData?.description}
          </span>
        </div>
      </div>
      <div className="flex flex-col h-screen w-full justify-center px-24">
        <div className="flex w-full gap-14 items-center">
          <div className="flex flex-col border-l border-white h-fit w-[35%] ml-6 pl-6 py-8">
            <span className="text-sm">ABOUT</span>
            <span className="text-2xl mt-8">{projectData?.description}</span>
            <span className="text-base mt-24">{projectData?.about}</span>
          </div>
          <div className="flex flex-grow items-center">
            <img
              src={projectData?.images?.about || null}
              alt="Project about"
              className="w-[650px] h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen w-full justify-center ">
        <div className="flex w-full gap-14 items-center">
          <div className="flex flex-col border-l border-white h-fit w-[65%]  justify-start items-start">
            <img
              src={projectData?.images?.about || null}
              alt="Project about"
              className="w-[650px] h-full  "
            />
          </div>

          <div className="flex w-[35%] flex-col border-r border-white h-fit mr-32 pr-6 py-8">
            <span className="text-sm">TECHNOLOGIES</span>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white text-white p-4"><img src={projectData?.images?.technologies?.nextjs}/></div>
              <div className="bg-white text-white p-4 flex items-center justify-center"><img src={projectData?.images?.technologies?.tailwind}/></div>
              {/* <div className="bg-red-500 text-white p-4">Element 3</div>
              <div className="bg-yellow-500 text-white p-4">Element 4</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
