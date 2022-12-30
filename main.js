"use strict";
let top_arr = [[], [], []];
let mid_arr = [[], [], []];
let bot_arr = [[], [], []];
let winner = document.querySelector("h2");
const start = document.querySelector(".click").addEventListener("click", () => {
  let rand_num = Math.round(Math.random());
  console.log(rand_num);
  if (rand_num == 0) {
    document.querySelector(".click").textContent = "X";
    document.getElementById("click").style.fontSize = "250%";
    document.getElementById("click").style.backgroundColor = "#C0DEFF";
  } else {
    document.querySelector(".click").textContent = "O";
    document.getElementById("click").style.fontSize = "250%";
    document.getElementById("click").style.backgroundColor = "#FFF8E1";
  }
});

const top_left = document
  .querySelector(".top-left")
  .addEventListener("click", () => {
    document.querySelector(".top-left").addEventListener("keydown", (hot) => {
      let top_left = document.getElementById("top-left");
      if (hot.key === "x") {
        top_arr[0].push("x");
        top_left.style.backgroundColor = "#C0DEFF";

        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[0].push("o");

        top_left.style.backgroundColor = "#FFF8E1";
        check_winnnero();
      }
    });
  });

const top_middle = document
  .querySelector(".top-middle")
  .addEventListener("click", () => {
    document.querySelector(".top-middle").addEventListener("keydown", (hot) => {
      let top_middle = document.getElementById("top-middle");
      if (hot.key === "x") {
        top_arr[1].push("x");
        top_middle.style.backgroundColor = "#C0DEFF";
        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[1].push("o");
        top_middle.style.backgroundColor = "#FFF8E1";
        check_winnnero();
      }
    });
  });

const top_right = document
  .querySelector(".top-right")
  .addEventListener("click", () => {
    document.querySelector(".top-right").addEventListener("keydown", (hot) => {
      let top_right = document.getElementById("top-right");
      if (hot.key === "x") {
        top_arr[2].push("x");
        top_right.style.backgroundColor = "#C0DEFF";
        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[2].push("o");
        top_right.style.backgroundColor = "#FFF8E1";
        check_winnnero();
      }
    });
  });

const middle_left = document
  .querySelector(".middle-left")
  .addEventListener("click", () => {
    document
      .querySelector(".middle-left")
      .addEventListener("keydown", (hot) => {
        let middle_left = document.getElementById("middle-left");
        if (hot.key === "x") {
          mid_arr[0].push("x");
          middle_left.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[0].push("o");
          middle_left.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const middle_middle = document
  .querySelector(".middle-middle")
  .addEventListener("click", () => {
    document
      .querySelector(".middle-middle")
      .addEventListener("keydown", (hot) => {
        let middle_middle = document.getElementById("middle-middle");
        if (hot.key === "x") {
          mid_arr[1].push("x");
          middle_middle.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[1].push("o");
          middle_middle.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const middle_right = document
  .querySelector(".middle-right")
  .addEventListener("click", () => {
    document
      .querySelector(".middle-right")
      .addEventListener("keydown", (hot) => {
        let middle_right = document.getElementById("middle-right");
        if (hot.key === "x") {
          mid_arr[2].push("x");
          middle_right.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[2].push("o");
          middle_right.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const bottom_left = document
  .querySelector(".bottom-left")
  .addEventListener("click", () => {
    document
      .querySelector(".bottom-left")
      .addEventListener("keydown", (hot) => {
        let bottom_left = document.getElementById("bottom-left");
        if (hot.key === "x") {
          bot_arr[0].push("x");
          bottom_left.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[0].push("o");
          bottom_left.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const bottom_middle = document
  .querySelector(".bottom-middle")
  .addEventListener("click", () => {
    document
      .querySelector(".bottom-middle")
      .addEventListener("keydown", (hot) => {
        let bottom_middle = document.getElementById("bottom-middle");
        if (hot.key === "x") {
          bot_arr[1].push("x");
          bottom_middle.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[1]("o");
          bottom_middle.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const bottom_right = document
  .querySelector(".bottom-right")
  .addEventListener("click", () => {
    document
      .querySelector(".bottom-right")
      .addEventListener("keydown", (hot) => {
        let bottom_right = document.getElementById("bottom-right");
        if (hot.key === "x") {
          bot_arr[2].push("x");
          bottom_right.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[2].push("o");
          bottom_right.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

function check_winnerx() {
  if (top_arr[0] == "x" && top_arr[1] == "x" && top_arr[2] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (mid_arr[0] == "x" && mid_arr[1] == "x" && mid_arr[2] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (bot_arr[0] == "x" && bot_arr[1] == "x" && bot_arr[2] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (top_arr[0] == "x" && mid_arr[0] == "x" && bot_arr[0] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (top_arr[1] == "x" && mid_arr[1] == "x" && bot_arr[1] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (top_arr[2] == "x" && mid_arr[2] == "x" && bot_arr[2] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (top_arr[0] == "x" && mid_arr[1] == "x" && bot_arr[2] == "x") {
    winner.textContent = "Player 1 Won";
  }
  if (top_arr[2] == "x" && mid_arr[1] == "x" && bot_arr[0] == "x") {
    winner.textContent = "Player 1 Won";
  }
}

function check_winnnero() {
  if (top_arr[0] == "o" && top_arr[1] == "o" && top_arr[2] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (mid_arr[0] == "o" && mid_arr[1] == "o" && mid_arr[2] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (bot_arr[0] == "o" && bot_arr[1] == "o" && bot_arr[2] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (top_arr[0] == "o" && mid_arr[0] == "o" && bot_arr[0] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (top_arr[1] == "o" && mid_arr[1] == "o" && bot_arr[1] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (top_arr[2] == "o" && mid_arr[2] == "o" && bot_arr[2] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (top_arr[0] == "o" && mid_arr[1] == "o" && bot_arr[2] == "o") {
    winner.textContent = "Player 2 Won";
  }
  if (top_arr[2] == "o" && mid_arr[1] == "o" && bot_arr[0] == "o") {
    winner.textContent = "Player 2 Won";
  }
}
