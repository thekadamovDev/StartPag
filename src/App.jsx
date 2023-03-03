import './app.css';
import './pages/Header/mainResponsive.css'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom';
import Main from './pages/Header/Main';
import Navbar from './pages/Navbar/Navbar';
import Portfolio from './pages/Portfolio/Portfolio';
import Servis from './pages/Servis/Servis';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <BrowserRouter>
        <div className="app">
          {/* <Router> */}
            <div className='nav'>
                <Navbar />
            </div>
            <Routes>
              <Route path='/'  element={<Main/>}/>
              <Route path='/portfolio'  element={<Portfolio/>}/>
              <Route path='/services'  element={<Servis/>}/>
              <Route path='/contact'  element={<Contact/>}/>
            </Routes>
          {/* </Router> */}
        </div>
    </BrowserRouter>
  );
}

export default App;
