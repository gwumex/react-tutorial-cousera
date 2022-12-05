import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Row, Col, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isFormOpen: false
        }
        this.toggleForm = this.toggleForm.bind(this)
    }

    toggleForm() {
        this.setState({
            isFormOpen: !this.state.isFormOpen
        })
    }

    handleSubmit = (values) => {
        console.log("Current State is " + JSON.stringify(values));
        alert("Current State is" + JSON.stringify(values))
    }

    render() {

        const Form = () => {
            return (
                <Modal isOpen={this.state.isFormOpen} >
                    <ModalHeader >
                        Submit Comment
                        <button type="button" className="close float-right" aria-label="Close" onClick={this.toggleForm}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => {this.handleSubmit(values)}}>
                            <Row className="form-group">
                                <Label md={12} htmlFor="rating">Rating</Label>
                                <Col >
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                    >
                                       <option value="">1</option>
                                       <option value="">2</option>
                                       <option value="">3</option>
                                       <option value="">4</option>
                                       <option value="">5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="name" md={12}>Your Name</Label>
                                <Col>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            maxLength: maxLength(15),
                                            minLength: minLength(3)
                                        }}
                                    />
                                    <Errors
                                        className='text-danger'
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            minLength: "must be greater than two",
                                            maxLenght: "Must be 15 character or less"
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Your Name"
                                        className="form-control"
                                        rows={6}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" className="btn-success" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            );
        }

        return (
            <div>
                <Form />
                <Button className="btn-success" onClick={this.toggleForm}>Submit Comment</Button>
            </div>
        )
    }
}


function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments({ comments }) {
    if (!comments) return (<div></div>);

    const list = comments.map(c => {
        return (
            <li key={c.id}>
                <p>{c.comment}</p>
                <p>-- {c.author} , {c.date}</p>
            </li>

        );
    });

    return (
        <div>
            <h4>Comments</h4>
            {list}
            <CommentForm />
        </div>
    );
}

const DishDetail = (props) => {
    const dish = props.dish;
    if (!dish) return (<div></div>);

    return (
        <div className="container">
            <div className='row'>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to={'/menu'}>Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className='col-12'>
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}

export default DishDetail;