import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';

//form contains all the information required to create a new plant
//submit button (Adds a plant)
//on submit, POST new plant
//when plant is added, push user to /plants

const initialState = {
  id: "",
  nickname: "",
  species: "",
  h2oFrequency: ""
};

const NewPlant = () => {
	const [form, setForm] = useState(initialState);
	const [user, setUser] = useState({});
	const history = useHistory();


	useEffect(() => {
		axiosWithAuth()
			//.get('/api/')
			.then((response) => {
				setUser(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const changeHandler = (event) => {
		const value = event.target.value;
		setForm({ ...form, [event.target.name]: value });
	};

  const submitAddPlant = (e) => {
    e.preventDefault();
    const addPlant = {
      id: form.id,
      nickname: form.nickname,
      species: form.species,
      h2oFrequency: form.h2oFrequency
    };
    
    axiosWithAuth()
      //.post(`/api/`, addPlant)
      .then((res) => {
        history.push("/plants");
       })
      .catch((err) => console.log(err));
  };

  return (
      <>
      <h2 style={{ color: "white" }}>Add a New Plant</h2>
      <form onSubmit={submitAddPlant}>
        <label>
          Nick Name: 
          <input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={changeHandler}
          />
        </label>
        <label>
            ID:
            <input
            type="text"
            name= "id"
            value= {form.id}
            onChange={changeHandler}
            />
        </label>
        <label>
          Species: 
          <input
            type="text"
            name="species"
            value={form.species}
            onChange={changeHandler}
          />
        </label>
        <label>
          h2oFrequency: 
          <select
            name='h2oFrequency'
            value={form.h2oFrequency} 
            onChange={changeHandler}   
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
        </label>
        <button>Submit</button>
      </form>
    </>
  );

};

export default NewPlant;