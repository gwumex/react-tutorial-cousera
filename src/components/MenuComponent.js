import React, { Component } from "react";
import { CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody } from 'reactstrap';
import { Card } from 'reactstrap';
import DishDetail from "./DishdetailComponent";
// import DishComments from "./DishComment";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }



    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} />
                        <CardImgOverlay>
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        console.log("Menu component render is invoked");
        return (
            <div className="container">
                    <div className="row">
                    {menu}                    
                     </div>              
                    <DishDetail selectedDish={this.state.selectedDish} />                        
                </div>
        );
    }
}

export default Menu;