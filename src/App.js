import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <aside id="sidebar">Users</aside>
        <section id="main">
          <section id="message_list">Message-list</section>
          <section id="new-message">New Message</section>
        </section>
      </div>
    )
  }
}
export default App;
