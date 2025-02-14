

const ProgressBar = ({progress}) => {
  return (
    <div className=" bg-gray-800 rounded-full h-2 relative ml-9 mr-9">
      <div
        className="bg-cyan-400 h-full rounded-full transition-all duration-500 shadow-lg shadow-cyan-500/50"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar