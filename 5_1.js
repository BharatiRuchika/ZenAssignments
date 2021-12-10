//Q.1)
//anonymous function
// var odd = function(a){
//   for(var i=0;i<a.length;i++){
//       if(a[i]%2!=0){
//           console.log(a[i]);
//       }
//   }
// }
// var a = [1,2,3,4,5,6,7,8,9,10];
// odd(a);

//IIFI function
// var a = [1,2,3,4,5,6,7,8,9,10];
// (function(value){
//    for(var i = 0 ; i < value.length ; i++){
//      if(value[i]%2!=0){
//          console.log(value[i]);
//      }
//    }
// })(a);

//Q.2)
//Anonymous
// var capital = function(sentence){
//     var new_Str = "";
//     var ascii = sentence.charCodeAt(0);
//     var new_ascii = ascii - 32;
//     var char = String.fromCharCode(new_ascii);
//     new_Str = new_Str + char;
//     for(var i = 1 ; i<sentence.length ; i++){
//       if(sentence[i]==" "){
//         var ascii = sentence.charCodeAt(i+1);
//         var new_ascii = ascii - 32;
//         var char = String.fromCharCode(new_ascii);
//         new_Str = new_Str +" "+char;
//         i++;
//       }else{
//           new_Str = new_Str + sentence[i];
//       }
//     }
//     console.log(new_Str);
// }
// var sentence = "converting string to titlecase";
// capital(sentence);

//IIFI Function
// (function(sentence){
//     var new_Str = "";
//     var ascii = sentence.charCodeAt(0);
//     var new_ascii = ascii - 32;
//     var char = String.fromCharCode(new_ascii);
//     new_Str = new_Str + char;
//     for(var i = 1 ; i<sentence.length ; i++){
//       if(sentence[i]==" "){
//         var ascii = sentence.charCodeAt(i+1);
//         var new_ascii = ascii - 32;
//         var char = String.fromCharCode(new_ascii);
//         new_Str = new_Str +" "+char;
//         i++;
//       }else{
//           new_Str = new_Str + sentence[i];
//       }
//     }
//     console.log(new_Str);
// })(sentence)

// var a=[1,2,3,4,5,6,7,8,9,10];
// var foo = ()=>{
//  for(var i=0;i<a.length;i++){
//      if(a[i]%2!=0){
//          console.log(a[i]);
//      }
//  }
// }
// foo(a);

//Q.3)
//Anoymous function
// var sumArray = function(a){
//   var sum = 0;
//   for(var i = 0 ; i < a.length ; i++){
//     sum = sum + a[i];
//   }
//   return sum;
// }
// var a = [1,2,3,4];
// var sum = sumArray(a);
// console.log(sum);

//IIFI Function
// (function(a){
//  var sum = 0;
//  for(var i = 0 ; i < a.length ; i++){
//    sum = sum + a[i];
//  }
//  console.log(sum);
// })(a)

//Q.4)
//Anonymous Function
// var a = [1,2,3,4,5,8,11,7,10,9,13,17,21];
// var primeArray = function(a){
//   for(var i = 0 ; i < a.length ; i++){
//     var flag = 1;
//     if(a[i]==0 || a[i]==1){
//       continue;
//     }
//     for(var j = 2 ; j <= a[i]/2 ; j++){
//       if(a[i] % j == 0){
//         flag = 0;
//         break;
//       }
//     }
//     if(flag==1){
//       console.log(a[i]);
//     }
//   }
// }
// primeArray(a);
//IIFI Function
// (function(a){
//   for(var i = 0 ; i < a.length ; i++){
//     var flag = 1;
//     if(a[i]==0 || a[i]==1){
//       continue;
//     }
//     for(var j = 2 ; j <= a[i]/2 ; j++){
//       if(a[i] % j == 0){
//         flag = 0;
//         break;
//       }
//     }
//     if(flag==1){
//       console.log(a[i]);
//     }
//   }
// })(a);

//Q.5)Anonymous Function
var a = [111 , 222 , 121 , 566 , 900 , 312 , 555 , 656 , 867];
// var palindromeArray = function(a){
//   var palindromeArray = [];
//  for(var i = 0 ; i < a.length ; i++){
//     var num = a[i];
//     var arr = [];
//     while(num!=0){
//       var rem = num%10;
//       num = parseInt(num/10);
//       arr.push(rem);
//     }
    // console.log("arr"+arr);
    // var new_Arr = arr;
    // console.log("new_arr:"+new_Arr);
    // console.log("arr"+arr);
    // var flag=1;
    // for(var j = 0,k=new_Arr.length-1 ; j<arr.length,k>=0 ; j++,k--){
    //   if(arr[j]==new_Arr[k]){
    //     console.log("im same");
    //     continue;
    //   }else{
    //     console.log("im not same");
    //     flag=0;
    //     break;
//       }
//     }
//     if(flag==1){
//       palindromeArray.push(a[i]);
//     }
//   }
//   console.log("palindrome:"+palindromeArray);
// }
// palindromeArray(a);
//IIFI Function
// (function(a){
//   var palindromeArray = [];
//  for(var i = 0 ; i < a.length ; i++){
    // var num = a[i];
    // var arr = [];
    // while(num!=0){
    //   var rem = num%10;
    //   num = parseInt(num/10);
    //   arr.push(rem);
    // }
   
    // var new_Arr = arr;
    
    // var flag=1;
    // for(var j = 0,k=new_Arr.length-1 ; j<arr.length,k>=0 ; j++,k--){
    //   if(arr[j]==new_Arr[k]){
        
    //     continue;
    //   }else{
       
//         flag=0;
//         break;
//       }
//     }
//     if(flag==1){
//       palindromeArray.push(a[i]);
//     }
//   }
//   console.log("palindrome:"+palindromeArray);

// })(a);

//Q.6)Anonymous Function
// var a = [1,2,3,4,5,6];
// var b = [7,8,9,10,11,12];
// var c = a.concat(b);
// console.log(c);
// [1,2,3,4,5,6,7,8,9,10,11,12]
// var median = function(c){
//   var length = c.length/2;
//   var median = (c[length-1]+c[length])/2;
//   console.log(median);
// }
// median(c);

//IIFI Function
// var a = [1,2,3,4,5,6];
//   var b = [7,8,9,10,11,12];
//   var c = a.concat(b);
// (function(c){
//     var length = c.length/2;
//     var median = (c[length-1]+c[length])/2;
//     console.log(median);
// })(c)

//Q.7)Anonymous Function
// var a = [1,2,1,4,3,2,4,2,5,6,4,6,6,6,6,6];
// var unique = function(a){
//   var boolean = [];
//   for(var i = 0 ; i < a.length ; i++){
//     boolean.push(false);
//   }
//   var arr = [];
//   for(var i = 0 ; i < a.length ; i++){
//     if(boolean[i]==true){
//       continue;
//     }
//     for(var j = i+1 ; j < a.length ; j++){
        
//         if(a[i]==a[j]){
//           boolean[j]=true;
//         }
//     }
//     arr.push(a[i]);
//   }
//   console.log(arr);
// }
// unique(a);

//IIFI
// var a = [1,2,1,4,3,2,4,2,5,6,4,6,6,6,6,6];
// (function(a){
//   var boolean = [];
//   for(var i = 0 ; i < a.length ; i++){
//     boolean.push(false);
//   }
//   var arr = [];
//   for(var i = 0 ; i < a.length ; i++){
//     if(boolean[i]==true){
//       continue;
//     }
//     for(var j = i+1 ; j < a.length ; j++){
//       if(a[i]==a[j]){
//         boolean[j]=true;
//       }
//     }
//     arr.push(a[i]);
//   }
// console.log(arr);
  // })(a);

  //Q.8)Anonymous Function
  // var k = 3;
  // var a = [1,2,3,4,5,6,7,8];
  // while(k!=0){
  //   a[a.length-1]=a[0];
  //   for(var i = 0 ; i<=a.length ; i++){
  //     a[i] = a[i+1];
  //   }
  //   k--;
  // }
  // console.log(a);

// var a = [1,2,3,4,5,6,7,8];
// var rotate = function(a){
//   var arr2 = [];
//   var k = 3;
//   var arr1 = a.slice(0,k);
//   var arr2 = a.slice(k,a.length);
  
//   var c = arr2.concat(arr1);
//   console.log(c);
// }
// rotate(a);

// var rotate = function(a){
//   var k = 10;
//   while(k!=0){
//     var l = a[0];
//     for(var i = 0 ; i<a.length ; i++){
//       a[i] = a[i+1];
//     }
//     a[a.length-1] = l;
//     k--;
// }
// console.log(a);
// }
//
// rotate(a);

//IIFI Function
// var a = [1,2,3,4,5,6,7,8];
// (function(a){
//   var k = 10;
//   while(k!=0){
//     var l = a[0];
//     for(var i = 0 ; i<a.length ; i++){
//       a[i] = a[i+1];
//     }
//     a[a.length-1] = l;
//     k--;
// }
// console.log(a);
// })(a)

//Q.3(a))Arrow Function
// var a = [1,2,3,4,5,6,7,8,9];
// var odd = (a) =>{
// for(var i = 0 ; i < a.length ; i++){
//    if(a[i]%2!=0){
//      console.log(a[i]);
//    }   
//  }
// }
// odd(a);

//Q.3(b)
// var Capital = (sentence) => {
//   var str = "";
//   var code = sentence.charCodeAt(0);
//   var new_code = code-32;
  // var ch = String.fromCharCode(new_code);
  // str = str+ch;
  // for(var i=1;i<sentence.length;i++){
  //   if(sentence[i]==" "){
    
  //     var code1 = sentence.charCodeAt([i+1]);
  //     var new_code1 = code1 - 32;
  //     var ch1 = String.fromCharCode(new_code1);
     
//       str = str+" "+ch1;
//       i++; 
//     }else{
//       str = str + sentence[i];
//     }
//   }
//   console.log(str);
// }
// var sentence = "converting string to titlecase";
// Capital(sentence);

//Q.3)c
// var a = [1,2,3,4,5,6];
// var sum = (a)=>{
//   var add = 0;
//   for(var i = 0 ; i < a.length ; i++){
//     add = add + a[i];
//   }
//   console.log(add);
// }
// sum(a);
//Q.3)d
// var a = [1,2,3,4,5,6,7,8,11,13,15];
// var primeArray=(a)=>{
//   for(var i=0;i<a.length;i++){
//     var flag = 1;
//     if(a[i]==0 || a[i]==1){
//       continue;
//     }
//     for(var j=2;j<=a[i]/2;j++){
//       if(a[i]%j==0){
//         flag=0;
//         break;
//       }
//     }
//     if(flag==1){
//       console.log(a[i]);
//     }
//   }
// }
// primeArray(a);

//Q.3)e
var a = [111,222,132,444,556,565];
var palindromeArray = (a)=>{
  for(var i=0;i<a.length;i++){
    var num = a[i];
    var arr = [];
    while(num!=0){
      var rem = num%10;
      num = parseInt(num/10);
      arr.push(rem);
    }
    var new_Arr = arr;
    var flag = 1;
    for(var j=0,k=arr.length-1;j<arr.length,k>=0;j++,k--){
     if(arr[j]!=new_Arr[k]){
       flag = 0;
       break;
     }
    }
    if(flag==1){
      console.log(a[i]);
    }
  }
}
palindromeArray(a);