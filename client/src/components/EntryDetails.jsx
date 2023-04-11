import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link} from 'react-router-dom';

const EntryDetails = (props) => {
    
    const {id} = useParams;
    const [entry, setEntry] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/entries/${id}`)
        .then((res) => {
            console.log(res.data);
            setEntry(res.data);
        })
        .catch((err)=> console.log(err))
    }, [])
    
    return (
        <div>EntryDetails</div>
    )
}

export default EntryDetails