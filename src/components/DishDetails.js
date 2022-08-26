import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody} from 'reactstrap';
import './DishDetails.css';


class DishDetails extends Component { 
    constructor(props){
        super(props);
    };
    renderDish(dish){
        if (dish != null){
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt="hello there" className="img"/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
            );
                
            } else{
                return (
                    <div></div>
                );
            }
        } 


    render(){        
        return(
            <div className="row">
                {this.renderDish(this.props.selectedDish)}
            </div>
        );
    }
}
export default DishDetails;