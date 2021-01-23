import React from "react";

function FilterBtn(props) {


    return (
        <div>
            <button onClick={props.setFemaleFilter}>Female Only</button>
            <button onClick={props.setMaleFilter}>Male Only</button>
            <button onClick={props.setAllFilter}>All</button>
        </div>
    );
}


export default FilterBtn;
