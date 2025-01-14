"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Header from "../common/Header";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Snackbar } from "@mui/material";
import { ContactEmailProps } from "../common/Contact";
const contactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState<ContactEmailProps>({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
  };

  const emailData = {
    name,
    email,
    message,
  };

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  const [response, setResponse] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }
    try {
      setIsSending(true);
      const response = await fetch("/contact/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      if (response.status === 200) {
        setResponse(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
      const data = await response.json();
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
      setName("");
      setEmail("");
      setMessage("");

      const timer = setTimeout(() => {
        setOpen(false); // Close Snackbar after 3 seconds
      }, 3000); // 3000ms = 3 seconds

      // Cleanup the timer when the component is unmounted or Snackbar is closed
      return () => clearTimeout(timer);
    }
  }, [response]); // Dependency on response, so it runs when response changes
  const isFormValid = emailData.name && emailData.email && emailData.message;
  return (
    <div className="flex flex-col bg-black">
      <Header />

      <div className="flex flex-col sm:flex-row items-center justify-center min-h-screen  w-full px-2 sm:px-24 gap-10 ">
        <div className="flex flex-col sm:flex-row sm:gap-[20%] h-full sm:w-full w-full sm:mt-0 mt-16 px-8 sm:px-0 sm:justify-between sm:items-center">
          <div className="flex flex-col h-full w-full ">
            <span className="sm:text-8xl text-7xl  leading-[100px]  font-medium sm:leading-[130px] ">
              LET'S
            </span>
            <span className="sm:text-8xl text-7xl  leading-[100px]  font-medium sm:leading-[130px] ">
              GET
            </span>
            <span className="sm:text-8xl text-7xl  leading-[100px]  font-medium sm:leading-[130px] ">
              IN TOUCH
            </span>
          </div>
          <div className="flex flex-col gap-8 mt-5">
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 ">
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
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 ">
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
        {/* <div className="flex flex-col h-full w-full sm:w-1/2 px-8 sm:px-0 sm:p-4">
          <form className="flex flex-col space-y-8" onSubmit={handleSubmit}>
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
                required
              />
            </div>
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
                required
              />
            </div>

            <button
              disabled={!isFormValid}
              type="submit"
              className="self-start px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-500 disabled:text-gray-400 sm:!mb-0 !mb-7"
            >
              Submit
            </button>
          </form>
        </div> */}
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
