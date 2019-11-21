import React, { Component } from 'react'
import { 
    Card, 
    CardImg  ,
    CardText,
    CardBody,
    CardTitle 
} from 'reactstrap';
export default class DishDetail extends Component {
    constructor(props){
        super(props);
        this.state={
            dish:null
        }
    }

    render() {
        const dish = this.props.dish;
        if(dish != null){
            return (
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }else{
            return (
                <div></div>
            )
        }

    }
}

