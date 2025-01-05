"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "../../../../supabase";
import Header from "@/app/common/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
        setProjectData(data);
      }
    };

    fetchData();
  }, [projectName]);

  const data = [
    {
      number: "01",
      title: "Your Text Here",
      description:
        "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
    },
    {
      number: "02",
      title: "Put Text Here",
      description:
        "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
    },
    {
      number: "03",
      title: "Your Text Here",
      description:
        "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
    },
    {
      number: "04",
      title: "Put Text Here",
      description:
        "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
    },
    {
      number: "05",
      title: "Your Text Here",
      description:
        "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
    },
  ];
  const getColor = (index) => {
    const colors = [
      "bg-blue-500",
      "bg-red-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
    ];
    return colors[index % colors.length]; // Cycle through colors if there are more items than colors
  };

  const snapshots = [
    "https://via.placeholder.com/300x200?text=Snapshot+1",
    "https://via.placeholder.com/300x200?text=Snapshot+2",
    "https://via.placeholder.com/300x200?text=Snapshot+3",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const showSlide = (index) => {
    if (index < 0) {
      setCurrentSlide(snapshots.length - 1);
    } else if (index >= snapshots.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(index);
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 4,
    initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [isFirstSlide, setIsFirstSlide] = useState(true); // Track if it's the first slide
  const [isLastSlide, setIsLastSlide] = useState(false); // Track if it's the last slide

  console.log("snapshots::", projectData?.snapshots);
  const handleSlideChange = () => {
    if (swiperRef) {
      console.log("swiperRef.realIndex:::", swiperRef.realIndex);
      const isAtFirstSlide = swiperRef.realIndex === 0; // Check if the current slide is the first one
      const isAtLastSlide =
        swiperRef.realIndex === projectData?.snapshots.length - 1; // Check if it's the last slide
      setIsFirstSlide(isAtFirstSlide); // Update the state for the first slide
      setIsLastSlide(isAtLastSlide); // Update the state for the last slide
    }
  };

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
              <div className="bg-white text-white p-4">
                <img src={projectData?.images?.technologies?.nextjs} />
              </div>
              <div className="bg-white text-white p-4 flex items-center justify-center">
                <img src={projectData?.images?.technologies?.tailwind} />
              </div>
              {/* <div className="bg-red-500 text-white p-4">Element 3</div>
              <div className="bg-yellow-500 text-white p-4">Element 4</div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen w-full justify-center px-24">
        <div className="flex flex-col w-full gap-14 ">
          <div className="flex flex-col gap-3 items-center justify-centerh-fit w-full ml-6 pl-6 py-8">
            <span className="text-sm text-center">FEATURES</span>
            <hr className="border border-white w-[20%]"></hr>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData?.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-7 items-center justify-center py-4 px-2 rounded-2xl bg-white"
              >
                <div className="flex w-12 h-12  bg-[#474646] rounded-full items-center justify-center">
                  <span className="font-bold text-2xl">{index + 1}</span>
                </div>
                <span className="text-black text-center font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full justify-center px-0">
        <div className="flex flex-col w-full gap-14 ">
          <div className="flex flex-col gap-3 items-center justify-centerh-fit w-full  pl-6 py-8">
            <span className="text-sm text-center">CONTRIBUTIONS</span>
            <hr className="border border-white w-[20%]"></hr>
          </div>

          {/* from here  */}

          <div className="flex items-center space-x-6 relative  ">
            {/* <!-- Left Target Icon --> */}
            <div className="flex-shrink-0 -ml-[15%] ">
              <div className="relative w-96 h-96 bg-red-500 rounded-r-full flex items-center justify-center overflow-hidden ">
                <div className="absolute w-64 h-64 bg-white rounded-r-full"></div>
                <div className="absolute  w-32 h-32  bg-red-500 rounded-r-full"></div>
              </div>
            </div>

            {/* <!-- Horizontal Line --> */}
            <div className="relative w-28 border border-white ml-[50%]"></div>

            {/* <!-- Right Content --> */}
            <div className="flex flex-col space-y-8 relative ml-[50%] max-w-[65%] ">
              {/* <!-- Vertical Line --> */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* <!-- Each Row --> */}
              {projectData?.contributions.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {/* <!-- Number Circle --> */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 text-white font-bold rounded-full ${getColor(
                      index
                    )}`}
                  >
                    {item.number}
                  </div>
                  {/* <!-- Text --> */}
                  <div className="flex-1">
                    <div className="text-lg font-semibold">{item.title}</div>
                    <div className="text-gray-600 text-sm">
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full justify-center px-0 ">
        <div className="flex flex-col w-full gap-14">
          <div className="flex flex-col gap-3 items-center justify-center h-fit w-full pl-6 py-8">
            <div className="flex gap-6 items-center justify-center">
              <span className="text-sm text-center">SNAPSHOTS</span>
              <div className="livebuttoncontainer flex w-full items-end justify-end">
                <button className=" mr-[50px]">
                  <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Live</span>
                </button>
              </div>
            </div>
            <hr className="border border-white w-[30%]" />
            
          </div>
          <div className="carousel-container">
            {/* Previous button */}
            <button
              onClick={() => swiperRef?.slidePrev()}
              className="swiper-button-prev  disabled:cursor-default disabled:opacity-[0.4]"
              disabled={isFirstSlide} // Disable the button if it's the first slide
            >
              <ArrowBackIosIcon />
            </button>

            {/* Swiper carousel */}
            <Swiper
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperRef}
              navigation={false} // Disable default navigation
              loop
              spaceBetween={10}
              slidesPerView={1}
              className="mySwiper"
            >
              {projectData?.snapshots.map((item, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  {/* Render description and media */}
                  <div className="text-center mb-4">
                    <p>{item.desc}</p>
                  </div>
                  {item.type === "image" ? (
                    <img
                      src={item.media}
                      alt={item.desc}
                      // className="w-full h-128 object-contain" // Increased height by 2x
                    />
                  ) : (
                    <video
                      src={item.media}
                      autoPlay
                      loop
                      muted
                      // className="w-full h-128 object-contain" // Increased height by 2x
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Next button */}
            <button
              onClick={() => swiperRef?.slideNext()}
              className="swiper-button-next disabled:cursor-default disabled:opacity-[0.4]"
              disabled={isLastSlide} // Disable the button if it's the last slide
            >
              <ArrowForwardIosIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;