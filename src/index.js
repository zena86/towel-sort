
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortMatrix = [];
  let result = [];
  if(matrix === undefined || matrix.length === 0) return result;
  for (let i=0; i<matrix.length; i++){
    if(i%2 === 0){
      sortMatrix.push(matrix[i]);
    }else{
      let subArr = [];
      for(let j=matrix[i].length-1; j>=0; j--){
        subArr.push(matrix[i][j]);
      }
      sortMatrix.push(subArr); 
    }
  }
  let strArr = sortMatrix.toString().split(',');
  for(let i=0; i<strArr.length; i++){
    result.push(parseInt(strArr[i], 10));
  }
  return result;
}
