/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports  = function getLoveTrianglesCount(preferences = []) {
  var n = preferences.length;
 var j ;
 var z;
 var r;
 var m;
 var s = 0;
   for (j = 0; j<n; j++) {
 
     z = preferences[j] - 1;
    if (z == j) continue;
     r = preferences[z] - 1;
     if (z == r) continue;
     m = preferences[r] - 1;
     if (r == m) continue;
     if ( j == m){
     s++
 
     }
 
 
   }
 return s / 3;
 };
 