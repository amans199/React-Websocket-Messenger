import React, { Component } from 'react';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessagesList"
import { AddMessage } from "./containers/AddMessage"


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="text-white text-center text-4xl py-5 bg-blue-700 shadow-xl">Created With &hearts; by <a className="underline" rel="noopener noreferrer" target="_blank" href="https://twitter.com/amans199">Ahmed Mansour</a></h1>
        <div className="container mx-auto grid grid-cols-3 font-mono text-3xl subpixel-antialiased divide-x divide-blue-700   gap-4 py-8">

          <Sidebar />
          <section className="col-span-2 break-words pl-8 divide-y divide-blue-700 " id="main">
            <MessagesList />
            <AddMessage />
          </section>
        </div>
      </React.Fragment>

    )
  }
}
export default App;
