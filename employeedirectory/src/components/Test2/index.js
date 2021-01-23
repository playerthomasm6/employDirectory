import React from "react";
import "./style.css";


function Test2 (props) {

  
    return (
      <div className="container boxstyle">
        <div className="row">
          <div className="col-sm-4">
            <img src={props.picture} alt="Employee"></img>
            </div>
            <ul className="col-sm-4">

              <li>Name: {props.firstname} {props.lastname}</li>
              <li>Gender: {props.gender}</li>
              <li>Occupation: Sexworker</li>
              <li>ID: {props.id}</li>
            </ul>
            <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>

        </div>



      </div>
    );
  }


export default Test2;
