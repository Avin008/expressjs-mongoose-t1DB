import "./lib/db";
import express from "express";
import countryRoutes from "./routes/country";
import { router as authRouter } from "./routes/auth";

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(
  express.raw({ type: "application/vnd.custom-type" })
);
app.use(express.text({ type: "text/html" }));

app.use("/", authRouter);

app.listen(port, () => {
  console.log(
    `server listening on http://localhost:${port}`
  );
});
