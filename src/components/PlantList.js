import React from "react";
import { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Plant from './Plant';
import { Link } from 'react-router-dom';

//displays all plants in the user's account
//also has an "add plant" button that opens AddPlant
const PlantList = () => {
	const [plantList, setPlantList] = useState([]);
	useEffect(() => {
		axiosWithAuth()
			//.get(``)
			.then((res) => {
				setPlantList(res.data.plants);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	}, []);

	const updatePlantList = (id) => {
		const newPlantList = plantList.filter((plant) => plant.plantid !== id);
		setPlantList(newPlantList);
	};

	const updatePlants = (newPlant) => {
		const newPlantList = plantList.map((plant) => {
			if (plant.plantid === newPlant.plantid) {
				return newPlant;
			}
			return plant;
		});
		setPlantList(newPlantList);
	};

	const renderPlantList = () => {
		return plantList.map((plant) => (
			<Plant
				key={plant.plantid}
				plantInfo={plant}
				updatePlantList={updatePlantList}
				updatePlants={updatePlants}
			/>
		));
	};

	const renderAddPlants = () => {
		return (
			<div>
				<h1>Let's add some plants!</h1>
				<Link to='/Plant'>
					<button>Add Plants</button>
				</Link>
			</div>
		);
	};

	return (
		<li>
			{plantList.length === 0 ? renderAddPlants() : renderPlantList()}
		</li>
	);
};

export default PlantList;