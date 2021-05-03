import React from "react";
import PostHolder from "./PostsHolder";
import UserContext from "./UserContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ user: { name: "admin" } });
    }, 5000);
  }

  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <PostHolder />
      </UserContext.Provider>
    );
  }
}
