String.prototype.toRandomCase=function(str){
  if(!str){str = this;}

let arr= str.split("");
let len = arr.length;
let tempArr=[];
  if(len>0){
    if(isNaN(arr)){
  for(let i=0;i<len;i++){
      if(i%2==0){
          tempArr[i]=arr[i].toLowerCase();
      }
      else {
          tempArr[i]=arr[i].toUpperCase();
      }
  }
 
  str=tempArr.join("");
  return str;
}
  else { return arr.join("");}

}
  else { return "It is an empty string";}
}


let inputString= "0";
let outputString= inputString.toRandomCase();
console.log(outputString);

// String.prototype.toRandomCase=function alternativeCase(string){
//     if(!string){ string=this;
//     return string.split('').map(function(c,i) {
//       return i & 1 ? c.toUpperCase() : c.toLowerCase();
//     }).join('');}
//   }

//   str="Pallab";
//   console.log(str.toRandomCase());