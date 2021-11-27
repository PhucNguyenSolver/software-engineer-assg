import React from "react";
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import FoodInMenu from './FoodInMenu.js';


const axios = require('axios')


async function MOCK_DATA() {
        const chido =  await axios.get('http://localhost:8080/food')
        return chido.data;
}

export default MOCK_DATA;