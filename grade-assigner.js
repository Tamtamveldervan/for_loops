

function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }


  
for (let i = 100; i>=60; i--){
{ assignGrade()}
    console.log( `for scoring ${i}, you get an`, assignGrade(i) )
    
}