import "./FormTemplates.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { FormDetail } from "../../store/actions/FormDetail";

const FormTemplates = ({ setText, text, setPage }) => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState();

  const [textColor, setTextColor] = useState();

  const [fSize, setFSize] = useState();

  const [formposition, setFormposition] = useState();

  const [popTime, setPupTime] = useState();

  const [formBorder, setFormBorder] = useState();
  const [file, setFile] = useState('')

  const formDetails = {
    theme: theme,
    textColor: textColor,
    fontSize: fSize,
    formposition: formposition,
    popTime: popTime,
    formBorder: formBorder,
    text: text,
    file:file,
  };

  const saveDetail = () => {
    dispatch(FormDetail(formDetails));
    setPage(1);
    console.log(file)
  };
  const uploadVideo = (e) => {
    
    const file = e.target.files[0];
    const vidUrl = URL.createObjectURL(file);
    setFile(vidUrl);
    console.log(vidUrl)
    
  };

  const style1 = {
    position: "relative",
    top: "10%",
    maxWidth: "275px",
    backgroundColor: theme,
    bordeRadius: " 5px 40px",
  };

  const style2 = {
    margin: "20px auto 3px",
    padding: "40px 2px 20px",
    position: "relative",
    top: "10%",
    maxWidth: "275px",
    backgroundColor: theme,
    borderRadius: "100px",
  };
  const [temp, setTemp] = useState(style1);

  return (
    <div className="formTemplates">
      <div className="temp" id="temp1">
        <form style={temp}>
          <br /> <br />
          <input
            type="text"
            placeholder="Enter a popup text"
            value={text}
            onChange={setText}
            style={{ color: textColor, fontSize: fSize + "px" }}
          />
          <br /> <br />
          <input
        type="file"
        name="file"
        id="file"
        accept="video/*"
        onChange={(e) => {
            uploadVideo(e)
          }}
      />
        </form>
      </div>

      <div className="temp" id="temp2">
        <div className="tempBox" action="">
          <span>
            <h5>Font Color</h5>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              onChange={(e) => {
                setTextColor(e.target.value);
              }}
            ></input>
          </span>
          <span>
            <h5>Font Size in px</h5>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="11"
              max="28"
              onChange={(e) => setFSize(e.target.value)}
            />
          </span>
          <span>
            <h5>Pop Up Time </h5>
            <select name="" id="" onChange={(e) => setPupTime(e.target.value)}>
              <option value={1000}>1s</option>
              <option value={2000}> 2s</option>
              <option value={5000}> 5s</option>
              <option value={10000}> 10s</option>
            </select>
          </span>
          <span>
            <h5>Background Color</h5>
            <input
              type="color"
              id="favcolor"
              name="favcolor"
              onChange={(e) => {
                setTheme(e.target.value);
                temp === style2 ? setTemp(style2) : setTemp(style1);
              }}
            />
          </span>
          <br /> <br />
          <Link to={"/preview"}>
            <button onClick={saveDetail}>Next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormTemplates;
