
import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import '../assets/styles/style.css';

const EntryForm = (props) => {

    const [horse, setHorse] = useState([]);
    const [horseId, setHorseId] = useState("");
    const [arena, setArena] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [moneyWon, setMoneyWon] = useState("");
    const [yourTime, setYourTime] = useState("");
    const [winningTime, setWinningTime] = useState("");
    const [placing, setPlacing] = useState("");
    const [numberOfEntries, setNumberOfEntries] = useState("");
    const [runNotes, setRunNotes] = useState("");


    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/horses`)
            .then((res) => {
                console.log(res);
                setHorse(res.data);
            })
            .catch((err) => console.log(err))
    },[])


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(horseId);
        axios.post(`http://localhost:8000/api/entries`, {

            horseId,
            arena,
            eventDate,
            moneyWon,
            yourTime,
            winningTime, 
            placing,
            numberOfEntries,
            runNotes,
        })
            .then((res)=> {
                console.log(res);
                console.log(res.data);
                setHorseId("");
                setArena("");
                setEventDate("");
                setMoneyWon("");
                setYourTime("");
                setWinningTime("");
                setPlacing("");
                setNumberOfEntries("");
                setRunNotes("");
                navigate(`/horses/${horseId}/entries`)
            })
            .catch((err) => {
                console.log(err);
                setErrors(err.response.data.error.errors);
            })
    }

    return (
        <div className='container'>
            <div className="card bg-light bg-opacity-75">
                <div className="card-header fw-bold">
                    <h4>Create a New Entry</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="row g-3">
                            {/* {horseId} checked to see if the horseId was pulling when a horse name was selected */}
                            <div className="col-sm form-floating">
                                <select 
                                    className="form-select"
                                    name="horse"
                                    id="floatingInput"
                                    onChange={(e) => setHorseId(e.target.value)}>
                                    <option selected>Select Horse</option>
                                        {horse?.map((h) =>(
                                            <option key={h._id} value={h._id}>
                                                {h.horseName}
                                            </option>
                                        ))}
                                </select>
                                <label for="floatingInput">Horse's Name</label>
                            </div>
                            <div className="col-sm-6 form-floating">
                                
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput"
                                    value={arena}
                                    name="arena"
                                    placeholder="Location" 
                                    aria-label="Location"
                                    onChange={(e) => setArena(e.target.value)}/>
                                <label for="floatingInput">Location</label>
                                {errors.arena ? <p className="text-danger">{errors.arena.message}</p> : ""}    
                            </div>
                            <div className="col-sm form-floating">
                                
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="floatingInput"
                                    value={eventDate}
                                    name="eventDate"
                                    placeholder="Date" 
                                    aria-label="Date"
                                    onChange={(e) => setEventDate(e.target.value)}/>
                                <label for="floatingInput">Event Date</label>
                                {errors.eventDate ? <p className="text-danger">{errors.eventDate.message}</p> : ""}    
                            </div>
                            <div className="col-sm form-floating">
                                {errors.moneyWon ? <p className="text-danger">{errors.moneyWon.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control"
                                    id="floatingInput"
                                    value={moneyWon}
                                    name="moneyWon"
                                    placeholder="Money Won" 
                                    aria-label="Money Won"
                                    onChange={(e) => setMoneyWon(e.target.value)}/>
                                <label for="floatingInput">Money Won</label>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3">
                            <div className="col-sm form-floating">
                                
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="floatingInput"
                                    value={yourTime}
                                    name="yourTime"
                                    placeholder="My Time" 
                                    aria-label="My Time"
                                    onChange={(e) => setYourTime(e.target.value)}/>
                                <label for="floatingInput">My Time</label>
                                {errors.yourTime ? <p className="text-danger">{errors.yourTime.message}</p> : ""}    
                            </div>
                            <div className="col-sm form-floating">
                                {errors.winningTime ? <p className="text-danger">{errors.winningTime.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control"
                                    id="floatingInput" 
                                    value={winningTime}
                                    name="winningTime"
                                    placeholder="Winning Time" 
                                    aria-label="Winning Time"
                                    onChange={(e) => setWinningTime(e.target.value)}/>
                                <label for="floatingInput">Winning Time</label>
                            </div>
                            <div className="col-sm form-floating">
                                {errors.placing ? <p className="text-danger">{errors.placing.message}</p> : ""}
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="floatingInput"
                                    value={placing}
                                    name="placing"
                                    placeholder="Placing" 
                                    aria-label="Placing"
                                    onChange={(e) => setPlacing(e.target.value)}/>
                                <label for="floatingInput">Placing</label>
                            </div>
                            <div className="col-sm form-floating">
                                {errors.numberOfEntries ? <p className="text-danger">{errors.numberOfEntries.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="floatingInput"
                                    value={numberOfEntries}
                                    name="numberOfEntries"
                                    placeholder="Number of Entries" 
                                    aria-label="Number of Entries"
                                    onChange={(e) => setNumberOfEntries(e.target.value)}/>
                                <label for="floatingInput">Number of Entries</label>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3">
                            {errors.runNotes ? <p className="text-danger">{errors.runNotes.message}</p> : ""}
                            <div className="col form-floating">
                            <textarea 
                                    className="form-control" 
                                    value={runNotes}
                                    name="runNotes"
                                    placeholder="Run Notes" 
                                    onChange={(e) => setRunNotes(e.target.value)}
                                    />
                                <label for="floatingInput">Run Notes</label>
                            </div>
                        </div>
                        <br/>
                        <button className="btn-custom-color">Submit</button>
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default EntryForm