import { useState } from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import TaskDesc from './TaskDesc';
import Navbar from './Navbar';
import NavbarPrime from './NavbarPrime';
import AddTask from './AddTask';
import PageNotFound from './PageNotFound';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [name, setName] = useState("SaiPrasanth");
  return (
    <div className="App">
      <Router>
        <NavbarPrime name = {name} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <div className="overall">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
            <Route path='/addTask' element={<AddTask />} />
            <Route path='/taskdesc/:id' element={<TaskDesc />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
