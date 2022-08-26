import React, { Component } from "react";
import { CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody } from 'reactstrap';
import { Card } from 'reactstrap';
import DishDetails from "./DishDetails";
import DishComments from "./DishComment";

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
                <div class="row ">
                    <div class="col-12 col-md-5 m-1">
                    <DishDetails selectedDish={this.state.selectedDish} />  

                    </div>
                    <div class="col-12 col-md-5 m-2 shadow-sm p-3 mb-5 bg-white rounded" >
                    <DishComments selectedDish={this.state.selectedDish} />                  

                    </div>
                </div>           
                </div>
        );
    }
}

export default Menu;