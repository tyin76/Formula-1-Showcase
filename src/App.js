import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home.js';
import DriverPage from './pages/Drivers.js';
import DriverStats from './components/DriverStats';
import Rankings from './pages/RankingPage.js'
import TeamRanking from './pages/TeamRankingPage.js';
import Schedule from './pages/SchedulePage.js';
import RaceResults from './components/RaceResult.js'
import QuizPage from './pages/QuizPage.js'




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
          <Route path='/rankings/teams' exact Component={TeamRanking} />
          <Route path='/schedule' exact Component={Schedule} />
          <Route path='/race-results/:eventID' exact Component={RaceResults} />
          <Route path='/quiz' exact Component={QuizPage} />
          
          


          
      
      
        </Routes>
      </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
