const express = require("express");
const app = express();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send(
        `<html>
        <body>
            <p>Ответ на сигнал из далёкого космоса</p>
        </body>
        </html>`
    );
});
