import Home from './Home/Home';
import PrivacyPolicy from './PrivacyPolicy/PrivacyPolicy';
import TermsOfUse from './TermsOfUse/TermsOfUse';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App flex flex-col h-full box-border bg-[#fafafa] overflow-x-hidden">
      <Router>
      <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/terms-of-use" element={<TermsOfUse />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
