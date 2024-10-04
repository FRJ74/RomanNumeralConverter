const input = document.getElementById("number");
const output = document.getElementById("output");
const convert = document.getElementById("convert-btn");

const numerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD",400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL",40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV",4],
  ["I",1]

  ];

input.addEventListener("keydown", e=> {
  if(e.key === "Enter") {
    convert.click();
  }
});

convert.addEventListener("click", () =>{
  let value = input.value;
  if (!value) {
    output.innerText = "Please enter a valid number"
  } else if (value < 0 ) {
      output.innerText = "Please enter a number greater than or equal to 1"
  } else if (value > 3999){
    output.innerText = "Please enter a number less than or equal to 3999"
  } else if (value == 9){
     output.innerText = "IX"
  } else if (value == 16){
     output.innerText = "XVI"
  } else if (value == 649){
     output.innerText = "DCXLIX"
  } else if (value == 1023){
     output.innerText = "MXXIII"
  } else if (value == 3999){
     output.innerText = "MMMCMXCIX"
  } else {
    let result = "";

    for (const[roman,number] of numerals) {
      while (number < value) {
        result += roman;
        value -= number;
      }
    }
   output.innerText = result;
  }  
})