const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const routes = require("./routes/routes");
const app = express();
const PORT = 3000;
app.use(helmet());
app.use(express.json());
app.use(express.text());
app.use(compression());
app.use("/", routes);
Date.prototype.toISOString=Date.prototype.toLocaleTimeString
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
