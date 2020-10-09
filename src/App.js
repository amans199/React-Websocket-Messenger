import React, { Component } from 'react';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"


class App extends Component {
  render() {
    return (
      <div className="container mx-auto grid grid-cols-2  gap-4">
        <Sidebar className="" />
        <section className="" id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}
export default App;
