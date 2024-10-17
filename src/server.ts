import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Define the main route for the chatbot
app.use("/api/chat", chatRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
