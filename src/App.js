import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/HeaderNavBar/Navbar';
import Home from './views/Home/Home';
import Show from './views/CoinPage/Show';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Show />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
