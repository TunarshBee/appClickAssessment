import "../components/css/VideoPlayer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { FormDetail } from "../store/actions/FormDetail";

const FormTemplates = ({ setText, text, setPage }) => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState();

  const [textColor, setTextColor] = useState();

  const [fSize, setFSize] = useState();

  const [formposition, setFormposition] = useState();

  const [popTime, setPupTime] = useState();

  const [file, setFile] = useState("");
  const [videoPlaceH, setVideoPlaceH] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const [videfile, setVidefile] = useState("");
  const [first, setFirst] = useState(true);
  const [saveBtn, setSaveBtn] = useState(false);
  const formDetails = {
    theme: theme,
    textColor: textColor,
    fontSize: fSize,
    formposition: formposition,
    popTime: popTime,
    text: text,
    videoPlaceH: videoPlaceH,
    videoUrl: videoUrl,
    videfile: videfile,
  };

  const saveDetail = () => {
    dispatch(FormDetail(formDetails));
    setPage(1);
  };
  const uploadVideo = (e) => {
    const file = e.target.files[0];
    const vidUrl = URL.createObjectURL(file);
    setFile(vidUrl);
    setVidefile(vidUrl);
    console.log(vidUrl);
    setSaveBtn(true);
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
      {first && (
        <div className="videoInput">
          <input
            type="file"
            name="file"
            id="file"
            accept="video/*"
            onChange={(e) => {
              uploadVideo(e);
            }}
          />

          <input
            type="text"
            placeholder="Past YouTube Video Url"
            onChange={(e) => {
              let url = e.target.value.split("v=")[1];
              setVideoPlaceH(false);
              setVideoUrl(url);

              setTimeout(() => {
                setVidefile("");
              }, 1000);
              setSaveBtn(true);
            }}
          />
        </div>
      )}
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
        </form>
      </div>

      <div className="temp" id="temp2">
        <div className="tempBox" action="">
          <span>
            <label htmlFor="favcolor">
                          <h5>Text Color</h5>
            </label>
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
            <label htmlFor="pop">
                          <h5>Pop Up Time </h5>
            </label>
            <select name="pop" id="pop" onChange={(e) => setPupTime(e.target.value)}>
              <option value={1000}>1s</option>
              <option value={2000}> 2s</option>
              <option value={5000}> 5s</option>
              <option value={10000}> 10s</option>
            </select>
          </span>
          <span>
            <label htmlFor="backcolor">
                          <h5>Background Color</h5>
            </label>
            <input
              type="color"
              id="backcolor"
              name="backcolor"
              onChange={(e) => {
                setTheme(e.target.value);
                temp === style2 ? setTemp(style2) : setTemp(style1);
              }}
            />
          </span>
          <br /> <br />
          {saveBtn && (
              <Link to={"/preview"}>
                <button onClick={saveDetail}>Save</button>
              </Link>
            )}
        </div>
      </div>
      <button
        style={{ display: "inline-block", position: "absolute" }}
        className="interactive"
        onClick={(e) => setFirst(!first)}
      >
        Create Interactive Video
      </button>
    </div>
  );
};

export default FormTemplates;
