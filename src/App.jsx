import React, { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";

library.add(fas);

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
  }

  handleToggleTheme = () => {
    this.setState(prev => ({ theme: prev.theme === 'light' ? 'dark' : 'light' }));
    document.body.classList.toggle('dark', this.state.theme === 'light');
    document.body.classList.toggle('light', this.state.theme === 'dark');
  }

  render () {
      return (
          <Sidebar 
            color={this.state.theme}
            theme={this.state.theme}
            onToggleTheme={this.handleToggleTheme}
          />
      )
  }
}
