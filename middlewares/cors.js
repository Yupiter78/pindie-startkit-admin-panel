const allowedCors = [
    "https://practicum.yandex.ru",
    "https://students-projects.ru",
    "localhost:3000"
];

const cors = (req, res, next) => {
    const { origin } = req.headers;
    if (allowedCors.includes(origin)) {
        res.header("Access-Control-Allow_Origin", "localhost:3000");
    }

    next();
};

module.exports = { cors };
