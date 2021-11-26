import React from "react";
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import Food from "../homepage/Food";

function FoodInMenu({name,price,image,id}) {
  return (
    <Card style={{ width: '18rem',display:'inline-block',marginTop:'3%',marginBottom:'4%',marginLeft:'6px',marginRight:'5px'}}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
    <Card.Title style={{ textAlign:'center'}}>{name}</Card.Title>
    <Card.Text style={{ width: '18rem',color:'#F63C3C', marginLeft:'38%', fontWeight:'bold' }}>
      {Intl.NumberFormat().format(price)}đ
    </Card.Text>
    <Button class="btn btn-light text-danger" variant="primary" style={{ marginLeft:'13%', width:'183px', height:'52px',backgroundColor:'#ffffff', borderColor:'#BF0000',fontWeight:'bold',color:'#BF0000' }}  onClick={() => window.open("/food-info/" + id, '_blank').focus()} >Xem</Button>
    </Card.Body>
    </Card>
  );
}
export default FoodInMenu;
