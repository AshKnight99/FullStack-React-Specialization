import React from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import { Link } from 'react-router-dom';
function RenderDish({ dish }) {


    /* componentDidMount(){
         console.log("DishDetails Component mounted");
     }
     componentDidUpdate(){
         console.log("DishDetails Component Updated");
     }
     */
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
function RenderCommments({ comments }) {
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
                <ul className="list-unstyled">{comm}
                </ul>
            </div>
        );
    }
}
const DishDetails = (props) => {
    // console.log("DishDetails Component rendered");
    const dish = props.dish;
    if (dish == null)
        return (
            <div></div>
        );
    return (
        <div className="container" >
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem >
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderCommments comments={props.comments} />
            </div>
        </div>



    );

}
export default DishDetails; 