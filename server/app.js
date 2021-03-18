const express = require("express");
const cors = require("cors");
const PORT = 4000;

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

app.use("/api", router);

const server = app.listen(PORT, () => {
  console.log(`server started on ${server.address().port}`);
});
