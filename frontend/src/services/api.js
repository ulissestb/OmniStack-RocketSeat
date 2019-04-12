import axios from 'axios'

const api = axios.create({
    baseURL: 'https://omnistack-ulisses.herokuapp.com'
})

export default api;