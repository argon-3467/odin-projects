let player = (mark, name) => {
  let score = 0;
  return { name, mark, score };
};

const board = (() => {
  let arr = ["", "", "", "", "", "", "", "", ""];
  let resetBoard = () => {
    for (let i = 0; i < 9; ++i) arr[i] = "";
  };
  return { arr, resetBoard };
})();

let gameController = (() => {
  let mark1 = "cross";
  let mark2 = "nought";
  let player1 = player(mark1, "Player-1");
  let player2 = player(mark2, "Player-2");
  let turn = { whom: player1 };

  let swapTurn = () => {
    if (turn.whom == player1) turn.whom = player2;
    else turn.whom = player1;
  };

  let swapMarks = () => {
    let temp = player1.mark;
    player1.mark = player2.mark;
    player2.mark = temp;
    if(player1.mark == "cross")
      turn.whom = player1;
    else
      turn.whom = player2;
    showHTML.showPlayerMarks();
  };

  let restartRound = () => {
    board.resetBoard();
    showHTML.showBoard();
  };

  let restartGame = () => {
    restartRound();
    player1.score = 0;
    player2.score = 0;
    showHTML.showScores();
  };

  const checkRows = () => {
    for (let i = 0; i < 3; i++) {
      let row = [];
      for (let j = i * 3; j < i * 3 + 3; j++) {
        row.push(board.arr[j]);
      }

      if (
        row.every((field) => field == "cross") ||
        row.every((field) => field == "nought")
      ) {
        return true;
      }
    }
    return false;
  };

  const checkColumns = () => {
    for (let i = 0; i < 3; i++) {
      let column = [];
      for (let j = 0; j < 3; j++) {
        column.push(board.arr[i + 3 * j]);
      }

      if (
        column.every((field) => field == "cross") ||
        column.every((field) => field == "nought")
      ) {
        return true;
      }
    }
    return false;
  };
  const checkDiagonals = () => {
    diagonal1 = [board.arr[0], board.arr[4], board.arr[8]];
    diagonal2 = [board.arr[2], board.arr[4], board.arr[6]];
    if (
      diagonal1.every((field) => field == "cross") ||
      diagonal1.every((field) => field == "nought")
    ) {
      return true;
    } else if (
      diagonal2.every((field) => field == "cross") ||
      diagonal2.every((field) => field == "nought")
    ) {
      return true;
    }
  };

  let checkWin = () => {
    if (checkRows() || checkColumns() || checkDiagonals()) {
      return true;
    }
    return false;
  };

  let turnCheck = (boxId) => {
    if (board.arr[boxId] == "") {
      board.arr[boxId] = turn.whom.mark;
      showHTML.showBoard();
      if (checkWin()) {
        showHTML.showWinner();
        turn.whom.score++;
        showHTML.showScores();
      } else {
        swapTurn();
      }
    }
  };

  return {
    player1,
    player2,
    swapMarks,
    restartRound,
    turn,
    turnCheck,
    restartGame,
    checkWin,
  };
})();

let showHTML = (() => {
  let showPlayerMarks = () => {
    let player1Mark = document.querySelector(".player-1-mark");
    let player2Mark = document.querySelector(".player-2-mark");
    player1Mark.classList.remove("cross", "nought");
    player2Mark.classList.remove("cross", "nought");
    player1Mark.classList.add(gameController.player1.mark);
    player2Mark.classList.add(gameController.player2.mark);
  };

  let showBoard = () => {
    let boxes = document.querySelectorAll(".box");
    let i = 0;
    boxes.forEach((box) => {
      box.classList.remove("cross", "nought");
      if (board.arr[i] != "") box.classList.add(board.arr[i]);
      ++i;
    });
    i = 0;
  };

  let showScores = () => {
    let player1Score = document.querySelector(".score-1");
    let player2Score = document.querySelector(".score-2");
    player1Score.innerHTML = gameController.player1.score;
    player2Score.innerHTML = gameController.player2.score;
  };

  let removeWinner = () => {
    let game = document.querySelector(".game");
    let msg = document.querySelector(".msg");
    let gameOver = document.querySelector(".game-over");
    msg.innerHTML = "";
    game.classList.remove("blur");
    gameOver.toggleAttribute("hidden");
    gameController.restartRound();
  };

  let showWinner = () => {
    let game = document.querySelector(".game");
    let msg = document.querySelector(".msg");
    let gameOver = document.querySelector(".game-over");
    msg.innerHTML = `${gameController.turn.whom.name} Won!!!`;
    game.classList.add("blur");
    gameOver.toggleAttribute("hidden");
  };

  return {
    showPlayerMarks,
    showBoard,
    showScores,
    showWinner,
    removeWinner,
  };
})();

let displayController = (() => {
  /**
   * Change theme by adding dark or light class to :root
   */
  let _root = document.querySelector(":root");
  let _theme = document.querySelector("#theme");
  _theme.addEventListener("change", (event) => {
    _root.className = event.target.value;
  });

  /**
   *
   * Event listner to change player's mark on click
   */
  document.querySelectorAll(".player-1-mark, .player-2-mark").forEach((ele) => {
    ele.addEventListener("click", () => {
      {
        gameController.swapMarks();
        gameController.restartRound();
      }
    });
  });

  /**
   * Event listner to change Board on click
   */
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
      gameController.turnCheck(box.id);
    });
  });

  document.querySelector(".restart").addEventListener("click", () => {
    let svg = document.querySelector(".restart svg");
    svg.classList.add("active");
    setTimeout(() => {
      svg.classList.remove("active");
    }, 500);
    gameController.restartGame();
  });

  document.querySelector(".play").addEventListener("click", () => {
    showHTML.removeWinner();
  });
})();
