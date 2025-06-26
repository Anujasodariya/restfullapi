const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
const bookRoutes = require("./routes/books");
app.use("/books", bookRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
