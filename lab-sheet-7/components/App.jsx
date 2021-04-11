import React from "react";
import TableItems from "./TableItems";

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TableItems posts={posts} />
      </div>
    );
  }
}
