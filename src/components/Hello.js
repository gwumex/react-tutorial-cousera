import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Media, CardText, CardBody} from 'reactstrap';


class  Hello extends Component { 
    constructor(props){
        super(props);
    };
    render(){        
        return(
            <Card>
            <CardBody>
                <CardTitle>HEllo</CardTitle>
                <CardText>Hello Work</CardText>
            </CardBody>
        </Card>
        );
    }
}
export default Hello