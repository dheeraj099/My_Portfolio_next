"use client";
import "@/app/projectsPage/projectpage.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Image from "next/image";
import { useRef } from "react";
import "@/app/projectsPage/projectpage.css";
const page = () => {
  const scrollTargetRef = useRef<HTMLDivElement>(null);
  const handleScroll = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col bg-black">
      {/* <video id="overlay_video" className="body-overlay" muted autoPlay loop>
        <source src="/projectPageVideo.mp4" type="video/mp4" />
      </video> */}
      <div className="projectPageWrapper">
        <div className="flex flex-col w-full h-screen bg-transparent items-center justify-center">
          <span className="text-[80px] text-white">Let’s Take a Tour!</span>
          <span className="text-center absolute bottom-32 text-md text-white">
            Explore the projects <br />
            that define my journey and expertise
          </span>
          <div
            onClick={handleScroll}
            className="flex absolute bottom-6 w-[62px] h-[88px] rounded-[42px] border-2 border-white-500 mt-3 items-center justify-center hover:bg-heath-700 hover:cursor-pointer"
          >
            <ArrowDropDownIcon />
          </div>
        </div>
        <div ref={scrollTargetRef} className="flex w-full px-8 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 p-24 w-full">
            <div className="projectcard flex flex-col ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 items-center px-4 ">
                <span className=" text-center font-semibold text-white ">
                  Project 1
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
            <div className="projectcard flex flex-col ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 mb-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Project 2
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
            <div className="projectcard flex flex-col ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Project 3
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
            <div className="projectcard flex flex-col ">
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
            <div className="projectcard flex flex-col ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Project 5
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
            <div className="projectcard flex flex-col ">
              <img
                className="rounded-[30px] px-3 pt-3"
                src="https://images.pexels.com/photos/17805369/pexels-photo-17805369/free-photo-of-a-mountain-range-with-a-lake-in-the-middle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="flex justify-between mt-2 mb-2 items-center px-4">
                <span className=" text-center font-semibold text-white ">
                  Project 6
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
