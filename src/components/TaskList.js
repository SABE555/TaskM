import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Task = (props) => (
  <tr>
     <td>{props.task.description}</td>
     <td>{props.task.date.substring(0, 10)}</td>
    <td>
      <Link to={"/edit/" + props.task._id}>edit</Link> |{" "}
      <a
        href="#"
        onClick={() => {
          props.deleteTask(props.task._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class TaskList extends Component {
  constructor(props) {
    super(props);

    this.deleteTask = this.deleteTask.bind(this);

    this.state = { task: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/task/")
      .then((response) => {
        this.setState({ task: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteTask(id) {
    axios.delete("http://localhost:5000/task/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      task: this.state.task.filter((el) => el._id !== id),
    });
  }

  taskList() {
    return this.state.task.map((currenttask) => {
      return (
        <Task
          task={currenttask}
          deleteTask={this.deleteTask}
          key={currenttask._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
               <th>Description</th>
               <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
        </table>
      </div>
    );
  }
}
