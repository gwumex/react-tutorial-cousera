import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import React from 'react';

class DishDetail extends React.Component {

    renderDish(dish) {
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

    renderComments(comments) {
        if (!comments) return(<div></div>);

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
            </div>
        );
    }

    render() {
        const dish = this.props.dish;
        if (!dish) return(<div></div>);

        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dish.comments)}
                </div>
            </div>
            </div>
        );
    }
}

export default DishDetail;