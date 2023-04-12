import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import EntryForm from './components/EntryForm';
import Dashboard from './components/Dashboard';
import OneHorse from './components/BarrelTimes';
import RaceEntryForm from './components/EntryForm';
import EntryDetails from './components/EntryDetails';


function App() {
  return (
    <div className="App">
      <Nav/>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/horses/:id" element={<OneHorse/>} />
        <Route path="/horses/:id/newRaceEntry" element={<RaceEntryForm/>} />
        <Route path="/entries/:id" element={<EntryDetails/>} />



      </Routes>
    </BrowserRouter>





    </div>
  );
}

export default App;
