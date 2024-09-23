import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';

import Booking from './pages/Booking';
import Brand from './pages/Brand';
import Contact from './pages/Contact';
import Design from './pages/Design';
import Other from './pages/Other';
import Seo from './pages/Seo';
import WebDevelopment from './pages/web-development';

import MeetingButton from './components/MeetingButton';

import Yameen from './pages/Yameen';
import Hamza from './pages/Hamza';
import Koko from './pages/Koko';
import Jahad from './pages/Jahad';

import NotFound from './pages/NotFound';

import Meeting from './pages/Meeting';
import PricingComparison from './pages/Pricing';

// Custom hook to conditionally render MeetingButton
const RenderMeetingButton = () => {
  const location = useLocation(); // Get current path

  // Only render the MeetingButton if the path is not '/meeting'
  return location.pathname !== '/meeting' ? <MeetingButton /> : null;
}

function App() {
  return (
    <>
      <Router>
        <RenderMeetingButton /> {/* Conditionally renders the MeetingButton */}
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/other" element={<Other />} />
          <Route path="/design" element={<Design />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/yameen" element={<Yameen />} />
          <Route path="/hamza" element={<Hamza />} />
          <Route path="/phillipe" element={<Koko />} />
          <Route path="/jahad" element={<Jahad />} />

          <Route path='/meeting' element={<Meeting />} />
          <Route path="/pricing" element={<PricingComparison />} />

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
