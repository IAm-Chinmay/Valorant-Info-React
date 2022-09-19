import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import AgentCards from './Pages/Agents-Cards';
import AgentInfoPage from './Pages/AgentInfoPage';

import './App.css'

const App = () =>{

    const agentInfoStyle = {
        backgroundColor : 'black'
    }
    return(
    //    <AgentInfo/>
        <Router>
            {/* <Redirect exact path='/' /> */}
            <Switch>
                <Route exact  path='/agentinfo'>
                {/* className='agentinfo-css' */}
                <div className='agent-back'>
                    <AgentInfoPage/>
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