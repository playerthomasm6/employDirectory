import React, { Component } from "react";
import './App.css';
import Container from "./components/Container"
import Test from "./components/Test"
import Test2 from "./components/Test2"
import Employees from "./employees.json"
import FilterBtn from "./components/FilterButtons"

class App extends Component {
  state = {
    Employees,
    femaleFilter: true,
    maleFilter: false,
    allFilter: false
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const Employees = this.state.Employees.filter(Employees => Employees.name.first + Employees.location.street.number !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ Employees });
  };

  // filterGender = gender => {
  //   const gender1 = "male";
  //   const Employees = this.state.Employees.filter(Employees => Employees.gender !== gender1);
  //   this.setState({ Employees })
  // }

  filterFemale = (femaleFilter) => {
    if (femaleFilter) {
      const femaleEmployees = this.state.Employees.filter(Employees => Employees.gender === "female");
      return (femaleEmployees.map(Employees => (
        <Test2
              removeEmployee={this.removeEmployee}
              id={Employees.name.first + Employees.location.street.number}
              key={Employees.name.first + Employees.location.street.number}
              firstname={Employees.name.first}
              lastname={Employees.name.last}
              gender={Employees.gender}
              picture={Employees.picture.large}
            />))
            )

    } else {
      return null
    } 
  };
  
  filterMale = (maleFilter) => {
    if (maleFilter) {
      const maleEmployees = this.state.Employees.filter(Employees => Employees.gender === "male");
      return (maleEmployees.map(Employees => (
        <Test2
              removeEmployee={this.removeEmployee}
              id={Employees.name.first + Employees.location.street.number}
              key={Employees.name.first + Employees.location.street.number}
              firstname={Employees.name.first}
              lastname={Employees.name.last}
              gender={Employees.gender}
              picture={Employees.picture.large}
            />))
            )

    }
    
  };

  filterAll = (allFilter) => {
    if (allFilter) {
      return (this.state.Employees.map(Employees => (
        <Test2
              removeEmployee={this.removeEmployee}
              id={Employees.name.first + Employees.location.street.number}
              key={Employees.name.first + Employees.location.street.number}
              firstname={Employees.name.first}
              lastname={Employees.name.last}
              gender={Employees.gender}
              picture={Employees.picture.large}
            />))
            )

    }
    
  }

  handleFilterFemale = event => {
    this.setState({ 
                    Employees,
                    femaleFilter: true,
                    maleFilter: false,
                    allFilter: false 
                  });
  };

  handleFilterMale = event => {
    this.setState({ 
                    Employees,
                    femaleFilter: false,
                    maleFilter: true,
                    allFilter: false 
                  });
  };

  handleFilterAll = event => {
    this.setState({ 
                    Employees,
                    femaleFilter: false,
                    maleFilter: false,
                    allFilter: true 
                  });
  };
  
  render() {
    const allFilter = this.state.allFilter;
    const femaleFilter = this.state.femaleFilter;
    const maleFilter = this.state.maleFilter;
    console.log(this.state)
    return (
      <Container>
        <FilterBtn
          femaleFilter={this.state.femaleFilter}
          maleFilter={this.state.maleFilter}
          allFilter={this.state.maleFilter}
          setFemaleFilter = {this.handleFilterFemale}
          setMaleFilter = {this.handleFilterMale}
          setAllFilter = {this.handleFilterAll}

/>

        {this.filterAll(allFilter)}
        {this.filterFemale(femaleFilter)}
        {this.filterMale(maleFilter)}
      </Container>
    );

  }

}
export default App;
