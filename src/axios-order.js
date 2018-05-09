import axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://react-my-burger-111ec.firebaseio.com/'
});

export default instanse;