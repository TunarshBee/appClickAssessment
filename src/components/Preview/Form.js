import React from 'react'
import { useSelector } from "react-redux";


const Form = (props) => {
    const formStyle = useSelector((state) => state.FormDetail);
  return (
    <div>
        <input
              type="text"
              placeholder="Name"
              style={{
                color: formStyle.textColor,
                fontSize: formStyle.fontSize,
              }}
              onChange={(e) => {
                props.setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Email"
              style={{
                color: formStyle.textColor,
                fontSize: formStyle.fontSize,
              }}
              onChange={(e) => props.setMail(e.target.value)}
            />
            <br /> <br />
            <button
              type="submit"
              id="btn"
              onClick={(e) => {
                e.preventDefault();
                props.setForm(false);
              }}
            >
              Submit
            </button>
    </div>
  )
}

export default Form