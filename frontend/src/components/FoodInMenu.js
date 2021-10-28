import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function FoodInMenu() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://vietucnews.net/wp-content/uploads/2017/10/food_photography_palm_beach_gardens_florida_parched_pig.jpg" />
    <Card.Body>
    <Card.Title style={{ textAlign:'center'}}>Pure Butter Croissant 30g</Card.Title>
    <Card.Text style={{ width: '18rem',color:'#F63C3C', marginLeft:'35%', fontWeight:'bold' }}>
      20.000 đ
    </Card.Text>
    <Button class="btn btn-light text-danger" variant="primary" style={{ marginLeft:'13%', width:'183px', height:'52px', borderColor:'#BF0000',fontWeight:'bold'  }} >MUA</Button>
    </Card.Body>
    </Card>
  );
}

export default FoodInMenu;
