import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Button} from 'react-bootstrap';



function NormalFoodType({name}) {
  return (
    <Button class="btn btn-light text-danger" 
            variant="primary" type="submit"
            style={{ width:'150px', height:'52px',backgroundColor:'#ffffff', 
            borderColor:'#000000',fontWeight:'bold',color:'#000000',margin: '15px' }}>
            {name}
    </Button>
    
  );
}

export default NormalFoodType;
