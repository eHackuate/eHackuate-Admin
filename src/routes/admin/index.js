import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client';

class Admin extends Component {
  componentWillMount() {
    this.socket = io('//app.erfan.space');
    // this.socket = io('//localhost:8080');
  }

  componentWillUnmount() {
    this.socket.close();
  }

  createIncident = () => {
    this.socket.emit('incident', 'Are you okay? (Yes/No)');
  }

  render() {
    return (
      <div>
        <RaisedButton label="🚨 Incident" onClick={this.createIncident} />
      </div>
    );
  }
}

export default Admin;
