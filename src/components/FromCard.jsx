import Header from "./Header"
import SecondInner from "./SecondInner"

const FromCard = () => {
  return (
    <>
      <div className="border-1 ml-6 mr-5 lg:ml-[350px] lg:mr-[350px] bg-[#041E23] mt-9 rounded-3xl pb-7 border-[#07373F]">
         <Header title="Attendee Details " subtitle="Step 2/3" /> 
         <SecondInner />
        
      </div>
      
    </>
  )
}

export default FromCard