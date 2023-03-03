import axios from 'axios';

export function predict(data) {
    // request
    const body = JSON.stringify(data);
    console.log(body)
    return axios.post('http://localhost:80/predict', body, {headers: {'Content-Type': 'application/json'}})
}

export default predict
