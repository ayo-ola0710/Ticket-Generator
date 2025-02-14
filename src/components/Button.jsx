import { Link } from "react-router-dom";

const Button = ({ to, children, className , onClick}) => {
  return to ? (
          <Link to={to} className={` rounded-lg  p-3  ${className}`}>{children}</Link>
  ) :(
        
    <button onClick={onClick} className={` rounded-lg p-3  hover:bg-[#2BA4B9] cursor  ${className}`}>{children}</button>
  )
}

export default Button

