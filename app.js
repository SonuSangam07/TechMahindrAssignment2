const express = require("express");
const app = express();
const userRoutes = require("./user.routes");

// Middleware to parse JSON body
app.use(express.json());

app.use("/api", userRoutes);

// Server start
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
