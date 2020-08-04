import React from "react"
import TextField from "@material-ui/core/TextField"

class MovieSearch extends React.Component {
  constructor() {
    super()
    this.state = {
      visible: false,
    }
  }

  onChange = event => {
    this.setState({ input: event.target.value })
  }
  handleSubmit = event => {
    event.preventDefault()
    const url = `https://www.omdbapi.com/?t=${this.state.input}&apikey=982d108e`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          input: "",
          errorMessage: "",
          visible: true,
          title: data.Title,
          year: data.Year,
          plot: data.Plot,
          poster: data.Poster,
          rating: data.imdbRating,
          rated: data.Rated,
          cast: data.Actors,
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
    let poster = this.state.poster
    let showInformation = !this.state.visible ? (
      <div>
        <h1>Search Movies Below</h1>
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.input}
            onChange={this.onChange}
            id="filled-full-width"
            label="Movie"
            style={{ width: "50%", marginTop: "15px" }}
            placeholder="Title"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
        </form>
      </div>
    ) : (
      <div style={{ marginBottom: "25px" }}>
        <div>
          <h1>Search Movies Below</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              value={this.state.input}
              onChange={this.onChange}
              id="filled-full-width"
              label="Movie"
              style={{ width: "50%", marginTop: "15px" }}
              placeholder="Title"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
          </form>
        </div>
        <div>
          <img
            src={poster}
            style={{
              marginTop: "15px",
              width: "25%",
            }}
            alt={"Movie Poster"}></img>
          <div style={{ marginTop: "10px" }}>
            <b>Title: </b>
            {this.state.title}
          </div>
          <div style={{ marginTop: "10px" }}>
            <b>Year: </b>
            {this.state.year}
          </div>
          <div style={{ marginTop: "10px" }}>
            <b>Rated:</b> {this.state.rated}
          </div>
          <div style={{ marginTop: "10px" }}>
            <b>Cast: </b>
            {this.state.cast}
          </div>
          <div style={{ marginTop: "10px" }}>
            <b>IMDb Rating:</b> {this.state.rating}
          </div>
          <div style={{ marginTop: "10px", width: "50%" }}>
            <b>Plot: </b>
            {this.state.plot}
          </div>
        </div>
      </div>
    )
    let notFound = this.state.errorMessage ? (
      <h3 style={{ color: "red" }}>{this.state.errorMessage}</h3>
    ) : null

    return (
      <div style={{ color: "white" }}>
        {notFound}

        {showInformation}
        <div></div>
      </div>
    )
  }
}

export default MovieSearch
