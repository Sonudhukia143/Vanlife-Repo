import react from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.esm'
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      <Route  path="/contact" element={ <Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
