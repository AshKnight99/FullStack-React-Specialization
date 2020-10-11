import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb, Label, Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Error, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !(val) || (val.length <= len);
const minlength = (len) => (val) => !(val) || (val.length >= len);
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        alert("Current State is :" + JSON.stringify(values));
    }
    render() {
        return (
            <div >
                <Button outline onClick={this.toggleModal} >
                    <span className="fa fa-pencil fa-lg" /> Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group" >
                                <Row>
                                    <Label htmlFor="rating" md={4}>Rating</Label>
                                </Row>
                                <Row>
                                    <Col className="mt-1">
                                        <Control.select model=".rating" name="rating" id="rating"
                                            className="form-control"
                                        >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                        </Control.select>
                                    </Col>
                                </Row>
                            </div>

                            <div className="form-group" >
                                <Row>
                                    <Label htmlFor="name" md={4}>Your Name</Label>
                                </Row>
                                <Row>
                                    <Col className="mt-1">
                                        <Control.text model=".name" name="name" id="name"
                                            className="form-control"
                                            validators={{
                                                required,
                                                minlength: minlength(3),
                                                maxlength: maxlength(15)
                                            }
                                            }
                                        >
                                        </Control.text>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={10}>
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: "Required",
                                                minlength: 'Must be greater than 2 characters',
                                                maxlength: 'Must be 15 characters or less'
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </div>

                            <div className="form-group" >
                                <Row>
                                    <Label htmlFor="comment" md={4}>Comment</Label>
                                </Row>
                                <Row>
                                    <Col className="mt-1">
                                        <Control.textarea model=".comment" name="comment" id="comment"
                                            className="form-control"
                                            rows="6"
                                        >
                                        </Control.textarea>
                                    </Col>
                                </Row>
                            </div>
                            <Row className="form-group">
                                <Col md={4}>
                                    <Button type="submit" color="primary" > Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}
function SubmitComment() {
    return (
        <div>

        </div>
    );

}
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
                <ul className="list-unstyled">
                    {comm}
                    <CommentForm />
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