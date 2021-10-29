import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button} from 'react-bootstrap';



function FoodType({name}) {
  return (
    
    <Button class="btn btn-light text-danger" 
            variant="primary" 
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', borderRadius:'50px',
            borderColor:'#F63C3C',fontWeight:'bold',color:'#F63C3C',boxShadow:'1px 1px #F63C3C',margin: '15px'  }}>
            {name}
    </Button>
    
  );
}

export default FoodType;
