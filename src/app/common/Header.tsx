import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import "@/app/projects/projectpage.css";
const Header = () => {
  const router = useRouter();
  return (
    <div className="flex px-8 h-12 bg-black justify-between header-shadow z-[99] items-center fixed  w-full">
      
      <div  className="!hidden sm:!block">

        <Button size="small" onClick={() => router.back()} sx={{ margin:"0px", padding:"0px" }}>
          <div className="flex items-center border border-white  rounded-lg px-1 py-1 hover:bg-[#212121]">
            <ChevronLeftIcon
              sx={{ height: "16px", width: "16px", color: "white" }}
              />
            <span className="pr-1 text-xs text-white">Back</span>
          </div>
        </Button>
              </div>
      <div className=" flex items-center gap-6">
        <span className="text-xs font-semibold cursor-pointer text-white" onClick={()=>router.push("/")}> Home </span>
        {/* <span className="text-xs font-semibold cursor-pointer text-white">About</span> */}
        <span className="text-xs font-semibold cursor-pointer text-white" onClick={()=>router.push("/projects")}>Projects</span>
        <span className="text-xs font-semibold cursor-pointer text-white" onClick={()=>router.push("/contact")}>Contact</span>
      </div>
      <div className=" flex items-center border border-white  rounded-lg h-fit sm:py-1 sm:px-1 py-0 px-1 cursor-pointer hover:bg-[#212121] ">
      <a
        href="/DHEERAJ_P_GIRISH_Software_Enginner.pdf"  // Replace with the correct path to your CV file
        download="DHEERAJ_P_GIRISH_Software_Enginner.pdf"    // Set the file name for download
        // className="flex items-center border border-white rounded-lg h-fit py-1 px-1 cursor-pointer hover:bg-[#212121]"
      >
        <span className="text-xs font-semibold p-0 m-0 text-white">Download CV</span>
      </a>
      </div>
    </div>
  );  
};

export default Header;
