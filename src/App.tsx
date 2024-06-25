import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import MeetingButton from './components/MeetingButton';

function App() {

  return (
    <>
      <Router>
      <MeetingButton/>
        <Navbar/>

        <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        </Routes>
        
        <Footer/>
      </Router>
    </>
  )
}

export default App
