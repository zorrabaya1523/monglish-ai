import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Monglish AI Backend is running ✅");
});

app.post("/chat", (req, res) => {
  const message = req.body.message || "";

  res.json({
    reply: "Monglish AI 🤖: I understand → " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Monglish AI backend running on port " + PORT);
});
