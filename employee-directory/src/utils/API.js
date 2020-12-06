import axios from "axios";

export default axios.create({
    baseURL: 'https://randomuser.me/api',
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
});
