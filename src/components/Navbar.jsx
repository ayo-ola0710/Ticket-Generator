import "../index.css"
import thumb from "../assets/thumb.png"
import ticz from "../assets/ticz.png"
import Button from "./Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
  return (
    <>
       <nav className="pt-9">
          <div className="flex space-x-2 w-[90%] ml-[22px] lg:flex justify-between items-center  border-1 border-gray-300 px-[15px] py-[15px] rounded-3xl lg:ml-[90px] mr-[90px] bg-[#052f35]">
              <div className="flex ">
                  <span>
                    <img src={thumb} alt="thumbs" className="w-[30px]" />
                  </span>
                  <span className="mt-[2px]">
                    <img src= {ticz} alt="logo" className="w-[40px]" />
                  </span>
              </div> 
              <div className="">
                <ul className=" hidden lg:flex justify-between items-center text-white   ">
                    <Link to="/" className="mr-[40px] opacity-80 hover:text-zinc-600">Events</Link>
                    <Link className="opacity-50 hover:text-zinc-600">My Tickets</Link>
                    <Link className="ml-[40px] opacity-50 hover:text-zinc-600">About Project</Link>
                </ul>
              </div>
              <Button  className="bg-white">
                    MY TICKETS
                    <FontAwesomeIcon icon={faArrowRight} className="text-sm ml-2 " />
              </Button>
          </div>
       </nav>
    </>
  )
}

export default Navbar