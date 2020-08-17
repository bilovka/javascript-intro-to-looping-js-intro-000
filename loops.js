function forLoop(array){
  for(var num=0;num<25;num++){
    if(num===1){
      array.push("I am 1 strange loop.");
    }
    else 
    array.push(`I am ${num} strange loops.`);
  }
  return array;
}
function whileLoop(n){
  while(n>0){
    console.log(--n)
  }
  return "done"
}