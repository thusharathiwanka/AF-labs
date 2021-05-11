const Router = require("@koa/router");

const router = new Router({
  prefix: "/home",
});

router.get("/", (ctx) => {
  ctx.body = "Hello World from GET";
});

router.post("/", (ctx) => {
  ctx.body = "Hello World from POST";
});

module.exports = router;
