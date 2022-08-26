import React, { Component } from "react";
import { CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody} from 'reactstrap';
import {Card} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectedDish : null    
        }
        console.log("Menu component   constuctoris invoked");
    }

    componentDidMount(){
        console.log("menu component componentDidMount is invoked");
    }

    onDishSelect(dish) {
        this.setState({selectedDish: dish});
    }    

    renderDish(dish){
        if (dish != null){
            return(
                <Card>
                    <CardImg width="100%" src={ dish.image} alt="hello there"/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
                
            } else{
                return (
                    <div></div>
                );
            }
        } 

    render(){
        const menu = this.props.dishes.map((dish) => {
                return (
                    <div key={dish.id} className="col-12 col-md-5 m-1">
                        <Card onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image}/>
                            <CardImgOverlay>
                                <CardTitle heading>{dish.name}</CardTitle> 
                            </CardImgOverlay>
                        </Card>
                    </div>
                );
        });

        console.log("Menu component render is invoked");
        return(
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                    </div>
            </div>
        );
    }
}

export default Menu;