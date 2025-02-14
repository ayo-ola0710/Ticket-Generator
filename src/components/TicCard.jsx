import Header from "../components/Header"
import Button from "../components/Button"
import TicBox from "./TicBox"

const TicCard = () => {
  return (
    <>
      <div className="border-1 ml-5 mr-5 lg:ml-[350px] lg:mr-[350px] bg-[#041E23] mt-9 rounded-3xl pb-7 border-[#07373F]">
         <Header title="Ready " subtitle="Step 3/3" />
         <div>
            <p className="lg:text-center text-white text-2xl pt-5 ml-5">Your Ticket is Booked!</p>
            <p className="lg:text-center  text-white pb-5 lg:w-full  lg:ml-7 ml-5">You can download or check your email for a copy </p>
        </div> 
         <TicBox />

         <div className="flex lg:ml-10 lg:ml-20  ml-2 pb-8 mt-20">
                    <Button to="/" className="border-1 border-[#24A0B5] lg:px-15 " >
                        <p className="text-[#24A0B5]  hover:text-white">Book Another Ticket </p>
                    </Button>
                    <Button className="border-1 border-[#24A0B5] lg:px-12 ml-3  hover:bg-[#2BA4B9] cursor" >
                        <p className="text-[#24A0B5] hover:text-white">Download Ticket</p>
                    </Button>
         </div>
        
      </div>
    </>
  )
}

export default TicCard