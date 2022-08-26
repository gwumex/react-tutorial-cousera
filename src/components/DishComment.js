import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody } from 'reactstrap';


class DishDetails extends Component {
    constructor(props) {
        super(props);
    };
    renderComment(dish) {
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
            <div >
                {this.renderComment(this.props.selectedDish)}
            </div>
        );
    }
}
export default DishDetails;