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
    z = preferences[j];
    r = preferences[z];
    n = preferences[r];
    if ( j == n){
      s++
    };
    j++ 
    
  };
  return s;
};
