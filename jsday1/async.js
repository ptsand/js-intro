const msgPrinter = function(msg,delay){
    setTimeout(() => console.log(msg),delay); //Observe an arrow-function
  };
  console.log("aaaaaaaaaa");
  msgPrinter ("bbbbbbbbbb",2000);
  console.log("dddddddddd");
  msgPrinter ("eeeeeeeeee",1000);
  console.log("ffffffffff");
  