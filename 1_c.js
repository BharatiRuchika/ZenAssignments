// var k = 4;
// var a = [1,2,3,4,5,6,7,8];
// while(k!=0){
//     var l = a[0];
   
//     for(var i = 0 ; i<a.length ; i++){
//       a[i] = a[i+1];
//     }
//     a[a.length-1] = l;
//     k--;
// }
// [4,5,6,7,8]
var a = [1,2,3,4,5,6,7,8];
var arr2 = [];
var k = 4;
var arr1 = a.slice(0,k);
var arr2 = a.slice(k,a.length);
console.log("arr2:"+arr2);
var c = arr2.concat(arr1);
console.log(c);