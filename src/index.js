/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  var n = preferences.length;
  var j;
  var z;
  var r;
  var n;
  var s = 0;
  for (j = 0; j < n; ) {
    z = preferences[j] - 1;
    r = preferences[z] - 1;
    n = preferences[r] - 1;
    if ( j == n){
      s++
    }
    j++ 
    
  }
  return s/3;
}
