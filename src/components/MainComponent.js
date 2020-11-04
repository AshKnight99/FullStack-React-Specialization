import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetails from './DishDetailsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch,Route,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment, fetchDishes} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes:state.dishes,
      comments: state.comments,
      leaders : state.leaders,
      promotions : state.promotions
    }
}
const mapDispatchToProps = (dispatch) => ({
  addComment : (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes : () => {dispatch(fetchDishes())}
});


class Main extends Component{
  constructor(props){ 
      super(props);    
  }

  componentDidMount(){
    this.props.fetchDishes();
  }
  
  render(){
      const HomePage = () => {
          return (
              <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading = {this.props.dishes.isLoading}
              dishesErrMess = {this.props.dishes.errMess}
              promotion = {this.props.promotions.filter((promo) => promo.featured)[0]}
              leader = {this.props.leaders.filter((lead) => lead.featured)[0]}
             />
          );
      }
      const DishWithId = ({match}) =>{
          //extracting first item[0] from the matched param string value of the id
        return(
            <DishDetails dish ={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            isLoading = {this.props.dishes.isLoading}
            errMess = {this.props.dishes.errMess}
            comments = {this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment = {this.props.addComment}/>
        );
      }
      //Here we specify routes with the parameters we need to send
    return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />    
            <Route path="/about" component={() => <About leaders = {this.props.leaders}/> } />  
            <Route exact path="/menu" component={() =><Menu dishes={this.props.dishes} />} />
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

export default withRouter(connect (mapStateToProps, mapDispatchToProps) (Main));