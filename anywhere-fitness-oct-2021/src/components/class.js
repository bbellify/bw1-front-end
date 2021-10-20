import React from 'react';
import styled from 'styled-components'


// this is just a rough draft of styling - can be edited freely by anyone that wants to prettify it

const ClassCard = styled.div`
    background-color: lightgrey;
    width: 20%;
    padding: 1% 1%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px;
`

const ClassName = styled.h3`
    margin: 5px;
`

const ClassCategory = styled.h4`
    margin: 5px;
`

const ClassP = styled.p`
    margin: 5px;
`

// this component is expecting a class object from a class list array passed as props

export default function Class(props) {

    // uncomment this const once Class is actually receiving a Class object from Classes component

    // const { name,
    //         category, 
    //         start_time,
    //         duration,
    //         intensity_level,
    //         location,
    //         max_capacity 
    //     } = props


    // delete everything from here to where indicated below - was all for testing purposes

    const dummyClass = {
        name: 'Fartleks in the Park',
        category: 'HIIT',
        start_time: '10:00 am',
        duration: '1 hour',
        intensity_level: 9,
        location: 'Green Park',
        max_capacity: 15
    }


    const { name,
            category, 
            start_time,
            duration,
            intensity_level,
            location,
            max_capacity 
        } = dummyClass;

    // end of delete section


    return (
    

    <ClassCard>
        <ClassName>{name}</ClassName>
        <ClassCategory>Category: {category}</ClassCategory>
        <ClassP>Starts at: {start_time}</ClassP>
        <ClassP>Goes for: {duration}</ClassP>
        <ClassP>Intensity Level: {intensity_level}</ClassP>
        <ClassP>Location: {location}</ClassP>
        <ClassP>Class Capacity: {max_capacity}</ClassP>

    </ClassCard>
    )
}