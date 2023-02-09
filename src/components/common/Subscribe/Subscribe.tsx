import { SetStateAction, useState } from "react";
import Button from "../Button/Button";
import "./Subscribe.scss";
function Subscribe() {
  const [value, setValue] = useState("");
  const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
    setValue(event.target.value);
  return (
    <form className="subscribe-form">
      <input
        type="text"
        name="Enter Your Mail"
        placeholder="Enter Your Mail"
        className="text-field"
        value={value}
        onChange={handleChange}
      />
      <Button btnName="Subscribe" btnType="secondary-filled" />
    </form>
  );
}
export default Subscribe;
