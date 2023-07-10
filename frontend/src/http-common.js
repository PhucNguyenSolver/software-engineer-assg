import axios from 'axios';
import { API_ENDPOINT } from "./config";
axios.defaults.baseURL = API_ENDPOINT;
export default axios.create({
    headers: {
        'Content-type': 'application/json'
    }
})
