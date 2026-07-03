import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// 🤖 SIMPLE MONGGLISH AI LOGIC
function monglishAI(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! 👋 I am Monglish AI. Let's practice English!";
  }

  if (msg.includes("correct")) {
    return "Send me your sentence and I will correct your English 👍";
  }

  if (msg.includes("grammar")) {
    return "Grammar tip: Always start sentences with a capital letter.";
  }

  if (msg.includes("vocab")) {
    return "Vocabulary tip: Try using new words like 'improve', 'practice', 'learn'.";
  }

  return "Monglish AI 🤖: I understood you → " + message;
}

// 📡 API endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  const reply = monglishAI(userMessage);

  res.json({ reply });
});

// 🚀 start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Monglish AI backend running on port " + PORT);
});{
  "name": "monglish-ai",
  "version": "1.0.0",
  "type": "module",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
