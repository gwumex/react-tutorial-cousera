import DishDetail from './DishDetailComponent'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import React from 'react';

class Menu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish })
    }

    render() {
        const dishes = this.props.dishes;
        if (!dishes) return(<div></div>);

        const menu = dishes.map(dish => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                  <Card onClick={() => this.onDishSelect(dish)}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.name}</CardTitle>
                      </CardImgOverlay>
                  </Card>
              </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} />
            </div>
        );
    }
}

export default Menu;