import { useState, useEffect } from "react";

const TicBox = () => {
  const [ticketData, setTicketData] = useState(null);

  useEffect(() => {
    const finalData = localStorage.getItem('finalTicketData');
    if (finalData) {
      setTicketData(JSON.parse(finalData));
    }
  }, []);

  // Show a message if no ticket data is found
  if (!ticketData) return <div>No ticket data found</div>;

  return (
    <>
      <div className="border lg:ml-45  ml-3 mt-8 border-white border-dashed rounded-3xl bg-[#08252B] p-6 text-white w-80">
        <div className="pt-3 pb-9">
          <p className="text-2xl ml-10 font-serif ">TECHEMBER FEST</p>
          <p className=" text-center text-xl ml-2">Colab Innovation Hub</p>
          <p className="text-[10px] text-center ml-3 italic">NO19 Barnawa Close, Barnawa Kaduna</p>
        </div>

        <div className=" space-x-4 pb-10">
          <img
            src={ticketData.personalInfo.avatarUrl}
            alt="Profile"
            className="w-40 h-40 rounded-lg border-white border-1 border-dashed  ml-15 "
            onError={(e) => e.target.src = '/api/placeholder/64/64'}
          />
        </div>

        <div className="border-t border-[#0E464F] " >
          <div className="  mt-5">
            <h2 className="text-3xl font-bold uppercase text-center">{ticketData.personalInfo.fullName}</h2>
            <p className="text-gray-400 pl-3 text-[15px] text-center italic">{ticketData.personalInfo.email}</p>
          </div>
        </div>
         
        <div className="mt-4 border-t border-[#0E464F] pt-4 font-serif">
          <div className="flex justify-between ml-10 mr-10">
            <span>Ticket Type :</span>
            <span>{ticketData.ticketInfo.ticketType}</span>
          </div>
          <div className="flex justify-between mt-2 ml-10 mr-10 ">
            <span>Number of Tickets :</span>
            <span>{ticketData.ticketInfo.numberOfTickets}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicBox;