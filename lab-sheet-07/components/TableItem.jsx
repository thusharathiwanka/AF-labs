import React from "react";

export default function TableItem(props) {
  const { post, selectPost } = props;

  return (
    <tr>
      <td>{post.id}</td>
      <td>{post.name}</td>
      <td>{post.description}</td>
      <td>
        <a onClick={() => selectPost(post)}>Select</a>
      </td>
    </tr>
  );
}
