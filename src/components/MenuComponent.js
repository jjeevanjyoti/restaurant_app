import React, { Component } from 'react';
import { 
    Card, 
    CardImg ,
    CardImgOverlay ,
  
    CardTitle 
} from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';

import DishDetails from "./DishdetailComponent";
const border = {
    border: 'none',
   
  };
class Menu extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null
        };
    }
    onDishSelected(dish){
        this.setState({
            selectedDish :dish
        })
    }
    renderComments(dish){
        var comment=[]
        if(dish != null){
            console.log(dish.comments)

        comment = dish.comments.map((comment)=>{
            return (  
            <ListGroup key ={comment.id} >
                <ListGroupItem  style={border}>{comment.comment}</ListGroupItem>
                <ListGroupItem  style={border}>-- {comment.author}</ListGroupItem>
            </ListGroup>)
       })}
        if(dish != null){
            return comment
            
 
        }else{
                return (
                    <div></div>
                )
        }
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 mt-1">
                <Card tag="li" onClick={()=>this.onDishSelected(dish)}>
                      <CardImg  src={dish.image} alt={dish.name} />
                  <CardImgOverlay  className="ml-5">
                    <CardTitle >{dish.name}</CardTitle>
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
            <div className="row">
                <div className="col-md-5 mt-2">
                    <DishDetails dish={this.state.selectedDish}/>
                </div>
                <div className="col-md-5 mt-2">
                <div>
                    <h4>Comments</h4>
                    {this.renderComments(this.state.selectedDish)}

                </div>

                </div>
            </div>

          </div>
        );
    }
}

export default Menu;