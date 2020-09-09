import React from 'react';
import logo from './logo.svg';
import './App.css';

function generateRandomInt() {
  return Math.floor(Math.random() * 11) + 1;
}

function generateMatrix(m, n) {
  let matrix = [];
  let currentRow = [];
  let currentInt = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      currentRow.push({
        value: currentInt,
        row: i,
        column: j
      });
      currentInt++;
    }
    matrix.push(currentRow);
    currentRow = [];
  }
  return matrix;
}

function drawMatrix(matrix) {
  return matrix.map((row, index) => {
    return <div key={`row${index}`}>{row.map(el => {
      return <button key={`element${el.row}${el.column}`}>{el.value}</button>
    })}</div>;
  });
}

function App() {
  let m = generateRandomInt();
  let n = generateRandomInt();
  let matrix = generateMatrix(m, n);
  console.log(matrix);

  return (
    <div className="App">
      {drawMatrix(matrix)}
    </div>
  );
}

export default App;
