import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import DishDetails from './DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch,Route,Redirect} from 'react-router-dom';
class Main extends Component{
  constructor(props){ 
      super(props);   
    this.state = {
      dishes: DISHES,  
      comments: COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS   
    };
  }

  render(){
      const HomePage = () => {
          return (
              <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.state.leaders.filter((lead) => lead.featured)[0]}
             />
          );
      }
      //Here we specify Menu with the parameters we need to send
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />            
            <Route exact path="/menu" component={() =><Menu dishes={this.state.dishes} />} />
            <Route exact path ="/contact" component={Contact} /> 
            <Redirect to = "/home" />
        </Switch>

        <Footer />
      </div>
      //filter function is used to search and give the required content in array form
    );
  }
}

export default Main;