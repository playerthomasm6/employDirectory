import React from "react";

function FilterBtn(props) {


    return (
        <div>
            <button onClick={props.setFemaleFilter}>Female Only</button>
            <button onClick={props.setMaleFilter}>Male Only</button>
            <button onClick={props.setAllFilter}>All</button>
            <input 
            name="search" 
            type="text" 
            onChange={props.setSearchFilter}
            ></input>
        </div>
    );
}


export default FilterBtn;
