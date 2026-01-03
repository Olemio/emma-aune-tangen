import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About.tsx";
import Header from "./layout/Header";
import Footer from "./layout/Footer.tsx";

export default function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </>
    );
}
