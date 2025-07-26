module.exports = function reverse(n) {
  let res='';
  while(n!==0) {
    let temp = n%10;
    res += temp
    n = Math.floor( n/10);
  }
  return Number(res);
};
