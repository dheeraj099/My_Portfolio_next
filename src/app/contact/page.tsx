"use client";
import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Snackbar } from "@mui/material";
const contactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [response, setResponse] = useState(false);
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setResponse(true);
      }
      const data = await response.json();
      console.log("data:", data);
    } catch (error) {
      //   console.error("Error:", error);
      //   alert("Error sending message");
    }
  };
  const [open, setOpen] = useState(false); // Snackbar open state
  const [vertical] = useState("top");
  const [horizontal] = useState("right");
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (response) {
      setOpen(true); // Open Snackbar when response is available
      setFormData({
        name: '',
        email: '',
        message: '',
      });

      const timer = setTimeout(() => {
        setOpen(false); // Close Snackbar after 3 seconds
      }, 3000); // 3000ms = 3 seconds

      // Cleanup the timer when the component is unmounted or Snackbar is closed
      return () => clearTimeout(timer);
    }
  }, [response]); // Dependency on response, so it runs when response changes
  const isFormValid = formData.name && formData.email && formData.message;
  return (
    <div className="flex flex-col bg-black">
      <Header />

      <div className="flex items-center justify-center min-h-screen  w-full px-24 gap-10">
        <div className="flex flex-col h-full w-1/2 ">
          <span className="text-8xl font-medium leading-[130px] ">LETS'S</span>
          <span className="text-8xl font-medium leading-[130px]  ml-10">
            GET
          </span>
          <span className="text-8xl font-medium leading-[130px] ">
            IN TOUCH
          </span>
          <div className="flex flex-col gap-8 mt-5">
            <div className="flex gap-16 ">
              <div className="flex gap-4 items-center">
                <GitHubIcon />
                <div className="flex flex-col">
                  <span className="font-bold text-base">Github</span>
                  <span className="text-xs">
                    <a href="https://github.com/dheeraj099">
                      https://github.com/dheeraj099
                    </a>{" "}
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <LinkedInIcon />
                <div className="flex flex-col">
                  <span className="font-bold text-base">Linkedin</span>
                  <span className="text-xs">
                    <a href="https://www.linkedin.com/in/dheeraj-p-girish">
                      https://www.linkedin.com/in/dheeraj-p-girish
                    </a>{" "}
                  </span>
                </div>
              </div>{" "}
            </div>
            <div className="flex gap-16 ">
              <div className="flex gap-4 items-center">
                <EmailIcon />
                <div className="flex flex-col">
                  <span className="font-bold text-base">Email</span>
                  <span className="text-xs">dheerajpgirish09@gmail.com</span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <PhoneIcon />
                <div className="flex flex-col">
                  <span className="font-bold text-base">Phone</span>
                  <span className="text-xs">+91 9495482212</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-1/2 p-4">
          <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-base font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md bg-transparent border-b border-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white px-2 h-8"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-base font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md bg-transparent border-b border-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white px-2 h-8"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Message Input */}
            <div>
              <label
                htmlFor="message"
                className="block text-base font-semibold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-transparent border-b border-white shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white px-2 resize-none h-32"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <button
            disabled={!isFormValid}
              type="submit"
              className="self-start px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-500 disabled:text-gray-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {response && (
        <Snackbar
          sx={{
            "& .MuiSnackbarContent-root": {
              background: "#4dc61e",
            },
          }}
          anchorOrigin={{
            vertical: "top", // Correct value for vertical
            horizontal: "right", // Correct value for horizontal
          }}
          open={open}
          onClose={handleClose}
          message="Thank you for reaching out"
          key={vertical + horizontal}
        />
      )}
    </div>
  );
};

export default contactPage;
