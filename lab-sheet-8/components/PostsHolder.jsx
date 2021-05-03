import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddPost from "./AddPost";
import TableItemsFunctional from "./TableItemsFunctional";

const posts = [
  {
    id: 1,
    name: "React",
    description: "Best UI library",
  },
  {
    id: 2,
    name: "Node",
    description: "Server side JavaScript",
  },
];

export default class PostsHolder extends React.Component {
  constructor(props) {
    super(props);
  }

  addNewPost({ name, description }) {
    posts.push({ id: posts.length + 1, name, description });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <TableItemsFunctional posts={posts} />
            <Link to="/add">Add</Link>
          </Route>
          <Route exact path="/add">
            <AddPost save={this.addNewPost} />
          </Route>
        </Switch>
      </Router>
    );
  }
}
