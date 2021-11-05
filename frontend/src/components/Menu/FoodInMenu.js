import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function FoodInMenu({name,price,image}) {
  return (
    <Card style={{ width: '18rem',display:'inline-block',margin:'15px'  }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title style={{ textAlign:'center'}}>{name}</Card.Title>
    <Card.Text style={{ width: '18rem',color:'#F63C3C', marginLeft:'38%', fontWeight:'bold' }}>
      {price}đ
    </Card.Text>
    <Button class="btn btn-light text-danger" variant="primary" style={{ marginLeft:'13%', width:'183px', height:'52px',backgroundColor:'#ffffff', borderColor:'#BF0000',fontWeight:'bold',color:'#BF0000' }} >MUA</Button>
    </Card.Body>
    </Card>
  );
}

export default FoodInMenu;
