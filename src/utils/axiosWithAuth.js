import axios from 'axios';

// See notes, update as necessary

const axiosWithAuth = () => {

    // Assumes token for login set in localStorage, can change as needed
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://buildweek-water-my-plants.herokuapp.com/api'
    })
}

export default axiosWithAuth