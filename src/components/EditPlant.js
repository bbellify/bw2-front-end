
//form inputs filled with plant's info
//cancel button, save button (save not done here)
//on submit, PUT edited plant

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';


const EditPlantForm = () => {

	const navigate = useNavigate()

	const [plant, setPlant] = useState({})

	const initialFormState = {
        id: '',
		nickname: '',
		species: '',
		h2oFrequency: ''
	};

	const [formState, setFormState] = useState(initialFormState);
	
	const { id } = useParams();
	

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
			//editing in future
	}

	const handleCancel = (e) => {
		e.preventDefault();
		navigate('/plants')
		
	};


	useEffect(()=> {
		axiosWithAuth()
		.get('/users/plants')
        .then(res => {
			setFormState({
				...formState,
				id: res.data[id-1]['plant_id'],
				nickname: res.data[id-1]['nickname'],
				species: res.data[id-1]['species'],
				h2oFrequency: res.data[id-1]['h2oFrequency']
			})
        })
        .catch(err=> {
            console.log({err})
        })
    }, [id])

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className='form-input-container'>
                    <input
                        name='id'
                        type='text'
                        value={formState.id}
                        onChange={handleChange}
                    />
					<input
						name='nickname'
						type='text'
						value={formState.nickname}
						onChange={handleChange}
					/>
					<input
						name='species'
						type='text'
						value={formState.species}
						onChange={handleChange}
					/>
					<select
						name='h2oFrequency'
						value={plant.h2oFrequency}
						onChange={handleChange}
					>
						<option value=''>--Please select a watering option--</option>
						<option value='daily'>Daily</option>
						<option value='twice-daily'>Twice a day</option>
						<option value='weekly'>Weekly</option>
						<option value='twice-weekly'>Twice a week</option>
						<option value='monthly'>Monthly</option>
						<option value='twice-monthly'>Twice a month</option>
						<option value='bimonthly'>Bimonthly</option>
						<option value='never'>Don't Water</option>
					</select>
				</div>
				<div className='button-container'>
					<button type='submit' value='submit' className='submit-button'>
						Submit
					</button>
					<button className='cancel-button' value='cancel' 
					onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};

export default EditPlantForm;