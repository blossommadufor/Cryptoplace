import Navbar from "./components/navbar/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Coin from "./pages/coin/Coin";
import Footer from "./components/footer/Footer";
import CoinContextProvider from "./context/CoinContext";

function App() {
  return (
    // <div className="app">
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/coin/:coinId" element={<Coin />} />
    //   </Routes>
    //   <Footer />
    // </div>


    <div>
      <CoinContextProvider> {/* Wrap your routes and components */}
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />} />
          </Routes>
          <Footer />
        </div>
      </CoinContextProvider>
    </div>
  );
}

export default App;
