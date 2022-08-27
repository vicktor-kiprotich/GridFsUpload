const express = require("express");
const app = express();
const cors = require("cors");
const helpers = require("./helpers");

require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

helpers.ConnectDB();

require("./files/routes/files.routes")(app);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server listenig at port ${process.env.APP_PORT}`);
});
