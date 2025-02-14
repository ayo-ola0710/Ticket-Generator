import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import Button from "./Button"
import Price from "./Price"

const InnerCard = () => {

    const [error, setError] = useState('');
  
    const [ticketData, setTicketData] = useState({
        ticketType: '',
        numberOfTickets: 1,
    });

    useEffect(() => {
        localStorage.setItem('ticketSelectionData', JSON.stringify(ticketData));
    }, [ticketData]);
    
    const handleTicketTypeSelect = (type) => {
        setError('');
        setTicketData(prev => ({
          ...prev,
          ticketType: type,
        }));
    };

    const handleTicketNumberChange = (e) => {
        setTicketData(prev => ({
          ...prev,
          numberOfTickets: parseInt(e.target.value)
        }));
    };

    const navigate = useNavigate();

    
    const handleNext = () => {
        if (!ticketData.ticketType) {
            setError('Please select a ticket type');
            return;
        }
        navigate('/form');
    };

  return (
    <>
        <div className="border-1 ml-9 mr-9 mt-8 border-[#0E464F] rounded-3xl bg-[#08252B]">
            <div className="bg-[#07373F] mb-7 rounded-2xl ml-5 mr-5 pb-5">
                <div className="">
                    <img src="/assets/Heading.png" alt="head-img" className="lg:ml-[120px] mb-5 mt-4 pt-6 " />
                </div>
                <p className="text-white text-center">Join us for an unforgettable experience at
                    <br /> Colab Innovation Hub! secure your spot now.
                    <br />!Barnawa,Kaduna || March 15, 2025 | 7:00pm
                </p>
            </div>
            <hr className="mb-5 mt-6 ml-5 mr-7 text-[#07373F] border-2"/>
        
            <div>
                <p className="text-white ml-7 mb-2">Select Ticket Type:</p>
                <div className="border-1 border-[#0E464F] rounded-2xl  ml-5 mr-5 pb-5  lg:flex">
                    <div>
                        <Price
                            title="REGULAR ACCESS"
                            subtitle="20 left!"
                            amount="Free"
                            className={`lg:ml-5 ${ticketData.ticketType === 'REGULAR' ? 'ring-2 ring-[#24A0B5]' : ''}`}
                            isSelected={ticketData.ticketType === 'REGULAR'}
                            onClick={() => handleTicketTypeSelect('REGULAR')}
                        />
                        <Price
                            title="VVIP ACCESS"
                            subtitle="20 left!"
                            amount="$150"
                            className={`lg:ml-10 ${ticketData.ticketType === 'VVIP' ? 'ring-2 ring-[#24A0B5]' : ''}`}
                            isSelected={ticketData.ticketType === 'VVIP'}
                            onClick={() => handleTicketTypeSelect('VVIP')}
                        />
                    </div>
                    <div>
                        <Price
                            title="VIP ACCESS"
                            subtitle="20 left!"
                            amount="$50"
                            className={`lg:ml-8 pr-5 ${ticketData.ticketType === 'VIP' ? 'ring-2 ring-[#24A0B5]' : ''}`}
                            isSelected={ticketData.ticketType === 'VIP'}
                            onClick={() => handleTicketTypeSelect('VIP')}
                        />
                    </div> 
                </div>
            </div>
            <div className="pb-8">
               <p className="text-white ml-8 mt-4 pb-2">Number of Tickets</p>
               <select className="border-1 w-[87%] ml-5 mr-12 border-[#0E464F] pb-3 rounded-xl outline-none  text-white pt-3 pl-3"
               value={ticketData.numberOfTickets}
               onChange={handleTicketNumberChange}
               >
                    <option key={1} value={1} >Select Number of Tickets</option>
                    <option key={2} value={2} className="text-black" > 1</option>
                    <option key={3} value={3} className="text-black" > 2</option>
                    <option key={4} value={4} className="text-black" > 3</option>
                    <option key={5} value={5} className="text-black" > 4</option>
                    <option key={6} value={6} className="text-black" > 5</option>
                    <option key={7} value={7} className="text-black" > 6</option>
                </select>
            </div>
            <div className="lg:border-1 border-[#0E464F] ml-9 mr-9 rounded-3xl mb-6">
                <div className="lg:flex lg:ml-20 ml-4 ">
                    <Button className=" px-15 border-1 border-[#24A0B5] lg:px-15  " >
                        <p className="text-[#24A0B5]  hover:text-white">Cancel</p>
                    </Button>
                    <Button 
                     onClick={handleNext}
                      className=" mt-4 px-17 lg:mt-0 border-1 border-[#24A0B5] lg:px-15 lg:ml-9 hover:bg-[#2BA4B9] cursor"
                    >
                      <p className="text-[#24A0B5] hover:text-white">Next</p>
                    </Button>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default InnerCard