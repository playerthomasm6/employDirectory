import React, { Component } from "react";
import API from "../../utils/API";
import "./style.css";

class Test extends Component {
  state = {
    title: "",
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    cell: "",
    picture: "",
  };

  componentDidMount() {
    this.getUserTest()
  };


  getUserTest = () => {
    API.getRandomUser()
      .then(res => this.setState({
        title: res.data.results[0].name.title,
        firstname: res.data.results[0].name.first,
        lastname: res.data.results[0].name.last,
        gender: res.data.results[0].gender,
        picture: res.data.results[0].picture.large
      }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container boxstyle">
        <div className="row">
          <div className="col-sm-4">
            <img src={this.state.picture} alt="Employee"></img>
            </div>
            <ul className="col-sm-4">

              <li>Name: {this.state.title} {this.state.firstname} {this.state.lastname}</li>
              <li>Gender: {this.state.gender}</li>
              <li>Occupation: Sexworker</li>
            </ul>
          

        </div>



      </div>
    );
  }
}

export default Test;
