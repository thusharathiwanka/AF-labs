const posts = require("./").db("posts").collection("posts");

const save = async ({ id, name, description, postedDate }) => {
  const result = await posts.insertOne({ id, name, description, postedDate });
  return result.ops[0];
};

const getAll = async () => {
  const cursor = await posts.find();
  return cursor.toArray();
};

const getById = async (id) => {
  return await posts.findOne({ id });
  // return await posts.findOne({id: somename });
};

const update = async (id, { name, description, postedDate }) => {
  const result = await posts.replaceOne(
    { id },
    { id, name, description, postedDate }
  );
  return result.ops[0];
};

const removeById = async (id) => {
  await posts.deleteOne({ id });
};

module.exports = { save, getAll, getById, update, removeById };
