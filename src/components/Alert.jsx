

const Alert = ({message}) => {
  return (
    <div className="py-2 ml-9 w-[90%] text-red-700 bg-red-100 border border-red-500 rounded-md">
      {message}
    </div>
  )
}

export default Alert