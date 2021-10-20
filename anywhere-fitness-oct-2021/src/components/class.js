import React from 'react';
import { useEffect, useState } from 'react'
import { BASE_URL } from '../constants'
import axios from 'axios'
import styled from 'styled-components'


const ClassCard = styled.div`

`





export default function Class(props) {

    // uncomment this once Class is actually receiving a Class object from Classes component

    // const { name,
    //         category, 
    //         start_time,
    //         duration,
    //         intensity_level,
    //         location,
    //         max_capacity 
    //     } = props





    // delete everything from here to where indicated below

    const [classList, setClassList] = useState([])


    useEffect(() => {
        axios.get(`${BASE_URL}/api/classes`)
        .then( res => {
            // console.log(res.data);
            setClassList(res.data);
        }).catch(err => {
            console.error(err);
        })
    }, [])

    const { name,
            category, 
            start_time,
            duration,
            intensity_level,
            location,
            max_capacity 
        } = classList[1];


    // end of delete section

    return (
    
    // delete 'classList &&' below - needed for testing purposes but should not need once this component is nested under parent component
    classList &&


    <ClassCard>
        <h3>{name}</h3>
        <h4>Category: {category}</h4>
        <p>Starts at: {start_time}</p>
        <p>Goes for: {duration}</p>
        <p>Intensity Level: {intensity_level}</p>
        <p>Location: {location}</p>
        <p>Class capacity: {max_capacity}</p>

    </ClassCard>
    )
}