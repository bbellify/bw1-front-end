import React from 'react';
import { useParams } from 'react-router-dom';

export default function Class(props) {

    const {details} = props

    if (!details) {
        return <h2>Running to get your details</h2>
    }

    return (
        <div className = 'class-container'>

            <div className = 'class-info'>
                <div className='card-title'>
                    <h2>{details.name}</h2>
                    <h3>{details.type}</h3>
                </div>
            <div className='class-description'>
                <p>Start Time: {details.start_time}</p>
                <p>Duration: {details.duration}</p>
                <p>Difficulty: {details.intensity_level}</p>
                <p>Location: {details.location}</p>
                <p>Max Class Size: {details.max_class_size}</p>      
            </div>       
          </div>
          
        </div>
    )
}



