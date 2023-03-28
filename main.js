//Is the "sudoku board" valid to this point?////

//Example 1:

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const rowFail = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","5","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const colFail = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","7","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

const boxFail =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".","1","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];



//let's break this into some pieces and solve those pieces one at a time:
//1st piece: accessing the information correctly ------ array[0-8][0-8] checking against each other but in a set structure
//2nd piece: organizing the testing ------ "rows" and "columns" seems obvious...hopefully it works rows = array[me][?] column = array[?][me]
//3rd piece: organizing the checks ------ essentially just writing the rules to sudoku in code language 
//Work through this then, see where we're at.

/////// first attempt //////////////
// function isValid(board) {
//   let valid = true;
// let row = new Set();
// for (let i = 0; i <= 8; i++) {  
//   //row check: 
//   if (!row.has(board[0][i]) && board[0][i] != '.'){  
//   row.add(board[0][i]);
//   } else { 
//     valid = false;
//   };
//   //column check: 
//   let column = new Set();
//   for (let j = 0; j <= 8; j++) {
//     if (!column.has(board[j][i]) && board[j][i] != '.'){  
//     column.add(board[j][i]);
//   } else { 
//     valid = false;
//   }
//   //box check: i hope....oy vey
//     if (i >= 0 && i < 3, j >= 0 && j < 3) {
//       let box1 = new Set();
//       if (!box1.has(board[i][j]) && board[i][j] != '.'){  
//         box1.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 0 && i < 3 && j >= 3 && j < 6) {
//       let box2 = new Set();
//       if (!box2.has(board[i][j]) && board[i][j] != '.'){  
//         box2.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 0 && i < 3 && j >= 6 && j < 9) {
//       let box3 = new Set();
//       if (!box3.has(board[i][j]) && board[i][j] != '.'){  
//         box3.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 3 && i < 6 && j >= 0 && j < 3) {
//       let box4 = new Set();
//       if (!box4.has(board[i][j]) && board[i][j] != '.'){  
//         box4.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 3 && i < 6 && j >= 3 && j < 6) {
//       let box5 = new Set();
//       if (!box5.has(board[i][j]) && board[i][j] != '.'){  
//         box5.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 3 && i < 6 && j >= 6 && j < 9) {
//       let box6 = new Set();
//       if (!box6.has(board[i][j]) && board[i][j] != '.'){  
//         box6.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 6 && i < 9 && j >= 0 && j < 3) {
//       let box7 = new Set();
//       if (!box7.has(board[i][j]) && board[i][j] != '.'){  
//         box7.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 6 && i < 9 && j >= 3 && j < 6) {
//       let box8 = new Set();
//       if (!box8.has(board[i][j]) && board[i][j] != '.'){  
//         box8.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//     if (i >= 6 && i < 9 && j >= 6 && j < 9) {
//       let box9 = new Set();
//       if (!box9.has(board[i][j]) && board[i][j] != '.'){  
//         box9.add(board[i][j]);
//     } else {
//       valid = false;
//     }
//   }
//   }
// }return valid;
// }


/////// second attempt ///////
function validationMap(board) {
  let valid = true;
  let boardMap = new Map();
  let compareRow = new Set();
  let compareCol = new Set();                   ///This might be the best feeling I've ever felt as a coder.
  let compareBox = new Set();
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      let elementIndex = [i, j];
      if (board[i][j] !== ".") {
        if (i >=0 && i < 3 && j >= 0 && j < 3){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 1});
      };
        if (i >=0 && i < 3 && j >= 3 && j < 6){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 2});
      };
        if (i >=0 && i < 3 && j >= 6 && j < 9){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 3});
      };
        if (i >=3 && i < 6 && j >= 0 && j < 3){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 4});
      };
        if (i >=3 && i < 6 && j >= 3 && j < 6){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 5});
      };
        if (i >=3 && i < 6 && j >= 6 && j < 9){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 6});
      };
        if (i >=6 && i < 9 && j >= 0 && j < 3){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 7});
      };
        if (i >=6 && i < 9 && j >= 3 && j < 6){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 8});
      }; 
        if (i >=6 && i < 9 && j >= 6 && j < 9){
        boardMap.set(elementIndex, {row: i, column: j, value: board[i][j], box: 9});
      };
    } 
    }
  } boardMap.forEach((value, key) => {
      boardMap.forEach((compValue, compKey) => {
        if (value.row === compValue.row && value.value === compValue.value && !compareRow.has(key)) {
          compareRow.add(key);

        } else if (value.row === compValue.row && value.value === compValue.value && compareRow.has(key)) {
          valid = false;
        }
        if (value.column === compValue.column && value.value === compValue.value && !compareCol.has(key)) {
          compareCol.add(key);
        } else if (value.column === compValue.column && value.value === compValue.value && compareCol.has(key)) {
          valid = false;
        }
        if (value.box === compValue.box && value.value === compValue.value && !compareBox.has(key)) {
          compareBox.add(key);
        } else if (value.box === compValue.box && value.value === compValue.value && compareBox.has(key)) {
          valid = false;
        }
      })
  }); return valid;
}


console.log(validationMap(boxFail));