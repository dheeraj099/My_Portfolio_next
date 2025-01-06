"use client";
import Htmlimage from "@/app/assets/HTML5_logo_black.png";
import JavascriptImage from "@/app/assets/JavaScript-logo2.png";
import KarmminProject from "@/app/assets/K_Project.png";
import LindeinIcon from "@/app/assets/LinkedIn_icon.svg.png";
import ReactImage from "@/app/assets/React-icon.2svg.png";
import AiotelProject from "@/app/assets/aiotel_project2.png";
import profile_picture from "@/app/assets/me_batcheditor_fotor.png";
import NextJs from "@/app/assets/nextjsLogo.png";
import roundedImage from "@/app/assets/round-text.png";
import "@/app/homePage/homepage.css";
import "@/app/homePage/themes.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import "line-awesome/dist/line-awesome/css/line-awesome.css";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../../supabase";
import { useEffect, useRef, useState } from "react";
// import "@/app/homePage/custom.css";
// import overlay from "@/"
const Homepage = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const handleMenuClick = () => {
    setIsSidebarActive(true);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if ((event.target as HTMLElement).classList.contains("overlay")) {
      setIsSidebarActive(false); // Close sidebar
    } 
};

  useEffect(() => {
    if (isSidebarActive) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick); // Cleanup
    };
  }, [isSidebarActive]);
  return (
    <div className="home1-page">
      <video id="overlay_video" className="body-overlay" muted autoPlay loop>
        <source src="/videoTrial2.mp4" type="video/mp4" />
      </video>
      <span className="icon-menu" onClick={handleMenuClick}>
        <span className="bar"></span>
        <span className="bar"></span>
      </span>

      {/* START - Hamburger menu  */}
      <div
        ref={sidebarRef}
        className={`responsive-sidebar-menu ${isSidebarActive ? "active" : ""}`}
      >
        <div className="overlay"></div>
        <div className="sidebar-menu-inner">
          <div className="menu-wrap">
            <p>Menu</p>
            <ul className="menu scroll-nav-responsive d-flex">
              <li>
                <a className="scroll-to" href="#home">
                  <i className="las la-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#about">
                  <i className="lar la-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#resume">
                  <i className="las la-briefcase"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#skills">
                  <i className="las la-shapes"></i> <span>Skills</span>
                </a>
              </li>
              <li>
                <a className="scroll-to" href="#portfolio">
                  <i className="las la-grip-vertical"></i>{" "}
                  <span>Portfolios</span>
                </a>
              </li>
              {/* <li>
                        <a className="scroll-to" href="#testimonial">
                            <i className="lar la-comment"></i> <span>Testimonial</span>
                        </a>
                    </li> */}
              {/* <li>
                        <a className="scroll-to" href="#contact">
                            <i className="las la-envelope"></i> <span>Contact</span>
                        </a>
                    </li> */}
            </ul>
          </div>

          {/* <div className="sidebar-social">
            <p>Social</p>
            <ul className="social-links d-flex align-items-center">
              <li>
                <a href="#">
                  <i className="lab la-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lab la-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="lab la-instagram"></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      {/* END - Hamburger menu  */}

<div className="desktopMenu">
      <ul className="menu scroll-nav d-flex   ">
        <li>
          <a className="scroll-to" href="#home">
            <span>Home</span> <i className="las la-home" />
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#about">
            <span>About</span> <i className="lar la-user" />
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#resume">
            <span>Resume</span> <i className="las la-briefcase" />
          </a>
        </li>

        <li>
          <a className="scroll-to" href="#skills">
            <span>Skills</span> <i className="las la-shapes" />
          </a>
        </li>
        <li>
          <a className="scroll-to" href="#portfolio">
            <span>Portfolios</span> <i className="las la-grip-vertical" />
          </a>
        </li>
      </ul>
      </div>


      <div className="left-sidebar mt-0 sm:mt-5">
        <div className="sidebar-header d-flex w-full align-items-center justify-content-center">
          <span className="name">Dheeraj P Girish</span>
          <span className="designation2">Software Engineer</span>
        </div>
        {/* <img
          className="me"
          src="assets/images/me_batcheditor_fotor.png"
          alt="Me"
        /> */}
        <Image
          src={profile_picture}
          alt="Me"
          className="me"
          layout="responsive"
        />
        <h5 className="email">dheerajpgirsh09@gmail.com</h5>
        <h5 className="address">Bengaluru, Karnataka, India</h5>
        {/* <p className="copyright">&copy; 2022 Drake. All Rights Reserved</p> */}
        <ul className="d-flex align-items-center flex-wrap justify-content-center">
          <li>
            <a href="https://www.linkedin.com/in/dheeraj-p-girish/">
              {/* <img
                src="assets/images/LinkedIn_icon.svg.png "
                style={{ width: 25, height: 25 }}
                alt="React"
              /> */}
              <Image
                src={LindeinIcon}
                alt="React"
                style={{ width: 25, height: 25 }}
              />
            </a>
          </li>
        </ul>
      </div>
      <main className="drake-main">
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <div className="left-sidebar">
              <div className="sidebar-header d-flex align-items-center justify-content-between">
                {/* <img src="assets/images/logo.png" alt="Logo" /> */}
                {/* <span className="designation">
                  Framer Designer &amp; Developer
                </span> */}
              </div>
              {/* <img className="me" src="assets/images/me.jpg" alt="Me" /> */}
              <Image
                src={profile_picture}
                alt="Me"
                className="me"
                layout="responsive"
              />
              <h2 className="email">dheerajpgirsh09@gmail.com</h2>
              <h2 className="address">Bengaluru, Karnataka, India</h2>
              {/* <p className="copyright">© 2022 Drake. All Rights Reserved</p> */}
              <ul className="d-flex align-items-center flex-wrap justify-content-center">
                <li>
                  <a href="https://www.linkedin.com/in/dheeraj-p-girish/">
                    {/* <img
                src="assets/images/LinkedIn_icon.svg.png "
                style={{ width: 25, height: 25 }}
                alt="React"
              /> */}
                    <Image
                      src={LindeinIcon}
                      alt="React"
                      style={{ width: 25, height: 25 }}
                    />
                  </a>
                </li>
              </ul>
              {/* <a href="#" className="theme-btn">
                <i className="las la-envelope" /> Hire Me!
              </a> */}
            </div>
            <section
              className="hero-section page-section scroll-to-page"
              id="home"
            >
              <div className="custom-container">
                <div className="hero-content content-width">
                  <div className="section-header">
                    <h4
                      className="subtitle scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <i className="las la-home" /> Introduce
                    </h4>
                    <h1
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      Hi from
                      <span>Dheeraj</span>, Frontend Developer
                    </h1>
                  </div>
                  <p
                    className="scroll-animation"
                    data-animation="fade_from_bottom"
                  >
                    I build seamless and visually appealing front-end
                    experiences, blending design with functionality
                  </p>
                  <a
                    href="#portfolio"
                    className="go-to-project-btn scroll-to "
                    // data-animation="rotate_up"
                  >
                    <Image src={roundedImage} alt="Rounded Text" />
                    <i className="las la-arrow-down" />
                  </a>
                  <div className="facts d-flex">
                    <div
                      className="left scroll-animation"
                      data-animation="fade_from_left"
                    >
                      <h1>2+</h1>
                      <p>Years of Experience</p>
                    </div>
                    <div
                      className="right scroll-animation"
                      data-animation="fade_from_right"
                    >
                      <h1>6+</h1>
                      <p>projects completed </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section
              className="about-area page-section scroll-to-page"
              id="about"
            >
              <div className="custom-container">
                <motion.div
                  className="about-content content-width"
                  initial={{ opacity: 0, y: 100 }} // Initial state
                  whileInView={{ opacity: 1, y: 0 }} // State when in view
                  transition={{ duration: 0.5 }} // Transition duration
                  viewport={{ once: true }} // Animation will trigger every time
                >
                  <div className="section-header">
                    <h4
                      className="subtitle scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <i className="lar la-user" /> About
                    </h4>
                    <h1
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      Every Unique solution begins with
                      <br />a <span> clear vision and purpose </span>
                    </h1>
                  </div>
                  <p
                    className="scroll-animation"
                    data-animation="fade_from_bottom"
                  >
                    Since starting my journey as a Software Engineer, I’ve
                    worked on building scalable web applications, collaborated
                    with teams on cross-platform projects, and designed user
                    interfaces that enhance digital experiences. I’m confident
                    in my skills, always curious to learn more, and continuously
                    improving my craft.
                  </p>
                </motion.div>
              </div>
            </section>
            <section
              className="resume-area page-section scroll-to-page"
              id="resume"
            >
              <div className="custom-container">
                <div className="resume-content content-width">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 100 }} // Initial state
                    whileInView={{ opacity: 1, y: 0, zIndex: 1 }} // State when in view
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger every time
                  >
                    <h4
                      className="subtitle scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <i className="las la-briefcase" /> Resume
                    </h4>
                    <h1
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      Education
                    </h1>
                  </motion.div>
                  <motion.div
                    className="resume-timeline"
                    initial={{ opacity: 0, x: 100 }} // Initial state (off-screen to the right)
                    whileInView={{ opacity: 1, x: 0, zIndex: 1 }} // State when in view (onscreen)
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger only once
                  >
                    <motion.div
                      className="item scroll-animation"
                      initial={{ opacity: 0, x: 100 }} // Initial state (off-screen to the right)
                      whileInView={{ opacity: 1, x: 0, zIndex: 1 }} // State when in view (onscreen)
                      transition={{ duration: 0.7 }} // Transition duration
                      viewport={{ once: true }} // Animation will trigger only once
                    >
                      <span className="date">2020-2022</span>
                      <h2>Master of Computer Applications (MCA)</h2>
                      <p>Jain University</p>
                    </motion.div>
                    <motion.div
                      className="item scroll-animation"
                      whileInView={{ opacity: 1, x: 0, zIndex: 1 }} // State when in view (onscreen)
                    >
                      <span className="date">2017-2020 </span>
                      <h2>Bachelor of Computer Applications (BCA)</h2>
                      <p>Jain University</p>
                    </motion.div>
                  </motion.div>
                  <br />
                  <br />
                  <motion.div
                    initial={{ opacity: 0, y: 100 }} // Initial state
                    whileInView={{ opacity: 1, y: 0 }} // State when in view
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger every time
                    className="section-header"
                  >
                    <h1 data-animation="fade_from_bottom">Experience</h1>
                  </motion.div>
                  <motion.div
                    className="resume-timeline"
                    initial={{ opacity: 0, x: 100 }} // Initial state (off-screen to the right)
                    whileInView={{ opacity: 1, x: 0 }} // State when in view (onscreen)
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger only once
                  >
                    <motion.div
                      className="item scroll-animation"
                      initial={{ opacity: 0, x: 100 }} // Initial state (off-screen to the right)
                      whileInView={{ opacity: 1, x: 0, zIndex: 1 }} // State when in view (onscreen)
                      transition={{ duration: 0.7 }} // Transition duration
                      viewport={{ once: true }} // Animation will trigger only once
                    >
                      <span className="date">July 2022 - Present </span>
                      <h2>Software Engineer</h2>
                      <p>AIOTEL, Bengaluru</p>
                      <ul className="resume-exp-desc">
                        <li>
                          Developed front-end web applications with HTML, CSS,
                          Next.js, and React.
                        </li>
                        <li>
                          Enhanced responsiveness of web pages by optimizing
                          media screens using CSS.
                        </li>
                        <li>
                          Integrated REST API on the front-end and utilized
                          Django REST framework.
                        </li>
                        <li>
                          Developed cross-platform mobile application using
                          React native.
                        </li>
                        <li>
                          Collaborated on designing UI for web applications
                          using Figma.{" "}
                        </li>
                        <li>Led a team on web application projects. </li>
                        <li>
                          Worked with various 3D geometry formats (gLTF, 3D
                          Tiles, IFC).{" "}
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div
                      className="item scroll-animation"
                      whileInView={{ opacity: 1, x: 0, zIndex: 1 }} // State when in view (onscreen)
                    >
                      <span className="date">April 2021 - September 2021 </span>
                      <h2>Graphic Designer</h2>
                      <p>Dax Ads, Kannur</p>
                      <ul className="resume-exp-desc">
                        <li>
                          Designed posters and logos using Adobe Photoshop.
                        </li>
                        <li>
                          Performed image color correction tasks using Adobe
                          Lightroom.{" "}
                        </li>
                      </ul>
                    </motion.div>
                    <div
                      className="item scroll-animation"
                      data-animation=""
                    ></div>
                  </motion.div>
                </div>
              </div>
            </section>
            <section
              className="skills-area page-section scroll-to-page"
              id="skills"
            >
              <div className="custom-container">
                <div className="skills-content content-width">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 100 }} // Initial state
                    whileInView={{ opacity: 1, y: 0 }} // State when in view
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger every time
                  >
                    <h4
                      className="subtitle scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <i className="las la-shapes" /> my skills
                    </h4>
                  </motion.div>
                  <motion.div
                    className="row skills text-center"
                    initial={{ opacity: 0, scale: 0.8 }} // Start with 0 opacity and slightly scaled down
                    whileInView={{ opacity: 1, scale: 1 }} // Fade in and grow to normal size
                    transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
                    viewport={{ once: true }} // Trigger the animation only once
                  >
                    <div
                      className="col-md-4 scroll-animation"
                      data-animation="fade_from_right"
                    >
                      <div className="skill">
                        <motion.div
                          className="skill-inner"
                          whileHover={{
                            backgroundColor: "#983e26",
                            transition: { duration: 0.3 }, // Smooth transition
                          }}
                        >
                          <Image src={Htmlimage} alt="React" />
                        </motion.div>
                        <p className="name">HTML</p>
                      </div>
                    </div>
                    <div
                      className="col-md-4 scroll-animation"
                      data-animation="fade_from_left"
                    >
                      <div className="skill">
                        <motion.div
                          className="skill-inner"
                          whileHover={{
                            backgroundColor: "#8f823d",
                            transition: { duration: 0.3 }, // Smooth transition
                          }}
                        >
                          <Image src={JavascriptImage} alt="Javascript" />
                        </motion.div>
                        <p className="name">JavaScript</p>
                      </div>
                    </div>
                    <div
                      className="col-md-4 scroll-animation"
                      data-animation="fade_from_left"
                    >
                      <div className="skill">
                        <motion.div
                          className="skill-inner"
                          whileHover={{
                            backgroundColor: "#377a9c",
                            transition: { duration: 0.3 }, // Smooth transition
                          }}
                        >
                          <Image src={ReactImage} alt="React" />
                        </motion.div>
                        <p className="name">React.js</p>
                      </div>
                    </div>
                    <div
                      className="col-md-4 scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <div className="skill">
                        <motion.div
                          className="skill-inner"
                          whileHover={{
                            backgroundColor: "#377a9c",
                            transition: { duration: 0.3 }, // Smooth transition
                          }}
                        >
                          <Image src={ReactImage} alt="React Native" />
                          {/* <h1 className="percent">85%</h1> */}
                        </motion.div>
                        <p className="name">React Native</p>
                      </div>
                    </div>
                    <div
                      className="col-md-4 scroll-animation"
                      data-animation="fade_from_top"
                    >
                      <div className="skill">
                        <motion.div
                          className="skill-inner"
                          whileHover={{
                            backgroundColor: "#aeadb9",
                            transition: { duration: 0.3 }, // Smooth transition
                          }}
                        >
                          <Image src={NextJs} alt="Next js" />
                        </motion.div>
                        <p className="name">Next</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
            <section
              className="portfolio-area page-section scroll-to-page"
              id="portfolio"
            >
              <div className="custom-container">
                <div className="portfolio-content content-width">
                  <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 100 }} // Initial state
                    whileInView={{ opacity: 1, y: 0, zIndex: 1 }} // State when in view
                    transition={{ duration: 0.7 }} // Transition duration
                    viewport={{ once: true }} // Animation will trigger every time
                  >
                    <h4
                      className="subtitle scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <i className="las la-grip-vertical" /> portfolio
                    </h4>
                    <h1
                      className="scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      Featured
                      <span>Project</span>
                    </h1>
                  </motion.div>
                  <div className="row portfolio-items">
                    <div
                      className="col-md-12 scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <div className="portfolio-item portfolio-full">
                        <div className="portfolio-item-inner">
                          <a
                            // href="assets/images/portfolio1.jpg"
                            data-lightbox="example-1"
                          >
                            {/* <img
                              src="assets/images/portfolio1.jpg"
                              alt="Portfolio"
                            /> */}
                            <Image src={AiotelProject} alt="Featured Project" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Next js</a>
                            </li>
                            <li>
                              <a href="#">Three js</a>
                            </li>
                            <li>
                              <a href="#">Tailwind</a>
                            </li>
                          </ul>
                        </div>
                        <div className="projects_see_all">
                          <h2>
                            <span className="text-white ">
                              AIOTEL - Three js based website
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-12 scroll-animation"
                      data-animation="fade_from_bottom"
                    >
                      <div className="portfolio-item portfolio-full">
                        <div className="portfolio-item-inner">
                          <a
                            // href="assets/images/portfolio1.jpg"
                            data-lightbox="example-1"
                          >
                            {/* <img
                              src="assets/images/portfolio1.jpg"
                              alt="Portfolio"
                            /> */}
                            <Image src={KarmminProject} alt="Karmmin Project" />
                          </a>
                          <ul className="portfolio-categories">
                            <li>
                              <a href="#">Next js</a>
                            </li>
                            <li>
                              <a href="#">Three js</a>
                            </li>
                            <li>
                              <a href="#">Tailwind</a>
                            </li>
                          </ul>
                        </div>
                        <div className="projects_see_all">
                          <h2>
                            <span className="text-white ">
                              Karmmin - Edu-tech platform
                            </span>
                          </h2>
                          <Link className="all_Project " href="/projects">
                            {" "}
                            See all projects
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
