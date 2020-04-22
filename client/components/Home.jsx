import React from 'react'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      clicked: false
    }
  }
  

  handleGoClick = () => {
    
    this.props.func()
    this.setState({
        clicked: true
      })
    console.log('Home state:', this.state.clicked)
    
  }

  // redirect = () => {
  //   if(this.state.clicked) {
  //     return <Redirect to='/LoggedIn' />
  //   }
  // }

  render () {
    return (
      <div>
        {/* {this.redirect()} */}
        <button onClick={this.handleGoClick} >GO!</button>
        <button>Redux</button>
      </div>
    )
  }
}

export default Home

