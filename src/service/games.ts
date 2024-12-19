const games = [
    { id: 1, name: "Game 1", description: "Description for Game 1" },
    { id: 2, name: "Game 2", description: "Description for Game 2" },
    { id: 3, name: "Game 3", description: "Description for Game 3" },
    { id: 4, name: "Game 4", description: "Description for Game 4" },
    { id: 5, name: "Game 5", description: "Description for Game 5" },
  ];
   
  export function getGames() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(games);
      }, 800);
    });
  }
   
  export function getGame(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const game = games.find((game) => game.id === id);
   
        if (game) {
          resolve(game);
        } else {
          reject(new Error(`Game with id ${id} not found`));
        }
      }, 800);
    });
  } 

  export function updateGame(id, gameData) {
    return new Promise((resolve, reject) => {
      const gameFound = games.find((game) => game.id === id);
      if (gameFound) {
        const updatedGame = { ...gameData, id: id };
        games[id - 1] = updatedGame;
        resolve(updateGame);
      } else {
        reject(new Error(`Game not found`));
      }
    });
  }