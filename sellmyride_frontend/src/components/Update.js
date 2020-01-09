import React from "react";
import axios from "axios";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userSearch: ''};
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }


  handleUserSearch(event) {
    let userSearch = this.state.userSearch;
/*     alert('user is: ' + userSearch); */
    axios.get('/api/users').then(obj => {
      console.log(obj.data);
      let userArray = obj.data;
      let user = '';
      userArray.forEach(singleUser => {
        if (userSearch === singleUser.name) {
          user = singleUser;
        }
      });
      console.log(user);
      
    });
  }


  render() {
    return (
      <div>


          <form onSubmit={this.handleUserSearch}>
            <label>
              <h1>user search to edit</h1>
              <input
                type='text'
                name='userSearch'
                onChange={this.myChangeHandler}
              />
            </label>
              <input type="submit" value="Submit" />
          </form> 


      </div> 
    );
  }
}

export default Update;