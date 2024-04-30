const { writeData } = require("../utils/data");

const sendAllGames = async (req, res) => {
    res.send(req.games);
};

const deleteGame = async (req, res) => {
    const id = Number(req.params.id);
    req.game = req.games.find((item) => item.id === id);
    const index = req.games.findIndex((game) => game.id === req.game.id);
    req.games.splice(index, 1);

    await writeData("./data/games.json", req.games);
    res.send({
        games: req.games,
        updated: req.game
    });
};

const addGameController = async (req, res) => {
    req.isNew = !Boolean(
        req.games.find((item) => item.title === req.body.title)
    );

    if (req.isNew) {
        const idsArray = req.games.map((item) => Number(item.id));
        const maxId = idsArray.length > 0 ? Math.max(...idsArray) : 0;

        req.newGame = {
            id: maxId + 1,
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        };

        req.games = [...req.games, req.newGame];
    } else {
        res.status(400);
        res.send({
            status: "error",
            message: "Игра с таким именем уже существует"
        });
        return;
    }

    await writeData("./data/games.json", req.games);
    res.send({
        games: req.games,
        updated: req.newGame
    });
};

module.exports = {
    sendAllGames,
    deleteGame,
    addGameController
};
