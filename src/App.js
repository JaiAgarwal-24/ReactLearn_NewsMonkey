import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends Component {

  // apikey = "e7d3fc5fbaf74055bf98fa513d979382"
  apikey = process.env.REACT_APP_NEWS_API;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <ErrorBoundary>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="general" pageSize={9} country="in" category="general" />} />
            {/* <Route exact path="/about" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  pageSize={9} country="in" category="general" />} /> */}
            <Route exact path="/business" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="business" pageSize={9} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="health" pageSize={9} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="science" pageSize={9} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="sports" pageSize={9} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apikey = {this.apikey}  key="technology" pageSize={9} country="in" category="technology" />} />
          </Routes>
        </Router>
        </ErrorBoundary>
      </div>
    )
  }
}
