const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");

//for swagger docs
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cookieparser and fileupload
app.use(cookieParser());
app.use(fileUpload());

//morgan
app.use(morgan("tiny"));

//Custom middlewares
const homeRoutes = require("./routes/home");
const userRoutes = require("./routes/user");

//router middlewares
app.use("/api/v1", homeRoutes);
app.use("/api/v1", userRoutes);

module.exports = app;
