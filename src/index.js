
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let m = [];
  if(matrix!=undefined){
    for(let i=0; i< matrix.length; i++){
      if(i%2 === 1 && Array.isArray(matrix[i])) {
      let item = matrix[i].reverse();
      m = m.concat(item);
      }
      else m = m.concat(matrix[i]);
    }
  }
  return m;
}
