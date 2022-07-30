require("dotenv").config();

const createServer = require("./server");

const port = process.env.PORT || 5000;
const app = createServer();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
