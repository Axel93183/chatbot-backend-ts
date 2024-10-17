import { Router } from "express";
import { generateResponse } from "../services/responseGenerator";

const router = Router(); // Create a new router instance

// Define the POST route to handle chatbot requests
router.post("/", (req, res) => {
  const { question } = req.body; // Extract the 'question' from the request body
  const response = generateResponse(question); // Generate a response based on the question
  res.json({ response }); // Send the generated response back as JSON
});

export default router; // Export the router for use in other modules