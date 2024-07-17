import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'; 
import Home from './pages/Home.js';




function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          


          
      
      
        </Routes>
      </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
