import { useState } from 'react';
import EditPlantForm from './EditPlant';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//displays all the info for the given plant
//edit button takes to EditPlant, delete button DELETEs plant from server

const Plant = ({ plantInfo, updatePlantList, updatePlants }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleDelete = (id) => {
		axiosWithAuth()
			//.delete(`/api/`)
			.then((res) => {
				updatePlantList(id);
			})
			.catch((err) => {
				console.log('err: ', err);
			});
	};
	const handleEdit = () => {
		setIsEditing(!isEditing);
	};

	return (
        <>
			{isEditing ? (
				<PlantEditForm
					plantInfo={plantInfo}
					setIsEditing={setIsEditing}
					updatePlants={updatePlants}
				/>
			) : (
				<>
                    <h1>{plantInfo.id}</h1>
					<h2>{plantInfo.nickname}</h2>
					<h3>{plantInfo.species}</h3>
					<p>Watering Frequency: {plantInfo.h2oFrequency}</p>
					<div className='card-button-container'>
						<button className='edit' onClick={() => handleEdit()}>
							Edit
						</button>
						<button
							className='delete'
							onClick={() => handleDelete(plantInfo.plantid)}
						>
							Delete
						</button>
					</div>
				</>
			)}
        </>
	);
};

export default Plant;