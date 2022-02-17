import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import {Home} from './Home';
import {LoginPage} from './LoginPage';
import {AdminPanel} from './AdminPanel';

function Routers() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path='/log-in' element={<LoginPage/>}/>
          <Route path='/admin-panel' element={<AdminPanel/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default Routers;
