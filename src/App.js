import Navbar from './components/navbar/Navbar';
import './index.css';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Coin from './pages/coin/Coin';

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/coin/:coinId' element={<Coin/>}/>
    </Routes>
    </div>
  );
}

export default App;
