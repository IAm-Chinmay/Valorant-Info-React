import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import AgentCards from './Pages/Agents-Cards';
import AgentInfoMain from './Pages/AgentInfoMain';
import AgentInfoPage from './Pages/AgentInfoPage';

import './App.css'

const App = () =>{

    return(
    //    <AgentInfo/>
        <Router>
            {/* <Redirect exact path='/' /> */}
            <Switch>
                <Route exact  path='/agentinfo/:uuid'>
                {/* className='agentinfo-css' */}
                <div className='agent-back'>
                    <AgentInfoMain/>
                    </div>
                </Route>
                <div className='home-page'>
                <Route path='/'>
                    <AgentCards/>
                </Route>
                </div>
            </Switch>   
        </Router>
    );
}

export default App;