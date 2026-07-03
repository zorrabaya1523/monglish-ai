import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Monglish AI Backend is running ✅");
});

app.post("/chat", async (req, res) => {
  try {
    const message = req.body.message || "";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are Monglish AI, a friendly ESL teaching assistant. Help with grammar correction, vocabulary, model answers, speaking practice, and teacher feedback. Keep answers clear and useful for ESL learners."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();
    if (data.error) {
  return res.json({ reply: "OpenAI error: " + data.error.message });
}

const reply = data.choices?.[0]?.message?.content || "No AI reply received.";

    res.json({ reply });
  } catch (error) {
    res.status(500).json({ reply: "Backend error. Please check server logs." });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Monglish AI backend running on port " + PORT);
});
