import React, { useState, useEffect } from "react";
import TableItem from "./TableItem";
import Post from "./Post";

const TableItemsFunctional = ({ posts }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    console.log("Mount and update from the effect hook");
    return () => console.log("Unmount from the effect hook");
  });

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
                selectPost={setPost}
              />
            );
          })}
        </tbody>
      </table>
      <div>{post ? <Post post={post} /> : ""}</div>
    </div>
  );
};

export default TableItemsFunctional;
