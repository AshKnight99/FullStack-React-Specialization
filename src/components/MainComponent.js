import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes";
import DishDetails from './DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component{
  constructor(props){ 
      super(props);   
    this.state = {
      dishes: DISHES,     
    };
  }

  render(){
      const HomePage = () => {
          return (
              <Home />
          );
      }
      //Here we specify Menu with the parameters we need to send
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />            
            <Route exact path="/menu" component={() =><Menu dishes={this.state.dishes} />} />
            <Redirect to = "/home" />
        </Switch>

        <Footer />
      </div>
      //filter function is used to search and give the required content in array form
    );
  }
}

export default Main;