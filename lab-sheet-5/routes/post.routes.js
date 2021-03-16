const Router = require("@koa/router");
const { createPost, getPosts, getPost } = require("../api/posts.api");

const router = new Router({
  prefix: "/posts",
});

router.get("/", (ctx) => {
  ctx.body = getPosts();
});

router.post("/", (ctx) => {
  let post = ctx.request.body;
  console.log(post);
  post = createPost(post);
  ctx.response.status = 201;
  ctx.body = post;
});

router.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getPost(id);
});

module.exports = router;
