import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/PortfolioPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
