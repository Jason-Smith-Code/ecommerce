import "./Button.css";

export const Button = ({ text, buttonClass }) => {
  return <button className={buttonClass}>{text}</button>;
};
