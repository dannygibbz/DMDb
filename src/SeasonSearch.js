import React from "react"
import moment from "moment"
import TextField from "@material-ui/core/TextField"

class SeasonSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value, season: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const url = `https://www.omdbapi.com/?t=${this.props.showName}&Season=${this.state.season}&apikey=982d108e`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          visible: true,
          episodes: data.Episodes,
        })
        console.log(data)
      })
      .catch(e => {
        this.setState({
          errorMessage:
            "Sorry, nothing found under that name. Please try again.",
        })
      })
  }

  render() {
    console.log(this.props.showName)
    let showData = !this.state.visible ? (
      <div style={{ color: "white" }}>
        <h1>Search Seasons</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.input}
            onChange={this.onChange}
            id="filled-full-width"
            label="TV Show"
            style={{ width: "50%", marginTop: "15px" }}
            placeholder="Season"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </form>
      </div>
    ) : (
      <div style={{ color: "white", marginBottom: "25px" }}>
        <h1>Search Seasons</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.input}
            onChange={this.onChange}
            id="filled-full-width"
            label="TV Show"
            style={{ width: "50%", marginTop: "15px" }}
            placeholder="Season"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </form>
        <h1>Season {this.state.season}</h1>
        {this.state.episodes.map(episode => (
          <p>
            <b>Episode </b> {episode.Episode} -- "{episode.Title}".{" "}
            <b>Air Date:</b> {moment(episode.Released).format("MMMM Do YYYY")}
          </p>
        ))}
      </div>
    )
    return (
      <div>
        <div style={{ color: "white" }}>{showData}</div>
      </div>
    )
  }
}

export default SeasonSearch
