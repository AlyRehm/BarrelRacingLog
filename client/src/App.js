import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import EntryForm from './components/EntryForm';
import Dashboard from './components/Dashboard';
import OneHorse from './components/BarrelTimes';
import RaceEntryForm from './components/EntryForm';
import EntryDetails from './components/EntryDetails';
import EditEntry from './components/EditEntry';
import BarrelTimes from './components/BarrelTimes';
import DeleteHorse from './components/DeleteHorse';

import backgroundImg from './assets/images/backgroundImg.JPG'


function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: `url(${backgroundImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh' // Set the height to 100% of the viewport height
    }}>
      <Nav/>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/horses/:id" element={<OneHorse/>} />
        <Route path="/horses/:id/newRaceEntry" element={<RaceEntryForm/>} />
        <Route path="/entries/:id" element={<EntryDetails/>} />
        <Route path="/entries/edit/:id" element={<EditEntry/>} />
        <Route path="/horses/:id/entries" element={<BarrelTimes/>}/>
        <Route path="/horses/delete/:id" element={<DeleteHorse/>}/>



      </Routes>
    </BrowserRouter>





    </div>
  );
}

export default App;
