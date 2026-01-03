import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";

function About() {
    return <div className="p-6">About</div>;
}

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
