import Header from "./Header"
import InnerCard from "./InnerCard"
// import { useState } from "react";

const Card = () => {

      
  return (
    <>
      <div className=" ml-6  border-1 lg:ml-[350px] lg:mr-[350px] bg-[#041E23] mt-9 rounded-3xl pb-7 border-[#07373F] mr-6 ">
         <Header title="Ticket Selection" subtitle="Step 1/3" /> 
         <InnerCard />
        
      </div>
      
    </>
  )
}

export default Card