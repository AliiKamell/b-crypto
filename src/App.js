import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/HeaderNavBar/Navbar';
import Home from './views/Home/Home';
import Show from './views/CoinPage/Show';
import Footer from './components/Footer/Footer';
import TopGainers from './views/TopGainers/TopGainers';
import TopLosers from './views/TopLosers/TopLosers';
import About from './views/About/About';
import ResponsiveAppBar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/top-gainers' element={<TopGainers />} />
        <Route path='/top-losers' element={<TopLosers />} />
        <Route path='/about' element={<About />} />
        <Route path='/:id' element={<Show />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
