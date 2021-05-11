import React from "react";
import TableItem from "./TableItem";
import Post from "./Post";

export default class TableItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
    };
  }

  selectPost(post) {
    this.setState({ post: post });
  }

  render() {
    const { posts } = this.props;

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => {
              return (
                <TableItem
                  post={post}
                  key={post.id.toString()}
                  selectPost={(post) => this.selectPost(post)}
                />
              );
            })}
          </tbody>
        </table>
        <div>{this.state.post ? <Post post={this.state.post} /> : ""}</div>
      </div>
    );
  }
}
