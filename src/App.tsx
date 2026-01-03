import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About.tsx";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
}
