import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Header />
          
          <Routes>
          <Route path="/" element={<Home />}  />
            <Route path="/about" element={<About />}  />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes> 
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
