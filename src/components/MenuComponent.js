import React, { Component } from "react";
import { Media } from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'
import DishDetails from './DishDetailsComponent';
class Menu extends Component {
    //Required
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    //Use to setState when changing the values
    onDishSelect(dish) {
        this.setState({selectedDish:dish});
    }
    /*renderDish(dish) {
        if (dish != null)
            return(
                <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }
    */
    render() {
        //map is used to iterate over list of items        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                  <Card key={dish.id}
                    onClick={() => this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                  </Card>
                </div>
              );
          });
        return (
            <div className="continer" >
                <div className="row">                    
                        {menu}                    
                </div>
                <div className="row">
                    <DishDetails dish = {this.state.selectedDish} />                   
                </div>
            </div>
        );
    }
}

export default Menu;
/* Using Media
            <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}></Media>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                            
                        </Media>
                    </Media>
            */