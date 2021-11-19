import axios from 'axios';

const axiosWithAuth = () => {

    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },

        baseURL: 'https://buildweek-water-my-plants.herokuapp.com/api'
    })
}

export default axiosWithAuth