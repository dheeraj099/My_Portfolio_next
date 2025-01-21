"use client";
import Header from "@/app/common/Header";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { supabase } from "../../../../supabase";
import Image from "next/image";
import { motion } from "framer-motion";
interface Project {
  id: number;
  title: string;
  heroSection_image: string;
  description?: string | null;
  about?: string | null;
  technologies?: Record<string, any>[];
  features?: string[] | null; // Array of strings (text[])
  contributions?: Record<string, any>[];
  live?: string | null;
  images?: Record<any, any>;
  snapshots?: Record<string, any>[];
}
const page = () => {
  const params = useParams() as { projectName: string };
  const { projectName } = params;
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
  const getColor = (index: any) => {
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
  const showSlide = (index: any) => {
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

  const handleSlideChange = () => {
    if (swiperRef) {
      const isAtFirstSlide = swiperRef.realIndex === 0; // Check if the current slide is the first one
      const isAtLastSlide =
        swiperRef.realIndex ===
        (projectData?.snapshots ? projectData.snapshots.length : 0) - 1;
      // Check if it's the last slide
      setIsFirstSlide(isAtFirstSlide); // Update the state for the first slide
      setIsLastSlide(isAtLastSlide); // Update the state for the last slide
    }
  };
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: any;
    width: any;
    quality: any;
  }) => {
    return projectData?.heroSection_image;
  };
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Set to true when the section is in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // Start observing the section
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current); // Clean up observer
      }
    };
  }, []);
  return (
    <div className="flex flex-col flex-auto w-full bg-black">
      <Header />
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start min-h-[calc(100vh-7rem)] sm:h-screen  w-full overflow-y-hidden">
        <div className="absolute bg-black/70 w-full min-h-[calc(100vh-7rem)] sm:h-screen flex "></div>
        <Image
          src={projectData?.heroSection_image || "/fallback-image.jpg"} // Fallback image if null
          alt="Hero Section Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }} // optional
          className="object-cover"
        />

        <div className="flex flex-col gap-2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <span className="text-2xl  sm:text-7xl text-white text-center font-medium uppercase">
            {projectData?.title}
          </span>
          <span className="text-2xl sm:text-5xl text-white font-light">
            {projectData?.description}
          </span>
        </div>
      </div>

      <div className="flex flex-col h-screen w-full justify-center px-10 sm:px-24">
        <div className="flex flex-col sm:flex-row w-full gap-14 items-center">
          <div className="flex flex-col border-l border-white h-fit w-full sm:w-[35%] ml-0 sm:ml-6 pl-6 py-8">
            <span className="text-sm text-[#EDEDED]">ABOUT</span>
            <span className="text-2xl mt-8 text-[#EDEDED]">
              {projectData?.description}
            </span>
            <span className="text-base mt-24 text-[#EDEDED]">
              {projectData?.about}
            </span>
          </div>
          <div className="flex flex-grow items-center">
            <Image
              src={projectData?.images?.about || "/fallback-image.jpg"} // Fallback image if null
              alt="Hero Section Image"
              width={650}
              height={0}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col h-screen w-full justify-center px-10 sm:px-0">
        <div className="flex flex-col sm:flex-row w-full  items-center">
          <div className="flex flex-col order-2 sm:order-1  ml-0 sm:ml-6 pl-6 border-white h-fit  w-full sm:w-[65%]  justify-start items-start">
            <Image
              src={projectData?.images?.about || "/fallback-image.jpg"} // Fallback image if null
              alt="Project about"
              width={650}
              height={0}
            />
          </div>

          <div className="flex w-full order-1 ml-0 sm:ml-6 pl-6 sm:order-2 sm:w-[35%] flex-col border-l  border-white sm:border-l-0 sm:border-r sm:border-white h-fit mr-0 sm:mr-32 pr-6 py-8 ">
            <span className="text-sm text-[#EDEDED]">TECHNOLOGIES</span>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {projectData?.technologies?.map((technology, index) => {
                console.log("Mapped Technology:", technology); // Log the technology object
                if (technology.image !== ""){

                
                return (
                  <div key={index} className="bg-white text-white p-4 flex items-center justify-center">
                    <Image
                      src={technology.image || "/fallback-image.jpg"} // Use the "images" key value
                      alt={`Technology ${index}`}
                      width={0}
                      height={0}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                );
              }
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen lg:h-full sm:h-screen w-full justify-center px-10 sm:px-24 ">
        <div className="flex flex-col w-full gap-14 ">
          <div className="flex flex-col gap-3 items-center justify-center h-fit w-full ml-0 sm:ml-6 pl-6 py-8">
            <span className="text-sm text-center text-[#EDEDED]">FEATURES</span>
            <hr className="border border-white w-[80%] sm:w-[20%]"></hr>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectData?.features &&
              projectData?.features.map((feature, index) => (
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

      <div className="flex flex-col min-h-screen w-full justify-center px-10 sm:px-0 ">
        <div className="flex flex-col w-full gap-14 ">
          <div className="flex flex-col gap-3 items-center justify-centerh-fit w-full  pl-6 py-8">
            <span className="text-sm text-center text-[#EDEDED]">
              CONTRIBUTIONS
            </span>
            <hr className="border border-white w-[20%]"></hr>
          </div>

          {/* from here  */}

          <div className="flex items-center space-x-6 relative  ">
            {/* <!-- Left Target Icon --> */}
            <div className="sm:flex-shrink-0 sm:-ml-[15%] hidden sm:flex ">
              <div className="relative w-32 h-32 sm:w-96 sm:h-96 bg-red-500 rounded-r-full flex items-center justify-center overflow-hidden ">
                <div className="absolute w-20 h-20 sm:w-64 sm:h-64 bg-white rounded-r-full"></div>
                <div className="absolute w-10 h-10 sm:w-32 sm:h-32  bg-red-500 rounded-r-full"></div>
              </div>
            </div>

            {/* <!-- Horizontal Line --> */}
            <div className="sm:relative w-14 sm:w-28 sm:border sm:border-white sm:ml-[50%] hidden sm:flex"></div>

            {/* <!-- Right Content --> */}
            <div className="flex flex-col space-y-8 relative ml-[50%] max-[30%] sm:max-w-[65%] ">
              {/* <!-- Vertical Line --> */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              {/* <!-- Each Row --> */}
              <div ref={sectionRef} className="space-y-6">
                {projectData?.contributions &&
                  projectData?.contributions.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, y: 20 }} // Initial state: hidden and slightly below
                      animate={{
                        opacity: inView ? 1 : 0, // Fade in when in view
                        y: inView ? 0 : 20, // Slide up when in view
                      }}
                      transition={{
                        delay: index * 0.5, // Delay each item for staggered effect
                        duration: 0.5, // Duration of the animation
                      }}
                    >
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
                        <div className="text-lg font-semibold text-[#EDEDED]">
                          {item.title}
                        </div>
                        <div className="text-gray-300 text-sm">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen w-full justify-center iems-center px-0  ">
        <div className="flex flex-col w-full gap-7">
          <div className="flex flex-col gap-3 items-center justify-center h-fit w-full pl-6 py-8 mt-0 sm:mt-8 ">
            <div className="flex gap-6 items-center justify-center">
              <span className="text-sm text-center text-[#EDEDED]">
                SNAPSHOTS
              </span>
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
                  <a href={`${projectData?.live}`}>
                    <span className="text-[#EDEDED]">Live</span>
                  </a>
                </button>
              </div>
            </div>
            <hr className="border border-white sm:w-[30%] w-[80%]" />
          </div>
          <div className="carousel-container max-w-[100%] sm:max-w-[80%] ">
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
              {projectData?.snapshots &&
                projectData?.snapshots.map((item, index) => (
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
