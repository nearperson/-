function reversestar(sta){
  var arry=[];
  arry=sta.split("").reverse().join();
  return arry;
  }
  var aa = reversestar("hello");
  console.log(aa);