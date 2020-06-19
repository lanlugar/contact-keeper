const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connect Database

connectDB();

const PORT = process.env.PORT || 5000;

// Define Routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
