import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home.js';
import DriverPage from './pages/Drivers.js';
import DriverStats from './components/DriverStats';
import Rankings from './pages/RankingPage.js'




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/drivers' exact Component={DriverPage}/>
          <Route path='/driver-stats/:driverId' exact Component={DriverStats} />
          <Route path='/rankings' exact Component={Rankings} />
          
          
          


          
      
      
        </Routes>
      </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
