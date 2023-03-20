// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onOffSubscribe = () => {
    this.setState(prevState => {
      const {isSubscribed} = prevState
      if (isSubscribed === true) {
        return {isSubscribed: false}
      }
      return {isSubscribed: true}
    })
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed && (
          <button type="button" onClick={this.onOffSubscribe}>
            Subscribed
          </button>
        )}
        {!isSubscribed && (
          <button type="button" onClick={this.onOffSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome

/* solution 





import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="app-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscribe-button"
          onClick={this.onSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome

*/
