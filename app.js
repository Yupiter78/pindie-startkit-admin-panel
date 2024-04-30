const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mainRoute = require("./routes/main");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    mainRoute,
    gamesRouter
);

app.listen(PORT, () => {
    console.log(`Server is running at PORT: https://localhost:${PORT}`);
});
