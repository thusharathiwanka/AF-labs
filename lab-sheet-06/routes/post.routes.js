const Router = require("@koa/router");

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../api/posts.api");

const router = new Router({
  prefix: "/posts",
});

router.get("/", async (ctx) => {
  ctx.body = await getPosts();
  ctx.response.status = 200;
});

router.post("/", async (ctx) => {
  let post = ctx.request.body;
  post = await createPost(post);
  ctx.response.status = 201;
  ctx.body = post;
});

router.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await getPost(id);
  ctx.response.status = 200;
});

router.put("/:id", async (ctx) => {
  const id = ctx.params.id;
  let post = ctx.request.body;
  post = await updatePost(id, post);
  ctx.response.status = 200;
  ctx.body = post;
});

router.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.response.status = 204;
  ctx.body = await deletePost(id);
});

module.exports = router;
