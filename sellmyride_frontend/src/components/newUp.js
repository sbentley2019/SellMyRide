import React, {useEffect} from "react";
import axios from "axios";

/* 
let idPlaceholder = '';
let namePlaceholder = '';
let passwordPlaceholder = '';
let emailPlaceholder = '';
let locationPlaceholder = '';
let phonePlaceholder = '';

function newUp (props){

  useEffect(() => {
    axios.get('/api/users').then(obj => {
      let userSearch = 'Matt';
      let userArray = obj.data;
      let user = '';
      userArray.forEach(singleUser => {
        if (userSearch === singleUser.name) {
          user = singleUser;
        }
      });
      console.log(user);
      idPlaceholder = user.id;
      namePlaceholder = user.name;
      passwordPlaceholder = user.password;
      emailPlaceholder = user.email;
      locationPlaceholder = user.location;
      phonePlaceholder = user.phone;
    }); 
  },[]);



  function handleUpdate() {
    alert('Your name is: ' + this.state.username + ' ' + this.state.email + ' ' + this.state.password + ' ' + this.state.location + ' ' + this.state.phone);
    let userData = this.state;
    userData['id'] = idPlaceholder;
    console.log(userData);
    axios.put(`/api/users/${idPlaceholder}`, userData);

    event.preventDefault();
  }

    return (
      <div>

        <div>
         <form onSubmit={handleUpdate}>
          <h1>Update your account info !!</h1>
          <label>
            Name
            <input
              type='text'
              name='username'
              value={namePlaceholder}
            />
          </label>
          <label>
            Email
            <input
              type='email'
              name='email'
              value={emailPlaceholder}
            />
          </label>
          <label>
            Password
            <input
              type='password'
              name='password'
              value={passwordPlaceholder}
            />
          </label>
          <label>
            Location
            <input
              type='text'
              name='location'
              placeholder={locationPlaceholder}
            />
          </label>
          <label>
            Phone
            <input
              type='text'
              name='phone'
              value={phonePlaceholder}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        </div>

      </div> 
    );
}

export default newUp; */