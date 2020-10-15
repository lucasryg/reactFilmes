import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home/index';
import Login from './pages/login/index';
import Cadastro from './pages/cadastro/index';

function Routers(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Cadastro" component={Cadastro}/>
            {/* <Route path="/Genero" component={}></Route> */}
        </BrowserRouter>
    )
}

export default Routers;