//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
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
          </Routes> 
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
