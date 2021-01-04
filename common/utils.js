// Add zero in front of numbers < 10
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function toLetters(i){
  let f = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fiftheen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
  let l = ["twenty", "thirty", "fourty", "fifthy"];
  
  if(i>20){
    let tenthPlace = Math.floor(i / 10);
    let onethPlace = i - tenthPlace * 10;
    return onethPlace ? l[tenthPlace - 2] + f[onethPlace] : l[tenthPlace - 2];
  }else return f[i];
  
  console.log("i: ", i);
}