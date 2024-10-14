import react from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css'
import './styles/VanPage.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.esm'
import AboutPage from './pageRoutes/AboutPage';
import HomePage from './pageRoutes/HomePage';
import Contact from './pageRoutes/Contact';
import Navbar from './pageRoutes/Navbar';
import VanPage from './pageRoutes/VanPage';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      <Route  path="/contact" element={ <Contact />} />
      <Route path="/vans" element = { <VanPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
