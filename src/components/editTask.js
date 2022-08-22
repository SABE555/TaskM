import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
export default class editTask extends Component {
  constructor(props) {
    super(props);
     this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
     this.handleDateChange = this.handleDateChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
       description: "",
       date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/task" + this.props.match.params.id)
      .then((response) => {
        this.setState({
           description: response.data.description,
           date: new Date(response.data.date),
        });
      });

    axios.get("http://localhost:5000/task").then((reponse) => {
      if (reponse.data.length > 0) {
        this.setState({
          users: reponse.data.map((user) => user.username),
        });
      }
    });
  }
 

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

 
  handleDateChange(date) {
    this.setState({ date: date });
  }

  onSubmit(e) {
    e.preventDefault();
    const task = {
       description: this.state.description,
       date: this.state.date,
    };
    console.log(task);
    axios
      .post(
        "http://localhost:5000/task/update" + this.props.params.id,
        task
      )
      .then((res) => console(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>edit Exercice log</h3>
        <form onSubmit={this.onSubmit}>
       
          <div className="from-group">
            <label>description :</label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
            />
          </div>
           <div className="from-group">
            <label>date :</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.handleDateChange}
              />
            </div>
          </div>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="edit exercice"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
