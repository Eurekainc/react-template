import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Layout'

import '../styles/styles.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Layout} />
        </div>
      </Router>
    )
  }
}

export default App
