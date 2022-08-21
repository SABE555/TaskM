import React, { Component } from 'react'
import '../style/taskstyle.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
class Task  extends Component {
  constructor(props){
         super(props);
         this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
         this.handleDateChange = this.handleDateChange.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.state={
          description:'',
          date: new Date(),
         }
  }
    handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }
  
  handleDateChange(date) {
    this.setState({ date: date });
  }

  OnChangedescription(e){
    this.setState({description:e.target.value});
  }

    OnChangeTask(date){
    this.setState({date:date});
  }
  onSubmit(e) {
    e.preventDefault();
    const tasks = {
       description: this.state.description,
       date: this.state.date,
    };
    console.log(tasks);
   axios
      .post("http://localhost:5000/task/add", tasks)
      .then((res) => console(res.data));
  }
  render(){
    return (
 <div>
        <h3>create new task log</h3>
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
              value="create task"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
     )
    }
}
export default Task;