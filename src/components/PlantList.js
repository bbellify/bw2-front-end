import React, { useEffect, useState } from "react";


import axiosWithAuth from '../utils/axiosWithAuth'
import Plant from '../components/Plant'

//displays all plants in the user's account
//also has an "add plant" button that opens AddPlant
const PlantList = (props) => {

    const [plants, setPlants] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/users/plants')
        .then(res => {
            // console.log(res);
            setPlants(res.data);
            // console.log(plants);
        })
        .catch(err=> {
            console.log({err})
        })
    }, [])

    return(
        <div>
            {plants && plants.map(plant => (<Plant key={plant.id} plant={plant} />))}
        </div>
    )
};

export default PlantList;