import React from "react";
import {Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle  } from 'reactstrap';


function RenderCard({item}){
    return(
    <Card>
            <CardBody>
            <CardImg src={item.image} alt={item.name} />
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle>: null}
                <CardText>{item.description}</CardText>
            </CardBody>

    </Card>
    );
}
function Home(props){

    return(
<div className="container">
    <div className="row align-items-start">
        <RenderCard item ={props.dish} />
    </div>
    <div className="row align-items-start">
        <RenderCard item ={props.promotion} />
    </div>
    <div className="row align-items-start">
        <RenderCard item ={props.leader} />
    </div>

</div>
    );
}
export default Home;