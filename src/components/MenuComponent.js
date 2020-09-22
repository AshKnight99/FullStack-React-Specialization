import React from "react";
import { Media } from 'reactstrap';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap'



    //Use to setState when changing the values
   
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

function RenderMenuItem({dish,onClick}){
    return(
        <Card key={dish.id}
        onClick={() => onClick(dish.id) }>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
}
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div  className="col-12 col-md-5 m-1">
             <RenderMenuItem dish = {dish} onClick = {props.onClick} />
            </div>
          );
      });
    return (
        <div className="continer" >
            <div className="row">                    
                    {menu}                    
            </div>
            
        </div>
    );
}
        //map is used to iterate over list of items        
        
    

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