import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      task: "",
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeCurrent = this.removeCurrent.bind(this);

  }

  removeCurrent(e) {

    this.setState({
      tasks: this.state.tasks.filter(task => {
        return task !== e.target.id
      }),
    });
  }

  handleInput(e) {
    this.setState({
      task: e.target.value,
    });
  }

  addTask(e) {
    e.preventDefault();

    if(this.state.tasks.indexOf(this.state.task) > -1 ) {
      alert("Task already exists");
      return;
    }

    this.setState({
    tasks: this.state.tasks.concat(this.state.task),
    task: "",
    });

  }
  
  render() {
    return (
      <div id="container">
        <div id="form-container">
          <form id="form" onSubmit={this.addTask}>
            <input type="text" onChange={this.handleInput} value={this.state.task} placeholder="Add task" />
            <button type="submit"> Add </button>
          </form>
        </div>
          <div>
 
              <Overview tasks={ this.state.tasks } remove={this.removeCurrent} />
 
          </div>
      </div>
    );
  }
}

export default App;
