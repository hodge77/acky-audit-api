const express = require("express");
const app = express();

app.use(express.json());

// Health check (Cloud Run uses this)
app.get("/", (req, res) => {
  res.send("Acky Audit API is live 🚀");
});

// Main audit endpoint
app.post("/audit", (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "Missing website URL"
    });
  }

  // MOCK audit for now (we upgrade to Vertex AI later)
  const audit = {
    url,
    seoScore: Math.floor(Math.random() * 40 + 60),
    uxScore: Math.floor(Math.random() * 40 + 60),
    conversionScore: Math.floor(Math.random() * 40 + 60),
    recommendations: [
      "Improve page speed",
      "Strengthen call-to-action visibility",
      "Optimize meta descriptions",
      "Improve mobile layout consistency"
    ]
  };

  res.json(audit);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Acky Audit API running on port ${port}`);
});