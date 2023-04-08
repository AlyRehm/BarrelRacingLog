import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = (props) => {

  const [horseName, setHorseName] = useState("");
  const [errors, setErrors] = useState({});
  const [allHorses, setAllHorses] = useState([]);
  const navigate = useNavigate();

  // const {allHorses, setAllHorses} = props;

  useEffect(()=> {
    axios.get("http://localhost:8000/api/horses")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAllHorses(res.data);
      })
      .catch((err) => console.log(err))
  },[]);


  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/horses', {
      horseName,
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setAllHorses([...allHorses, res.data]);
        setHorseName("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.error.errors);
      })
  }


  return (
    <div>
        <div className="container">

{/* COLUMN 1 OF 2  - HORSE LIST*/}
          <div className="row justify-content-around">
            <div className="col-4">
              <div className="card">
                <div className="card-header">
                  My Horses
                </div>
                <div className="card-body">
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
              <div className="card">
                <div className="card-header">
                  Add a Horse
                </div>
                <div className="card-body">
                  <form onSubmit={submitHandler}>
                    {errors.horseName ? <p className="text-danger">{errors.horseName.message}</p> : ""}
                    <label className="form-label">Horse's Name:</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      onChange={(e) => setHorseName(e.target.value)}  
                      value={horseName}
                      name="horseName"
                    />
                    <button>Add</button>
                  </form>
                </div>
              </div>
          </div>
    </div>


        </div>

    </div>
  )
}

export default Dashboard