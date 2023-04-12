import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';

const EntryDetails = (props) => {
    
    const {id} = useParams();
    // const [entry, setEntry] = useState({});
    // Initializing the 'entry' state with default values so that the responses wont be undefined if there are no values inlcuded in some of the fields 
    const [entry, setEntry] = useState({
        arena: '',
        eventDate: '',
        yourTime: 0,
        winningTime: 0,
        placing: '',
        numberOfEntries: 0,
        moneyWon: 0,
        runNotes: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/entries/${id}`)
        .then((res) => {
            console.log(res.data);
            setEntry(res.data);
        })
        .catch((err)=> console.log(err))
    }, [])




    return (
        <div className="container">
            <h4>Run Details</h4>


            
            <div className="card">
                <div className="card-header">
                    <Link to="">
                        View all of {entry.horseId} times
                    </Link>
                    
                </div>
                <div className="card-body">
                    <h5 className="card-title">My run at {entry.arena} on {new Date(entry.eventDate).toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'})}</h5>
                    <br></br>
                    <div className="row justify-content-center">
                        <div className="col-3">
                            <p className="card-text"><span className="fw-semibold">My Time:</span> {entry.yourTime.toFixed(3)}</p>
                            <p className="card-text"><span className="fw-semibold">Winning Time:</span> {entry.winningTime.toFixed(3)}</p>
                            <p className="card-text"><span className="fw-semibold">Placing:</span> {entry.placing}</p>
                            <p className="card-text"><span className="fw-semibold">Number of Entries:</span> {entry.numberOfEntries}</p>
                            <p className="card-text"><span className="fw-semibold">Money won:</span> ${entry.moneyWon.toFixed(2)}</p>                        
                        </div>
                        <div className="col-5">
                        <p className="card-text"><span className="fw-semibold">Run Notes:</span> {entry.runNotes}</p> 
                        </div>
                    </div>
                </div> 

            </div>



        </div>
    )
}

export default EntryDetails