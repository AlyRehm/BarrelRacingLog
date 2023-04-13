
import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link} from 'react-router-dom';


const EditEntry = (props) => {

    const [horse, setHorse] = useState([]);
    const [horseId, setHorseId] = useState("");
    const [arena, setArena] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [moneyWon, setMoneyWon] = useState("");
    const [myTime, setMyTime] = useState("");
    const [winningTime, setWinningTime] = useState("");
    const [placing, setPlacing] = useState("");
    const [numberOfEntries, setNumberOfEntries] = useState("");
    const [runNotes, setRunNotes] = useState("");
    const [event, setEvent] = useState({});

    const selectedHorse = horse.find((h) => h._id === horseId);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/entries/${event._id}`)
        .then((res) => {
            console.log(res);
            setHorseId (res.data.horseId)
            setArena(res.data.arena);
            setEventDate(res.data.eventDate);
            setMoneyWon(res.data.moneyWon);
            setMyTime(res.data.myTime);
            setWinningTime(res.data.winningTime);
            setPlacing(res.data.placing);
            setNumberOfEntries(res.data.numberOfEntries);
            setRunNotes(res.data.runNotes);
        })
        .catch((err) => console.log(err))
    },[])


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(horseId);
        axios.put(`http://localhost:8000/api/entries/${event._id}`, {
            horse: {
                id: selectedHorse._id,
                horseName: selectedHorse.horseName,
            },
            arena,
            eventDate,
            moneyWon,
            myTime,
            winningTime, 
            placing,
            numberOfEntries,
            runNotes
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.error.errors);
        })
    }

    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h4>Create a New Entry</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="row g-3">
                            <div className="col-sm">
                                <select 
                                    className="form-select"
                                    name="horse"
                                    onChange={(e) => setHorseId(e.target.value)}>
                                    <option selected>Select Horse</option>
                                        {horse.map((h) =>(
                                            <option key={h._id} value={h._id}>
                                                {h.horseName}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="col-sm-6">
                                {errors.arena ? <p className="text-danger">{errors.arena.message}</p> : ""}
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={arena}
                                    name="arena"
                                    placeholder="Location" 
                                    aria-label="Location"
                                    onChange={(e) => setArena(e.target.value)}/>
                            </div>
                            <div className="col-sm">
                                {errors.eventDate ? <p className="text-danger">{errors.eventDate.message}</p> : ""}
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    value={eventDate}
                                    name="eventDate"
                                    placeholder="Date" 
                                    aria-label="Date"
                                    onChange={(e) => setEventDate(e.target.value)}/>
                            </div>
                            <div className="col-sm">
                                {errors.moneyWon ? <p className="text-danger">{errors.moneyWon.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={moneyWon}
                                    name="moneyWon"
                                    placeholder="Money Won" 
                                    aria-label="Money Won"
                                    onChange={(e) => setMoneyWon(e.target.value)}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3">
                            <div className="col-sm">
                                {errors.myTime ? <p className="text-danger">{errors.myTime.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={myTime}
                                    name="myTime"
                                    placeholder="My Time" 
                                    aria-label="My Time"
                                    onChange={(e) => setMyTime(e.target.value)}/>
                            </div>
                            <div className="col-sm">
                                {errors.winningTime ? <p className="text-danger">{errors.winningTime.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={winningTime}
                                    name="winningTime"
                                    placeholder="Winning Time" 
                                    aria-label="Winning Time"
                                    onChange={(e) => setWinningTime(e.target.value)}/>
                            </div>
                            <div className="col-sm">
                                {errors.placing ? <p className="text-danger">{errors.placing.message}</p> : ""}
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={placing}
                                    name="placing"
                                    placeholder="Placing" 
                                    aria-label="Placing"
                                    onChange={(e) => setPlacing(e.target.value)}/>
                            </div>
                            <div className="col-sm">
                                {errors.numberOfEntries ? <p className="text-danger">{errors.numberOfEntries.message}</p> : ""}
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={numberOfEntries}
                                    name="numberOfEntries"
                                    placeholder="Number of Entries" 
                                    aria-label="Number of Entries"
                                    onChange={(e) => setNumberOfEntries(e.target.value)}/>
                            </div>
                        </div>
                        <br/>
                        <div className="row g-3">
                            {errors.runNotes ? <p className="text-danger">{errors.runNotes.message}</p> : ""}
                            <div className="col">
                                <input 
                                    type="textarea"  
                                    className="form-control" 
                                    value={runNotes}
                                    name="runNotes"
                                    placeholder="Run Notes" 
                                    aria-label="run notes" 
                                    onChange={(e) => setRunNotes(e.target.value)}/>
                            </div>
                        </div>
                        <br/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default EditEntry;