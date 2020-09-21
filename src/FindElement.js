import React, { useState, useEffect } from 'react';
import { generateRandomInt, getRandomArrayElement } from './utils'

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

function getElNumbers(matrix) {
  console.log(matrix);
  let elNumbers = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      elNumbers.push(`${matrix[i][j].row}-${matrix[i][j].column}`);
    }
  }
  return elNumbers;
}

function FindElement() {
  const [matrix, setMatrix] = useState(generateMatrix(generateRandomInt(), generateRandomInt()));
  const [elNumbers, setElNumbers] = useState([]);

  const [questionCount, setQuestionCount] = useState(1);
  useEffect(function effectFunction() {
    if (matrix) {
      console.log("el")
    setElNumbers(getElNumbers(matrix));
    }
  }, [matrix, questionCount]);

  const [elToFind, setElToFind] = useState("");

  useEffect(function effectFunction() {
    if (elNumbers) {
      setElToFind(elNumbers[getRandomArrayElement(elNumbers)]);
    }
  }, [elNumbers, questionCount]);

  const [answer, setAnswer] = useState(true);


  function getElementNumber(e) {
    if (e.target.getAttribute('data-number') === elToFind) {
      setAnswer(true);
      setMatrix(generateMatrix(generateRandomInt(), generateRandomInt()));
      setQuestionCount(questionCount + 1);
    } else {
      setAnswer(false);
    }
  }

  function drawMatrix(matrix) {
    return matrix.map((row, index) => {
      return <div key={`row${index}`}>{row.map(el => {
        let elNumber = `${el.row}-${el.column}`;
        return <button
            key={`element${elNumber}`}
            className='matrix-element'
            data-number={elNumber}
            onClick={getElementNumber}
        >{el.value}</button>
      })}</div>;
    });
  }

  return (
      <div className="FindElement">
        <div className="column">{drawMatrix(matrix)}</div>
        <div className="column">
          <div>Click on el number {elToFind}</div>
          <div>Question number: {questionCount}</div>
          {!answer ? <div>Wrong answer</div> : ""}
        </div>
      </div>
  );
}

export default FindElement;
