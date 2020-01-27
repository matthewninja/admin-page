import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/users.json';

/*
 * User object includes: 
 * name: string, companyName: string,  signUpDate: Date, 
 * lastVisitDate: Date, email: string, and phone: string. 
 */
class UserTableItem extends React.Component {
  constructor(props) {
    super(props);
    this.name = String(props.user_data.name);
    this.companyName = String(props.user_data.companyName);
    this.signUpDate = new Date(props.user_data.signUpDate);
    this.lastVisitDate = new Date(props.user_data.lastVisitDate);
    this.email = String(props.user_data.email);
    this.phone= String(props.user_data.phone);
  }

  render() {
    return (
      <tr>
        <td>{this.name}</td>
        <td>{this.companyName}</td>
        <td>{this.signUpDate.toLocaleString()}</td>
        <td>{this.lastVisitDate.toLocaleString()}</td>
        <td>{this.email}</td>
        <td>{this.phone}</td>
      </tr>
    );
  }
}

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users;
    this.user_components = this.users.map((user) =>
      <UserTableItem user_data={user} key={user.phone}/>
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company Name</th>
            <th>Sign Up Date</th>
            <th>Last Visit Date</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.user_components}
        </tbody>
      </table>
    );
  }
}

// ================================

ReactDOM.render(
  <UserTable users={data.users} />,
  document.getElementById('root')
);