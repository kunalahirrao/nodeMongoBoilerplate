const express = require("express");
const { handleError, handle404 } = require("./utils/errorHandler");
// Connecting to database
require("./db/mongoose");
const app = express();

// Routes
const testRoutes = require("./modules/test/testRoutes");

//Configuring express to automatically parse JSON (i.e,converts JSON to object--provided by user through browser(as browser converts data to JSON))
app.use(express.json());

app.use(testRoutes);

// Catch 404 - Route path did not found
app.use((req, res, next) => {
  handle404(req, res, next);
});

// Error handling middleware must be at the last among other middleware and routes for it to function correctly.
app.use((err, req, res, next) => {
  handleError(err, res);
});

module.exports = app;