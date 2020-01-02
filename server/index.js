const express = require("express");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(cors());

require("./routes/admin/router")(app);
require("./plugin/db")(app);

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
