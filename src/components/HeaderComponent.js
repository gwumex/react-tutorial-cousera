import React, { Component} from "react";
import { Jumbotron, Navbar, NavbarBrand } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
               <Navbar dark >
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
             <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>Ristorante Con Fusion</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam magni aut assumenda laudantium.</p>
                    </div>
                </div>
             </div>
        </Jumbotron>
            </React.Fragment>

        );
    }
}
export default Header;