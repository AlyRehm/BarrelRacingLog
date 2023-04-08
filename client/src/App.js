import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-xl navbar-light bg-light">
          <div class="container-fluid">
              <div class="collapse navbar-collapse show" id="navbarText">
              <ul class="navbar-nav me-auto mb-2 mb-xl-0">
                  <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="#">Logout</a>
                  </li>
              </ul>
              <span class="navbar-text">
                Log, Learn & Improve Your Times
              </span>
              </div>
          </div>
          </nav>
          <h1>The Barrel Racer's Logbook</h1>



    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>





    </div>
  );
}

export default App;
