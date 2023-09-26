import "./Error.css";

import { ErrorProps } from "../../../types";

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="error-container">
        <span>Oops, something went wrong !</span>
        <span>{`(${message})`}</span>
    </div>
  )
}

export default Error