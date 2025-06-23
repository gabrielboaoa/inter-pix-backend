const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const options = {
  cert: fs.readFileSync(path.join(__dirname, "cert", "Inter API_Certificado.crt")),
  key: fs.readFileSync(path.join(__dirname, "cert", "Inter API_Chave.key")),
};

app.get("/", (req, res) => {
  res.send("API Pix Inter rodando com sucesso!");
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor rodando em https://localhost:${PORT}`);
});
