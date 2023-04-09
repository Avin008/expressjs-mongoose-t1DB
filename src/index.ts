import "./lib/db";
import express from "express";
import { router as authRouter } from "./routes/auth";
import { router as postRouter } from "./routes/post";
import { router as likeRouter } from "./routes/likePost";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(
  express.raw({ type: "application/vnd.custom-type" })
);
app.use(express.text({ type: "text/html" }));

app.use("/", authRouter);
app.use("/post", postRouter);
app.use("/like", likeRouter);

app.listen(port, () => {
  console.log(
    `server listening on http://localhost:${port}`
  );
});
