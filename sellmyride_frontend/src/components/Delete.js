import React from "react";
import axios from "axios";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: ''};

    this.handleDelete = this.handleDelete.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }


  handleDelete(event) {
    let id = this.state.id;
    axios.delete(`/api/users/${id}`);
    alert('user id being deleted is: ' + this.state.id);
    event.preventDefault();
  }

  render() {
    return (
      <div>

           <form onSubmit={this.handleDelete}>
            <label>
              <h1>user id</h1>
              <input
                type='text'
                name='id'
                onChange={this.myChangeHandler}
              />
            </label>
              <input type="submit" value="Submit" />
          </form>


      </div> 
    );
  }
}
export default Delete;