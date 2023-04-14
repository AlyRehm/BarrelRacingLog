
import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link} from 'react-router-dom';


const EditEntry = (props) => {

    const {id} = useParams();

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
    const [event, setEvent] = useState({});

    // const selectedHorse = horse.find((h) => h._id === horseId);

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/entries/${id}`)
        .then((res) => {
            console.log(res);
            setHorseId (res.data.horseId)
            setArena(res.data.arena);
            setEventDate(res.data.eventDate);
            setMoneyWon(res.data.moneyWon);
            setYourTime(res.data.yourTime);
            setWinningTime(res.data.winningTime);
            setPlacing(res.data.placing);
            setNumberOfEntries(res.data.numberOfEntries);
            setRunNotes(res.data.runNotes);
        })
        .catch((err) => console.log(err))
    },[id])

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
        // console.log(horseId);
        axios.put(`http://localhost:8000/api/entries/edit/${id}`, {
            horseId,
            arena,
            eventDate,
            moneyWon,
            yourTime,
            winningTime, 
            placing,
            numberOfEntries,
            runNotes
        })
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate(`/horses/${horseId}/entries`);
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
                    <h4>Edit this Entry</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <div className="row g-3">
                            <div className="col-sm">
                                {horseId}
                                <select 
                                    className="form-select"
                                    name="horse"
                                    onChange={(e) => setHorseId(e.target.value)}>
                                    <option value="">Select Horse</option>
                                        {horse?.map((h) =>(
                                            <option key={h._id} value={h._id}>
                                                {h.horseName}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="col-sm-6">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    value={arena}
                                    name="arena"
                                    placeholder="Location" 
                                    aria-label="Location"
                                    onChange={(e) => setArena(e.target.value)}/>
                                {errors.arena ? <p className="text-danger">{errors.arena.message}</p> : ""}    
                            </div>
                            <div className="col-sm">
                                {eventDate}
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    value={eventDate}
                                    name="eventDate"
                                    placeholder="Date" 
                                    aria-label="Date"
                                    onChange={(e) => setEventDate(e.target.value)}/>
                                {errors.eventDate ? <p className="text-danger">{errors.eventDate.message}</p> : ""}    
                            </div>
                            <div className="col-sm">

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
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={yourTime}
                                    name="yourTime"
                                    placeholder="My Time" 
                                    aria-label="My Time"
                                    onChange={(e) => setYourTime(e.target.value)}/>
                                {errors.yourTime ? <p className="text-danger">{errors.yourTime.message}</p> : ""}    
                            </div>
                            <div className="col-sm">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    value={winningTime}
                                    name="winningTime"
                                    placeholder="Winning Time" 
                                    aria-label="Winning Time"
                                    onChange={(e) => setWinningTime(e.target.value)}/>
                                {errors.winningTime ? <p className="text-danger">{errors.winningTime.message}</p> : ""}    
                            </div>
                            <div className="col-sm">
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
                        <Link to={`/horses/${horse.id}`}>
                            <button>Cancel</button>
                        </Link>
                    </form>
                </div>
            </div>    
        </div>
    )
}

export default EditEntry;