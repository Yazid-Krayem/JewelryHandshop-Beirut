import {Route} from "react-router-dom";
import { BrowserRouter, Switch} from "react-router-dom";
import React from 'react';
import Contact from './components/contact';
import Blog from './components/Blogd';
import Home from "./components/Home";
import Necklace from "./components/necklace";
import Bracelet from './components/bracelet';
import Earring from './components/earring';



 const Router = () => {
  return (
    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Blog" component={Blog} />
            <Route path="/necklace" component={Necklace} />
            <Route path="/bracelet" component={Bracelet} />
            <Route path="/earring" component={Earring} />


        </Switch>
    </BrowserRouter>
  )
}

export default Router
