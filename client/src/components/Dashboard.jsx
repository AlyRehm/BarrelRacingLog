import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import EntryForm from './EntryForm';
import '../assets/styles/style.css';

const Dashboard = (props) => {

  const [horseName, setHorseName] = useState("");
  const [errors, setErrors] = useState({});
  const [allHorses, setAllHorses] = useState([]);



  useEffect(()=> {
    axios.get("http://localhost:8000/api/horses")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAllHorses(res.data);
      })
      .catch((err) => console.log(err))
  },[]);
  // Needed to add 'allHorses' to the dependency array in order for the page to show the new horse that is added --> Dont do this. inifinit loop runs


  const submitHandler = (e) => {
    e.preventDefault();
    const newHorse = {horseName}
    axios.post('http://localhost:8000/api/horses', newHorse)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAllHorses([...allHorses, res.data.horse]);
        // to get the horse to appear on the pageXOffset, needed to access the horse object from data 
        setHorseName("");
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error.errors);
      })
  }

  return (


    <div className="container"> 
        <div>

{/* COLUMN 1 OF 2  - HORSE LIST*/}
          <div className="row justify-content-around">
            <div className="col-4">
              <div className="card bg-light bg-opacity-75 my-5">
                <div className="card-header fw-bold">
                  <h4>My Horses</h4>
                </div>
                <div className="card-body fw-bold">
                  {
                    allHorses.map((horse, index) => (
                      <div key={index}>
                        <Link to={`/horses/${horse._id}`}>{horse.horseName}</Link>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

{/* COLUMN 2 OF 2  - NEW HORSE FORM*/}
          <div className="col-4">
              <div className="card bg-light bg-opacity-75 my-5">
                <div className="card-header fw-bold">
                  <h4>Add a Horse</h4>
                </div>
                <div className="card-body">
                  <div className="form-floating">
                    <form onSubmit={submitHandler}>
                      {errors.horseName ? <p className="text-danger">{errors.horseName.message}</p> : ""}
                      <input 
                        className="form-control" 
                        type="text" 
                        id="floatingInput"
                        onChange={(e) => setHorseName(e.target.value)}  
                        value={horseName}
                        name="horseName"
                        placeholder="Horse's Name"
                      />
                      <button className="btn-custom-color mt-3">Add</button>
                    </form>
                  </div>
                </div>
              </div>
          </div>
    </div>


        </div>
        <EntryForm/>

    </div>
  )
}

export default Dashboard