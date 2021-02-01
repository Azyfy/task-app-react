import React from "react";

const Overview = (props) => {
    const { tasks } = props;
    const { remove } = props;
  
    return (
      <ul>
        {tasks.map((task) => {
          return <li className="list" id={task} key={task}>{task} <button id={task} onClick={remove} className="remove-btn">R</button></li> ;
        })}
      </ul>
    );
  };

export default Overview;