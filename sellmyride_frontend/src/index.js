import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from "axios";
import * as serviceWorker from './serviceWorker';

///////////////////////////////////////
//// READ from axios
//////////////////////////////////////

/* const listing = axios.get("/api/listing");
const users = axios.get("/api/users"); */

/* console.log(listing);
console.log(users); */

/////////////////////////////////////////


/* useEffect(() => {  // access the database for data to build the interviewers and appointments for each day
  const listing = axios.get("/api/listing");

},[]); */


////////////////////////////////////////
// CREATE from axios
////////////////////////////////////////

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', email: '', password: '', location: '', phone: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  handleSubmit(event) {
    alert('Your name is: ' + this.state.username + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.location + ' ' + this.state.phone);
    let userData = this.state;
    axios.put(`/api/users`, userData);

    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <h1>Hello , this is a form !!</h1>
      <p>Enter your name:</p>
      <label>
        Name
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
      </label>
      <label>
        Email
        <input
          type='email'
          name='email'
          onChange={this.myChangeHandler}
        />
      </label>
      <label>
        Password
        <input
          type='password'
          name='password'
          onChange={this.myChangeHandler}
        />
      </label>
      <label>
        Location
        <input
          type='text'
          name='location'
          onChange={this.myChangeHandler}
        />
      </label>
      <label>
        Phone
        <input
          type='text'
          name='phone'
          onChange={this.myChangeHandler}
        />
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}



ReactDOM.render(<MyForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
