const express = require("express");
const cors = require("cors");
const PORT = 4000;
const {
  teamsDetailsDataHandler,
  userDetailsDataHandler,
} = require("./handlers/index");

const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors());

router.get("/test", (req, res) => res.send("hello from api"));
router.get("/teamsDetailsData", teamsDetailsDataHandler);
router.get("/userDetailsData", userDetailsDataHandler);

app.use("/api", router);

const server = app.listen(PORT, () => {
  console.log(`server started on ${server.address().port}`);
});
