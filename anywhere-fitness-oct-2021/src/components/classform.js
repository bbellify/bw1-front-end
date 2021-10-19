import React, {useState} from 'react';
import axios from 'axios';


const ClassForm = () => {

    const initialData = {
        name: '',
        category: '',
        start_time:'',
        duration: '',
        intensity_level: '',
        location: '',
        current_capacity: '',
        max_capacity: ''
      }

    const [formValues, setFormValues] = useState(initialData);

    const inputChange = (evt) => {
        const { name, value } = evt.target;
        setFormValues({...formValues, [name]: value
        });
    }

    const submitForm = () => {
        const newClass = {
            name: formValues.name,
            category: formValues.category,
            start_time:formValues.start_time,
            duration: formValues.duration,
            intensity_level: formValues.intensity_level,
            location: formValues.location,
            current_capacity: formValues.current_capacity,
            max_capacity: formValues.max_capacity,
            }

        console.log(newClass);
        axios.post('https://fitness-4-you.herokuapp.com/api/classes/', newClass)
        .then(response => {
        console.log(response.data)
        })
        .catch(error => {
        console.log(error)
        console.log('error catch')
        })
        .finally(() => {
            setFormValues(initialData)
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        submitForm();
    }

return (
  <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column'}}>
    <label>
      Class Name
      <input
      name='name'
      value={formValues.name}
      onChange={inputChange}
      />
    </label>
    <label>
      Category
      <input
      name='category'
      value={formValues.category}
      onChange={inputChange}
      />
    </label>
    <label>
      Start Time
      <input
      name='start_time'
      value={formValues.start_time}
      onChange={inputChange}
      />
    </label>
    <label>
      Duration
      <input
      name='duration'
      value={formValues.duration}
      onChange={inputChange}
      />
    </label>
    <label>
      Intensity
      <input
      name='intensity_level'
      value={formValues.intensity_level}
      onChange={inputChange}
      />
    </label>
    <label>
      Location
      <input
      name='location'
      value={formValues.location}
      onChange={inputChange}
      />
    </label>
    <label>
      Current Capacity
      <input
      name='current_capacity'
      value={formValues.current_capacity}
      onChange={inputChange}
      />
    </label>
    <label>
      Max Capacity
      <input
      name='max_capacity'
      value={formValues.max_capacity}
      onChange={inputChange}
      />
    </label>


    <button>Add Class</button>


  </form>
)
}
export default ClassForm
