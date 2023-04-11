import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';

const BarrelTimes = ({horseId}) => {

    const{id} = useParams();
    const[horse, setHorse] = useState({});
    const[horseEntries, setHorseEntries] = useState([]);


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


    return (
        <div className="container">
            <h4>{horse.horseName}'s Times</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Location</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Winnings</th>
                    </tr>
                </thead>
                <tbody>
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
                            <td>{entry.yourTime.toFixed(3)}</td>
                            {/* Using String interpolation to add the $. Then toFixed() method to round money won to two decimal points. */}
                            <td>${entry.moneyWon.toFixed(2)}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div>
            </div>
        </div>
    )
}

export default BarrelTimes