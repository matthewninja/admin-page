import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './data/users.json';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }

  renderSquare(i) {
    return <Square 
      value={this.state.squares[i]}
      onClick={() => {this.handleClick(i)} }
    />;
  }

  render () {
    const status = 'Next Player: X';
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={() => { this.props.onClick() } }>
        {this.props.value}
      </button>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    );
  }
}

// User object includes: 
// name: string, companyName: string,  signUpDate: Date, 
// lastVisitDate: Date, email: string, and phone: string. 
class UserListItem extends React.Component {
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
    // User Item in List
    return (
      <li>{this.name}</li>
    );
  }
}

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users;
    this.user_components = this.users.map((user) =>
      <UserListItem user_data={user} />
    );
  }

  render() {
    return (
      <ul>
        {this.user_components}
      </ul>
    );
  }
}

// ================================

ReactDOM.render(
  <UserList users={data.users} />,
  document.getElementById('root')
);