import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


const initialData = {
  class_id: '',
  category: '',
  start_time:'',
  duration: '',
  intensity_level: '',
  location: '',
  current_capacity: '',
  max_capacity: ''
}

const ClassForm = props => {
  const [item, setItem] = useState(initialData);
  const history = useHistory();

  const handleChange = event => {
        
    setItem({
        ...item,
        [event.target.name]:event.target.value
        });
}
const submitForm = () => {
  const newClass ={
    class_id: item.class_id.trim(),
    category: item.category.trim(),
    start_time:item.start_time.trim(),
    duration: item.duration.trim(),
    intensity_level: item.intensity_level.trim(),
    location: item.location.trim(),
    current_capacity: item.current_capacity.trim(),
    max_capacity: item.max_capacity.trim(),
    }
    console.log(newClass)
    axios.post('https://fitness-4-you.herokuapp.com/api/classes', newClass)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
      console.log('error catch')
    })
  }
const handleSubmit = event => {
    event.preventDefault();
  submitForm();
}
return (
  <form onSubmit={handleSubmit}>
    <label>
      Class Name
      <input
      name='class_id'
      value={item.class_id}
      onChange={handleChange}
      />
    </label>
    <label>
      Category
      <input
      name='category'
      value={item.category}
      onChange={handleChange}
      />
    </label>
    <label>
      Start Time
      <input
      name='start_time'
      value={item.start_time}
      onChange={handleChange}
      />
    </label>
    <label>
      Duration
      <input
      name='duration'
      value={item.duration}
      onChange={handleChange}
      />
    </label>
    <label>
      Intensity
      <input
      name='intensity_level'
      value={item.intensity_level}
      onChange={handleChange}
      />
    </label>
    <label>
      Location
      <input
      name='location'
      value={item.location}
      onChange={handleChange}
      />
    </label>
    <label>
      Current Capacity
      <input
      name='current_capacity'
      value={item.current_capacity}
      onChange={handleChange}
      />
    </label>
    <label>
      Max Capacity
      <input
      name='max_capacity'
      value={item.max_capacity}
      onChange={handleChange}
      />
    </label>


    <button>Add Class</button>


  </form>
)
}
export default ClassForm;
























