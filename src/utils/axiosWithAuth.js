import axios from 'axios';

// See notes, update as necessary

const axiosWithAuth = () => {

    // Assumes token for login set in localStorage, can change as needed
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        // This URL will need to change presumably
        baseURL: 'http://wateryourplants.heroku.whatever/api'
    })
}

export default axiosWithAuth