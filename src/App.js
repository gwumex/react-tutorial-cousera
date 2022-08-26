import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/Dishes';
class App extends Component {

  constructor (props){
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand hef="#">Ristorante Con  Funsion</NavbarBrand>
        </div>
        </Navbar>
        <Menu  dishes = {this.state.dishes} />
      </div>
    );
  }
}

export default App;
