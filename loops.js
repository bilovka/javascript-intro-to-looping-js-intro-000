function forLoop(array){
  for(var num=0;num<25;num++){
    if(num===1){
      array[num]="I am 1 strange loop.";
    }
    else 
    array=`I am ${num} strange loops.`;
  }
  return array;
}