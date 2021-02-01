import React from "react";

const Overview = (props) => {
    const { tasks } = props;
  
    return (
      <ul>
        {tasks.map((task) => {
          return <li className="list" key={task}>{task}</li> ;
        })}
      </ul>
    );
  };

export default Overview;