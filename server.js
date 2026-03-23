// Import packages using ES module syntax
import express from "express";
import 'dotenv/config';
import connectDB from "./database-connection/Connection.js";
import bookRoutes from "./routes/bookRoutes.js";


const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to database
connectDB();

//routes
app.use("/api/books", bookRoutes);

// Simple route
app.get("/", (req, res) => {
  res.json({
    message: "Server is running and MongoDB is connected!"});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

