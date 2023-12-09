import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navigation from "./components/Navigation";
import Planet from "./pages/destinations/Planet";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <div>
                <Router>
                    <Navigation />
                    <Routes>
                        <Route path="/fm-space-tourism-website" element={<Home />} />
                        <Route path="/fm-space-tourism-website/destination" element={<Destination />}>
                            <Route path=":postSlug" element={<Planet />} />
                        </Route>
                        <Route path="/fm-space-tourism-website/crew" element={<Crew />} />
                        <Route path="/fm-space-tourism-website/tech" element={<Technology />} />
                    </Routes>
                </Router>
            </div>

            <footer className="h-20 text-center flex justify-center items-center">
                Coded by &nbsp; <span><a href="https://github.com/coder-96">Jalga</a></span>, Challenge by &nbsp;
                <span><a href="https://www.frontendmentor.io/">Frontend Mentor</a></span>
            </footer>
        </>
    );
}

export default App;
