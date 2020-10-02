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
import About from './AboutComponent';
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
      const DishWithId = ({match}) =>{
          //extracting first item[0] from the matched param string value of the id
        return(
            <DishDetails dish ={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments = {this.state.comments.filter((comm) => comm.dishId  ===  parseInt(match.params.dishId,10))}/>
        );
      }
      //Here we specify routes with the parameters we need to send
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />    
            <Route path="/about" component={() => <About leaders = {this.state.leaders}/> } />  
            <Route exact path="/menu" component={() =><Menu dishes={this.state.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
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