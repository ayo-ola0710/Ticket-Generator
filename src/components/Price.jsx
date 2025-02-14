
const Price = ({ title, subtitle, amount, className, isSelected, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex border-1 mt-4 lg:ml-6 ml-3 rounded-xl pt-3 pb-3 border-[#0E464F] cursor-pointer transition-colors duration-200
        ${isSelected ? 'bg-[#2BA4B9] ring-2 ring-[#24A0B5]' : 'hover:bg-[#2BA4B9]'}`}
    >
      <div className="ml-3">
        <h2 className="text-white text-[14px]">{title}</h2>
        <p className="text-white text-[12px]">{subtitle}</p>
      </div>
      <div className={`border-1 rounded-md border-[#2BA4B9] lg:mr-[5px] ml-5   ${className}`}>
        <p className=" lg:text-lg text-white mt-1 lg:mr-5 pl-2 lg:ml-6 mr-3">{amount}</p>
      </div>
    </button>
  )
}

export default Price