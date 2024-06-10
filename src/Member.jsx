import React from 'react'
import PropTypes from 'prop-types';

import './member.css'



const Member = (props) => {

  return (
    <>
      <div className="container">
            <div className="box">
                <div className="card">
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top" src="src/assets/starter_profile.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{props.fname} {props.lname}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                            <a href="#" className="btn btn-primary">Connect</a>
                        </div>
                    </div>  
                </div>  
            </div>  
        </div>
    </>    
  )
}

export default Member

