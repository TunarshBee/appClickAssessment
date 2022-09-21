import "./FormTemplates.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { FormDetail } from "../../store/actions/FormDetail";

const FormTemplates = () => {
    const dispatch = useDispatch();

    const [theme, setTheme] = useState();

    const [textColor, setTextColor] = useState();

    const [fSize, setFSize] = useState();

    const [formposition, setFormposition] = useState();

    const [popTime, setPupTime] = useState();

    const [formBorder, setFormBorder] = useState();

    const formDetails = {
        theme: theme,
        textColor: textColor,
        fontSize: fSize,
        formposition: formposition,
        popTime: popTime,
        formBorder: formBorder,
    };

    const saveDetail = () => {
        dispatch(FormDetail(formDetails));
    };

    const style1 = {
        margin: "20px auto",
        padding: "40px 2px 20px",

        position: "relative",
        top: "10%",
        maxWidth: "275px",
        height: "300px",
        backgroundColor: theme,
        bordeRadius: " 5px 40px",
    };

    const style2 = {
        margin: "20px auto 3px",
        padding: "40px 2px 20px",
        position: "relative",
        top: "10%",
        maxWidth: "275px",
        height: "auto",
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
                        placeholder="Name"
                        style={{ color: textColor, fontSize: fSize + "px" }}
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        style={{ color: textColor, fontSize: fSize + "px" }}
                    />
                    <br /> <br />
                    <button
                        type="submit"
                        id="btn"
                        onClick={(e) => e.preventDefault()}
                    >
                        Submit
                    </button>
                    <br /> <br />
                </form>
            </div>

            <div className="temp" id="temp2">
                <div className="tempBox" action="">
                    <span>
                        <h5>Theme Color</h5>
                        <input
                            type="color"
                            id="favcolor"
                            name="favcolor"
                            // value={theme}
                            onChange={(e) => {
                                setTheme(e.target.value);
                                temp === style2
                                    ? setTemp(style2)
                                    : setTemp(style1);
                            }}
                        />
                    </span>
                    <span>
                        <h5>Text Color</h5>
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
                        <h5>Font Size</h5>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            min="11"
                            max="28"
                            onChange={(e) => setFSize(e.target.value)}
                        />
                        <h5> px</h5>
                    </span>
                    <span>
                        <h5> Position</h5>
                        <select
                            name=""
                            id=""
                            onChange={(e) => setFormposition(e.target.value)}
                        >
                            <option value="left">Left</option>
                            <option value="center"> Center</option>
                            <option value="right"> Right</option>
                        </select>
                    </span>
                    <span>
                        <h5>PopUp Time</h5>
                        <select
                            name=""
                            id=""
                            onChange={(e) => setPupTime(e.target.value)}
                        >
                            <option value={1000}>1s</option>
                            <option value={2000}> 2s</option>
                            <option value={5000}> 5s</option>
                            <option value={10000}> 10s</option>
                        </select>
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
