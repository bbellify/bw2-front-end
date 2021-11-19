
import React from "react";
import { Link } from 'react-router-dom'

import { useState } from 'react';
import EditPlantForm from './EditPlant';
import { axiosWithAuth } from '../utils/axiosWithAuth';


//displays all the info for the given plant
//edit button takes to EditPlant, delete button DELETEs plant from server

    const { plant } = props
    
    return(
        <div>
            <p>{plant.nickname}</p>
            <p>{plant.species}</p>
            <p>{plant.h2oFrequency}</p>
            <img src={plant.image} width='20%' alt='plant'/>
            <Link to={`/plants/${plant.plant_id}/edit`} >Edit</Link>
        </div> 
    )

};

export default Plant;