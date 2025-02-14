import ProgressBar from "./ProgressBar"

const Header = ({title, subtitle}) => {
  return (
    <div>
        <div className=" lg:flex justify-between items-center mb-4 ml-9 mr-9 pt-5">
            <h1 className=" text-3xl text-white ">{title}</h1>
            <p className="mt-[5px] text-white">{subtitle} </p>
        </div>
        <ProgressBar />
    </div>
  )
}

export default Header