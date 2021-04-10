const uuid = require("uuid");

const {
  save,
  getAll,
  getById,
  update,
  removeById,
} = require("../dal/posts.dao");

let createPost = async (obj) => {
  let post = {
    id: uuid.v4(),
    name: obj.name,
    description: obj.description,
    postedDate: new Date(),
  };

  return await save(post);
};

let getPosts = async () => {
  return await getAll();
};

let getPost = async (id) => {
  return await getById(id);
};

let updatePost = async (id, obj) => {
  return await update(id, obj);
};

let deletePost = async (id) => {
  await removeById(id);
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
};
