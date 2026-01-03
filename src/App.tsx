import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About.tsx";
import Header from "./layout/Header";
import Footer from "./layout/Footer.tsx";

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-1">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
