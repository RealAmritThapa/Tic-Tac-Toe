"use strict";
let top_arr = [[], [], []];
let mid_arr = [[], [], []];
let bot_arr = [[], [], []];
let player_1;
let player_2;
let winner = document.querySelector("h2");
const start = document.querySelector(".click").addEventListener("click", () => {
  let rand_num = Math.round(Math.random());

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
        top_arr[0] = "x";
        top_left.style.backgroundColor = "#C0DEFF";
        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[0] = "o";
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
        top_arr[1] = "x";
        top_middle.style.backgroundColor = "#C0DEFF";
        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[1] = "o";
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
        top_arr[2] = "x";
        top_right.style.backgroundColor = "#C0DEFF";
        check_winnerx();
      } else if (hot.key === "o") {
        top_arr[2] = "o";
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
          mid_arr[0] = "x";
          middle_left.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[0] = "o";
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
          mid_arr[1] = "x";
          middle_middle.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[1] = "o";
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
          mid_arr[2] = "x";
          middle_right.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          mid_arr[2] = "o";
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
          bot_arr[0] = "x";
          bottom_left.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[0] = "o";
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
          bot_arr[1] = "x";
          bottom_middle.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[1] = "o";
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
          bot_arr[2] = "x";
          bottom_right.style.backgroundColor = "#C0DEFF";
          check_winnerx();
        } else if (hot.key === "o") {
          bot_arr[2] = "o";
          bottom_right.style.backgroundColor = "#FFF8E1";
          check_winnnero();
        }
      });
  });

const submit = document
  .querySelector(".submit")
  .addEventListener("click", () => {
    player_1 = document.querySelector(".player1-name").value;
    player_2 = document.querySelector(".player2-name").value;
    document.getElementById("info").style.display = "none";
    document.getElementById("background").style.filter = "none";
    console.log(player_1, player_2);
  });

const reset = document.querySelector(".reset").addEventListener("click", () => {
  document.getElementById("info").style.display = "flex";
  document.getElementById("background").style.filter = "blur(5px)";
  document.querySelector(".player1-name").value = "";
  document.querySelector(".player2-name").value = "";

  document.getElementById("top-left").value = "";
  document.getElementById("top-middle").value = "";
  document.getElementById("top-right").value = "";

  document.getElementById("middle-left").value = "";
  document.getElementById("middle-middle").value = "";
  document.getElementById("middle-right").value = "";

  document.getElementById("bottom-left").value = "";
  document.getElementById("bottom-middle").value = "";
  document.getElementById("bottom-right").value = "";

  document.getElementById("top-left").style.backgroundColor = "";
  document.getElementById("top-middle").style.backgroundColor = "";
  document.getElementById("top-right").style.backgroundColor = "";

  document.getElementById("middle-left").style.backgroundColor = "";
  document.getElementById("middle-middle").style.backgroundColor = "";
  document.getElementById("middle-right").style.backgroundColor = "";

  document.getElementById("bottom-left").style.backgroundColor = "";
  document.getElementById("bottom-middle").style.backgroundColor = "";
  document.getElementById("bottom-right").style.backgroundColor = "";

  winner.textContent = "";
  for (let i = 0; i < 3; ++i) {
    top_arr[i] = [];
    mid_arr[i] = [];
    bot_arr[i] = [];
  }
});

function check_winnerx() {
  if (top_arr[0] == "x" && top_arr[1] == "x" && top_arr[2] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (mid_arr[0] == "x" && mid_arr[1] == "x" && mid_arr[2] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (bot_arr[0] == "x" && bot_arr[1] == "x" && bot_arr[2] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (top_arr[0] == "x" && mid_arr[0] == "x" && bot_arr[0] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (top_arr[1] == "x" && mid_arr[1] == "x" && bot_arr[1] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (top_arr[2] == "x" && mid_arr[2] == "x" && bot_arr[2] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (top_arr[0] == "x" && mid_arr[1] == "x" && bot_arr[2] == "x") {
    winner.textContent = player_1 + " won";
  }
  if (top_arr[2] == "x" && mid_arr[1] == "x" && bot_arr[0] == "x") {
    winner.textContent = player_1 + " won";
  }
}

function check_winnnero() {
  if (top_arr[0] == "o" && top_arr[1] == "o" && top_arr[2] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (mid_arr[0] == "o" && mid_arr[1] == "o" && mid_arr[2] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (bot_arr[0] == "o" && bot_arr[1] == "o" && bot_arr[2] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (top_arr[0] == "o" && mid_arr[0] == "o" && bot_arr[0] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (top_arr[1] == "o" && mid_arr[1] == "o" && bot_arr[1] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (top_arr[2] == "o" && mid_arr[2] == "o" && bot_arr[2] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (top_arr[0] == "o" && mid_arr[1] == "o" && bot_arr[2] == "o") {
    winner.textContent = player_2 + " Won";
  }
  if (top_arr[2] == "o" && mid_arr[1] == "o" && bot_arr[0] == "o") {
    winner.textContent = player_2 + " Won";
  }
}
