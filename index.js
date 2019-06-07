const express = require  ("express");
const api = express ();

api.use(express.static("./"));

const PORT = process.env.PORT || 3001
// localhost:PORT
api.listen(PORT, () => {
    console.log("Server is up and listening on: " + PORT);
});
  


api.get("/index.html",(req, res) => {
    console.log("Responding to root route")
});

