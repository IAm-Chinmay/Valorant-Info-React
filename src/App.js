import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Redirect
} from 'react-router-dom'

import AgentCards from './Pages/Agents-Cards';
import AgentInfoMain from './Pages/AgentInfoMain';
import Navbar from './Components/imports/Navbar';
import Homepage from './Pages/Home';
import WeaponLoader from './Components/containers/weaponLoader';

import './App.css'

const App = () =>{

    return(
    //    <AgentInfo/>
    <>
        <Router>
        <Navbar/>
            {/* <Redirect exact path='/' /> */}
            <Switch>
                <Route exact  path='/agentinfo/:uuid'>
                {/* className='agentinfo-css' */}
                <div className='agent-back'>
                    <AgentInfoMain/>
                    </div>
                </Route>
                <Route path='/agents'>
                <div className='home-page'>
                    <AgentCards/>
                </div>
                </Route>
                <Route path={'/weapons'}>
                    <WeaponLoader/>
                </Route>
                <div className='hero-home'>
                <Route path = '/'>
                    <Homepage/>
                </Route>
                </div>
            </Switch>   
            {/* <footer style={{backgroundColor: "rgb(62, 61, 61)",height : "90vh"}}>
                <label></label>
            </footer> */}

        </Router>
        </>
    );
}

export default App;