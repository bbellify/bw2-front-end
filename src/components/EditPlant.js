
//form inputs filled with plant's info
//cancel button, save button (save not done here)
//on submit, PUT edited plant

import React, { useState } from 'react';
//import { axiosWithAuth } from ../;

const EditPlantForm = ({ plantInfo, setIsEditing, updatePlants }) => {
	const initialFormState = {
        id: plantInfo.id,
		nickname: plantInfo.nickname,
		species: plantInfo.species,
		h2oFrequency: plantInfo.h2oFrequency,
	};

	const [formState, setFormState] = useState(initialFormState);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
			//editing in future

	const handleCancel = (e) => {
		e.preventDefault();
		setFormState(initialFormState);
		setIsEditing(false);
	};

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
						value={plantInfo.h2oFrequency}
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
					<button className='cancel-button' value='cancel' onClick={handleCancel}>
						Cancel
					</button>
				</div>
			</form>
		</>
	);
};
}
export default EditPlantForm;