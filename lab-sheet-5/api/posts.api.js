const uuid = require("uuid");

let posts = new Map();

let createPost = (obj) => {
  console.log(obj);
  let post = {
    id: uuid.v4(),
    name: obj.name,
    description: obj.description,
    postedDate: new Date(),
  };
  posts.set(post.id, post);

  return post;
};

let getPosts = () => {
  return [...posts.values];
};

let getPost = (id) => {
  return posts.get(id);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
};
