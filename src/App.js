import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Routes, Route, BrowserRouter, Link, NavLink } from "react-router-dom";

let Some = () => <Dialogs />

const App = (props) => {




  return (

    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/dialogs"
              element={<Dialogs store={props.store} />} />
            <Route path="/profile"
              element={<Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch} />} />

          </Routes>
        </div>
      </div>
    </BrowserRouter>

  )
}

export default App;
