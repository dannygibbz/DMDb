import { Link } from "react-router-dom"
import MovieSearch from "./MovieSearch"
import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import TelevisionSearch from "./TelevisionSearch"
import PageThree from "./PageThree"
import Welcome from "./Welcome"
import "./App.css"
import SeasonSearch from "./SeasonSearch"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}))

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs>
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            <Tab className="tabs" label="Home" {...a11yProps(0)} />
          </Link>
          <Link to="/movie" className="nav-link" style={{ color: "white" }}>
            <Tab className="tabs" label="Search Movies" {...a11yProps(0)} />
          </Link>
          <Link to="/tv" className="nav-link" style={{ color: "white" }}>
            <Tab className="tabs" label="Search TV" {...a11yProps(1)} />
          </Link>
          <Link to="/three" className="nav-link" style={{ color: "white" }}>
            <Tab className="tabs" label="Feedback" {...a11yProps(2)} />
          </Link>
        </Tabs>
      </AppBar>

      <TabPanel value={Welcome} index={0}>
        Home
      </TabPanel>

      <TabPanel value={MovieSearch} index={1}>
        Search Movies
      </TabPanel>

      <TabPanel value={TelevisionSearch} index={2}>
        Search TV
      </TabPanel>

      <TabPanel value={PageThree} index={3}>
        Item Three
      </TabPanel>
    </div>
  )
}
