const express = require("express");

const app = express();

app.use("/ghanim", (request, response) => {
  response.json({ message: "hello ghanim" });
});

app.listen(8000, () => {
  console.log("this server is running on port http://localhost:8000");
});
