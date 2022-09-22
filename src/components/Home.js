import "../components/css/Home.css";

import { useState } from "react";


import Register from "./SignIn";

const Index = () => {
    const [comp, setComp] = useState("login");

    return (
        <div className="index">
            <div className="viewModal">
                <h3 className="title">Sign In Here</h3>
                {comp === "login" && <Register />}
            </div>
        </div>
    );
};

export default Index;
