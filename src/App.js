import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from "./Pages/Home";

function App() {
  return (
    <div>
     <Header />
    <Router>
    <Routes>     
      <Route exact path= "/" element= { <Home />} />
       
    </Routes>
    </Router>
    
    </div>
  );
}

export default App;
