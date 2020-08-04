import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"

class PageThree extends React.Component {
  constructor() {
    super()
    this.state = {
      greeting: ["Do you like this page? Please leave a message below"],
      input: "",
      unwantedmessage: "You commented: Yes, I LOVE the site!",
      secondMessage:
        "You commented: I can't say enough about how nice this site is.",
      count: "",
    }
    this.handleClick = this.handleClick.bind(this)
    this.secondClick = this.secondClick.bind(this)
  }
  handleClick() {
    let myNewMessage = this.state.greeting
    myNewMessage.push(this.state.unwantedmessage)
    this.setState({ greeting: myNewMessage, input: "" })
  }
  secondClick() {
    let mySecondMessage = this.state.greeting
    mySecondMessage.push(this.state.secondMessage)
    this.setState({ greeting: mySecondMessage, input: "" })
  }

  render() {
    let message = this.state.greeting.map(e => (
      <div style={{ marginTop: "25px" }}>
        {e}
        <br />
      </div>
    ))
    return (
      <div>
        <div style={{ color: "white" }}>
          <h1>Probably the worlds best site! Don't you agree?</h1>

          {message}
          <br />
          <TextField
            id="filled-basic"
            variant="filled"
            style={{ height: "30px", width: "350px", marginBottom: "25px" }}
            type="text"
            placeholder="Leave a comment"
            value={this.state.input}
            onChange={e => this.setState({ input: e.target.value })}
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={this.handleClick}
            style={{ marginTop: "20px" }}>
            Submit Feedback
          </Button>
          <Button
            variant="contained"
            onClick={this.secondClick}
            style={{ marginTop: "20px", marginLeft: "10px" }}>
            Delete Feedback
          </Button>
        </div>
      </div>
    )
  }
}

export default PageThree
