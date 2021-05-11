import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostHolder from "./PostsHolder";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <PostHolder />;
  }
}
