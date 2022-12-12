import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "/Users/anuj/Documents/FSWD-22/21. react router and navigation/routing-app/src/pages/About.js";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import FreePricing from "./pages/pricing/FreePricing";
import PremiumPricing from "./pages/pricing/PremiumPricing";
import Freemium from "./pages/pricing/Freemium";
import ForPremiumUsers from "./pages/ForPremiumUsers";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user/:userId" element={<Profile />} />
                <Route path="/user/:userId/:projectId" element={<Project />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/prime" element={<ForPremiumUsers />} />
                </Route>

                <Route path="/pricing" element={<Pricing />}>
                    <Route path="free" element={<FreePricing />} />
                    <Route path="premium" element={<PremiumPricing />} />
                    <Route path="freemium" element={<Freemium />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
