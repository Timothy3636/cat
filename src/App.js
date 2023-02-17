import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import React from "react";
import "./App.css";
import Home from "./Home";
import Menu from './Menu';

import TopTen from './TopTen';
import SelectBreed from './SelectBreed';


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <>
    <Router>
      <Menu />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<SelectBreed />} />
          <Route path="/topten" element={<TopTen />} />
      </Routes>
    </Router>         
   </>
  );
}

export default App;
