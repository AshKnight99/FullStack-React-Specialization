import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
class DishDetails extends Component{
    constructor(props){
        super(props);
       

    }
    
    renderDish(dish) {

        if (dish == null) {
            return (
                <div></div>
            );
        }
        else {
         
            return (
                <div className="col -12 col-md-5 m-1">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        
    }
    renderCommments(comments) {
        console.log(comments);
        if (comments == null) {
            return (
                <div></div>
            );
        }
        else {
            const comm = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p> {comment.comment}</p> 
                        <p>-- {comment.author} ,  
                        &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: '2-digit'
                            }               
                ).format(new Date(comment.date))}
                        </p>
                    </li>
                );
            });
            console.log(comm);
        
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                   <ul className = "list-unstyled">{comm}
                    </ul>
                </div>
            );
        }
    }
    render() {
        const dish = this.props.dish;
        if (dish == null)
            return (
                <div></div>
            );
        return (     
            
            
                <div className="row">
                {this.renderDish(dish)}
                {this.renderCommments(dish.comments)}
            </div>
           
            
        );
    }
}
export default DishDetails; 