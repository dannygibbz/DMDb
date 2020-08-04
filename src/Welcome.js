import React from "react"
import ButtonBases from "./CustomButtons"

function Welcome() {
  return (
    <div style={{ color: "white" }}>
      <h1>Welcome to Dan's Movie Database!</h1>
      <h2>It's really just a worse IMDb</h2>
      <h3>But have fun searching movies and TV shows!</h3>
      <ButtonBases />
    </div>
  )
}

export default Welcome
