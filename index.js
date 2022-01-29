require("dotenv").config();
const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`App is up and running at ${process.env.PORT}`);
});
