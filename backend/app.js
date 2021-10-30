const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const routes = require("./routes/routes");
const moment = require("moment")
const app = express();
const PORT = 3000;
app.use(helmet());
app.use(express.json());
app.use(express.text());
app.use(compression());
app.use("/", routes);
Date.prototype.toJSON = function(){ return moment(this).format(); }
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
