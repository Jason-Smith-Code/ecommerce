import "./Loader.css";
import { TailSpin } from "react-loading-icons";

export const Loader = ({text}) => {
  return (
    <div className="loader-container">
      <TailSpin stroke="#101010" speed={0.75} />
      <p>{text}</p>
    </div>
  );
};

// <Loader text="Loading products" />