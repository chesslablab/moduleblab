import {
  FEN,
  Chessboard
} from "https://cdn.jsdelivr.net/npm/@chesslablab/cmblab@0.0.1/src/index.min.js";

const chessboard = new Chessboard(
  document.getElementById('chessboard'),
  {
    assetsUrl: "https://cdn.jsdelivr.net/npm/cm-chessboard@8.5.0/assets/",
    position: FEN.empty,
    style: {pieces: {file: "pieces/staunty.svg"}}
  }
);