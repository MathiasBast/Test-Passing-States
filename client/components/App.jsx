import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import LoggedIn from './LoggedIn'
import Home from './Home'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      LoggedIn: false
    }
  }

  LogSucess = () => {
    this.setState({
      LoggedIn: true
    })
    console.log(this.state.LoggedIn)
  }

  render () {
    return (
      <>
        <h1>React development has begun!</h1>
        <Route exact path ='/' component={() => <Home func={this.LogSucess} />} />
        <Route exact path='/LoggedIn' > 
          {this.state.LoggedIn ? <LoggedIn /> : <Redirect to='/' />}
        </Route>
      </>
    )
  }
}

export default App
