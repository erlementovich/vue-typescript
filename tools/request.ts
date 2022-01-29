import qs from 'qs'
import axios from 'axios'

class Request {
    async get(url, params = []) {
        return axios(url, {
            params,
            paramsSerializer: params => {
                return qs.stringify(params)
            }
        });
    }

    async post(url, params) {
        return await axios.post(url, params);
    }
}

export const request = new Request();
