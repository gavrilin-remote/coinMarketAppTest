import axios from 'axios'
import config from '../config'

const instance = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'X-CMC_PRO_API_KEY': config.apiKey
    }
});

export default instance