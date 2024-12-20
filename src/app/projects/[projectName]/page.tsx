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
      <Header/>
      <div className="flex flex-col h-screen w-full overflow-y-hidden">
        <div className="absolute bg-black/70 w-full h-screen flex "></div>
        <img
          src={projectData?.heroSection_image}
        />
        <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <span className="text-7xl text-white text-center font-medium uppercase">
            {projectData?.title}
          </span>
          <span className="text-5xl text-white font-light">
            {projectData?.description}
          </span>
        </div>
      </div>      
    </div>
  );
};

export default page;
