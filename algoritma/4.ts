const calcMatrix = (matrix: number[][]): number => {
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  let index = 0;
  for (let item of matrix) {
    rightDiagonal += item[index];
    leftDiagonal += item[item.length - index - 1];
    index++;
  }
  return rightDiagonal - leftDiagonal;
};

console.log(
  calcMatrix([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
