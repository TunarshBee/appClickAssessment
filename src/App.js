import "./App.css";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    
} from "react-router-dom";

import Index from "./components/Home";
import FormTemplates from "./components/PopUpSetter";
import Preview from "./components/VideoPlayer";
import Form from "./components/Display";
function App() {
    const theuser = useSelector((state) => state.RegisterUser.username);
    return (
        <div className="App">
            <div className="AppBackground">
                
                <Router>
                    <Routes>
                        <Route path="/templates" element={<Form/>} />
                        <Route path="/preview" element={<Preview />} />
                        <Route
                            path="/"
                            element={
                                theuser ? (
                                    <Navigate replace to="/templates" />
                                ) : (
                                    <Index />
                                )
                            }
                        />
                        <Route path="/templates" element={<FormTemplates />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
