import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate} from 'react-router-dom';

const DeleteHorse = ({horseId}) => {

    const{id} = useParams();
    const[horse, setHorse] = useState({});
    const [allHorses, setAllHorses] = useState([]);

    const navigate = useNavigate();

        useEffect (() => {
        axios.get(`http://localhost:8000/api/horses/${id}`)
        .then((res) => {
            console.log("first useEffect", res.data);
            setHorse(res.data)
        })
        .catch((err) => console.log(err))
    }, []);

        const deleteFilter = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/horses/delete/${idFromBelow}`)
        .then((res) => {
            const newList = allHorses.filter((horse) => horse._id !== idFromBelow)
                setAllHorses(newList);
                navigate("/")
        })
        .catch((err) => console.log(err.response))
    }

    return (
        <div>
            
            <div>
                    <button className="btn btn-danger" onClick={() => deleteFilter(horse._id)}>Delete Horse </button>
            </div>

        </div>
    )
}

export default DeleteHorse