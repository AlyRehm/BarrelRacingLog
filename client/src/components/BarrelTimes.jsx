import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';
import DeleteHorse from './DeleteHorse';

import '../assets/styles/style.css';

const BarrelTimes = ({horseId}) => {

    const{id} = useParams();
    const[horse, setHorse] = useState({});
    const[horseEntries, setHorseEntries] = useState([]);
    const [entry, setEntry] = useState({});


    // USEEFFECT FOR HORSE DATA 
    useEffect (() => {
        axios.get(`http://localhost:8000/api/horses/${id}`)
        .then((res) => {
            console.log("first useEffect", res.data);
            setHorse(res.data)
        })
        .catch((err) => console.log(err))
    }, []);

    // UESEEFFECT FOR TIMES DATA
    //this useEffect needs to run AFTER the horse useEffect runs. It needs to get the horse ID from the horse in state first, then it will recognize the horse._id. added in horse._id into the dependency array.  
    useEffect (() => {
        axios.get(`http://localhost:8000/api/horses/${horse._id}/entries`)
        .then((res) => {
            console.log("second useEffect", res);
            setHorseEntries(res.data);
            // added this console.log in to see if the information was an array. Returns Boolean. 
            console.log(Array.isArray(horseEntries))
        })
        .catch((err) => console.log(err))
    }, [horse._id]);


    const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/entries/${idFromBelow}`)
        .then((res) => {
            const newList = horseEntries.filter((entry) => entry._id !== idFromBelow)
                setHorseEntries(newList);
        })
        .catch((err) => console.log(err.response))
    }




    return (
        <div className="container">
        <div className="bg-light text-dark opacity-75 m-5 p-4"> 
            <h4>{horse.horseName}'s Times</h4>
            <table className="table table-light ">
                
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Winnings</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="fw-medium">
                    {/* .sort compares the eventDate of each entry. By subtracting 'new Date'(a) from new Date (b) it returns a positive number if b is greater than a, which sorts the array in descending order */}
                {horseEntries.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate)).map((entry)=> {
                    return (
                        <tr key={entry._id}>
                            <td> 
                                <Link to={`/entries/${entry._id}`}>
                                    {entry.arena}
                                </Link>
                            </td>
                            {/* using JSX to convert the eventDate into <</DD/YYYY format using the en-US locale */}
                            <td>{new Date(entry.eventDate).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})}</td>
                            {/* <td>{entry.yourTime.toFixed(3)}</td> */}
                            <td>{entry.yourTime}</td>
                            {/* Using String interpolation to add the $. Then toFixed() method to round money won to two decimal points. */}
                            {/* <td>${entry.moneyWon.toFixed(2)}</td> */}
                            <td>${entry.moneyWon}</td>
                            <td>
                                <Link to={`/entries/edit/${entry._id}`}>
                                    <button className="btn-custom-color mx-2">Edit</button>
                                    </Link>
                                <button onClick={() => deleteFilter(entry._id)} className="btn-custom-color-delete">Delete</button>
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div>
            </div>
            <DeleteHorse/>
            </div>
        </div>
    )
}

export default BarrelTimes