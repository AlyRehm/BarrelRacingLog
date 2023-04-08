import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
        <div class="container">
            <h2>Welcome --Person Name --</h2>

            <div class="row">
                <div class="col">
                {/* list of horses ----hopefully with photos  */}
                    <p>Your Horses:</p>
                    <div>
                    

                    </div>

                </div>


                <div class="col">
                {/* this will be a form to add a new horse */}
                    <p>New Horse</p>
                    
                </div>




        </div>

    </div>
  )
}

export default Dashboard