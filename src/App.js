import "./App.css";
import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    
} from "react-router-dom";

import Index from "./components/UserId/Index";
import FormTemplates from "./components/AppInputs/FormTemplates";
import Preview from "./components/Preview/Preview";
import Form from "./components/Form";
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
