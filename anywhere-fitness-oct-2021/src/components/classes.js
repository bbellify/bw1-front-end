import React from "react";
import axios from 'axios'
import {useHistory} from 'react-router-dom'



class Classes extends React.Component {
    
    state = {
        classes: []
    }
    
componentDidMount(){
    this.getData();
}
// //component DidUpdate
//   this.getData()


getData=()=>{
axios
.get("https://fitness-4-you.herokuapp.com/api/classes")
.then(res =>{
    console.log(res);
    this.setState({
        classes: res.data
    })
})
.catch(err=>console.log(err))
}
clicksubmit=(id)=>{
this.props.history.push(`/classEdit/${id}`)

}
    render(){
        return(
            <div className="Classes">
                {this.state.classes.map(classes =>{
                    return(
                        <div className="box">
                        <div key={classes.class_id} >
                            <h4>Class name: {classes.name}</h4> 
                            <p>Class type: {classes.category}</p>
                            <p>Class time: {classes.start_time}</p>
                            <p>Class Duration: {classes.duration}</p>
                            <p>Class Intensity: {classes.intensity_level}</p>
                            <p>Class Location: {classes.location}</p>
                            <p>Currently enrolled in class: {classes.current_capacity}</p>
                            <p>Max class Participants: {classes.max_capacity}</p>
                        </div>
                        </div>
                    )
                })}
                
                
            </div>
        )
    }
}

export default Classes;

    
