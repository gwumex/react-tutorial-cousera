import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody } from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    };
    renderDish(dish) {
        if (dish != null) {
            return (
                
                <div key={dish.id} >
                    <Card>
                        <CardImg width="100%" src={dish.image} alt="hello there" className="img" />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>

                        </CardBody>
                    </Card>
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }

    renderComments(dish) {
        if (dish != null) {
            return (
                
                <div key={dish.id} >
              <h2>Comments</h2>
                        {dish.comments.map((comment) => (
                            <div key={comment.id}>
                                <blockquote class="blockquote">
                                    <p class="mb-0">{comment.comment}</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">{comment.author}</cite> {comment.date}</footer>
                                </blockquote>
                            </div>
                        ))}
                </div>
            );

        } else {
            return (
                <div></div>
            );
        }
    }



    render() {
        return (
            <div className="row">
                  <div class="col-12 col-md-5 m-1" >
                  {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div class="col-12 col-md-5 m-2" >
                    {this.renderComments(this.props.selectedDish)}
                    </div>
            </div>
        );
    }
}
export default DishDetail;