import React from "react";
import { render } from "react-dom";

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div>
        <h1>Welcome to ToDo app</h1>
        <form onSubmit={this.props.submit}>
          <label htmlFor="task">Task</label>
          <input
            type="text"
            name="text"
            onChange={this.props.textChanged}
            id="task"
          />
          <input type="submit" value="add task" />
        </form>
      </div>
    );
  }
}

class Task extends React.Component {
  //Task inherits from class props
  constructor(props) {
    super(props); //refers to the class that we are extending
    this.state = { date: new Date(), task: "", toggle: true }; //a feature available only to classes.

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("array of tasks before deletion", this.props.value);
    //this.props.array_tasks.filter(task => task != this.props.value});
    console.log("array of tastk after delition", this.props.array_tasks);
    this.setState({ toggle: false });
  }

  render() {
    console.log("this.state render", this.state);
    if (this.state.toggle) {
      return (
        <div>
          <h2>task: {this.props.value}</h2>
          <h4>time: {new Date().toLocaleTimeString()}</h4>
          <button onClick={this.handleClick}>Done</button>
        </div>
      );
    } else {
      return null;
    }
  }
}

function UpdateTasks(props) {
  console.log("array_tasks --->", props.array_tasks);
  const array_tasks = props.array_tasks;
  const list_tasks = array_tasks.map(task => {
    return <Task value={task} array_tasks={props.array_tasks} />;
  });
  console.log("list tasks", list_tasks);
  return <div>{list_tasks}</div>;
}

class App extends React.Component {
  constructor(props) {
    super(props); //refers to the class that we are extending
    this.state = {
      // date: new Date(),
      // task: "",
      value: ""

      // toggle: true
    }; //a feature available only to classes.
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.array_tasks = [];
  }

  handleChange(event) {
    // let newText = event.target.value;
    console.log("text is being changed");
  }

  handleSubmit(event) {
    event.preventDefault();
    let newText = event.target.text.value;
    this.setState({ value: newText });
    this.array_tasks.push(newText);
    console.log("event", event);
    document.getElementById("task").value = "";
  }

  render() {
    return (
      <div>
        <AddTask textChanged={this.handleChange} submit={this.handleSubmit} />
        {/* <Task value={this.state.value} /> */}
        <UpdateTasks array_tasks={this.array_tasks} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
