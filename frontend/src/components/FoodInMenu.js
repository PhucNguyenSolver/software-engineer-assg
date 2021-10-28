import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function FoodInMenu() {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.foody.vn/video/s535x300/foody-upload-api-foody-tengu%20-%2010.10.2019_moment-637069283557661975-191017165915.jpg" />
    <Card.Body>
    <Card.Title style={{ textAlign:'center'}}>Pure Butter Croissant 30g</Card.Title>
    <Card.Text style={{ width: '18rem',color:'#F63C3C', marginLeft:'35%', fontWeight:'bold' }}>
      20.000 đ
    </Card.Text>
    <Button class="btn btn-light text-danger" variant="primary" style={{ marginLeft:'13%', width:'183px', height:'52px',backgroundColor:'#ffffff', borderColor:'#BF0000',fontWeight:'bold',color:'#BF0000'  }} >MUA</Button>
    </Card.Body>
    </Card>
  );
}

export default FoodInMenu;
