import axios from 'axios';

const api = axios.create({
    baseURL: 'http://vacinometro-api.mns.flextronics.com/'
    
});

export default api;
