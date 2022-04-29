import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./404";
import Blogs from "./Blogs";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>Header</header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <footer>Footer</footer>
        </>
    );
}

export default App;
