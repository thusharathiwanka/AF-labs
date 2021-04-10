const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const HomeRoutes = require("./routes/home.router");
const PostRoutes = require("./routes/post.routes");
require("./dal");

const app = new Koa();

app.use(bodyParser());
app.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

app.use((ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
console.log("Application is running on port 3000");
