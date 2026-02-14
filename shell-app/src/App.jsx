import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import React from 'react';


const FlightsApp = React.lazy(() => import('flightsApp/App'));

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/trains">Trains</Link></li>
        <li><Link to="/flights">Flights</Link></li>
      </ul>
    </nav>
  );
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/flights" element={<FlightsApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
