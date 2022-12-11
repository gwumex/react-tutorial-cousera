import React from "react";
import { Card, CardTitle, CardText, CardImg, CardBody, CardSubtitle } from 'reactstrap';
import { Loading } from "./components/LoadingComponent";
import { baseUrl } from './shared/baseUrl'

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return (
            <Loading />
        )
    }
    else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    }
    else
        return (
            <Card>
                <CardBody>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>

            </Card>
        );
}
function Home(props) {
    console.log("this is the promotion error", props.promosErrMess)
    return (
        <div className="container">
            <div className="row align-items-start">
                <RenderCard item={props.dish}
                    isLoading={props.dishesLoading}
                    errMess={props.dishesErrMess} />
            </div>
            <div className="row align-items-start">
                <RenderCard item={props.promotion}
                    isLoading={props.promosLoading}
                    errMess={props.promosErrMess} 
                    />
            </div>
            <div className="row align-items-start">
                <RenderCard item={props.leader} />
            </div>

        </div>
    );
}
export default Home;