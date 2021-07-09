import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../actions/smurfAction';

const Form = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    height: null,
    age: null
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
    };
    //add new smurf
    dispatch(addSmurf(newSmurf));
    //clear smurf form
    setSmurf({
      name: "",
      height: null,
      age: ""
    });
  };

  return (
    <form onSubmit={submitForm}>

      <input
        type="text"
        name="name"
        value={smurf.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="height"
        placeholder="Enter Height"
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="age" 
        placeholder="Enter Age" 
        onChange={handleChange} 
      />

      <button type="submit">Add Smurf</button>
      
    </form>
  );
}

export default Form;