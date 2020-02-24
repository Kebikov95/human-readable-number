module.exports = function toReadable (number) {
    let array = [
        ["zero", "one", "two", "three", "four",
         "five", "six", "seven", "eight", "nine"],
        
        ["ten", "eleven", "twelve", "thirteen", "fourteen",
         "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
         
        ["twenty", "thirty", "forty", "fifty", "sixty",
         "seventy", "eighty", "ninety"],
      
        ["hundred"], ["thousand"], ["million"], ["billion"]
      ]
      let numbers = String(number).split('');
      let length = numbers.length;
      let count = 0;
      let str = "";
    
      do{
        if(length == 1){
          str += array[0][numbers[count]];
        }
        else if(length == 2){
          if(numbers[count] == 1){
            str += array[1][numbers[count+1]];
            length--;
          }
          else{
            str += array[2][numbers[count] - 2] + " ";
            if(numbers[count + 1] == 0){
              length--;
            }
          }
        }
        else if(length == 3){
          str += array[0][numbers[0]] + " " + array[3][0] + " ";
          if(numbers[count + 1] == 0){
            length--;
            count++;
            if(numbers[count + 1] == 0){
              length--;
              count++;
            }
          }
        }
        length--;
        count++;
      } while(0 < length)
      return str.trim();
}
