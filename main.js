"use strict";
let top_arr = [[], [], []];
let mid_arr = [[], [], []];
let bot_arr = [[], [], []];
let winner = document.querySelector("h2");
const top_left = document
  .querySelector(".top-left")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".top-left").value;
    if (hot.key === "Enter") {
      top_arr[0].push(value);
    }
  });

const top_middle = document
  .querySelector(".top-middle")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".top-middle").value;
    if (hot.key === "Enter") {
      top_arr[1].push(value);
    }
  });
const top_right = document
  .querySelector(".top-right")
  .addEventListener("keydown", (e) => {
    let value = document.querySelector(".top-right").value;
    if (e.key === "Enter") {
      top_arr[2].push(value);
    }
  });

const middle_left = document
  .querySelector(".middle-left")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".middle-left").value;
    if (hot.key === "Enter") {
      mid_arr[0].push(value);
    }
  });

const middle_middle = document
  .querySelector(".middle-middle")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".middle-middle").value;
    if (hot.key === "Enter") {
      mid_arr[1].push(value);
    }
  });
const middle_right = document
  .querySelector(".middle-right")
  .addEventListener("keydown", (e) => {
    let value = document.querySelector(".middle-right").value;
    if (e.key === "Enter") {
      mid_arr[2].push(value);
    }
  });

const bottom_left = document
  .querySelector(".bottom-left")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".bottom-left").value;
    if (hot.key === "Enter") {
      bot_arr[0].push(value);
    }
  });

const bottom_middle = document
  .querySelector(".bottom-middle")
  .addEventListener("keydown", (hot) => {
    let value = document.querySelector(".bottom-middle").value;
    if (hot.key === "Enter") {
      bot_arr[1].push(value);
    }
  });
const bottom_right = document
  .querySelector(".bottom-right")
  .addEventListener("keydown", (e) => {
    let value = document.querySelector(".bottom-right").value;
    if (e.key === "Enter") {
      bot_arr[2].push(value);
    }
  });

const player1 = document
  .querySelector(".box")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
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
  });

const player2 = document
  .querySelector(".box")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
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
  });
