
 function getHighestAndLowest (array) {
   let lowest = 0;
   let highest = 0;

   for (let o = 0; i < array; i++) {
    if (array[o] < lowest){
        lowest = array[o]
    }
    if (array[o] > highest) {
        highest = array[o]
    }
   }
   return highest, lowest
}